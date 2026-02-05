import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import type { Pillar } from '@/data/topicalMap';

interface ConceptGridProps {
  pillar: Pillar;
}

export function ConceptGrid({ pillar }: ConceptGridProps) {
  if (!pillar.keyTopics || pillar.keyTopics.length === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-display-xs lg:text-display-sm font-bold text-foreground mb-4">
              Key Topics Covered
            </h2>
            <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
              Master these essential concepts to become proficient in {pillar.title.toLowerCase()}.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillar.keyTopics.map((topic, index) => (
              <motion.div
                key={topic.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-soft-lg transition-all duration-300 group border-border/50">
                  <CardContent className="p-6">
                    <div 
                      className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 text-lg font-bold"
                      style={{ 
                        backgroundColor: `${pillar.color}15`,
                        color: pillar.color 
                      }}
                    >
                      {index + 1}
                    </div>
                    <h3 className="text-body-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {topic.title}
                    </h3>
                    <p className="text-body text-muted-foreground mb-4">
                      {topic.description}
                    </p>
                    {topic.link && (
                      <Link 
                        to={topic.link}
                        className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                      >
                        Learn more
                        <ArrowRight className="ml-1 h-3 w-3" />
                      </Link>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
