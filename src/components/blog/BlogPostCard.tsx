import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Calendar, Clock } from 'lucide-react';
import type { BlogPost } from '@/data/blogPosts';

interface BlogPostCardProps {
  post: BlogPost;
  featured?: boolean;
}

export function BlogPostCard({ post, featured = false }: BlogPostCardProps) {
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const initials = post.author.name.split(' ').map(n => n[0]).join('');

  if (featured) {
    return (
      <Card className="border-border/50 overflow-hidden hover:shadow-lg transition-shadow">
        <Link to={`/blog/${post.slug}`}>
          <div className="grid md:grid-cols-2 gap-0">
            {/* Featured Image */}
            <div className="aspect-[1200/630] md:aspect-auto overflow-hidden">
              <img
                src={post.featuredImage}
                alt={post.featuredImageAlt}
                width={1200}
                height={630}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <CardContent className="p-8 flex flex-col justify-center">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <Badge variant="secondary">
                  {post.category}
                </Badge>
              </div>
              <h2 className="text-heading-md font-bold text-foreground mb-3 hover:text-primary transition-colors">
                {post.title}
              </h2>
              <p className="text-muted-foreground mb-6 line-clamp-3">
                {post.excerpt}
              </p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <Link 
                  to={`/blog/author/${post.author.slug}`}
                  className="flex items-center gap-2 hover:text-primary transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={post.author.avatar} alt={post.author.name} />
                    <AvatarFallback className="text-xs">{initials}</AvatarFallback>
                  </Avatar>
                  <span>{post.author.name}</span>
                </Link>
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <time dateTime={post.date}>{formattedDate}</time>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </CardContent>
          </div>
        </Link>
      </Card>
    );
  }

  return (
    <Card className="border-border/50 overflow-hidden hover:shadow-lg transition-shadow h-full group">
      <Link to={`/blog/${post.slug}`} className="block h-full">
        {/* Featured Image */}
        <div className="aspect-[1200/630] overflow-hidden">
          <img
            src={post.featuredImage}
            alt={post.featuredImageAlt}
            width={1200}
            height={630}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <CardContent className="p-6 flex flex-col">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <Badge variant="secondary" className="text-xs">
              {post.category}
            </Badge>
          </div>
          <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
            {post.title}
          </h3>
          <p className="text-sm text-muted-foreground mb-4 line-clamp-3 flex-grow">
            {post.excerpt}
          </p>
          <div className="flex items-center gap-3 text-xs text-muted-foreground mt-auto">
            <div className="flex items-center gap-1.5">
              <Avatar className="h-6 w-6">
                <AvatarImage src={post.author.avatar} alt={post.author.name} />
                <AvatarFallback className="text-[10px]">{initials}</AvatarFallback>
              </Avatar>
              <span>{post.author.name}</span>
            </div>
            <span>•</span>
            <time dateTime={post.date}>{formattedDate}</time>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
}
