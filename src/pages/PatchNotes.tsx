import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const PatchNotes = () => {
  return (
    <div className="container mx-auto px-4 pt-20">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-primary">
            Patch Notes
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-muted-foreground">
            Stay updated with the latest changes and improvements to ESH.
          </p>
        </CardContent>
      </Card>

      <div className="space-y-6">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="v1.2.0">
            <AccordionTrigger className="text-lg font-semibold">
              Version 1.2.0 (February 2024)
            </AccordionTrigger>
            <AccordionContent className="space-y-4">
              <div>
                <h3 className="text-primary font-semibold mb-2">New Features</h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Added Vehicles section with comprehensive guides</li>
                  <li>Added Handcams section for pro setups</li>
                  <li>Implemented dark mode toggle</li>
                  <li>Added video integration in Maps section</li>
                </ul>
              </div>
              <div>
                <h3 className="text-primary font-semibold mb-2">Improvements</h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Enhanced navigation with better mobile responsiveness</li>
                  <li>Updated UI components for better accessibility</li>
                  <li>Improved loading performance</li>
                </ul>
              </div>
              <div>
                <h3 className="text-primary font-semibold mb-2">Bug Fixes</h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Fixed search functionality issues</li>
                  <li>Resolved video playback problems</li>
                  <li>Fixed mobile menu display bugs</li>
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="v1.1.0">
            <AccordionTrigger className="text-lg font-semibold">
              Version 1.1.0 (January 2024)
            </AccordionTrigger>
            <AccordionContent className="space-y-4">
              <div>
                <h3 className="text-primary font-semibold mb-2">New Features</h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Added detailed weapon statistics</li>
                  <li>Implemented interactive maps</li>
                  <li>Added user profiles</li>
                </ul>
              </div>
              <div>
                <h3 className="text-primary font-semibold mb-2">Improvements</h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Enhanced search functionality</li>
                  <li>Updated UI design</li>
                  <li>Improved mobile experience</li>
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="v1.0.0">
            <AccordionTrigger className="text-lg font-semibold">
              Version 1.0.0 (December 2023)
            </AccordionTrigger>
            <AccordionContent className="space-y-4">
              <div>
                <h3 className="text-primary font-semibold mb-2">Initial Release</h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Basic maps and weapons guides</li>
                  <li>Sensitivity calculator</li>
                  <li>Throwables guide</li>
                  <li>User authentication</li>
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}

export default PatchNotes 