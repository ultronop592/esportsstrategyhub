import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const Throwables = () => {
  return (
    <div className="container mx-auto px-4 pt-20">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-primary">
            Throwables Guide
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-muted-foreground">
            Master grenade throws and utility usage for tactical advantage.
          </p>
        </CardContent>
      </Card>

      <Tabs defaultValue="video" className="mb-8">
        <TabsList>
          <TabsTrigger value="video">Video Guide</TabsTrigger>
          <TabsTrigger value="details">Throwables Details</TabsTrigger>
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
                      src="https://www.youtube.com/embed/sG0PO-va_jY"
                      title="BGMI Throwables Guide"
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
                  <CardTitle>Throwables Overview</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h3 className="font-semibold text-primary">Types of Throwables</h3>
                      <div className="grid gap-2">
                        <div className="rounded-lg bg-muted p-3">
                          <div className="font-medium mb-1">Frag Grenades</div>
                          <p className="text-sm text-muted-foreground">
                            High damage explosive with wide blast radius
                          </p>
                        </div>
                        <div className="rounded-lg bg-muted p-3">
                          <div className="font-medium mb-1">Smoke Grenades</div>
                          <p className="text-sm text-muted-foreground">
                            Creates visual cover for safe rotations
                          </p>
                        </div>
                        <div className="rounded-lg bg-muted p-3">
                          <div className="font-medium mb-1">Stun Grenades</div>
                          <p className="text-sm text-muted-foreground">
                            Temporarily blinds and deafens enemies
                          </p>
                        </div>
                        <div className="rounded-lg bg-muted p-3">
                          <div className="font-medium mb-1">Molotov Cocktails</div>
                          <p className="text-sm text-muted-foreground">
                            Area denial and damage over time
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-lg border border-primary/20 bg-primary/5 p-3">
                      <h3 className="font-semibold text-primary mb-2">Pro Tips</h3>
                      <ul className="text-sm space-y-2 text-muted-foreground">
                        <li>• Cook grenades for perfect timing</li>
                        <li>• Use smokes for team revives</li>
                        <li>• Stack multiple throwables for maximum effect</li>
                        <li>• Practice bounce angles in training mode</li>
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
                  <CardTitle>Advanced Throwables Guide</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="timing">
                      <AccordionTrigger>Timing & Distance</AccordionTrigger>
                      <AccordionContent>
                        <div className="grid gap-4 md:grid-cols-2">
                          <div>
                            <h4 className="font-semibold mb-2">Grenade Timing</h4>
                            <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                              <li>Cook for 3-4 seconds for optimal explosion</li>
                              <li>Listen for pin-pull sound cues</li>
                              <li>Practice timing in training mode</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2">Throw Distance</h4>
                            <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                              <li>Short throw: Tap throw button</li>
                              <li>Medium throw: Hold briefly</li>
                              <li>Long throw: Hold and run</li>
                            </ul>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="tactics">
                      <AccordionTrigger>Tactical Usage</AccordionTrigger>
                      <AccordionContent>
                        <div className="grid gap-4 md:grid-cols-2">
                          <div>
                            <h4 className="font-semibold mb-2">Offensive</h4>
                            <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                              <li>Clear buildings with coordinated throws</li>
                              <li>Force enemies out of cover</li>
                              <li>Create distractions for pushes</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2">Defensive</h4>
                            <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                              <li>Block enemy vision with smokes</li>
                              <li>Create safe zones for revives</li>
                              <li>Deny area access with molotovs</li>
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
                            <h4 className="font-semibold mb-2">Bounce Throws</h4>
                            <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                              <li>Use walls for indirect throws</li>
                              <li>Calculate bounce angles</li>
                              <li>Practice common spots</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2">Combo Tactics</h4>
                            <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                              <li>Smoke + Molotov combinations</li>
                              <li>Multiple grenade stacks</li>
                              <li>Team coordination throws</li>
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
                <CardTitle>Frag Grenades</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  High damage explosive with lethal potential.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>5 second fuse timer</li>
                  <li>Wide blast radius</li>
                  <li>Can be cooked</li>
                  <li>Perfect for clearing rooms</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Smoke Grenades</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Essential utility for cover and rotations.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>15 second duration</li>
                  <li>Large smoke cloud</li>
                  <li>No damage</li>
                  <li>Great for revives</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Molotov Cocktails</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Area denial tool with damage over time.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>8 second burn time</li>
                  <li>Consistent damage</li>
                  <li>Forces movement</li>
                  <li>Building control</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default Throwables 