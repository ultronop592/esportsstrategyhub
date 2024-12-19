import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const Vehicles = () => {
  return (
    <div className="container mx-auto px-4 pt-20">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-primary">
            Vehicle Guide
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-muted-foreground">
            Master vehicle mechanics and advanced driving techniques for better mobility and survival.
          </p>
        </CardContent>
      </Card>

      <Tabs defaultValue="video" className="mb-8">
        <TabsList>
          <TabsTrigger value="video">Video Guide</TabsTrigger>
          <TabsTrigger value="details">Vehicle Details</TabsTrigger>
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
                      src="https://www.youtube.com/embed/Q2ZasLAx_J4"
                      title="BGMI Vehicle Guide"
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
                  <CardTitle>Vehicle Mechanics Overview</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h3 className="font-semibold text-primary">Key Features</h3>
                      <div className="grid gap-2">
                        <div className="rounded-lg bg-muted p-3">
                          <div className="font-medium mb-1">Vehicle Types</div>
                          <p className="text-sm text-muted-foreground">
                            Different vehicles for various terrains and situations
                          </p>
                        </div>
                        <div className="rounded-lg bg-muted p-3">
                          <div className="font-medium mb-1">Fuel Management</div>
                          <p className="text-sm text-muted-foreground">
                            Efficient fuel usage and refueling strategies
                          </p>
                        </div>
                        <div className="rounded-lg bg-muted p-3">
                          <div className="font-medium mb-1">Driving Techniques</div>
                          <p className="text-sm text-muted-foreground">
                            Advanced maneuvers and escape tactics
                          </p>
                        </div>
                        <div className="rounded-lg bg-muted p-3">
                          <div className="font-medium mb-1">Combat Usage</div>
                          <p className="text-sm text-muted-foreground">
                            Vehicle combat and mobile cover tactics
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-lg border border-primary/20 bg-primary/5 p-3">
                      <h3 className="font-semibold text-primary mb-2">Pro Tips</h3>
                      <ul className="text-sm space-y-2 text-muted-foreground">
                        <li>• Always check fuel before long rotations</li>
                        <li>• Use handbrake for quick turns</li>
                        <li>• Switch seats for mobile scouting</li>
                        <li>• Keep vehicles in cover when stationary</li>
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
                  <CardTitle>Advanced Vehicle Guide</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="basics">
                      <AccordionTrigger>Basic Mechanics</AccordionTrigger>
                      <AccordionContent>
                        <div className="grid gap-4 md:grid-cols-2">
                          <div>
                            <h4 className="font-semibold mb-2">Controls</h4>
                            <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                              <li>Acceleration and braking</li>
                              <li>Steering sensitivity</li>
                              <li>Seat switching</li>
                              <li>Camera controls</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2">Vehicle Health</h4>
                            <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                              <li>Damage indicators</li>
                              <li>Repair mechanics</li>
                              <li>Explosion prevention</li>
                              <li>Tire management</li>
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
                            <h4 className="font-semibold mb-2">Movement</h4>
                            <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                              <li>Drift turning</li>
                              <li>Jump techniques</li>
                              <li>Quick stops</li>
                              <li>Terrain navigation</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2">Combat</h4>
                            <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                              <li>Drive-by shooting</li>
                              <li>Vehicle positioning</li>
                              <li>Escape maneuvers</li>
                              <li>Squad coordination</li>
                            </ul>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="strategy">
                      <AccordionTrigger>Strategic Usage</AccordionTrigger>
                      <AccordionContent>
                        <div className="grid gap-4 md:grid-cols-2">
                          <div>
                            <h4 className="font-semibold mb-2">Rotation</h4>
                            <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                              <li>Safe routes planning</li>
                              <li>Timing considerations</li>
                              <li>Fuel management</li>
                              <li>Alternative paths</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2">Team Play</h4>
                            <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                              <li>Vehicle formations</li>
                              <li>Role assignments</li>
                              <li>Communication</li>
                              <li>Support tactics</li>
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
                <CardTitle>Land Vehicles</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Ground transportation options for different terrains.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li><span className="font-semibold">UAZ:</span> All-terrain durability</li>
                  <li><span className="font-semibold">Dacia:</span> Speed on roads</li>
                  <li><span className="font-semibold">Buggy:</span> Agile desert vehicle</li>
                  <li><span className="font-semibold">Bike:</span> Fast and maneuverable</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Special Vehicles</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Unique vehicles with special capabilities.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li><span className="font-semibold">BRDM:</span> Armored amphibious</li>
                  <li><span className="font-semibold">Monster Truck:</span> Extreme terrain</li>
                  <li><span className="font-semibold">Snowmobile:</span> Snow specialist</li>
                  <li><span className="font-semibold">Pickup:</span> Team transport</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Water Vehicles</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Watercraft for naval transportation.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li><span className="font-semibold">Boat:</span> Basic water transport</li>
                  <li><span className="font-semibold">Aquarail:</span> Fast water bike</li>
                  <li><span className="font-semibold">PG-117:</span> Team boat</li>
                  <li><span className="font-semibold">BRDM:</span> Amphibious capability</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default Vehicles 