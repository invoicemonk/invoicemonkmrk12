import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { 
  ContentIntent, 
  ContentStage, 
  ExperienceLevel,
  intentConfig, 
  stageConfig, 
  experienceConfig 
} from '@/data/contentIntents';
import { Filter, BookOpen, Target, GraduationCap, X } from 'lucide-react';

interface IntentFilterProps {
  selectedIntent: ContentIntent | null;
  selectedStage: ContentStage | null;
  selectedExperience: ExperienceLevel | null;
  onIntentChange: (intent: ContentIntent | null) => void;
  onStageChange: (stage: ContentStage | null) => void;
  onExperienceChange: (level: ExperienceLevel | null) => void;
  onClearAll: () => void;
}

export function IntentFilter({
  selectedIntent,
  selectedStage,
  selectedExperience,
  onIntentChange,
  onStageChange,
  onExperienceChange,
  onClearAll,
}: IntentFilterProps) {
  const hasActiveFilters = selectedIntent || selectedStage || selectedExperience;

  return (
    <div className="flex flex-wrap items-center gap-2">
      {/* Intent Filter */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="sm" className="gap-2">
            <BookOpen className="h-4 w-4" />
            {selectedIntent ? intentConfig[selectedIntent].label : 'Content Type'}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="w-56">
          <DropdownMenuLabel>What do you want to do?</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup 
            value={selectedIntent || ''} 
            onValueChange={(v) => onIntentChange(v ? v as ContentIntent : null)}
          >
            <DropdownMenuRadioItem value="">All Types</DropdownMenuRadioItem>
            {Object.entries(intentConfig).map(([key, config]) => (
              <DropdownMenuRadioItem key={key} value={key}>
                <div>
                  <span>{config.label}</span>
                  <p className="text-xs text-muted-foreground">{config.description}</p>
                </div>
              </DropdownMenuRadioItem>
            ))}
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Stage Filter */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="sm" className="gap-2">
            <Target className="h-4 w-4" />
            {selectedStage ? stageConfig[selectedStage].label : 'Journey Stage'}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="w-56">
          <DropdownMenuLabel>Where are you in your journey?</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup 
            value={selectedStage || ''} 
            onValueChange={(v) => onStageChange(v ? v as ContentStage : null)}
          >
            <DropdownMenuRadioItem value="">All Stages</DropdownMenuRadioItem>
            {Object.entries(stageConfig).map(([key, config]) => (
              <DropdownMenuRadioItem key={key} value={key}>
                <div>
                  <span>{config.label}</span>
                  <p className="text-xs text-muted-foreground">{config.description}</p>
                </div>
              </DropdownMenuRadioItem>
            ))}
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Experience Filter */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="sm" className="gap-2">
            <GraduationCap className="h-4 w-4" />
            {selectedExperience ? experienceConfig[selectedExperience].label : 'Experience Level'}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="w-56">
          <DropdownMenuLabel>Your experience level</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup 
            value={selectedExperience || ''} 
            onValueChange={(v) => onExperienceChange(v ? v as ExperienceLevel : null)}
          >
            <DropdownMenuRadioItem value="">All Levels</DropdownMenuRadioItem>
            {Object.entries(experienceConfig).map(([key, config]) => (
              <DropdownMenuRadioItem key={key} value={key}>
                <div>
                  <span>{config.label}</span>
                  <p className="text-xs text-muted-foreground">{config.description}</p>
                </div>
              </DropdownMenuRadioItem>
            ))}
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Clear Filters */}
      {hasActiveFilters && (
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={onClearAll}
          className="gap-1 text-muted-foreground"
        >
          <X className="h-4 w-4" />
          Clear
        </Button>
      )}
    </div>
  );
}

interface IntentBadgeProps {
  intent: ContentIntent;
  size?: 'sm' | 'default';
}

export function IntentBadge({ intent, size = 'default' }: IntentBadgeProps) {
  const config = intentConfig[intent];
  return (
    <Badge 
      variant="secondary" 
      className={`${config.color} ${size === 'sm' ? 'text-xs px-1.5 py-0' : ''}`}
    >
      {config.label}
    </Badge>
  );
}

interface ExperienceBadgeProps {
  level: ExperienceLevel;
  size?: 'sm' | 'default';
}

export function ExperienceBadge({ level, size = 'default' }: ExperienceBadgeProps) {
  const config = experienceConfig[level];
  const colors: Record<ExperienceLevel, string> = {
    beginner: 'bg-green-500/10 text-green-600',
    intermediate: 'bg-yellow-500/10 text-yellow-600',
    advanced: 'bg-red-500/10 text-red-600',
  };
  
  return (
    <Badge 
      variant="secondary" 
      className={`${colors[level]} ${size === 'sm' ? 'text-xs px-1.5 py-0' : ''}`}
    >
      {config.label}
    </Badge>
  );
}
