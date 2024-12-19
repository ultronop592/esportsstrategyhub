import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ThemeToggle } from '@/components/ui/theme-toggle'

const Navbar = () => {
  const navigate = useNavigate()
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`)
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center px-4">
        <Link to="/" className="mr-8 flex items-center space-x-2">
          <span className="text-xl font-bold">ESH</span>
        </Link>

        <div className="flex flex-1 items-center space-x-2">
          <form onSubmit={handleSearch} className="flex-1 md:flex-initial">
            <div className="relative">
              <Input
                type="search"
                placeholder="Search guides..."
                className="h-9 md:w-[300px] lg:w-[400px]"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </form>
        </div>

        <div className="flex items-center space-x-4">
          <nav className="flex items-center space-x-2">
            <Link to="/maps">
              <Button variant="ghost">Maps</Button>
            </Link>
            <Link to="/weapons">
              <Button variant="ghost">Weapons</Button>
            </Link>
            <Link to="/throwables">
              <Button variant="ghost">Throwables</Button>
            </Link>
            <Link to="/vehicles">
              <Button variant="ghost">Vehicles</Button>
            </Link>
            <Link to="/sensitivity">
              <Button variant="ghost">Sensitivity</Button>
            </Link>
            <Link to="/handcams">
              <Button variant="ghost">Handcams</Button>
            </Link>
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  )
}

export default Navbar 