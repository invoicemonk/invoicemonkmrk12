import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { ArrowRight, ExternalLink, FileText, ShoppingCart, BookOpen } from 'lucide-react';

type LinkType = 'product' | 'article' | 'guide' | 'external';

interface ContextualLinkProps {
  to: string;
  children: React.ReactNode;
  type?: LinkType;
  className?: string;
  showIcon?: boolean;
}

const iconMap: Record<LinkType, React.ElementType> = {
  product: ShoppingCart,
  article: FileText,
  guide: BookOpen,
  external: ExternalLink,
};

/**
 * ContextualLink - Strategic internal linking component for semantic SEO
 * 
 * Use this component for in-content links to:
 * - Product pages (type="product")
 * - Blog articles (type="article")
 * - Guide/pillar pages (type="guide")
 * - External resources (type="external")
 */
export function ContextualLink({ 
  to, 
  children, 
  type = 'article',
  className,
  showIcon = false
}: ContextualLinkProps) {
  const isExternal = type === 'external' || to.startsWith('http');
  const Icon = iconMap[type];
  
  const linkClasses = cn(
    'inline-flex items-center gap-1 font-medium transition-colors',
    type === 'product' && 'text-primary hover:text-primary/80 underline decoration-primary/30 hover:decoration-primary',
    type === 'article' && 'text-primary hover:text-primary/80 underline decoration-primary/30 hover:decoration-primary',
    type === 'guide' && 'text-primary hover:text-primary/80 underline underline-offset-2',
    type === 'external' && 'text-muted-foreground hover:text-foreground',
    className
  );

  if (isExternal) {
    return (
      <a 
        href={to}
        className={linkClasses}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
        {showIcon && <ExternalLink className="h-3 w-3 flex-shrink-0" />}
      </a>
    );
  }

  return (
    <Link to={to} className={linkClasses}>
      {showIcon && <Icon className="h-3 w-3 flex-shrink-0" />}
      {children}
      {type === 'product' && <ArrowRight className="h-3 w-3 flex-shrink-0" />}
    </Link>
  );
}

/**
 * ProductCTA - Inline call-to-action for product pages
 */
interface ProductCTAProps {
  product: string;
  productName: string;
  className?: string;
}

export function ProductCTA({ product, productName, className }: ProductCTAProps) {
  return (
    <span className={cn('inline-flex items-center gap-1', className)}>
      Try{' '}
      <Link 
        to={product}
        className="font-medium text-primary hover:text-primary/80 underline decoration-primary/30 hover:decoration-primary"
      >
        {productName}
      </Link>
      {' '}free →
    </span>
  );
}

/**
 * RelatedGuideLink - Link to a pillar/guide page with badge styling
 */
interface RelatedGuideLinkProps {
  to: string;
  title: string;
  description?: string;
  color?: string;
}

export function RelatedGuideLink({ to, title, description, color }: RelatedGuideLinkProps) {
  return (
    <Link 
      to={to}
      className="group flex items-start gap-3 p-4 rounded-lg border border-border/50 hover:border-primary/30 hover:bg-primary/5 transition-all"
    >
      <div 
        className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
        style={{ backgroundColor: color ? `${color}15` : 'hsl(var(--primary) / 0.1)' }}
      >
        <BookOpen 
          className="w-5 h-5" 
          style={{ color: color || 'hsl(var(--primary))' }}
        />
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="font-medium text-foreground group-hover:text-primary transition-colors">
          {title}
        </h4>
        {description && (
          <p className="text-sm text-muted-foreground mt-0.5 line-clamp-2">
            {description}
          </p>
        )}
      </div>
      <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0 mt-1" />
    </Link>
  );
}

/**
 * CountryComplianceLink - Link to country-specific compliance content
 */
interface CountryComplianceLinkProps {
  country: 'NG' | 'UK' | 'US' | 'CA' | 'AU';
  className?: string;
}

const countryConfig = {
  NG: { name: 'Nigeria', authority: 'FIRS', slug: 'firs-invoice-requirements-nigeria', flag: '🇳🇬' },
  UK: { name: 'United Kingdom', authority: 'HMRC', slug: 'hmrc-invoicing-rules-uk-mtd-compliance', flag: '🇬🇧' },
  US: { name: 'United States', authority: 'IRS', slug: 'irs-invoice-requirements-us-compliance', flag: '🇺🇸' },
  CA: { name: 'Canada', authority: 'CRA', slug: 'cra-invoice-standards-canadian-compliance', flag: '🇨🇦' },
  AU: { name: 'Australia', authority: 'ATO', slug: 'ato-invoice-requirements-australian-compliance', flag: '🇦🇺' },
};

export function CountryComplianceLink({ country, className }: CountryComplianceLinkProps) {
  const config = countryConfig[country];
  
  return (
    <Link 
      to={`/blog/${config.slug}`}
      className={cn(
        'inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium',
        'bg-muted hover:bg-muted/80 text-foreground transition-colors',
        className
      )}
    >
      <span>{config.flag}</span>
      <span>{config.authority} Guide</span>
    </Link>
  );
}

export default ContextualLink;
