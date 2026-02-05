import { motion } from 'framer-motion';
import { Star, ArrowRight, Play, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLocale } from '@/hooks/useLocale';

export function HeroSection() {
  const { locale, formatPrice } = useLocale();
  const { hero, compliance } = locale.content;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-accent/30 py-16 lg:py-24">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-wave-orange/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Compliance Badge - Localized */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
          >
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-body-sm font-medium text-primary">
              {hero.badge}
            </span>
          </motion.div>

          {/* Google Rating Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-card border border-border shadow-soft mb-8 ml-4"
          >
            <div className="flex items-center gap-1">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i < 4 ? 'fill-wave-orange text-wave-orange' : 'fill-wave-orange/50 text-wave-orange/50'}`} />
                ))}
              </div>
            </div>
            <span className="text-body-sm text-muted-foreground">
              4.6/5 from 10,000+ reviews
            </span>
          </motion.div>

          {/* Main Headline - Localized with Wave-style serif italics */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-display text-heading mb-6"
          >
            {hero.headline}{' '}
            <span className="font-serif italic text-primary">{hero.headlineAccent}</span>
          </motion.h1>

          {/* Subheadline - Localized */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-body-lg text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            {hero.subheadline}
          </motion.p>

          {/* CTAs - Localized */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              asChild
              size="lg"
              className="rounded-full px-8 h-14 text-body-lg bg-accent-orange hover:bg-accent-orange/90 text-accent-orange-foreground shadow-soft-md hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-0.5 group"
            >
              <a href="https://app.invoicemonk.com/signup">
                {hero.cta}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full px-8 h-14 text-body border-border hover:bg-muted transition-all duration-300 group"
            >
              <a href="#products" className="flex items-center gap-2">
                <Play className="w-4 h-4" />
                {hero.secondaryCta}
              </a>
            </Button>
          </motion.div>

          {/* Trust badge - Localized */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6"
          >
            <p className="text-body-sm text-muted-foreground">
              Free tier available • No credit card required
            </p>
            <span className="hidden sm:block text-muted-foreground/30">|</span>
            <p className="text-body-sm font-medium text-foreground">
              {hero.trustBadge}
            </p>
          </motion.div>
        </div>

        {/* Hero Visual / Product Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 lg:mt-20 max-w-5xl mx-auto"
        >
          <div className="relative">
            {/* Main mockup card */}
            <div className="bg-card rounded-2xl lg:rounded-3xl shadow-soft-xl border border-border overflow-hidden">
              <div className="aspect-[16/9] bg-gradient-to-br from-wave-blue-light to-accent flex items-center justify-center">
                {/* Dashboard mockup */}
                <div className="p-4 lg:p-8 w-full max-w-4xl">
                  <div className="bg-card rounded-xl shadow-card p-4 lg:p-6 space-y-4">
                    {/* Top bar */}
                    <div className="flex items-center justify-between pb-4 border-b border-border">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                          <span className="text-primary-foreground font-bold text-sm">IM</span>
                        </div>
                        <div>
                          <div className="text-body-sm font-medium text-heading">Dashboard</div>
                          <div className="text-caption text-muted-foreground">Invoicemonk</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="hidden sm:inline px-3 py-1.5 text-caption font-medium rounded-full bg-wave-green/10 text-wave-green">
                          {formatPrice(locale.pricing.professional)} earned this month
                        </span>
                      </div>
                    </div>
                    
                    {/* Stats grid - Localized currencies */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                      {[
                        { label: 'Outstanding', value: formatPrice(locale.pricing.business * 8, ''), color: 'text-wave-orange' },
                        { label: 'Overdue', value: formatPrice((locale.pricing.starter || locale.pricing.professional) * 5, ''), color: 'text-destructive' },
                        { label: 'Paid (30 days)', value: formatPrice(locale.pricing.professional * 65, ''), color: 'text-wave-green' },
                        { label: 'Total Invoices', value: '24', color: 'text-primary' },
                      ].map((stat) => (
                        <div key={stat.label} className="bg-muted/50 rounded-lg p-3 min-w-0">
                          <div className="text-caption text-muted-foreground">{stat.label}</div>
                          <div className={`text-h4 font-bold ${stat.color} truncate`} title={stat.value}>{stat.value}</div>
                        </div>
                      ))}
                    </div>

                    {/* Recent invoices */}
                    <div className="hidden lg:block space-y-2">
                      {[
                        { client: 'Acme Corp', amount: formatPrice(locale.pricing.business * 6, ''), status: 'Paid' },
                        { client: 'TechStart Inc', amount: formatPrice(locale.pricing.professional * 6, ''), status: 'Pending' },
                        { client: 'Design Studio', amount: formatPrice(locale.pricing.business * 8, ''), status: 'Paid' },
                      ].map((invoice) => (
                        <div key={invoice.client} className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-muted/50">
                          <span className="text-body-sm text-foreground">{invoice.client}</span>
                          <div className="flex items-center gap-3">
                            <span className="text-body-sm font-medium text-heading">{invoice.amount}</span>
                            <span className={`px-2 py-0.5 text-[10px] font-medium rounded-full ${
                              invoice.status === 'Paid' 
                                ? 'bg-wave-green/10 text-wave-green' 
                                : 'bg-wave-orange/10 text-wave-orange'
                            }`}>
                              {invoice.status}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <motion.div
              animate={{ y: [-4, 4, -4] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-4 -right-4 lg:-top-8 lg:-right-8 bg-card rounded-xl shadow-soft-lg p-4 border border-border hidden md:block"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-wave-green/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-wave-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-body-sm font-medium text-foreground">Payment Received</p>
                  <p className="text-caption text-muted-foreground">{formatPrice(locale.pricing.business * 6, '')} from Acme Corp</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [4, -4, 4] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-4 -left-4 lg:-bottom-8 lg:-left-8 bg-card rounded-xl shadow-soft-lg p-4 border border-border hidden md:block"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-body-sm font-medium text-foreground">{compliance.authority}-Compliant</p>
                  <p className="text-caption text-muted-foreground">All records audit-ready</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
