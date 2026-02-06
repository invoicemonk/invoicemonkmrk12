import { motion, useReducedMotion } from 'framer-motion';
import { ReactNode } from 'react';
import { ArrowRight, LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export interface FloatingElementConfig {
  id: string;
  icon?: LucideIcon;
  content?: ReactNode;
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center-left' | 'center-right';
  size?: 'sm' | 'md' | 'lg';
  delay?: number;
  className?: string;
}

export interface PageHeroProps {
  badge: {
    icon: LucideIcon;
    text: string;
  };
  title: string;
  accentWord?: string;
  description: string;
  primaryCta: {
    text: string;
    href: string;
    external?: boolean;
  };
  secondaryCta?: {
    text: string;
    href: string;
    external?: boolean;
  };
  trustBadge?: string;
  floatingElements?: FloatingElementConfig[];
  stats?: Array<{ value: string; label: string }>;
  backgroundVariant?: 'gradient' | 'mesh' | 'dots';
  className?: string;
}

const positionClasses: Record<FloatingElementConfig['position'], string> = {
  'top-left': 'top-16 left-4 lg:top-20 lg:left-8',
  'top-right': 'top-16 right-4 lg:top-20 lg:right-8',
  'bottom-left': 'bottom-20 left-4 lg:bottom-24 lg:left-12',
  'bottom-right': 'bottom-20 right-4 lg:bottom-24 lg:right-12',
  'center-left': 'top-1/2 -translate-y-1/2 left-4 lg:left-8',
  'center-right': 'top-1/2 -translate-y-1/2 right-4 lg:right-8',
};

const sizeClasses: Record<NonNullable<FloatingElementConfig['size']>, string> = {
  sm: 'w-10 h-10 lg:w-12 lg:h-12',
  md: 'w-14 h-14 lg:w-16 lg:h-16',
  lg: 'w-20 h-20 lg:w-24 lg:h-24',
};

function FloatingElement({ config }: { config: FloatingElementConfig }) {
  const shouldReduceMotion = useReducedMotion();
  const Icon = config.icon;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ 
        opacity: 1, 
        scale: 1,
        y: shouldReduceMotion ? 0 : [0, -10, 0]
      }}
      transition={{
        opacity: { duration: 0.5, delay: config.delay || 0 },
        scale: { duration: 0.5, delay: config.delay || 0 },
        y: { 
          duration: 4, 
          repeat: Infinity, 
          ease: 'easeInOut',
          delay: config.delay || 0
        }
      }}
      className={cn(
        'absolute hidden md:flex items-center justify-center rounded-2xl bg-card/80 backdrop-blur-sm border border-border shadow-soft-lg',
        positionClasses[config.position],
        sizeClasses[config.size || 'md'],
        config.className
      )}
    >
      {config.content ? config.content : Icon && <Icon className="w-1/2 h-1/2 text-primary" />}
    </motion.div>
  );
}

function FloatingCard({ 
  children, 
  position, 
  delay = 0,
  className
}: { 
  children: ReactNode; 
  position: FloatingElementConfig['position']; 
  delay?: number;
  className?: string;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ 
        opacity: 1, 
        scale: 1,
        y: shouldReduceMotion ? 0 : [0, -8, 0]
      }}
      transition={{
        opacity: { duration: 0.6, delay },
        scale: { duration: 0.6, delay },
        y: { 
          duration: 5, 
          repeat: Infinity, 
          ease: 'easeInOut',
          delay
        }
      }}
      className={cn(
        'absolute hidden lg:block',
        positionClasses[position],
        className
      )}
    >
      {children}
    </motion.div>
  );
}

function BackgroundDecoration({ variant }: { variant: PageHeroProps['backgroundVariant'] }) {
  if (variant === 'mesh') {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-bl from-primary/10 via-transparent to-transparent rounded-full blur-3xl" />
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-primary/5 via-transparent to-transparent rounded-full blur-3xl" />
      </div>
    );
  }

  if (variant === 'dots') {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, hsl(var(--primary) / 0.3) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}
        />
      </div>
    );
  }

  // Default gradient
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div 
        className="absolute -top-20 -right-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div 
        className="absolute -bottom-20 -left-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl"
        animate={{ 
          scale: [1.1, 1, 1.1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  );
}

export function PageHero({
  badge,
  title,
  accentWord,
  description,
  primaryCta,
  secondaryCta,
  trustBadge,
  floatingElements,
  stats,
  backgroundVariant = 'gradient',
  className,
}: PageHeroProps) {
  const BadgeIcon = badge.icon;

  // Parse title to apply accent styling
  const renderTitle = () => {
    if (!accentWord) {
      return <span>{title}</span>;
    }

    const parts = title.split(accentWord);
    if (parts.length === 1) {
      return <span>{title}</span>;
    }

    return (
      <>
        {parts[0]}
        <span className="text-primary font-serif italic">{accentWord}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <section className={cn('relative overflow-hidden py-20 lg:py-32', className)}>
      <BackgroundDecoration variant={backgroundVariant} />

      {/* Floating Elements */}
      {floatingElements?.map((el) => (
        <FloatingElement key={el.id} config={el} />
      ))}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
          >
            <BadgeIcon className="w-4 h-4" />
            {badge.text}
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight"
          >
            {renderTitle()}
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            {description}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              asChild
              size="lg"
              className="rounded-full px-8 h-12 shadow-soft-md hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-0.5 group min-w-[160px]"
            >
              {primaryCta.external !== false ? (
                <a href={primaryCta.href} target="_blank" rel="noopener noreferrer">
                  {primaryCta.text}
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </a>
              ) : (
                <a href={primaryCta.href}>
                  {primaryCta.text}
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </a>
              )}
            </Button>
            {secondaryCta && (
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full px-8 h-12 border-border hover:bg-muted min-w-[160px]"
              >
                {secondaryCta.external ? (
                  <a href={secondaryCta.href} target="_blank" rel="noopener noreferrer">
                    {secondaryCta.text}
                  </a>
                ) : (
                  <a href={secondaryCta.href}>{secondaryCta.text}</a>
                )}
              </Button>
            )}
          </motion.div>

          {/* Trust Badge */}
          {trustBadge && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-8 text-sm text-muted-foreground"
            >
              {trustBadge}
            </motion.p>
          )}

          {/* Stats */}
          {stats && stats.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl mx-auto"
            >
              {stats.map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}

// Export sub-components for custom compositions
export { FloatingCard, FloatingElement, BackgroundDecoration };
