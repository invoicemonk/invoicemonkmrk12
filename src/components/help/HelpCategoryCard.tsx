import { Link } from 'react-router-dom';
import { icons } from 'lucide-react';
import type { HelpGuide } from '@/data/helpGuides';

interface HelpCategoryCardProps {
  guide: HelpGuide;
}

export function HelpCategoryCard({ guide }: HelpCategoryCardProps) {
  const IconComponent = icons[guide.icon as keyof typeof icons];

  return (
    <Link
      to={`/help/${guide.slug}`}
      className="group block p-6 rounded-2xl border border-border bg-card hover:shadow-soft-md transition-all duration-300 hover:-translate-y-0.5"
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
          {IconComponent && <IconComponent className="w-5 h-5" />}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-body font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-1">
            {guide.title.split('—')[0].trim()}
          </h3>
          <p className="text-body-sm text-muted-foreground mt-1 line-clamp-2">
            {guide.description}
          </p>
          <span className="inline-block mt-3 text-caption text-muted-foreground">
            {guide.steps.length} steps · {guide.estimatedTime?.replace('PT', '').replace('M', ' min') || '3 min'}
          </span>
        </div>
      </div>
    </Link>
  );
}
