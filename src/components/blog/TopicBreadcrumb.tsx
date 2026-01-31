import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { Pillar } from '@/data/topicalMap';

interface TopicBreadcrumbProps {
  pillar?: Pillar;
  category: string;
  postTitle?: string;
  className?: string;
}

export function TopicBreadcrumb({ 
  pillar, 
  category, 
  postTitle,
  className 
}: TopicBreadcrumbProps) {
  return (
    <nav 
      className={cn('flex items-center flex-wrap gap-1.5 text-sm text-muted-foreground', className)}
      aria-label="Breadcrumb"
    >
      <ol className="flex items-center flex-wrap gap-1.5">
        <li className="flex items-center gap-1.5">
          <Link 
            to="/" 
            className="flex items-center gap-1 hover:text-primary transition-colors"
            aria-label="Home"
          >
            <Home className="h-3.5 w-3.5" />
          </Link>
          <ChevronRight className="h-3.5 w-3.5 text-muted-foreground/50" aria-hidden />
        </li>
        
        <li className="flex items-center gap-1.5">
          <Link 
            to="/blog" 
            className="hover:text-primary transition-colors"
          >
            Blog
          </Link>
          <ChevronRight className="h-3.5 w-3.5 text-muted-foreground/50" aria-hidden />
        </li>

        {pillar ? (
          <li className="flex items-center gap-1.5">
            <Link 
              to={`/blog?pillar=${pillar.id}`}
              className="hover:text-primary transition-colors"
              style={{ color: pillar.color }}
            >
              {pillar.title}
            </Link>
            {postTitle && (
              <ChevronRight className="h-3.5 w-3.5 text-muted-foreground/50" aria-hidden />
            )}
          </li>
        ) : (
          <li className="flex items-center gap-1.5">
            <Link 
              to={`/blog?category=${encodeURIComponent(category)}`}
              className="hover:text-primary transition-colors"
            >
              {category}
            </Link>
            {postTitle && (
              <ChevronRight className="h-3.5 w-3.5 text-muted-foreground/50" aria-hidden />
            )}
          </li>
        )}

        {postTitle && (
          <li>
            <span 
              className="text-foreground font-medium line-clamp-1 max-w-[200px] sm:max-w-[300px]"
              aria-current="page"
            >
              {postTitle}
            </span>
          </li>
        )}
      </ol>
    </nav>
  );
}
