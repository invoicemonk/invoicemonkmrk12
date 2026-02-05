import { Target, Eye } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export function MissionVision() {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      <Card className="border-border/50 bg-gradient-to-br from-primary/5 to-transparent">
        <CardContent className="p-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-lg bg-primary/10">
              <Target className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-heading-md font-semibold text-foreground">Our Mission</h3>
          </div>
          <p className="text-body text-muted-foreground leading-relaxed">
            To enable freelancers and businesses throughout the world to do what they love 
            doing without headaches and time wasting.
          </p>
        </CardContent>
      </Card>

      <Card className="border-border/50 bg-gradient-to-br from-accent/50 to-transparent">
        <CardContent className="p-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-lg bg-primary/10">
              <Eye className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-heading-md font-semibold text-foreground">Our Vision</h3>
          </div>
          <p className="text-body text-muted-foreground leading-relaxed">
            To be Nigeria's Number One Indigenous Business Enabler Partner with IT Solutions.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
