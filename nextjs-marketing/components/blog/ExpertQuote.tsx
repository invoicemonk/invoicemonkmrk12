import { cn } from '@/lib/utils';
import { Quote, ExternalLink } from 'lucide-react';

interface ExpertQuoteProps {
  quote: string;
  expertName: string;
  expertTitle: string;
  expertCompany: string;
  source?: string;
  className?: string;
}

/**
 * ExpertQuote - Display expert citations in blog content
 * 
 * Use this component to add credibility through third-party validation:
 * - Tax professionals for compliance articles
 * - Accountants for finance content
 * - Business advisors for entrepreneurship content
 */
export function ExpertQuote({
  quote,
  expertName,
  expertTitle,
  expertCompany,
  source,
  className,
}: ExpertQuoteProps) {
  return (
    <blockquote
      className={cn(
        'relative my-8 px-6 py-6 bg-muted/50 border-l-4 border-primary rounded-r-lg',
        'not-prose', // Escape prose styling
        className
      )}
    >
      {/* Quote icon */}
      <Quote className="absolute top-4 right-4 h-8 w-8 text-primary/20" />
      
      {/* Quote text */}
      <p className="relative text-lg italic text-foreground leading-relaxed mb-4 pr-10">
        "{quote}"
      </p>
      
      {/* Expert attribution */}
      <footer className="flex items-center gap-3 text-sm">
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
          <span className="text-primary font-semibold text-sm">
            {expertName.split(' ').map(n => n[0]).join('')}
          </span>
        </div>
        <div className="flex-1">
          <cite className="not-italic font-medium text-foreground">
            {expertName}
          </cite>
          <p className="text-muted-foreground">
            {expertTitle}, {expertCompany}
          </p>
        </div>
        
        {source && (
          <a
            href={source}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors"
          >
            Source
            <ExternalLink className="h-3 w-3" />
          </a>
        )}
      </footer>
    </blockquote>
  );
}

/**
 * StatisticCallout - Display statistics with source attribution
 */
interface StatisticCalloutProps {
  statistic: string;
  context: string;
  source: string;
  sourceUrl?: string;
  className?: string;
}

export function StatisticCallout({
  statistic,
  context,
  source,
  sourceUrl,
  className,
}: StatisticCalloutProps) {
  return (
    <div
      className={cn(
        'my-8 p-6 bg-primary/5 border border-primary/20 rounded-lg text-center',
        'not-prose',
        className
      )}
    >
      <p className="text-4xl font-bold text-primary mb-2">{statistic}</p>
      <p className="text-muted-foreground mb-3">{context}</p>
      {sourceUrl ? (
        <a
          href={sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors"
        >
          Source: {source}
          <ExternalLink className="h-3 w-3" />
        </a>
      ) : (
        <p className="text-xs text-muted-foreground">Source: {source}</p>
      )}
    </div>
  );
}

/**
 * TipBox - Expert tip callout
 */
interface TipBoxProps {
  title?: string;
  children: React.ReactNode;
  expertName?: string;
  className?: string;
}

export function TipBox({
  title = "Pro Tip",
  children,
  expertName,
  className,
}: TipBoxProps) {
  return (
    <div
      className={cn(
        'my-6 p-5 bg-muted border border-border rounded-lg',
        'not-prose',
        className
      )}
    >
      <p className="font-semibold text-foreground mb-2 flex items-center gap-2">
        💡 {title}
        {expertName && (
          <span className="text-xs font-normal text-muted-foreground">
            from {expertName}
          </span>
        )}
      </p>
      <div className="text-muted-foreground text-sm">
        {children}
      </div>
    </div>
  );
}

export default ExpertQuote;
