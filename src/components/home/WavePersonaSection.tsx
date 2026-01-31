import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection';
import personaFreelancer from '@/assets/persona-freelancer.jpg';
import personaConsultant from '@/assets/persona-consultant.jpg';
import personaSmallBusiness from '@/assets/persona-smallbusiness.jpg';
import personaContractor from '@/assets/persona-contractor.jpg';

const personas = [
  {
    title: 'Freelancers',
    description: 'Invoice clients, track expenses, and get paid faster — all in one place.',
    image: personaFreelancer,
    link: '/freelancers',
  },
  {
    title: 'Consultants',
    description: 'Professional invoicing with compliance features your enterprise clients expect.',
    image: personaConsultant,
    link: '/consultants',
  },
  {
    title: 'Small Businesses',
    description: 'Grow from one-person shop to full team with tools that scale with you.',
    image: personaSmallBusiness,
    link: '/small-businesses',
  },
  {
    title: 'Contractors',
    description: 'Manage multiple clients, track project expenses, and stay organized.',
    image: personaContractor,
    link: '/contractors',
  },
];

export function WavePersonaSection() {
  return (
    <section className="py-20 lg:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <h2 className="text-h2 mb-4">
            Built for small business owners{' '}
            <span className="font-serif italic opacity-90">like you</span>
          </h2>
          <p className="text-body-lg opacity-80">
            Whether you're just starting out or scaling up, Invoicemonk has the tools you need.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {personas.map((persona) => (
            <StaggerItem key={persona.title}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  to={persona.link}
                  className="block group"
                >
                  <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-primary-foreground/20 hover:border-primary-foreground/40 transition-colors">
                    {/* Image */}
                    <div className="aspect-[4/3] bg-primary-foreground/5">
                      <img
                        src={persona.image}
                        alt={persona.title}
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-white font-semibold group-hover:underline underline-offset-4">
                          {persona.title}
                        </h3>
                        <ArrowRight className="w-4 h-4 text-white opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                      </div>
                      <p className="text-white/75">
                        {persona.description}
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
