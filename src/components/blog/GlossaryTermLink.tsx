import { Link } from 'react-router-dom';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { getTermBySlug } from '@/data/glossaryTerms';

interface GlossaryTermLinkProps {
  termSlug: string;
  children: React.ReactNode;
  showTooltip?: boolean;
  className?: string;
}

/**
 * Inline link to a glossary term with optional tooltip showing the definition.
 * Use in blog content to link technical terms to the glossary.
 */
export function GlossaryTermLink({ 
  termSlug, 
  children, 
  showTooltip = true,
  className = '' 
}: GlossaryTermLinkProps) {
  const term = getTermBySlug(termSlug);
  
  if (!term) {
    // Fallback: render children without link if term not found
    return <span className={className}>{children}</span>;
  }

  const link = (
    <Link
      to={`/glossary?term=${termSlug}`}
      className={`text-primary underline decoration-dotted underline-offset-2 hover:decoration-solid ${className}`}
    >
      {children}
    </Link>
  );

  if (!showTooltip) {
    return link;
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        {link}
      </TooltipTrigger>
      <TooltipContent 
        side="top" 
        className="max-w-xs"
        sideOffset={5}
      >
        <p className="font-medium mb-1">{term.term}</p>
        <p className="text-xs text-muted-foreground">{term.definition}</p>
      </TooltipContent>
    </Tooltip>
  );
}

/**
 * Utility function to wrap glossary terms in content with links.
 * Can be used to auto-link terms in blog post content.
 */
export function linkGlossaryTermsInText(
  content: string,
  termsToLink: string[]
): string {
  let result = content;
  
  termsToLink.forEach(termSlug => {
    const term = getTermBySlug(termSlug);
    if (term) {
      // Create a regex that matches the term (case insensitive, whole word)
      const regex = new RegExp(`\\b(${term.term})\\b`, 'gi');
      // Only replace first occurrence to avoid over-linking
      result = result.replace(regex, (match) => {
        return `<a href="/glossary?term=${termSlug}" class="glossary-term-link">${match}</a>`;
      });
    }
  });
  
  return result;
}
