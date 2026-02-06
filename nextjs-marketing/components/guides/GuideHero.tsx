import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, FileText, Wallet, Calculator, Shield, User, ClipboardList } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { Pillar } from '@/data/topicalMap';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  FileText,
  Wallet,
  Calculator,
  Shield,
  User,
  ClipboardList
};

interface GuideHeroProps {
  pillar: Pillar;
}

export function GuideHero({ pillar }: GuideHeroProps) {
  const IconComponent = iconMap[pillar.icon];

  return (
    <section className="relative py-16 lg:py-24 overflow-hidden">
      {/* Background gradient */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{ 
          background: `radial-gradient(ellipse at top, ${pillar.color}, transparent 70%)` 
        }}
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Icon badge */}
          <div 
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6"
            style={{ backgroundColor: `${pillar.color}20` }}
          >
            {IconComponent && (
              <IconComponent className="w-8 h-8 text-primary" />
            )}
          </div>

          {/* Title */}
          <h1 className="text-display-sm lg:text-display-md font-bold text-foreground mb-4">
            {pillar.title}
          </h1>

          {/* Description */}
          <p className="text-body-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            {pillar.longDescription || pillar.description}
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button asChild size="lg" className="rounded-full">
              <Link to={pillar.targetProduct}>
                Try {pillar.title.split(' ')[0]} Free
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full">
              <a href="#articles">
                Browse Articles
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
