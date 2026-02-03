import { useParams, Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { SEOHead } from '@/components/seo/SEOHead';
import { PersonSchema } from '@/components/seo/PersonSchema';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Linkedin, Twitter, Instagram, Facebook, Youtube } from 'lucide-react';
import { getAuthorBySlug } from '@/data/authors';
import { blogPosts } from '@/data/blogPosts';
import { BlogPostCard } from '@/components/blog/BlogPostCard';
import NotFound from './NotFound';

const AuthorPage = () => {
  const { authorSlug } = useParams<{ authorSlug: string }>();
  const author = authorSlug ? getAuthorBySlug(authorSlug) : undefined;

  if (!author) {
    return <NotFound />;
  }

  const authorPosts = blogPosts.filter(post => post.author.id === author.id);
  const initials = author.name.split(' ').map(n => n[0]).join('');

  return (
    <Layout>
      <SEOHead
        title={`${author.name} - Author at Invoicemonk`}
        description={author.bio}
        canonical={`https://invoicemonk.com/blog/author/${author.slug}`}
        ogImage={`https://invoicemonk.com${author.avatar}`}
        ogType="profile"
      />
      <PersonSchema author={author} isMainEntity />

      <div className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <div className="max-w-4xl mx-auto mb-8">
            <Button variant="ghost" asChild className="gap-2">
              <Link to="/blog">
                <ArrowLeft className="h-4 w-4" />
                Back to Blog
              </Link>
            </Button>
          </div>

          {/* Author Header */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-card rounded-2xl border border-border p-8 lg:p-12">
              <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
                <Avatar className="h-32 w-32 lg:h-40 lg:w-40">
                  <AvatarImage src={author.avatar} alt={author.name} />
                  <AvatarFallback className="text-3xl">{initials}</AvatarFallback>
                </Avatar>
                
                <div className="flex-1 text-center lg:text-left">
                  <h1 className="text-display-sm font-bold text-foreground mb-2">
                    {author.name}
                  </h1>
                  <p className="text-body-lg text-muted-foreground mb-4">
                    {author.role}
                  </p>
                  
                  {/* Credentials */}
                  <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-6">
                    {author.credentials.map((credential) => (
                      <Badge key={credential} variant="secondary">
                        {credential}
                      </Badge>
                    ))}
                  </div>
                  
                  {/* Bio */}
                  <p className="text-body text-muted-foreground mb-6 max-w-2xl">
                    {author.bio}
                  </p>
                  
                  {/* Expertise */}
                  <div className="mb-6">
                    <p className="text-body-sm font-medium text-foreground mb-2">Expertise:</p>
                    <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                      {author.expertise.map((skill) => (
                        <Badge key={skill} variant="outline">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  {/* Social Links */}
                  <div className="flex items-center justify-center lg:justify-start gap-4">
                    {author.socialLinks.linkedin && (
                      <a 
                        href={author.socialLinks.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Linkedin className="h-5 w-5" />
                        <span className="text-body-sm">LinkedIn</span>
                      </a>
                    )}
                    {author.socialLinks.twitter && (
                      <a 
                        href={author.socialLinks.twitter} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Twitter className="h-5 w-5" />
                      </a>
                    )}
                    {author.socialLinks.instagram && (
                      <a 
                        href={author.socialLinks.instagram} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Instagram className="h-5 w-5" />
                      </a>
                    )}
                    {author.socialLinks.facebook && (
                      <a 
                        href={author.socialLinks.facebook} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Facebook className="h-5 w-5" />
                      </a>
                    )}
                    {author.socialLinks.youtube && (
                      <a 
                        href={author.socialLinks.youtube} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Youtube className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Author's Articles */}
          <div className="max-w-5xl mx-auto">
            <h2 className="text-heading-md font-bold text-foreground mb-8">
              Articles by {author.name.split(' ')[0]} ({authorPosts.length})
            </h2>
            
            {authorPosts.length > 0 ? (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {authorPosts.map((post) => (
                  <BlogPostCard key={post.slug} post={post} />
                ))}
              </div>
            ) : (
              <p className="text-muted-foreground text-center py-12">
                No articles published yet.
              </p>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AuthorPage;
