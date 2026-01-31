import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

export function CTASection() {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="relative max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-br from-primary to-primary/80 rounded-3xl p-8 lg:p-16 text-center overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute -top-1/2 -right-1/4 w-96 h-96 rounded-full bg-white/10 blur-3xl" />
              <div className="absolute -bottom-1/2 -left-1/4 w-96 h-96 rounded-full bg-white/5 blur-3xl" />
            </div>

            <div className="relative z-10">
              <h2 className="text-h2 lg:text-h1 text-primary-foreground mb-4">
                Ready to simplify your invoicing?
              </h2>
              <p className="text-body-lg text-primary-foreground/80 max-w-xl mx-auto mb-8">
                Join thousands of freelancers and small businesses who trust Invoicemonk for their invoicing and compliance needs.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  asChild
                  size="lg"
                  variant="secondary"
                  className="rounded-full px-8 h-12 text-body bg-white text-primary hover:bg-white/90 shadow-soft-lg hover:shadow-soft-xl transition-all duration-300 hover:-translate-y-0.5 group"
                >
                  <Link to="/signup">
                    Get Started Free
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-full px-8 h-12 text-body border-white/30 text-primary-foreground hover:bg-white/10 transition-all duration-300"
                >
                  <Link to="/pricing">View Pricing</Link>
                </Button>
              </div>
              <p className="text-body-sm text-primary-foreground/60 mt-6">
                No credit card required • Free plan available
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
