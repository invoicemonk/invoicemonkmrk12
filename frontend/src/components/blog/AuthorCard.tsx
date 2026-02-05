import { Link } from 'react-router-dom';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Author } from '@/data/authors';
import { Linkedin, Twitter, Instagram, Facebook, Youtube } from 'lucide-react';

interface AuthorCardProps {
  author: Author;
  variant?: 'compact' | 'full';
  showCredentials?: boolean;
}

export function AuthorCard({ author, variant = 'compact', showCredentials = true }: AuthorCardProps) {
  const initials = author.name.split(' ').map(n => n[0]).join('');

  if (variant === 'compact') {
    return (
      <Link 
        to={`/blog/author/${author.slug}`}
        className="flex items-center gap-3 group"
      >
        <Avatar className="h-10 w-10">
          <AvatarImage src={author.avatar} alt={author.name} />
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>
        <div>
          <p className="text-body-sm font-medium text-foreground group-hover:text-primary transition-colors">
            {author.name}
          </p>
          <p className="text-caption text-muted-foreground">
            {author.role.split(',')[0]}
          </p>
        </div>
      </Link>
    );
  }

  return (
    <div className="bg-card rounded-xl border border-border p-6">
      <div className="flex items-start gap-4">
        <Link to={`/blog/author/${author.slug}`}>
          <Avatar className="h-16 w-16">
            <AvatarImage src={author.avatar} alt={author.name} />
            <AvatarFallback className="text-lg">{initials}</AvatarFallback>
          </Avatar>
        </Link>
        <div className="flex-1">
          <Link 
            to={`/blog/author/${author.slug}`}
            className="text-heading-sm font-bold text-foreground hover:text-primary transition-colors"
          >
            {author.name}
          </Link>
          <p className="text-body-sm text-muted-foreground mb-2">
            {author.role}
          </p>
          
          {showCredentials && author.credentials.length > 0 && (
            <div className="flex flex-wrap gap-1 mb-3">
              {author.credentials.map((credential) => (
                <Badge key={credential} variant="secondary" className="text-xs">
                  {credential}
                </Badge>
              ))}
            </div>
          )}
          
          <p className="text-body-sm text-muted-foreground mb-4">
            {author.bio}
          </p>
          
          {/* Social Links */}
          <div className="flex items-center gap-3">
            {author.socialLinks.linkedin && (
              <a 
                href={author.socialLinks.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            )}
            {author.socialLinks.twitter && (
              <a 
                href={author.socialLinks.twitter} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4" />
              </a>
            )}
            {author.socialLinks.instagram && (
              <a 
                href={author.socialLinks.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
            )}
            {author.socialLinks.facebook && (
              <a 
                href={author.socialLinks.facebook} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
            )}
            {author.socialLinks.youtube && (
              <a 
                href={author.socialLinks.youtube} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
