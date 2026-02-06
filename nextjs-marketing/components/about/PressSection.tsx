import { ExternalLink, Newspaper } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface PressMention {
  outlet: string;
  title: string;
  url: string;
  date?: string;
}

const pressMentions: PressMention[] = [
  {
    outlet: 'The Guardian Nigeria',
    title: 'New invoicing, book-keeping software Invoicemonk solving payment and tracking issues for SMEs',
    url: 'https://guardian.ng/features/new-invoicing-book-keeping-software-invoicemonk-solving-payment-and-tracking-issues-for-smes/',
    date: '2024',
  },
];

export function PressSection() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <p className="text-primary font-medium mb-2">Press & Media</p>
        <h2 className="text-heading-lg font-bold text-foreground mb-4">
          As Featured In
        </h2>
        <p className="text-body text-muted-foreground max-w-2xl mx-auto">
          Invoicemonk has been recognized for helping small businesses and freelancers 
          streamline their invoicing and financial management.
        </p>
      </div>

      <div className="grid md:grid-cols-1 gap-6 max-w-3xl mx-auto">
        {pressMentions.map((mention, index) => (
          <a
            key={index}
            href={mention.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block group"
          >
            <Card className="border-border/50 hover:border-primary/50 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-muted group-hover:bg-primary/10 transition-colors">
                    <Newspaper className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-body-sm font-semibold text-primary">
                        {mention.outlet}
                      </span>
                      {mention.date && (
                        <span className="text-body-sm text-muted-foreground">
                          · {mention.date}
                        </span>
                      )}
                    </div>
                    <h3 className="text-body font-medium text-foreground group-hover:text-primary transition-colors leading-relaxed">
                      {mention.title}
                    </h3>
                  </div>
                  <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-1" />
                </div>
              </CardContent>
            </Card>
          </a>
        ))}
      </div>
    </div>
  );
}
