import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const Weapons = () => {
  return (
    <div className="container mx-auto px-4 pt-20">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-primary">
            Weapons Guide
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-muted-foreground">
            Master weapon mechanics, recoil control, and advanced combat techniques for better gunplay.
          </p>
        </CardContent>
      </Card>

      <Tabs defaultValue="video" className="mb-8">
        <TabsList>
          <TabsTrigger value="video">Video Guide</TabsTrigger>
          <TabsTrigger value="details">Weapon Details</TabsTrigger>
        </TabsList>

        <TabsContent value="video">
          <div className="grid gap-6 lg:grid-cols-5">
            {/* Video Section */}
            <div className="lg:col-span-3">
              <Card>
                <CardContent className="pt-6">
                  <div className="aspect-video">
                    <iframe
                      className="w-full h-full rounded-lg"
                      src="https://www.youtube.com/embed/_b3ZLyA1m2Q"
                      title="BGMI Weapons Guide"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Info Section */}
            <div className="lg:col-span-2">
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>Weapon Mechanics Overview</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h3 className="font-semibold text-primary">Key Features</h3>
                      <div className="grid gap-2">
                        <div className="rounded-lg bg-muted p-3">
                          <div className="font-medium mb-1">Recoil Control</div>
                          <p className="text-sm text-muted-foreground">
                            Master recoil patterns and spray control
                          </p>
                        </div>
                        <div className="rounded-lg bg-muted p-3">
                          <div className="font-medium mb-1">Attachments</div>
                          <p className="text-sm text-muted-foreground">
                            Optimal attachment combinations for each weapon
                          </p>
                        </div>
                        <div className="rounded-lg bg-muted p-3">
                          <div className="font-medium mb-1">Damage Stats</div>
                          <p className="text-sm text-muted-foreground">
                            Damage profiles and time-to-kill statistics
                          </p>
                        </div>
                        <div className="rounded-lg bg-muted p-3">
                          <div className="font-medium mb-1">Combat Tactics</div>
                          <p className="text-sm text-muted-foreground">
                            Situational weapon usage and combat strategies
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-lg border border-primary/20 bg-primary/5 p-3">
                      <h3 className="font-semibold text-primary mb-2">Pro Tips</h3>
                      <ul className="text-sm space-y-2 text-muted-foreground">
                        <li>• Practice recoil control in training mode</li>
                        <li>• Learn weapon switch timing</li>
                        <li>• Master pre-firing techniques</li>
                        <li>• Understand damage drop-off ranges</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Full-width Guide Section */}
            <div className="lg:col-span-5">
              <Card>
                <CardHeader>
                  <CardTitle>Advanced Weapon Guide</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="basics">
                      <AccordionTrigger>Basic Mechanics</AccordionTrigger>
                      <AccordionContent>
                        <div className="grid gap-4 md:grid-cols-2">
                          <div>
                            <h4 className="font-semibold mb-2">Shooting Mechanics</h4>
                            <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                              <li>Recoil patterns</li>
                              <li>Bullet drop</li>
                              <li>Firing modes</li>
                              <li>Hip-fire accuracy</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2">Weapon Handling</h4>
                            <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                              <li>ADS timing</li>
                              <li>Reload canceling</li>
                              <li>Quick peeking</li>
                              <li>Movement accuracy</li>
                            </ul>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="advanced">
                      <AccordionTrigger>Advanced Techniques</AccordionTrigger>
                      <AccordionContent>
                        <div className="grid gap-4 md:grid-cols-2">
                          <div>
                            <h4 className="font-semibold mb-2">Combat Skills</h4>
                            <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                              <li>Spray transfers</li>
                              <li>Burst control</li>
                              <li>Jiggle peeking</li>
                              <li>Crosshair placement</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2">Advanced Tactics</h4>
                            <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                              <li>Pre-aiming spots</li>
                              <li>Angle holding</li>
                              <li>Weapon switching</li>
                              <li>Sound baiting</li>
                            </ul>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="strategy">
                      <AccordionTrigger>Weapon Strategy</AccordionTrigger>
                      <AccordionContent>
                        <div className="grid gap-4 md:grid-cols-2">
                          <div>
                            <h4 className="font-semibold mb-2">Loadout Planning</h4>
                            <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                              <li>Primary weapon choice</li>
                              <li>Secondary backup</li>
                              <li>Ammo management</li>
                              <li>Attachment priority</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2">Situational Use</h4>
                            <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                              <li>Close-range fights</li>
                              <li>Mid-range engagement</li>
                              <li>Long-range sniping</li>
                              <li>Vehicle combat</li>
                            </ul>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="details">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Assault Rifles</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Versatile weapons effective at various ranges.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li><span className="font-semibold">M416:</span> All-round performance</li>
                  <li><span className="font-semibold">AKM:</span> High damage, high recoil</li>
                  <li><span className="font-semibold">SCAR-L:</span> Low recoil, stable</li>
                  <li><span className="font-semibold">M762:</span> High DPS, moderate control</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>SMGs & Shotguns</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Close-range combat specialists.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li><span className="font-semibold">UMP45:</span> Versatile SMG</li>
                  <li><span className="font-semibold">Vector:</span> High ROF, low recoil</li>
                  <li><span className="font-semibold">DBS:</span> Double barrel power</li>
                  <li><span className="font-semibold">S12K:</span> Auto shotgun</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Sniper & DMRs</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Long-range precision weapons.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li><span className="font-semibold">AWM:</span> Highest damage sniper</li>
                  <li><span className="font-semibold">Kar98k:</span> Classic bolt action</li>
                  <li><span className="font-semibold">Mini14:</span> Fast DMR</li>
                  <li><span className="font-semibold">SLR:</span> High damage DMR</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default Weapons 