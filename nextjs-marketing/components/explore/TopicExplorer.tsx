import { useState, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FileText, 
  Wallet, 
  Calculator, 
  Shield, 
  User, 
  ClipboardList,
  ArrowRight,
  Check,
  BookOpen,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';
import { pillars } from '@/data/topicalMap';
import { blogPosts } from '@/data/blogPosts';
import { getReadingProgress } from '@/hooks/useContentAnalytics';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  FileText,
  Wallet,
  Calculator,
  Shield,
  User,
  ClipboardList
};

interface ReadingPath {
  id: string;
  title: string;
  description: string;
  pillarId: string;
  slugs: string[];
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  estimatedTime: string;
}

// Curated reading paths
const readingPaths: ReadingPath[] = [
  {
    id: 'invoicing-fundamentals',
    title: 'Invoicing Fundamentals',
    description: 'Master the basics of professional invoicing from scratch',
    pillarId: 'invoicing-mastery',
    slugs: [
      '5-essential-elements-of-an-invoice-a-guide-for-small-business-owners',
      'invoice-numbering-best-practices',
      'how-to-write-invoice-payment-terms',
      'invoicemonk-template-how-to-create-a-perfect-invoice-template'
    ],
    difficulty: 'beginner',
    estimatedTime: '45 min'
  },
  {
    id: 'get-paid-faster',
    title: 'Get Paid Faster',
    description: 'Proven strategies to accelerate your payment collection',
    pillarId: 'getting-paid',
    slugs: [
      'how-to-handle-late-payments-professionally',
      'setting-up-automatic-payment-reminders',
      'early-payment-discounts-do-they-work',
      'cash-flow-forecasting-for-freelancers'
    ],
    difficulty: 'intermediate',
    estimatedTime: '35 min'
  },
  {
    id: 'freelancer-starter',
    title: 'Freelancer Starter Kit',
    description: 'Everything you need to launch your freelance business',
    pillarId: 'freelancer-success',
    slugs: [
      'top-10-freelance-websites',
      'pricing-your-freelance-services',
      'freelance-contract-templates',
      'managing-multiple-clients-efficiently'
    ],
    difficulty: 'beginner',
    estimatedTime: '50 min'
  },
  {
    id: 'tax-compliance-essentials',
    title: 'Tax Compliance Essentials',
    description: 'Stay audit-ready and understand tax requirements',
    pillarId: 'tax-compliance',
    slugs: [
      'business-record-keeping-requirements',
      'small-business-tax-deductions-guide',
      'how-to-prepare-business-tax-audit'
    ],
    difficulty: 'intermediate',
    estimatedTime: '40 min'
  },
  {
    id: 'proposal-mastery',
    title: 'Proposal Mastery',
    description: 'Win more clients with compelling proposals',
    pillarId: 'estimates-proposals',
    slugs: [
      'how-to-write-winning-business-proposal',
      'estimate-vs-quote-vs-invoice-difference',
      'how-to-price-project-work',
      'following-up-on-proposals'
    ],
    difficulty: 'advanced',
    estimatedTime: '55 min'
  }
];

