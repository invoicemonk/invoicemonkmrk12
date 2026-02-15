import { useState } from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

interface HelpSearchProps {
  onSearch: (query: string) => void;
}

export function HelpSearch({ onSearch }: HelpSearchProps) {
  const [query, setQuery] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="relative max-w-xl mx-auto">
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
      <Input
        type="text"
        placeholder="Search help guides..."
        value={query}
        onChange={handleChange}
        className="pl-12 h-12 rounded-xl border-border bg-card text-base"
      />
    </div>
  );
}
