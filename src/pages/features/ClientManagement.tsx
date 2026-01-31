import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Users, ArrowRight, FileText, Mail, Clock, UserCheck } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { WaveFeatureBanner } from '@/components/ui/WaveFeatureBanner';
import { useLocale } from '@/hooks/useLocale';

const features = [
  {
    icon: Users,
    title: 'Centralized Client Database',
    description: 'Store all client information in one place — contact details, billing addresses, and payment preferences.',
  },
  {
    icon: FileText,
    title: 'Invoice History',
    description: 'View complete invoice history for each client. Track what\'s been paid and what\'s outstanding.',
  },
  {
    icon: Mail,
    title: 'Quick Communications',
    description: 'Send invoices and reminders directly from client profiles. Keep all communications organized.',
  },
  {
    icon: Clock,
    title: 'Payment Tracking',
    description: 'Monitor payment patterns and identify clients who consistently pay late.',
  },
];

const bannerFeatures = [
  'Unlimited clients',
  'Complete history',
  'Quick search',
  'Payment tracking',
];

const ClientManagement = () => {
  const { formatCurrency } = useLocale();

  const clientData = [
    { name: 'Acme Corporation', invoices: 8, total: 24500, status: 'Active' },
    { name: 'Tech Startup Inc', invoices: 3, total: 8200, status: 'Active' },
    { name: 'Design Studio Co', invoices: 12, total: 42800, status: 'Active' },
  ];

  return (
    <Layout>
      {/* Hero Section - Wave style */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-accent/30 py-20 lg:py-32">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] rounded-full bg-primary/5 blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Content */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-wave-green/10 text-wave-green mb-6"
              >
                <UserCheck className="w-4 h-4" />
                <span className="text-body-sm font-medium">Included with Invoicing</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex items-center gap-3 mb-6"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Users className="w-8 h-8 text-primary" />
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-display text-heading mb-6"
              >
                Client Management,{' '}
                <span className="font-serif italic text-primary">simplified</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-body-lg text-muted-foreground mb-8"
              >
                Keep all your client information organized and accessible. 
                Part of the Invoicemonk invoicing experience.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button
                  asChild
                  size="lg"
                  className="rounded-full px-8 h-14 text-body-lg bg-accent-orange hover:bg-accent-orange/90 text-accent-orange-foreground shadow-soft-md group"
                >
                  <a href="https://app.invoicemonk.com/signup">
                    Get Started Free
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-full px-8 h-14 text-body border-border hover:bg-muted"
                >
                  <Link to="/invoicing">View All Invoicing Features</Link>
                </Button>
              </motion.div>
            </div>

            {/* Right - Product Mockup */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative hidden lg:block"
            >
              <div className="bg-card rounded-2xl shadow-soft-xl border border-border p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-body font-semibold text-heading">Client Directory</h3>
                  <span className="text-caption text-muted-foreground">12 clients</span>
                </div>
                
                {/* Client Cards Preview */}
                <div className="space-y-3">
                  {clientData.map((client, i) => (
                    <div key={i} className="bg-muted/30 rounded-xl p-4">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                            <span className="text-body-sm font-semibold text-primary">
                              {client.name.charAt(0)}
                            </span>
                          </div>
                          <div>
                            <div className="text-body font-medium text-heading">{client.name}</div>
                            <div className="text-caption text-muted-foreground">{client.invoices} invoices</div>
                          </div>
                        </div>
                        <div className="px-2 py-1 rounded-full bg-wave-green/10 text-wave-green text-caption">
                          {client.status}
                        </div>
                      </div>
                      <div className="flex items-center justify-between pt-2 border-t border-border/50">
                        <span className="text-caption text-muted-foreground">Total Billed</span>
                        <span className="text-body-sm font-semibold text-heading">{formatCurrency(client.total)}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Quick Actions */}
                <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
                  <span className="text-caption text-muted-foreground">Quick search clients...</span>
                  <div className="flex gap-2">
                    <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center">
                      <Mail className="w-4 h-4 text-muted-foreground" />
                    </div>
                    <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center">
                      <FileText className="w-4 h-4 text-muted-foreground" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature Banner */}
      <WaveFeatureBanner 
        title="Everything you need to manage clients"
        features={bannerFeatures}
      />

      {/* Features */}
      <section className="py-20 lg:py-32 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-h2 text-heading mb-4">
              Powerful <span className="font-serif italic text-primary">features</span>
            </h2>
            <p className="text-body-lg text-muted-foreground">
              Client management tools that integrate seamlessly with your invoicing.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4 }}
                  className="bg-background rounded-2xl p-6 border border-border hover:border-primary/20 hover:shadow-card-hover transition-all text-center"
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-body font-semibold text-heading mb-2">{feature.title}</h3>
                  <p className="text-body-sm text-muted-foreground">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits List */}
      <section className="py-20 lg:py-32 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl mx-auto">
            <h2 className="text-h2 text-heading text-center mb-12">
              Why manage clients with <span className="font-serif italic text-primary">Invoicemonk</span>?
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                'Unlimited client profiles',
                'Quick client lookup and search',
                'Automatic invoice association',
                'Payment history tracking',
                'Custom notes and tags',
                'Export client data anytime',
                'Multiple contact persons per client',
                'Client portal access',
              ].map((item, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 bg-background rounded-xl p-4 border border-border"
                >
                  <div className="w-6 h-6 rounded-full bg-wave-green/10 flex items-center justify-center flex-shrink-0">
                    <UserCheck className="w-3.5 h-3.5 text-wave-green" />
                  </div>
                  <span className="text-body text-foreground">{item}</span>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-32 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-2xl mx-auto">
            <h2 className="text-h2 text-white mb-4">
              Start managing your clients <span className="font-serif italic">today</span>
            </h2>
            <p className="text-body-lg text-white/90 mb-8">
              Client management is included free with every Invoicemonk account. 
              Sign up and organize your client relationships.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                asChild 
                size="lg" 
                className="rounded-full px-8 h-14 bg-white hover:bg-white/90 text-black"
              >
                <a href="https://app.invoicemonk.com/signup" className="flex items-center gap-2">
                  Create Free Account
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default ClientManagement;