export function TopicExplorer() {
  const [selectedPillar, setSelectedPillar] = useState<string | null>(null);
  const [view, setView] = useState<'map' | 'paths'>('map');
  const navigate = useNavigate();
  const readingProgress = getReadingProgress();

  // Get posts for selected pillar
  const clusterPosts = useMemo(() => {
    if (!selectedPillar) return [];
    return blogPosts.filter(post => {
      const pillar = pillars.find(p => p.id === selectedPillar);
      if (!pillar) return false;
      return post.category === pillar.title || 
             post.tags.some(tag => pillar.title.toLowerCase().includes(tag.toLowerCase()));
    }).slice(0, 12);
  }, [selectedPillar]);

  // Calculate progress for a path
  const getPathProgress = (path: ReadingPath): number => {
    const completedCount = path.slugs.filter(slug => (readingProgress[slug] || 0) >= 75).length;
    return Math.round((completedCount / path.slugs.length) * 100);
  };

  // Get pillar progress
  const getPillarProgress = (pillarId: string): number => {
    const pillarPosts = blogPosts.filter(post => {
      const pillar = pillars.find(p => p.id === pillarId);
      if (!pillar) return false;
      return post.category === pillar.title;
    });
    if (pillarPosts.length === 0) return 0;
    const completedCount = pillarPosts.filter(p => (readingProgress[p.slug] || 0) >= 75).length;
    return Math.round((completedCount / pillarPosts.length) * 100);
  };

  return (
    <div className="space-y-8">
      {/* View Toggle */}
      <div className="flex items-center justify-center gap-2 p-1 bg-muted rounded-lg w-fit mx-auto">
        <Button
          variant={view === 'map' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => setView('map')}
        >
          <BookOpen className="h-4 w-4 mr-2" />
          Topic Map
        </Button>
        <Button
          variant={view === 'paths' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => setView('paths')}
        >
          <Sparkles className="h-4 w-4 mr-2" />
          Learning Paths
        </Button>
      </div>

      <AnimatePresence mode="wait">
        {view === 'map' ? (
          <motion.div
            key="map"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Pillar Map */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pillars.map((pillar) => {
                const IconComponent = iconMap[pillar.icon];
                const progress = getPillarProgress(pillar.id);
                const isSelected = selectedPillar === pillar.id;

                return (
                  <motion.div
                    key={pillar.id}
                    layout
                    className={cn(
                      "cursor-pointer transition-all duration-300",
                      isSelected && "md:col-span-2 lg:col-span-3"
                    )}
                  >
                    <Card 
                      className={cn(
                        "h-full border-2 transition-all duration-300 hover:shadow-lg",
                        isSelected 
                          ? "border-primary shadow-lg" 
                          : "border-border/50 hover:border-primary/30"
                      )}
                      onClick={() => setSelectedPillar(isSelected ? null : pillar.id)}
                    >
                      <CardHeader className="pb-3">
                        <div className="flex items-start justify-between">
                          <div 
                            className="w-12 h-12 rounded-xl flex items-center justify-center"
                            style={{ backgroundColor: `${pillar.color}15` }}
                          >
                            {IconComponent && (
                              <IconComponent 
                                className="w-6 h-6 text-primary"
                              />
                            )}
                          </div>
                          {progress > 0 && (
                            <Badge variant="secondary" className="text-xs">
                              {progress}% complete
                            </Badge>
                          )}
                        </div>
                        <CardTitle className="text-lg mt-3">{pillar.title}</CardTitle>
                        <p className="text-sm text-muted-foreground">
                          {pillar.description}
                        </p>
                        {progress > 0 && (
                          <Progress value={progress} className="h-1.5 mt-2" />
                        )}
                      </CardHeader>
                      
                      {/* Expanded view showing cluster posts */}
                      <AnimatePresence>
                        {isSelected && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <CardContent className="pt-0">
                              <div className="border-t pt-4 mt-2">
                                <div className="flex items-center justify-between mb-4">
                                  <h4 className="font-medium">Articles in this topic</h4>
                                  <Button 
                                    variant="ghost" 
                                    size="sm"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      navigate(pillar.hubPage);
                                    }}
                                  >
                                    View complete guide
                                    <ChevronRight className="h-4 w-4 ml-1" />
                                  </Button>
                                </div>
                                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                                  {clusterPosts.map((post) => {
                                    const postProgress = readingProgress[post.slug] || 0;
                                    const isComplete = postProgress >= 75;
                                    
                                    return (
                                      <Link
                                        key={post.slug}
                                        to={`/blog/${post.slug}`}
                                        onClick={(e) => e.stopPropagation()}
                                        className="group"
                                      >
                                        <div className={cn(
                                          "p-3 rounded-lg border transition-all",
                                          "hover:border-primary/50 hover:bg-primary/5",
                                          isComplete && "bg-wave-green/5 border-wave-green/30"
                                        )}>
                                          <div className="flex items-start gap-2">
                                            {isComplete ? (
                                              <Check className="h-4 w-4 text-wave-green flex-shrink-0 mt-0.5" />
                                            ) : (
                                              <div 
                                                className="w-4 h-4 rounded-full border-2 flex-shrink-0 mt-0.5"
                                                style={{ borderColor: pillar.color }}
                                              />
                                            )}
                                            <div className="flex-1 min-w-0">
                                              <p className="text-sm font-medium line-clamp-2 group-hover:text-primary transition-colors">
                                                {post.title}
                                              </p>
                                              <p className="text-xs text-muted-foreground mt-1">
                                                {post.readTime}
                                              </p>
                                            </div>
                                          </div>
                                          {postProgress > 0 && postProgress < 75 && (
                                            <Progress 
                                              value={postProgress} 
                                              className="h-1 mt-2"
                                            />
                                          )}
                                        </div>
                                      </Link>
                                    );
                                  })}
                                </div>
                              </div>
                            </CardContent>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="paths"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Learning Paths */}
            <div className="grid md:grid-cols-2 gap-6">
              {readingPaths.map((path) => {
                const pillar = pillars.find(p => p.id === path.pillarId);
                const progress = getPathProgress(path);
                const IconComponent = pillar ? iconMap[pillar.icon] : FileText;

                return (
                  <Card 
                    key={path.id}
                    className="border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div 
                          className="w-10 h-10 rounded-lg flex items-center justify-center"
                          style={{ backgroundColor: pillar ? `${pillar.color}15` : undefined }}
                        >
                          {IconComponent && (
                            <IconComponent 
                              className="w-5 h-5 text-primary"
                            />
                          )}
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge 
                            variant="secondary" 
                            className={cn(
                              "text-xs",
                              path.difficulty === 'beginner' && "bg-wave-green/10 text-wave-green",
                              path.difficulty === 'intermediate' && "bg-wave-blue/10 text-wave-blue",
                              path.difficulty === 'advanced' && "bg-purple-500/10 text-purple-500"
                            )}
                          >
                            {path.difficulty}
                          </Badge>
                          <span className="text-xs text-muted-foreground">
                            {path.estimatedTime}
                          </span>
                        </div>
                      </div>
                      <CardTitle className="text-lg mt-3">{path.title}</CardTitle>
                      <p className="text-sm text-muted-foreground">
                        {path.description}
                      </p>
                    </CardHeader>
                    <CardContent>
                      {/* Progress */}
                      {progress > 0 && (
                        <div className="mb-4">
                          <div className="flex items-center justify-between text-sm mb-1">
                            <span className="text-muted-foreground">Progress</span>
                            <span className="font-medium">{progress}%</span>
                          </div>
                          <Progress value={progress} className="h-2" />
                        </div>
                      )}

                      {/* Articles in path */}
                      <div className="space-y-2">
                        {path.slugs.map((slug, index) => {
                          const post = blogPosts.find(p => p.slug === slug);
                          const postProgress = readingProgress[slug] || 0;
                          const isComplete = postProgress >= 75;
                          
                          if (!post) return null;
                          
                          return (
                            <Link
                              key={slug}
                              to={`/blog/${slug}`}
                              className="group flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors"
                            >
                              <div className={cn(
                                "w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium",
                                isComplete 
                                  ? "bg-wave-green text-white" 
                                  : "bg-muted text-muted-foreground"
                              )}>
                                {isComplete ? <Check className="w-3.5 h-3.5" /> : index + 1}
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium truncate group-hover:text-primary transition-colors">
                                  {post.title}
                                </p>
                              </div>
                              <ArrowRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                            </Link>
                          );
                        })}
                      </div>

                      {/* Start/Continue button */}
                      <Button 
                        className="w-full mt-4"
                        variant={progress > 0 ? "default" : "outline"}
                        onClick={() => {
                          const nextSlug = path.slugs.find(slug => (readingProgress[slug] || 0) < 75) || path.slugs[0];
                          navigate(`/blog/${nextSlug}`);
                        }}
                      >
                        {progress === 0 ? 'Start Learning' : progress === 100 ? 'Review Path' : 'Continue Learning'}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default TopicExplorer;
