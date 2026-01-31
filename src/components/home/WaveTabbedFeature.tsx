import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

interface Tab {
  label: string;
  title: string;
  description: string;
  image?: string;
}

interface WaveTabbedFeatureProps {
  title: string;
  subtitle?: string;
  tabs: Tab[];
  className?: string;
}

export function WaveTabbedFeature({ title, subtitle, tabs, className = '' }: WaveTabbedFeatureProps) {
  const [activeTab, setActiveTab] = useState(tabs[0]?.label || '');

  const activeTabContent = tabs.find(tab => tab.label === activeTab);

  return (
    <section className={`py-20 lg:py-32 bg-background ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-h2 text-heading mb-4">{title}</h2>
          {subtitle && <p className="text-body-lg text-muted-foreground">{subtitle}</p>}
        </AnimatedSection>

        <div className="max-w-6xl mx-auto">
          {/* Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="w-full flex flex-wrap justify-center gap-2 bg-transparent h-auto mb-8 lg:mb-12">
              {tabs.map((tab) => (
                <TabsTrigger
                  key={tab.label}
                  value={tab.label}
                  className="px-6 py-3 rounded-full text-body-sm font-medium 
                    data-[state=active]:bg-primary data-[state=active]:text-primary-foreground
                    data-[state=inactive]:bg-muted data-[state=inactive]:text-muted-foreground
                    transition-all duration-200 hover:bg-muted/80"
                >
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {/* Content */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab + '-text'}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="order-2 lg:order-1"
                >
                  <h3 className="text-h3 text-heading mb-4">{activeTabContent?.title}</h3>
                  <p className="text-body-lg text-muted-foreground">{activeTabContent?.description}</p>
                </motion.div>
              </AnimatePresence>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab + '-image'}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="order-1 lg:order-2"
                >
                  {activeTabContent?.image ? (
                    <img 
                      src={activeTabContent.image} 
                      alt={activeTabContent.title}
                      className="rounded-2xl shadow-soft-xl border border-border w-full"
                    />
                  ) : (
                    <div className="bg-card rounded-2xl shadow-soft-xl border border-border aspect-video flex items-center justify-center">
                      <div className="text-center p-8">
                        <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                          <div className="w-8 h-8 rounded-lg bg-primary/20" />
                        </div>
                        <p className="text-body text-muted-foreground">Feature Preview</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
