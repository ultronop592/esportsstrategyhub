import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Link } from 'react-router-dom'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

const FeatureCard = ({ title, description, link }: { title: string; description: string; link: string }) => (
  <Card className="relative overflow-hidden border-primary/10 transition-all duration-300 hover:scale-[1.02] hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20">
    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
    <CardContent className="p-6">
      <h3 className="text-xl font-bold mb-2 text-primary">{title}</h3>
      <p className="text-muted-foreground mb-4">{description}</p>
      <Link to={link}>
        <Button 
          variant="outline" 
          className="w-full bg-background/80 backdrop-blur hover:bg-primary hover:text-primary-foreground transition-all duration-300"
        >
          Learn More
        </Button>
      </Link>
    </CardContent>
  </Card>
)

const Home = () => {
  return (
    <div className="container mx-auto px-4 pt-28 pb-16">
      {/* Hero Section */}
      <div className="text-center mb-28 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background -z-10"></div>
        <div className="space-y-10">
          <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/90 to-primary/80 leading-relaxed pb-2 mb-1">
            eSports Strategy Hub
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your ultimate resource for mastering BGMI. Learn advanced techniques,
            discover pro strategies, and elevate your gameplay.
          </p>
          <Dialog>
            <DialogTrigger asChild>
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 hover:scale-105 text-lg px-8 py-6"
              >
                Learn More
              </Button>
            </DialogTrigger>
            <DialogContent className="max-h-[80vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-2xl mb-4 text-primary font-bold">
                  BATTLEGROUNDS MOBILE INDIA
                </DialogTitle>
              </DialogHeader>
              <div className="space-y-6 text-muted-foreground">
                <p>
                  BATTLEGROUNDS MOBILE INDIA (BGMI) is a player versus player (PVP) shooter game in which up to 100 players compete in a battle royale, a type of large-scale last man standing deathmatch where players fight to remain the last alive.
                </p>

                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">Game Overview</h3>
                  <p>
                    Players can choose to enter the match solo, duo, or with a small team of up to four people. The last person or team alive wins the match. Each match starts with players parachuting from a plane onto a map. The players start with no gear beyond customized clothing selections which do not affect gameplay.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">Gameplay Features</h3>
                  <ul className="list-none space-y-2">
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                      Multiple maps with unique terrain and challenges
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                      Wide variety of weapons, vehicles, and equipment
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                      Dynamic weather system affecting gameplay
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                      Regular updates and seasonal content
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                      Competitive ranking system
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">Game Modes</h3>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-lg border p-3 bg-primary/5">
                      <div className="font-medium mb-1">Classic Mode</div>
                      <p className="text-sm">Erangel, Miramar, Sanhok, Vikendi</p>
                    </div>
                    <div className="rounded-lg border p-3 bg-primary/5">
                      <div className="font-medium mb-1">Arcade Mode</div>
                      <p className="text-sm">Quick Matches, Sniper Training</p>
                    </div>
                    <div className="rounded-lg border p-3 bg-primary/5">
                      <div className="font-medium mb-1">EvoGround</div>
                      <p className="text-sm">Zombie Modes, Special Events</p>
                    </div>
                    <div className="rounded-lg border p-3 bg-primary/5">
                      <div className="font-medium mb-1">Arena Mode</div>
                      <p className="text-sm">Team Deathmatch, Gun Game</p>
                    </div>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <FeatureCard
          title="Maps Guide"
          description="Learn map layouts, loot spots, and rotation strategies for all BGMI maps."
          link="/maps"
        />
        <FeatureCard
          title="Weapons Guide"
          description="Master weapon recoil patterns, attachments, and optimal loadouts."
          link="/weapons"
        />
        <FeatureCard
          title="Throwables Guide"
          description="Perfect your grenade spots and utility usage for tactical advantage."
          link="/throwables"
        />
        <FeatureCard
          title="Vehicle Guide"
          description="Learn advanced driving techniques and vehicle mechanics."
          link="/vehicles"
        />
        <FeatureCard
          title="Sensitivity Guide"
          description="Find and implement the perfect sensitivity settings for your playstyle."
          link="/sensitivity"
        />
        <FeatureCard
          title="Handcam Guide"
          description="Study pro player hand movements and improve your mechanics."
          link="/handcams"
        />
      </div>
    </div>
  )
}

export default Home 
