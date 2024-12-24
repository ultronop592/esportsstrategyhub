import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
//import { Box, Text } from '@chakra-ui/react';
//import { Button } from '@/components/ui/button'
//import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const Maps = () => {
  return (
    <div className="container mx-auto px-4 pt-20">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-primary">
            Maps Guide
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-muted-foreground">
            Learn the layout, callouts, and strategies for each map in the game.
          </p>
        </CardContent>
      </Card>

      <Tabs defaultValue="video" className="mb-8">
        <TabsList>
          <TabsTrigger value="video">Video Overview</TabsTrigger>
          <TabsTrigger value="maps">Maps Details</TabsTrigger>
        </TabsList>
        
        <TabsContent value="video">
          <div className="grid gap-6 lg:grid-cols-5">
            {/* Video Section - Takes up 3 columns on large screens */}
            <div className="lg:col-span-3">
              <Card>
                <CardContent className="pt-6">
                  <div className="aspect-video">
                    <iframe
                      className="w-full h-full rounded-lg"
                      src="https://www.youtube.com/embed/z_bRLYHLAq8"
                      title="BGMI Map Guide"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Article Section - Takes up 2 columns on large screens */}
            <div className="lg:col-span-2">
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>Quick Map Reference</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h3 className="font-semibold text-primary">Map Sizes</h3>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div className="rounded-lg bg-muted p-2">
                          <span className="font-medium">Erangel:</span>
                          <span className="text-muted-foreground ml-2">8x8 km</span>
                        </div>
                        <div className="rounded-lg bg-muted p-2">
                          <span className="font-medium">Miramar:</span>
                          <span className="text-muted-foreground ml-2">8x8 km</span>
                        </div>
                        <div className="rounded-lg bg-muted p-2">
                          <span className="font-medium">Sanhok:</span>
                          <span className="text-muted-foreground ml-2">4x4 km</span>
                        </div>
                        <div className="rounded-lg bg-muted p-2">
                          <span className="font-medium">Vikendi:</span>
                          <span className="text-muted-foreground ml-2">6x6 km</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-semibold text-primary">Match Duration</h3>
                      <div className="space-y-1">
                        <div className="flex justify-between items-center rounded-lg bg-muted p-2">
                          <span className="font-medium">Average Match:</span>
                          <span className="text-muted-foreground">30-35 mins</span>
                        </div>
                        <div className="flex justify-between items-center rounded-lg bg-muted p-2">
                          <span className="font-medium">Circle Phases:</span>
                          <span className="text-muted-foreground">8-9 phases</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-semibold text-primary">Key Features</h3>
                      <div className="grid gap-2 text-sm">
                        <div className="rounded-lg bg-muted p-2">
                          <div className="font-medium mb-1">Terrain Types</div>
                          <div className="text-muted-foreground">
                            Mountains • Forests • Urban Areas • Water Bodies
                          </div>
                        </div>
                        <div className="rounded-lg bg-muted p-2">
                          <div className="font-medium mb-1">Vehicle Types</div>
                          <div className="text-muted-foreground">
                            Land Vehicles • Boats • Special Vehicles (Map Specific)
                          </div>
                        </div>
                        <div className="rounded-lg bg-muted p-2">
                          <div className="font-medium mb-1">Special Locations</div>
                          <div className="text-muted-foreground">
                            Military Bases • Cities • Compounds • Secret Areas
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-lg border border-primary/20 bg-primary/5 p-3">
                      <h3 className="font-semibold text-primary mb-2">Pro Tip</h3>
                      <p className="text-sm text-muted-foreground">
                        Each map has unique weather conditions that can affect visibility and sound.
                        Always adjust your strategy based on the current conditions!
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Full-width Article Section */}
            <div className="lg:col-span-5">
              <Card>
                <CardHeader>
                  <CardTitle>Complete Map Strategy Guide</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Understanding Map Dynamics</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Each map in BGMI offers a unique playing experience with its own set of challenges and strategies. 
                      Success in the game heavily depends on your ability to adapt to different terrains and understand 
                      the strategic advantages each location provides.
                    </p>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <h4 className="text-lg font-semibold mb-2">Map Selection Strategy</h4>
                      <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                        <li>Consider your team's playstyle when choosing maps</li>
                        <li>Practice specific maps to master their unique features</li>
                        <li>Understand the loot distribution patterns</li>
                        <li>Learn vehicle spawn locations for better mobility</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold mb-2">Universal Map Tips</h4>
                      <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                        <li>Always study the flight path before jumping</li>
                        <li>Keep track of the safe zone patterns</li>
                        <li>Memorize high-ground positions</li>
                        <li>Learn common camping spots</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3">Advanced Gameplay Elements</h3>
                    <div className="grid gap-6 md:grid-cols-3">
                      <div>
                        <h4 className="text-lg font-semibold mb-2">Position Mastery</h4>
                        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                          <li>Utilize natural cover effectively</li>
                          <li>Master peek-shooting techniques</li>
                          <li>Practice compound defense</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold mb-2">Rotation Skills</h4>
                        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                          <li>Plan rotations based on circle shifts</li>
                          <li>Identify safe rotation paths</li>
                          <li>Time your movements carefully</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold mb-2">Team Coordination</h4>
                        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                          <li>Maintain effective communication</li>
                          <li>Coordinate split strategies</li>
                          <li>Support teammates during rotations</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3">Pro Tips</h3>
                    <div className="bg-muted p-4 rounded-lg">
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Always carry smoke grenades for emergency cover</li>
                        <li>• Learn to read the killfeed for information</li>
                        <li>• Practice vehicle tricks for better mobility</li>
                        <li>• Master the art of quick looting</li>
                        <li>• Develop game sense through consistent practice</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="maps">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="overflow-hidden">
              <CardHeader>
                <CardTitle>Erangel</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  The original battle royale map with diverse terrain and strategic locations.
                </p>
                <Accordion type="single" collapsible>
                  <AccordionItem value="hotdrops">
                    <AccordionTrigger>Hot Drop Locations</AccordionTrigger>
                    <AccordionContent>
                      <ul className="list-disc pl-6 space-y-2">
                        <li><span className="font-semibold">Pochinki:</span> Central location with high-tier loot and intense early-game fights</li>
                        <li><span className="font-semibold">School/Apartments:</span> Dense urban area with quick action and good loot</li>
                        <li><span className="font-semibold">Military Base:</span> Isolated area with best-in-class military equipment</li>
                        <li><span className="font-semibold">Georgopol:</span> Split location with multiple compounds and vehicle spawns</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="strategies">
                    <AccordionTrigger>Strategic Tips</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Early Game</h4>
                          <ul className="list-disc pl-6 space-y-1">
                            <li>Land in smaller compounds if you prefer safer starts</li>
                            <li>Secure a vehicle early for better rotation options</li>
                            <li>Watch for other teams' landing patterns</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Mid Game</h4>
                          <ul className="list-disc pl-6 space-y-1">
                            <li>Use ridges and terrain for cover during rotations</li>
                            <li>Control key compounds near the circle center</li>
                            <li>Keep track of vehicle sounds for team positions</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Late Game</h4>
                          <ul className="list-disc pl-6 space-y-1">
                            <li>Prioritize zone position over engagements</li>
                            <li>Use smokes for safe rotations</li>
                            <li>Clear your backs before settling in a spot</li>
                          </ul>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <CardHeader>
                <CardTitle>Miramar</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  A vast desert map that rewards long-range combat and vehicle mastery.
                </p>
                <Accordion type="single" collapsible>
                  <AccordionItem value="hotdrops">
                    <AccordionTrigger>Key Locations</AccordionTrigger>
                    <AccordionContent>
                      <ul className="list-disc pl-6 space-y-2">
                        <li><span className="font-semibold">Pecado:</span> High-risk, high-reward city with the iconic boxing ring</li>
                        <li><span className="font-semibold">Hacienda del Patron:</span> Luxurious compound with top-tier loot</li>
                        <li><span className="font-semibold">Los Leones:</span> Largest city with multiple high-rise buildings</li>
                        <li><span className="font-semibold">Power Grid:</span> Unique layout with good defensive positions</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="strategies">
                    <AccordionTrigger>Combat Tips</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Terrain Usage</h4>
                          <ul className="list-disc pl-6 space-y-1">
                            <li>Use ridgelines for cover and scouting</li>
                            <li>Master peeking from hills and depressions</li>
                            <li>Learn to spot enemies in the open terrain</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Vehicle Strategy</h4>
                          <ul className="list-disc pl-6 space-y-1">
                            <li>Always carry extra fuel for long rotations</li>
                            <li>Use vehicles as mobile cover in open areas</li>
                            <li>Learn to drive on rough terrain effectively</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Loadout Tips</h4>
                          <ul className="list-disc pl-6 space-y-1">
                            <li>Prioritize DMRs and Snipers</li>
                            <li>Carry extra scopes for different ranges</li>
                            <li>Stock up on smokes for open-field crossings</li>
                          </ul>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <CardHeader>
                <CardTitle>Sanhok</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  A compact jungle map focused on fast-paced close-quarters combat.
                </p>
                <Accordion type="single" collapsible>
                  <AccordionItem value="hotdrops">
                    <AccordionTrigger>Popular Locations</AccordionTrigger>
                    <AccordionContent>
                      <ul className="list-disc pl-6 space-y-2">
                        <li><span className="font-semibold">Paradise Resort:</span> Central hotspot with multiple buildings</li>
                        <li><span className="font-semibold">Boot Camp:</span> Military facility with high-tier military loot</li>
                        <li><span className="font-semibold">Ruins:</span> Ancient temple with unique vertical gameplay</li>
                        <li><span className="font-semibold">Cave:</span> Underground complex with secret passages</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="strategies">
                    <AccordionTrigger>Survival Guide</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Movement</h4>
                          <ul className="list-disc pl-6 space-y-1">
                            <li>Use grass and foliage for concealment</li>
                            <li>Stay alert for snakes (prone players)</li>
                            <li>Master quick peeking and repositioning</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Combat</h4>
                          <ul className="list-disc pl-6 space-y-1">
                            <li>Close-range weapons are essential</li>
                            <li>Listen carefully for footsteps</li>
                            <li>Use grenades to flush out campers</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Circle Management</h4>
                          <ul className="list-disc pl-6 space-y-1">
                            <li>Plan rotations early due to fast circles</li>
                            <li>Watch for teams gatekeeping choke points</li>
                            <li>Use water routes for safer rotations</li>
                          </ul>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default Maps 