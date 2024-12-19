import { Link } from 'react-router-dom'
import ContactDialog from './ContactDialog'

const Footer = () => {
  return (
    <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Main Navigation */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Main Guides</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/maps" className="text-muted-foreground hover:text-primary transition-colors">
                  Maps Guide
                </Link>
              </li>
              <li>
                <Link to="/weapons" className="text-muted-foreground hover:text-primary transition-colors">
                  Weapons Guide
                </Link>
              </li>
              <li>
                <Link to="/throwables" className="text-muted-foreground hover:text-primary transition-colors">
                  Throwables Guide
                </Link>
              </li>
              <li>
                <Link to="/vehicles" className="text-muted-foreground hover:text-primary transition-colors">
                  Vehicle Guide
                </Link>
              </li>
            </ul>
          </div>

          {/* Settings & Controls */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Settings & Controls</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/sensitivity" className="text-muted-foreground hover:text-primary transition-colors">
                  Sensitivity Settings
                </Link>
              </li>
              <li>
                <Link to="/handcams" className="text-muted-foreground hover:text-primary transition-colors">
                  Handcam Setup
                </Link>
              </li>
              <li>
                <a 
                  href="https://help.battlegroundsmobileindia.com/hc/en/6-bgmi/contact-us/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Support
                </a>
              </li>
              <li>
                <a 
                  href="https://www.battlegroundsmobileindia.com/news" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  News
                </a>
              </li>
            </ul>
          </div>

          {/* Updates & Community */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Updates & Community</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/patch-notes" className="text-muted-foreground hover:text-primary transition-colors">
                  Patch Notes
                </Link>
              </li>
              <li>
                <a 
                  href="https://youtube.com/@battlegroundsmobile_in" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  YouTube Channel
                </a>
              </li>
              <li>
                <a 
                  href="https://discord.gg/battlegroundsmobilein" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Discord Server
                </a>
              </li>
              <li>
                <a 
                  href="https://www.instagram.com/battlegroundsmobilein_official" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Contact */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Legal & Contact</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <ContactDialog>
                  <button className="text-muted-foreground hover:text-primary transition-colors text-left w-full">
                    Contact Us
                  </button>
                </ContactDialog>
              </li>
              <li>
                <a 
                  href="https://www.battlegroundsmobileindia.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Official Website
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t pt-8">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} ESH. All rights reserved. BATTLEGROUNDS MOBILE INDIA is a registered trademark of KRAFTON, Inc.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 