import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Mail, Phone, Copy, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

interface ContactDialogProps {
  children: React.ReactNode
}

const ContactDialog = ({ children }: ContactDialogProps) => {
  const [copiedEmail1, setCopiedEmail1] = useState(false)
  const [copiedEmail2, setCopiedEmail2] = useState(false)
  const [copiedPhone1, setCopiedPhone1] = useState(false)
  const [copiedPhone2, setCopiedPhone2] = useState(false)

  const handleCopy = async (text: string, setter: (value: boolean) => void) => {
    try {
      await navigator.clipboard.writeText(text)
      setter(true)
      setTimeout(() => setter(false), 2000)
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[400px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-primary">Contact Us</DialogTitle>
        </DialogHeader>

                    {/* Saujanya's Contact */}
            <div className="rounded-lg bg-muted p-4">
              <div className="font-medium mb-3">Saujanya Tripathi</div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <a 
                      href="mailto:iamsaujanya.ig@gmail.com"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      iamsaujanya.ig@gmail.com
                    </a>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-7 w-7 p-0"
                    onClick={() => handleCopy('iamsaujanya.ig@gmail.com', setCopiedEmail2)}
                  >
                    {copiedEmail2 ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                  </Button>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <a 
                      href="tel:+919026573452"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      +91 9026573452
                    </a>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-7 w-7 p-0"
                    onClick={() => handleCopy('+919026573452', setCopiedPhone2)}
                  >
                    {copiedPhone2 ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        
        <div className="space-y-4 py-4">
          {/* Contact Cards */}
          <div className="grid gap-4">
            {/* Srajal's Contact */}
            <div className="rounded-lg bg-muted p-4">
              <div className="font-medium mb-3">Srajal Tiwari</div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <a 
                      href="mailto:srajaltiwari902@gmail.com"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      srajaltiwari902@gmail.com
                    </a>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-7 w-7 p-0"
                    onClick={() => handleCopy('srajaltiwari902@gmail.com', setCopiedEmail1)}
                  >
                    {copiedEmail1 ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                  </Button>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <a 
                      href="tel:+919919084211"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      +91 9919084211
                    </a>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-7 w-7 p-0"
                    onClick={() => handleCopy('+919919084211', setCopiedPhone1)}
                  >
                    {copiedPhone1 ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                  </Button>
                </div>
              </div>
            </div>

          <div className="text-xs text-center text-muted-foreground">
            Available Monday - Friday, 9:00 AM - 6:00 PM IST
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default ContactDialog 
