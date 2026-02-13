import { useState } from 'react';
import { motion } from 'framer-motion';
import { Compass, Star, BarChart3 } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { SEOHead } from '@/components/seo/SEOHead';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import TopicExplorer from '@/components/explore/TopicExplorer';
import ReviewDisplay, { sampleReviews } from '@/components/reviews/ReviewDisplay';
import ReviewForm from '@/components/reviews/ReviewForm';
import AnalyticsDashboard from '@/components/analytics/AnalyticsDashboard';

function Explore() {
  const [activeTab, setActiveTab] = useState('topics');

  return (
    <Layout>
      <SEOHead
        title="Explore Topics & Reviews | Invoicemonk"
        description="Explore our comprehensive topic guides, read customer reviews, and track your learning progress. Master invoicing, payments, and business finance."
        canonical="https://invoicemonk.com/explore"
      />

      {/* Hero */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-display-sm lg:text-display-md font-bold text-foreground mb-4">
              Explore & Learn
            </h1>
            <p className="text-body-lg text-muted-foreground">
              Navigate our comprehensive knowledge base, see what others are saying, 
              and track your learning journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="w-full max-w-md mx-auto grid grid-cols-3 mb-8">
              <TabsTrigger value="topics" className="flex items-center gap-2">
                <Compass className="h-4 w-4" />
                <span className="hidden sm:inline">Topics</span>
              </TabsTrigger>
              <TabsTrigger value="reviews" className="flex items-center gap-2">
                <Star className="h-4 w-4" />
                <span className="hidden sm:inline">Reviews</span>
              </TabsTrigger>
              <TabsTrigger value="analytics" className="flex items-center gap-2">
                <BarChart3 className="h-4 w-4" />
                <span className="hidden sm:inline">My Progress</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="topics" className="mt-0">
              <TopicExplorer />
            </TabsContent>

            <TabsContent value="reviews" className="mt-0">
              <div className="max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <h2 className="text-2xl font-bold mb-6">Customer Reviews</h2>
                    <ReviewDisplay reviews={sampleReviews} layout="list" />
                  </div>
                  <div>
                    <ReviewForm />
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="analytics" className="mt-0">
              <div className="max-w-6xl mx-auto">
                <AnalyticsDashboard />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </Layout>
  );
}

export default Explore;
