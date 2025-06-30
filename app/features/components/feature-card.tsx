import type { LucideIcon } from "lucide-react";
import { Link } from "react-router";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "~/common/components/ui/card";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  isActive: boolean;
  onMouseEnter: () => void;
  href: string;
}

export function FeatureCard({ 
  icon: Icon, 
  title, 
  description, 
  isActive, 
  onMouseEnter,
  href 
}: FeatureCardProps) {
  return (
    <Link to={href} className="block">
      <Card 
        className={`group cursor-pointer hover:shadow-lg transition-all duration-500 ${
          isActive ? 'scale-105 shadow-lg' : ''
        }`}
        onMouseEnter={onMouseEnter}
      >
        <CardHeader>
          <div className={`w-12 h-12 bg-muted rounded-lg flex items-center justify-center mb-2 transition-all duration-300 ${
            isActive ? 'scale-105' : ''
          }`}>
            <Icon className={`h-6 w-6 text-foreground transition-all duration-300 ${
              isActive ? 'animate-pulse' : ''
            }`} />
          </div>
          <CardTitle className="text-xl">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="leading-relaxed text-base">
            {description}
          </CardDescription>
        </CardContent>
      </Card>
    </Link>
  );
} 