import { Badge } from '@/components/ui/badge';
import { 
  FileText, 
  Wallet, 
  Calculator, 
  Shield, 
  User, 
  ClipboardList,
  type LucideIcon
} from 'lucide-react';
import { cn } from '@/lib/utils';
import type { Pillar, ClusterType } from '@/data/topicalMap';

interface PillarBadgeProps {
  pillar?: Pillar;
  clusterType?: ClusterType;
  showIcon?: boolean;
  className?: string;
  size?: 'sm' | 'md';
}

const iconMap: Record<string, LucideIcon> = {
  FileText,
  Wallet,
  Calculator,
  Shield,
  User,
  ClipboardList
};

const clusterTypeLabels: Record<ClusterType, string> = {
  pillar: 'Pillar',
  cluster: 'Cluster',
  supporting: 'Supporting',
  outer: 'Insights'
};

export function PillarBadge({ 
  pillar, 
  clusterType = 'cluster',
  showIcon = true, 
  className,
  size = 'sm'
}: PillarBadgeProps) {
  if (!pillar) {
    return (
      <Badge 
        variant="secondary" 
        className={cn(
          'bg-muted/50 text-muted-foreground border-muted',
          size === 'sm' ? 'text-xs px-2 py-0.5' : 'text-sm px-3 py-1',
          className
        )}
      >
        {clusterTypeLabels[clusterType]}
      </Badge>
    );
  }

  const Icon = iconMap[pillar.icon] || FileText;

  return (
    <Badge 
      variant="outline"
      className={cn(
        'border font-medium transition-colors',
        size === 'sm' ? 'text-xs px-2 py-0.5 gap-1' : 'text-sm px-3 py-1 gap-1.5',
        className
      )}
      style={{ 
        borderColor: pillar.color,
        color: pillar.color,
        backgroundColor: `${pillar.color}10`
      }}
    >
      {showIcon && <Icon className={size === 'sm' ? 'h-3 w-3' : 'h-4 w-4'} />}
      <span>{pillar.title}</span>
      {clusterType === 'pillar' && (
        <span className="ml-1 opacity-70">• Pillar</span>
      )}
    </Badge>
  );
}
