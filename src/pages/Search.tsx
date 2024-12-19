import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Link } from 'react-router-dom'

interface SearchResult {
  title: string
  description: string
  content: string[]
  link: string
  category: string
}

const searchData: SearchResult[] = [
  {
    title: 'Maps Guide',
    description: 'Learn map layouts, loot spots, and rotation strategies for all BGMI maps.',
    content: [
      'Erangel map strategies',
      'Miramar hot drops and rotations',
      'Sanhok quick guide',
      'Vikendi tactics',
      'Best loot locations',
      'Safe rotation paths',
      'Vehicle spawns',
      'Popular drop spots',
      'End-game circles',
      'Map-specific tactics'
    ],
    link: '/maps',
    category: 'Guides'
  },
  {
    title: 'Weapons Guide',
    description: 'Master weapon recoil patterns, attachments, and optimal loadouts.',
    content: [
      'Assault Rifles guide',
      'SMG tactics',
      'Sniper rifles',
      'DMRs overview',
      'Shotguns usage',
      'Pistols guide',
      'Weapon attachments',
      'Recoil control',
      'DPS stats',
      'Best weapon combinations',
      'M416 guide',
      'AKM mastery',
      'AWM sniper',
      'Vector tips',
      'UMP45 strategy'
    ],
    link: '/weapons',
    category: 'Guides'
  },
  {
    title: 'Throwables Guide',
    description: 'Perfect your grenade spots and utility usage for tactical advantage.',
    content: [
      'Grenade spots',
      'Smoke tactics',
      'Molotov usage',
      'Stun grenades',
      'Frag grenade timing',
      'Smoke wall setup',
      'Grenade cooking',
      'Flash bang tactics',
      'Utility combinations',
      'Advanced throws'
    ],
    link: '/throwables',
    category: 'Guides'
  },
  {
    title: 'Vehicle Guide',
    description: 'Learn advanced driving techniques and vehicle mechanics.',
    content: [
      'UAZ driving',
      'Dacia handling',
      'Buggy tactics',
      'Bike control',
      'Vehicle damage',
      'Fuel management',
      'Drive-by shooting',
      'Vehicle spawns',
      'Emergency maneuvers',
      'Squad transport'
    ],
    link: '/vehicles',
    category: 'Guides'
  },
  {
    title: 'Sensitivity Guide',
    description: 'Find the perfect sensitivity settings for your playstyle.',
    content: [
      'Camera sensitivity',
      'ADS sensitivity',
      'Scope settings',
      'Gyroscope setup',
      'TPP sensitivity',
      'FPP sensitivity',
      'Red dot settings',
      '2x scope',
      '3x scope',
      '4x scope',
      '6x scope',
      '8x scope',
      'Pro player settings'
    ],
    link: '/sensitivity',
    category: 'Settings'
  },
  {
    title: 'Handcams Guide',
    description: 'Study pro player hand movements and improve your mechanics.',
    content: [
      'Claw setup',
      'Finger placement',
      'Button layout',
      'Custom controls',
      'Movement techniques',
      'Quick scope',
      'Peek shooting',
      'Recoil control',
      'Pro layouts',
      'Hand positioning'
    ],
    link: '/handcams',
    category: 'Guides'
  },
  {
    title: 'Privacy Policy',
    description: 'Read our privacy policy and data handling practices.',
    content: [
      'Data collection',
      'Information usage',
      'Cookie policy',
      'User rights',
      'Data protection',
      'Privacy terms'
    ],
    link: '/privacy-policy',
    category: 'Legal'
  },
  {
    title: 'Terms of Service',
    description: 'View our terms of service and usage guidelines.',
    content: [
      'User agreement',
      'Service terms',
      'Usage rules',
      'Content policy',
      'User conduct',
      'Account terms'
    ],
    link: '/terms-of-service',
    category: 'Legal'
  },
  {
    title: 'Patch Notes',
    description: 'Stay updated with the latest changes and updates.',
    content: [
      'Latest updates',
      'Game changes',
      'Balance updates',
      'New features',
      'Bug fixes',
      'Improvements',
      'Version history'
    ],
    link: '/patch-notes',
    category: 'Updates'
  }
]

const Search = () => {
  const [searchParams] = useSearchParams()
  const query = searchParams.get('q') || ''
  const [results, setResults] = useState<SearchResult[]>([])

  useEffect(() => {
    if (query) {
      const searchTerms = query.toLowerCase().split(' ').filter(term => term.length > 0)
      
      const searchResults = searchData.filter(item => {
        const titleMatch = item.title.toLowerCase().includes(query.toLowerCase())
        const descriptionMatch = item.description.toLowerCase().includes(query.toLowerCase())
        const categoryMatch = item.category.toLowerCase().includes(query.toLowerCase())
        
        // Check if any search term matches any content item
        const contentMatch = item.content.some(content =>
          searchTerms.some(term => content.toLowerCase().includes(term))
        )

        return titleMatch || descriptionMatch || categoryMatch || contentMatch
      })

      // Sort results by relevance
      searchResults.sort((a, b) => {
        const aTitle = a.title.toLowerCase().includes(query.toLowerCase()) ? 2 : 0
        const bTitle = b.title.toLowerCase().includes(query.toLowerCase()) ? 2 : 0
        const aDesc = a.description.toLowerCase().includes(query.toLowerCase()) ? 1 : 0
        const bDesc = b.description.toLowerCase().includes(query.toLowerCase()) ? 1 : 0
        return (bTitle + bDesc) - (aTitle + aDesc)
      })

      setResults(searchResults)
    } else {
      setResults([])
    }
  }, [query])

  return (
    <div className="container mx-auto px-4 pt-20">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-primary">
            Search Results
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-muted-foreground">
            {results.length} results found for "{query}"
          </p>
        </CardContent>
      </Card>

      <div className="grid gap-6">
        {results.map((result, index) => (
          <Card key={index} className="hover:border-primary/50 transition-colors">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-2">
                <Link to={result.link} className="hover:text-primary transition-colors">
                  <h3 className="text-xl font-semibold">{result.title}</h3>
                </Link>
                <span className="text-sm text-muted-foreground px-2 py-1 rounded-full border">
                  {result.category}
                </span>
              </div>
              <p className="text-muted-foreground mb-4">{result.description}</p>
              <div className="flex flex-wrap gap-2">
                {result.content
                  .filter(content => 
                    query.toLowerCase().split(' ').some(term => 
                      content.toLowerCase().includes(term)
                    )
                  )
                  .slice(0, 5)
                  .map((content, i) => (
                    <span 
                      key={i} 
                      className="text-sm bg-muted px-2 py-1 rounded-md"
                    >
                      {content}
                    </span>
                  ))}
              </div>
            </CardContent>
          </Card>
        ))}

        {query && results.length === 0 && (
          <Card>
            <CardContent className="p-6 text-center">
              <p className="text-muted-foreground">No results found. Try different keywords.</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}

export default Search 