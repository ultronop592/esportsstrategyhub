import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

interface FeatureCardProps {
  title: string
  description: string
  path: string
}

const FeatureCard = ({ title, description, path }: FeatureCardProps) => {
  const navigate = useNavigate()

  return (
    <Card className="transition-all hover:-translate-y-2 hover:shadow-lg">
      <CardHeader>
        <CardTitle className="text-primary">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
      <CardFooter>
        <Button
          className="w-full"
          variant="outline"
          onClick={() => navigate(path)}
        >
          Learn More
        </Button>
      </CardFooter>
    </Card>
  )
}

export default FeatureCard 