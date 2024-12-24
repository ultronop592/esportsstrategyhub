import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
//import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const handcamVideos = [
  {
    title: "Two Finger Claw",
    description: "Basic thumb setup for beginners",
    videoId: "MQ7V3s1VmWA",
    difficulty: "Beginner",
    advantages: ["Easy to learn", "Natural grip", "Good for casual play"],
  },
  {
    title: "Three Finger Claw",
    description: "Balanced setup for intermediate players",
    videoId: "2Qtrc0fQfZM",
    difficulty: "Intermediate",
    advantages: ["Better aim control", "Quick scope capability", "Comfortable grip"],
  },
  {
    title: "Four Finger Claw",
    description: "Advanced setup for competitive play",
    videoId: "u5c3RR9QVqo",
    difficulty: "Advanced",
    advantages: ["Fast reactions", "Complex movements", "Pro-level control"],
  },
  {
    title: "Five Finger Claw",
    description: "Professional setup for enhanced control",
    videoId: "fWItIdqnD20",
    difficulty: "Expert",
    advantages: ["Maximum control", "Quick weapon switches", "Advanced movements"],
  },
  {
    title: "Six Finger Claw",
    description: "Ultimate setup for maximum control",
    videoId: "bYlgOYvAlbQ",
    difficulty: "Master",
    advantages: ["Full movement control", "Instant reactions", "Pro techniques"],
  },
]

//import React from 'react';

const Handcams = () => {
  return (
    <div className="container mx-auto px-4 pt-20">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-primary">
            Handcam Setup Guide
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-muted-foreground">
            Learn different claw techniques from basic to advanced setups.
          </p>
        </CardContent>
      </Card>

      {handcamVideos.map((setup) => (
        <Card key={setup.videoId} className="mb-8">
          <div className="grid gap-6 lg:grid-cols-5">
            {/* Video Section */}
            <div className="lg:col-span-3">
              <CardContent className="pt-6">
                <div className="aspect-video">
                  <iframe
                    className="w-full h-full rounded-lg"
                    src={`https://www.youtube.com/embed/${setup.videoId}`}
                    title={`${setup.title} Guide`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </CardContent>
            </div>

            {/* Info Section */}
            <div className="lg:col-span-2">
              <Card className="h-full border-0 shadow-none">
                <CardHeader>
                  <CardTitle>{setup.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h3 className="font-semibold text-primary">Overview</h3>
                      <div className="rounded-lg bg-muted p-3">
                        <p className="text-sm text-muted-foreground">{setup.description}</p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-semibold text-primary">Difficulty Level</h3>
                      <div className="rounded-lg bg-muted p-3">
                        <span className="text-sm font-medium">{setup.difficulty}</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-semibold text-primary">Advantages</h3>
                      <div className="rounded-lg bg-muted p-3">
                        <ul className="text-sm space-y-1 text-muted-foreground">
                          {setup.advantages.map((advantage, index) => (
                            <li key={index}>• {advantage}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="rounded-lg border border-primary/20 bg-primary/5 p-3">
                      <h3 className="font-semibold text-primary mb-2">Pro Tip</h3>
                      <p className="text-sm text-muted-foreground">
                        Practice this setup in training mode first before using it in matches.
                        It may take several days to get comfortable with the new layout.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}

export default Handcams 