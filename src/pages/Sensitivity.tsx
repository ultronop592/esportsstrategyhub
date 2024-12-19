import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const Sensitivity = () => {
  return (
    <div className="container mx-auto px-4 pt-20">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-primary">
            Sensitivity Settings
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-muted-foreground">
            Fine-tune your sensitivity settings for optimal aim control and precision.
          </p>
        </CardContent>
      </Card>

      <Tabs defaultValue="video" className="mb-8">
        <TabsList>
          <TabsTrigger value="video">Video Guide</TabsTrigger>
          <TabsTrigger value="settings">Custom Settings</TabsTrigger>
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
                      src="https://www.youtube.com/embed/lX6zvvdaHQs"
                      title="BGMI Sensitivity Guide"
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
                  <CardTitle>Sensitivity Guide Overview</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h3 className="font-semibold text-primary">Key Topics Covered</h3>
                      <div className="grid gap-2">
                        <div className="rounded-lg bg-muted p-3">
                          <div className="font-medium mb-1">Camera Sensitivity</div>
                          <p className="text-sm text-muted-foreground">
                            TPP and FPP camera movement settings for smooth tracking
                          </p>
                        </div>
                        <div className="rounded-lg bg-muted p-3">
                          <div className="font-medium mb-1">ADS Sensitivity</div>
                          <p className="text-sm text-muted-foreground">
                            Optimal settings for different scopes (Red Dot to 8x)
                          </p>
                        </div>
                        <div className="rounded-lg bg-muted p-3">
                          <div className="font-medium mb-1">Gyroscope Settings</div>
                          <p className="text-sm text-muted-foreground">
                            Perfect gyro sensitivity for recoil control
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-lg border border-primary/20 bg-primary/5 p-3">
                      <h3 className="font-semibold text-primary mb-2">Pro Tips</h3>
                      <ul className="text-sm space-y-2 text-muted-foreground">
                        <li>• Start with lower sensitivity and gradually increase</li>
                        <li>• Practice in training mode to test settings</li>
                        <li>• Adjust based on your device and playstyle</li>
                        <li>• Fine-tune settings in real matches</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="settings">
          <Card>
            <CardContent className="pt-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Camera Sensitivity</h3>
                  <div className="space-y-2">
                    <label className="text-sm text-muted-foreground">
                      Third Person (TPP)
                    </label>
                    <Input type="number" placeholder="Enter TPP sensitivity" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-muted-foreground">
                      First Person (FPP)
                    </label>
                    <Input type="number" placeholder="Enter FPP sensitivity" />
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">ADS Sensitivity</h3>
                  <div className="space-y-2">
                    <label className="text-sm text-muted-foreground">
                      Red Dot, Holographic
                    </label>
                    <Input type="number" placeholder="Enter red dot sensitivity" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-muted-foreground">2x Scope</label>
                    <Input type="number" placeholder="Enter 2x scope sensitivity" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-muted-foreground">4x Scope</label>
                    <Input type="number" placeholder="Enter 4x scope sensitivity" />
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Gyroscope</h3>
                  <div className="space-y-2">
                    <label className="text-sm text-muted-foreground">
                      General Gyroscope
                    </label>
                    <Input type="number" placeholder="Enter general gyro sensitivity" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-muted-foreground">
                      ADS Gyroscope
                    </label>
                    <Input type="number" placeholder="Enter ADS gyro sensitivity" />
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Additional Settings</h3>
                  <div className="space-y-2">
                    <label className="text-sm text-muted-foreground">
                      Peek Sensitivity
                    </label>
                    <Input type="number" placeholder="Enter peek sensitivity" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-muted-foreground">
                      Free Look
                    </label>
                    <Input type="number" placeholder="Enter free look sensitivity" />
                  </div>
                </div>

                <div className="md:col-span-2 flex justify-end">
                  <Button>Save Settings</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default Sensitivity 