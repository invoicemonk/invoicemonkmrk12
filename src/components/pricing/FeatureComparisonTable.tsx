import { Check, Minus } from 'lucide-react';
import { useLocale } from '@/hooks/useLocale';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

type PlanValue = string | boolean;

interface ComparisonRow {
  feature: string;
  free: PlanValue;
  starter?: PlanValue;
  professional: PlanValue;
  business: PlanValue;
}

const limits: ComparisonRow[] = [
  { feature: 'Invoices/month', free: '5', starter: 'Unlimited', professional: 'Unlimited', business: 'Unlimited' },
  { feature: 'Receipts/month', free: '5', starter: 'Unlimited', professional: 'Unlimited', business: 'Unlimited' },
  { feature: 'Currency accounts', free: '1', starter: '3', professional: 'Unlimited', business: 'Unlimited' },
  { feature: 'Team members', free: '1', starter: '1', professional: 'Up to 5', business: 'Unlimited' },
  { feature: 'Payment methods per currency', free: '1', starter: '2', professional: 'Unlimited', business: 'Unlimited' },
];

const features: ComparisonRow[] = [
  { feature: 'Accounting module', free: true, starter: true, professional: true, business: true },
  { feature: 'Expense tracking', free: true, starter: true, professional: true, business: true },
  { feature: 'Credit notes', free: true, starter: true, professional: true, business: true },
  { feature: 'In-app support', free: false, starter: true, professional: true, business: true },
  { feature: 'Invoice verification', free: true, starter: true, professional: true, business: true },
  { feature: 'Full audit trail', free: false, starter: false, professional: true, business: true },
  { feature: 'Custom branding', free: false, starter: false, professional: true, business: true },
  { feature: 'Data exports', free: false, starter: false, professional: true, business: true },
  { feature: 'Advanced reports', free: false, starter: false, professional: false, business: true },
  { feature: 'Premium templates', free: false, starter: false, professional: true, business: true },
  { feature: 'Watermark-free PDFs', free: false, starter: false, professional: true, business: true },
  { feature: 'API access', free: false, starter: false, professional: false, business: true },
];

function CellValue({ value }: { value: PlanValue }) {
  if (typeof value === 'string') {
    return <span className="text-body-sm font-medium text-foreground">{value}</span>;
  }
  if (value) {
    return (
      <div className="w-5 h-5 rounded-full bg-wave-green/10 flex items-center justify-center mx-auto">
        <Check className="w-3 h-3 text-wave-green" />
      </div>
    );
  }
  return (
    <div className="w-5 h-5 rounded-full bg-muted flex items-center justify-center mx-auto">
      <Minus className="w-3 h-3 text-muted-foreground" />
    </div>
  );
}

export function FeatureComparisonTable() {
  const { locale } = useLocale();
  const showStarter = locale.pricingContent.starterAvailable;

  const planHeaders = showStarter
    ? ['Free', 'Starter', 'Professional', 'Business']
    : ['Free', 'Professional', 'Business'];

  const getValues = (row: ComparisonRow): PlanValue[] =>
    showStarter
      ? [row.free, row.starter ?? false, row.professional, row.business]
      : [row.free, row.professional, row.business];

  const renderSection = (title: string, rows: ComparisonRow[]) => (
    <>
      <TableRow>
        <TableCell
          colSpan={planHeaders.length + 1}
          className="bg-accent/50 font-semibold text-body-sm text-heading py-3"
        >
          {title}
        </TableCell>
      </TableRow>
      {rows.map((row) => (
        <TableRow key={row.feature}>
          <TableCell className="text-body-sm text-foreground font-medium">
            {row.feature}
          </TableCell>
          {getValues(row).map((val, i) => (
            <TableCell key={i} className="text-center">
              <CellValue value={val} />
            </TableCell>
          ))}
        </TableRow>
      ))}
    </>
  );

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-h2 text-heading mb-4">
            Compare <span className="font-serif italic text-primary">plans</span> in detail
          </h2>
          <p className="text-body-lg text-muted-foreground">
            See exactly what's included in each plan.
          </p>
        </AnimatedSection>

        <div className="max-w-5xl mx-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[200px]">Feature</TableHead>
                {planHeaders.map((plan) => (
                  <TableHead key={plan} className="text-center font-semibold">
                    {plan}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {renderSection('Limits', limits)}
              {renderSection('Features', features)}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
}
