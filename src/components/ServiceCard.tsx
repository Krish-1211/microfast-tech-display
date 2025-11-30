import { Link } from 'react-router-dom';
import { ArrowRight, LucideIcon } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
  href: string;
  features: string[];
}

const ServiceCard = ({ title, description, icon: Icon, image, href, features }: ServiceCardProps) => {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 h-full hover:scale-[1.02] animate-fadeIn">
      <div className="relative overflow-hidden rounded-t-lg">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-red-600/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-4 left-4 bg-red-600/90 backdrop-blur-sm p-2 rounded-lg group-hover:animate-pulse">
          <Icon className="h-6 w-6 text-white" />
        </div>
      </div>
      
      <CardHeader>
        <CardTitle className="text-xl group-hover:text-red-700 transition-colors duration-300">
          {title}
        </CardTitle>
        <CardDescription className="text-sm">
          {description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center space-x-2 text-sm text-muted-foreground">
              <div className="w-1.5 h-1.5 bg-primary rounded-full" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        
        <Button asChild variant="outline" className="w-full group-hover:bg-red-600 group-hover:text-white transition-all duration-300 hover:scale-105">
          <Link to={href} className="flex items-center justify-center space-x-2">
            <span>Learn More</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;