import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronRight, HelpCircle, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import type { Pillar, FAQItem } from '@/data/topicalMap';

interface RelatedQuestionsProps {
  pillar: Pillar;
  maxQuestions?: number;
  className?: string;
  variant?: 'default' | 'compact' | 'inline';
}

interface QuestionWithLink extends FAQItem {
  relatedLink?: string;
  relatedLinkText?: string;
}

/**
 * People Also Ask (PAA) style component for pillar pages
 * Implements expandable FAQ with cross-linking to related content
 * Follows Koray Tuğberk Gübür's query network modeling principles
 */
export function RelatedQuestions({ 
  pillar, 
  maxQuestions = 5,
  className,
  variant = 'default'
}: RelatedQuestionsProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  // Enhance FAQs with related links from pillar key topics
  const enhancedQuestions: QuestionWithLink[] = pillar.faq.slice(0, maxQuestions).map((faq, index) => {
    const keyTopic = pillar.keyTopics[index];
    return {
      ...faq,
      relatedLink: keyTopic?.link,
      relatedLinkText: keyTopic?.title
    };
  });

  const toggleQuestion = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  if (variant === 'compact') {
    return (
      <div className={cn("space-y-2", className)}>
        <h3 className="text-sm font-semibold text-foreground flex items-center gap-2">
          <HelpCircle className="h-4 w-4" style={{ color: pillar.color }} />
          People Also Ask
        </h3>
        <ul className="space-y-1">
          {enhancedQuestions.slice(0, 3).map((item, index) => (
            <li key={index}>
              <button
                onClick={() => toggleQuestion(index)}
                className="text-left text-sm text-muted-foreground hover:text-primary transition-colors line-clamp-1"
              >
                {item.question}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  if (variant === 'inline') {
    return (
      <div className={cn("my-8 p-6 bg-muted/30 rounded-xl border border-border", className)}>
        <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
          <HelpCircle className="h-5 w-5" style={{ color: pillar.color }} />
          Frequently Asked Questions
        </h3>
        <div className="space-y-3">
          {enhancedQuestions.map((item, index) => (
            <details 
              key={index} 
              className="group"
              open={index === 0}
            >
              <summary className="flex items-start gap-2 cursor-pointer list-none font-medium text-foreground hover:text-primary transition-colors">
                <ChevronRight className="h-5 w-5 mt-0.5 flex-shrink-0 transition-transform group-open:rotate-90" />
                <span>{item.question}</span>
              </summary>
              <div className="pl-7 pt-2 text-muted-foreground text-sm">
                <p>{item.answer}</p>
                {item.relatedLink && (
                  <Link 
                    to={item.relatedLink}
                    className="inline-flex items-center gap-1 mt-2 text-primary hover:underline text-xs font-medium"
                  >
                    Learn more: {item.relatedLinkText}
                    <ExternalLink className="h-3 w-3" />
                  </Link>
                )}
              </div>
            </details>
          ))}
        </div>
      </div>
    );
  }

  // Default variant - full card layout
  return (
    <Card className={cn("border-border/50 overflow-hidden", className)}>
      <CardHeader 
        className="pb-3"
        style={{ borderBottom: `2px solid ${pillar.color}` }}
      >
        <CardTitle className="flex items-center gap-2 text-base">
          <HelpCircle className="h-4 w-4" style={{ color: pillar.color }} />
          <span>People Also Ask</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-4 px-0">
        <div className="divide-y divide-border">
          {enhancedQuestions.map((item, index) => (
            <div key={index} className="px-4">
              <button
                onClick={() => toggleQuestion(index)}
                className={cn(
                  "w-full py-3 flex items-start gap-3 text-left transition-colors hover:text-primary",
                  expandedIndex === index ? "text-foreground" : "text-muted-foreground"
                )}
                aria-expanded={expandedIndex === index}
              >
                <ChevronDown 
                  className={cn(
                    "h-5 w-5 mt-0.5 flex-shrink-0 transition-transform",
                    expandedIndex === index && "rotate-180"
                  )}
                  style={{ color: expandedIndex === index ? pillar.color : undefined }}
                />
                <span className="font-medium text-sm">{item.question}</span>
              </button>
              
              <div 
                className={cn(
                  "overflow-hidden transition-all duration-200",
                  expandedIndex === index ? "max-h-96 pb-4" : "max-h-0"
                )}
              >
                <div className="pl-8 text-sm text-muted-foreground">
                  <p>{item.answer}</p>
                  {item.relatedLink && (
                    <Link 
                      to={item.relatedLink}
                      className="inline-flex items-center gap-1 mt-3 text-primary hover:underline font-medium"
                    >
                      <span>Read more: {item.relatedLinkText}</span>
                      <ExternalLink className="h-3 w-3" />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Link to guide for full FAQ */}
        <div className="px-4 pt-3 mt-2 border-t border-border">
          <Link 
            to={pillar.hubPage}
            className="text-sm text-primary hover:underline font-medium flex items-center gap-1"
          >
            View complete {pillar.title.toLowerCase()} guide
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
