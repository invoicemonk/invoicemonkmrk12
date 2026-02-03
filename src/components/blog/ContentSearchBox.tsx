import { useState, useMemo, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  searchByQueryPattern, 
  getPostIntent,
  intentConfig 
} from '@/data/contentIntents';
import { blogPosts } from '@/data/blogPosts';
import { Search, FileText, ArrowRight } from 'lucide-react';

interface ContentSearchBoxProps {
  placeholder?: string;
  className?: string;
  onSearch?: (query: string) => void;
}

export function ContentSearchBox({ 
  placeholder = 'What do you need help with?',
  className = '',
  onSearch
}: ContentSearchBoxProps) {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Search results based on intent metadata
  const searchResults = useMemo(() => {
    if (query.length < 2) return [];
    
    // First try query pattern matching
    const intentMatches = searchByQueryPattern(query);
    
    // Also do basic title/excerpt search
    const lowerQuery = query.toLowerCase();
    const titleMatches = blogPosts
      .filter(post => 
        post.title.toLowerCase().includes(lowerQuery) ||
        post.excerpt.toLowerCase().includes(lowerQuery)
      )
      .map(p => p.slug);
    
    // Combine and dedupe, prioritizing intent matches
    const allMatches = [...new Set([...intentMatches, ...titleMatches])];
    return allMatches.slice(0, 6);
  }, [query]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    setIsOpen(value.length >= 2);
    onSearch?.(value);
  };

  const handleResultClick = () => {
    setIsOpen(false);
    setQuery('');
  };

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input
          type="search"
          placeholder={placeholder}
          value={query}
          onChange={handleInputChange}
          onFocus={() => query.length >= 2 && setIsOpen(true)}
          className="pl-10 h-12"
        />
      </div>

      {/* Search Results Dropdown */}
      {isOpen && searchResults.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-popover border border-border rounded-lg shadow-lg z-50 overflow-hidden">
          <div className="p-2">
            <p className="text-xs text-muted-foreground px-2 py-1">
              Matching articles
            </p>
            <div className="space-y-1">
              {searchResults.map(slug => {
                const post = blogPosts.find(p => p.slug === slug);
                if (!post) return null;
                
                const intent = getPostIntent(slug);
                
                return (
                  <Link
                    key={slug}
                    to={`/blog/${slug}`}
                    onClick={handleResultClick}
                    className="flex items-start gap-3 p-2 rounded-md hover:bg-muted transition-colors"
                  >
                    <FileText className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-foreground line-clamp-1">
                        {post.title}
                      </p>
                      <div className="flex items-center gap-2 mt-1">
                        {intent && (
                          <Badge 
                            variant="secondary" 
                            className={`text-xs ${intentConfig[intent.intent].color}`}
                          >
                            {intentConfig[intent.intent].label}
                          </Badge>
                        )}
                        <span className="text-xs text-muted-foreground">
                          {post.readTime}
                        </span>
                      </div>
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground shrink-0" />
                  </Link>
                );
              })}
            </div>
          </div>
          
          <div className="border-t border-border p-2">
            <Link
              to={`/blog?q=${encodeURIComponent(query)}`}
              onClick={handleResultClick}
              className="flex items-center justify-center gap-2 p-2 text-sm text-primary hover:bg-muted rounded-md transition-colors"
            >
              View all results for "{query}"
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      )}

      {/* No Results */}
      {isOpen && query.length >= 2 && searchResults.length === 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-popover border border-border rounded-lg shadow-lg z-50 p-4 text-center">
          <p className="text-muted-foreground">No articles found for "{query}"</p>
          <Link
            to="/blog"
            className="text-sm text-primary hover:underline mt-2 inline-block"
          >
            Browse all articles
          </Link>
        </div>
      )}
    </div>
  );
}
