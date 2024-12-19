import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const TermsOfService = () => {
  return (
    <div className="container mx-auto px-4 pt-20">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-primary">
            Terms of Service
          </CardTitle>
        </CardHeader>
        <CardContent className="prose prose-invert max-w-none">
          <p className="text-lg text-muted-foreground mb-8">
            Last updated: February 2024
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground">
                By accessing and using ESH (Esports Strategy Hub), you agree to be bound by these 
                Terms of Service and all applicable laws and regulations. If you do not agree with 
                any of these terms, you are prohibited from using this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">2. Use License</h2>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Permission is granted to temporarily access the materials on ESH for personal, 
                  non-commercial use only. This is the grant of a license, not a transfer of title, 
                  and under this license you may not:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for any commercial purpose</li>
                  <li>Attempt to decompile or reverse engineer any software</li>
                  <li>Remove any copyright or proprietary notations</li>
                  <li>Transfer the materials to another person</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">3. User Accounts</h2>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  When you create an account with us, you must provide accurate and complete information.
                  You are responsible for:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Maintaining the confidentiality of your account</li>
                  <li>All activities that occur under your account</li>
                  <li>Notifying us of any unauthorized use</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">4. Content Guidelines</h2>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Users must not post content that:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Is unlawful or promotes illegal activities</li>
                  <li>Is harassing, abusive, or threatening</li>
                  <li>Infringes on intellectual property rights</li>
                  <li>Contains malicious code or links</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Disclaimer</h2>
              <p className="text-muted-foreground">
                The materials on ESH are provided on an 'as is' basis. ESH makes no warranties, 
                expressed or implied, and hereby disclaims and negates all other warranties 
                including, without limitation, implied warranties or conditions of merchantability, 
                fitness for a particular purpose, or non-infringement of intellectual property.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">6. Limitations</h2>
              <p className="text-muted-foreground">
                In no event shall ESH or its suppliers be liable for any damages (including, 
                without limitation, damages for loss of data or profit, or due to business 
                interruption) arising out of the use or inability to use the materials on ESH.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">7. Contact Information</h2>
              <p className="text-muted-foreground">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <p className="text-primary mt-2">legal@esh.com</p>
            </section>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default TermsOfService 