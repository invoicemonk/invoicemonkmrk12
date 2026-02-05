/**
 * Link enhancement utility for blog content
 * Post-processes HTML to add proper attributes to links
 */

// Internal domain patterns
const INTERNAL_DOMAINS = [
  'invoicemonk.com',
  'www.invoicemonk.com',
  'localhost',
];

// Check if a URL is internal
function isInternalLink(href: string): boolean {
  if (!href) return false;
  
  // Relative links are internal
  if (href.startsWith('/') || href.startsWith('#')) {
    return true;
  }
  
  try {
    const url = new URL(href);
    return INTERNAL_DOMAINS.some(domain => url.hostname.includes(domain));
  } catch {
    // If URL parsing fails, treat as internal (likely relative)
    return true;
  }
}

// Determine link type based on URL path
function getLinkType(href: string): 'product' | 'article' | 'guide' | 'external' {
  if (!href || isExternalLink(href)) return 'external';
  
  const path = href.startsWith('http') ? new URL(href).pathname : href;
  
  // Product pages
  if (['/invoicing', '/payments', '/expenses', '/accounting', '/estimates', '/receipts'].some(p => path.startsWith(p))) {
    return 'product';
  }
  
  // Guide pages
  if (path.includes('/guides/') || path.includes('complete-guide') || path.includes('ultimate-guide')) {
    return 'guide';
  }
  
  // Blog articles
  if (path.startsWith('/blog/')) {
    return 'article';
  }
  
  return 'article';
}

function isExternalLink(href: string): boolean {
  return !isInternalLink(href);
}

/**
 * Enhance internal and external links in HTML content
 * - Adds rel="noopener noreferrer" and target="_blank" to external links
 * - Adds semantic classes to internal links based on link type
 * - Preserves existing attributes
 */
export function enhanceInternalLinks(html: string): string {
  if (!html) return html;
  
  // Regular expression to match anchor tags
  const anchorRegex = /<a\s+([^>]*?)href=["']([^"']+)["']([^>]*)>(.*?)<\/a>/gi;
  
  return html.replace(anchorRegex, (match, beforeHref, href, afterHref, content) => {
    const isExternal = isExternalLink(href);
    const linkType = getLinkType(href);
    
    // Parse existing attributes
    const existingAttrs = `${beforeHref} ${afterHref}`.trim();
    
    // Check if rel and target already exist
    const hasRel = /rel\s*=/i.test(existingAttrs);
    const hasTarget = /target\s*=/i.test(existingAttrs);
    const hasClass = /class\s*=/i.test(existingAttrs);
    
    let newAttrs = existingAttrs;
    
    if (isExternal) {
      // Add rel="noopener noreferrer" for external links
      if (!hasRel) {
        newAttrs += ' rel="noopener noreferrer"';
      }
      // Add target="_blank" for external links
      if (!hasTarget) {
        newAttrs += ' target="_blank"';
      }
      // Add external link class
      if (!hasClass) {
        newAttrs += ' class="external-link"';
      }
    } else {
      // Add semantic classes for internal links based on type
      const typeClass = `internal-link internal-link--${linkType}`;
      if (!hasClass) {
        newAttrs += ` class="${typeClass}"`;
      }
    }
    
    return `<a href="${href}" ${newAttrs.trim()}>${content}</a>`;
  });
}

/**
 * Extract all links from HTML content for analysis
 */
export function extractLinks(html: string): Array<{
  href: string;
  text: string;
  isExternal: boolean;
  type: 'product' | 'article' | 'guide' | 'external';
}> {
  if (!html) return [];
  
  const links: Array<{
    href: string;
    text: string;
    isExternal: boolean;
    type: 'product' | 'article' | 'guide' | 'external';
  }> = [];
  
  const anchorRegex = /<a\s+[^>]*href=["']([^"']+)["'][^>]*>(.*?)<\/a>/gi;
  
  let match;
  while ((match = anchorRegex.exec(html)) !== null) {
    const href = match[1];
    const text = match[2].replace(/<[^>]*>/g, '').trim(); // Strip nested HTML
    
    links.push({
      href,
      text,
      isExternal: isExternalLink(href),
      type: getLinkType(href),
    });
  }
  
  return links;
}

/**
 * Add link classes to CSS (to be included in index.css or a component)
 * This provides the styling for enhanced links
 */
export const linkStyles = `
  .internal-link {
    color: hsl(var(--primary));
    text-decoration: underline;
    text-decoration-color: hsl(var(--primary) / 0.3);
    transition: text-decoration-color 0.2s;
  }
  
  .internal-link:hover {
    text-decoration-color: hsl(var(--primary));
  }
  
  .internal-link--product {
    font-weight: 500;
  }
  
  .internal-link--guide {
    text-underline-offset: 2px;
  }
  
  .internal-link--article {
    /* Default article styling */
  }
  
  .external-link {
    color: hsl(var(--muted-foreground));
    text-decoration: none;
  }
  
  .external-link:hover {
    color: hsl(var(--foreground));
    text-decoration: underline;
  }
  
  .external-link::after {
    content: " ↗";
    font-size: 0.75em;
    opacity: 0.7;
  }
`;

export default enhanceInternalLinks;
