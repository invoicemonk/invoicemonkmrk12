import { Link } from 'react-router-dom';
import { ArrowRight, FileText, Wallet, Calculator, Shield, User, ClipboardList, type LucideIcon } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import type { Pillar } from '@/data/topicalMap';

interface PillarCardProps {
  pillar: Pillar;
  postCount: number;
  className?: string;
}

const iconMap: Record<string, LucideIcon> = {
  FileText,
  Wallet,
  Calculator,
  Shield,
  User,
  ClipboardList
};

export function PillarCard({ pillar, postCount, className }: PillarCardProps) {
  const Icon = iconMap[pillar.icon] || FileText;

  return (
    <Link to={`/blog?pillar=${pillar.id}`}>
      <Card 
        className={cn(
          'group relative overflow-hidden border-border/50 hover:shadow-lg transition-all duration-300 h-full',
          'hover:border-primary/30',
          className
        )}
      >
        {/* Accent line */}
        <div 
          className="absolute top-0 left-0 right-0 h-1 transition-all duration-300 group-hover:h-1.5"
          style={{ backgroundColor: pillar.color }}
        />
        
        <CardContent className="pt-8 pb-6 px-6">
          <div className="flex items-start justify-between mb-4">
            <div 
              className="p-3 rounded-xl transition-transform duration-300 group-hover:scale-110"
              style={{ backgroundColor: `${pillar.color}15` }}
            >
              <Icon 
                className="h-6 w-6" 
                style={{ color: pillar.color }} 
              />
            </div>
            <Badge variant="secondary" className="text-xs">
              {postCount} {postCount === 1 ? 'article' : 'articles'}
            </Badge>
          </div>

          <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
            {pillar.title}
          </h3>
          
          <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
            {pillar.description}
          </p>

          <div className="flex items-center text-sm font-medium text-primary opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
            <span>Explore topic</span>
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
