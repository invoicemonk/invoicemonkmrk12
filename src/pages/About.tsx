import { Layout } from '@/components/layout/Layout';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { TeamMemberCard } from '@/components/about/TeamMemberCard';
import { MissionVision } from '@/components/about/MissionVision';
import { PressSection } from '@/components/about/PressSection';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const teamMembers = [
  {
    name: 'Olayinka Olayokun',
    role: 'Co-founder & CEO',
    image: '/team/olayinka-olayokun.jpg',
    socialLinks: [
      { platform: 'linkedin' as const, url: 'https://linkedin.com/in/olayokunyinka' },
      { platform: 'instagram' as const, url: 'https://instagram.com/olayokunyinka' },
      { platform: 'facebook' as const, url: 'https://facebook.com/olayokunyinka' },
      { platform: 'x' as const, url: 'https://www.x.com/olayokunyinka' },
      { platform: 'youtube' as const, url: 'https://youtube.com/@olayokunyinka' },
      { platform: 'producthunt' as const, url: 'https://www.producthunt.com/@olayokunyinka' },
    ],
  },
  {
    name: 'Joan Omionawele',
    role: 'Co-founder & Communication President',
    image: '/team/joan-omionawele.jpg',
    socialLinks: [
      { platform: 'linkedin' as const, url: 'https://www.linkedin.com/in/joan-omionawele/' },
      { platform: 'instagram' as const, url: 'https://instagram.com/thejoan01' },
    ],
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-background to-accent/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-4xl mx-auto text-center">
            <p className="text-primary font-medium mb-2">About Us</p>
            <h1 className="text-display-sm lg:text-display-md font-bold text-foreground mb-6">
              We are Invoicemonk in every sense of it.
            </h1>
            <p className="text-body-lg text-muted-foreground mb-6">
              This is why we built straightforward tools that empower freelancers and small 
              business owners to take full control of the way they work.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl mx-auto">
            <div className="prose prose-lg max-w-none text-center">
              <p className="text-body-lg text-muted-foreground leading-relaxed">
                A thing about us at Invoicemonk, we believe the freelancers and small businesses 
                are the heart of our communities, and championing them is worth fighting for 
                because it will lead to more new entrepreneurs, and more thriving small businesses.
              </p>
              <p className="text-body-lg text-muted-foreground leading-relaxed mt-6">
                How we intend to achieve that is by providing a{' '}
                <Link to="/invoicing" className="text-primary hover:underline">
                  simple & easy to use invoice application
                </Link>{' '}
                and{' '}
                <Link to="/estimates" className="text-primary hover:underline">
                  free estimate application
                </Link>
                ,{' '}
                <Link to="/features/client-management" className="text-primary hover:underline">
                  user friendly client management application
                </Link>
                ,{' '}
                <Link to="/payments" className="text-primary hover:underline">
                  highly functional payment accepting application
                </Link>{' '}
                and a financial management solution they can't live without. We also have{' '}
                <Link to="/blog" className="text-primary hover:underline">
                  a blog to teach, educate and guide freelancers and small business owners
                </Link>{' '}
                in their hustle.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <MissionVision />
          </AnimatedSection>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <p className="text-primary font-medium mb-2">Our Team</p>
            <h2 className="text-heading-lg font-bold text-foreground mb-4">
              Meet the Founders
            </h2>
            <p className="text-body text-muted-foreground max-w-2xl mx-auto">
              The passionate team behind Invoicemonk, dedicated to empowering freelancers 
              and small businesses across the world.
            </p>
          </AnimatedSection>
          
          <AnimatedSection>
            <div className="flex flex-wrap justify-center gap-12 lg:gap-24">
              {teamMembers.map((member) => (
                <TeamMemberCard key={member.name} {...member} />
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Press Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <PressSection />
          </AnimatedSection>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <h2 className="text-heading-lg font-bold text-foreground mb-4">
              Open Roles
            </h2>
            <p className="text-body text-muted-foreground max-w-xl mx-auto mb-8">
              Are you interested in joining our team? We're always looking for passionate 
              individuals to help us build the future of business tools.
            </p>
            <Button asChild>
              <Link to="/contact">
                Join Our Team <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default About;
