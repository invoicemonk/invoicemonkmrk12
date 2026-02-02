import { motion, useReducedMotion } from 'framer-motion';
import { 
  FileText, DollarSign, Calendar, CheckCircle, Clock,
  Terminal, Code, Webhook, Shield, Lock, FileCheck,
  Briefcase, Globe, BarChart3, Users,
  Building2, TrendingUp, Receipt, FolderOpen, Smartphone,
  Heart, Layers, Zap
} from 'lucide-react';
import { cn } from '@/lib/utils';

// Mini Invoice Card
export function FloatingInvoiceCard({ 
  className, 
  delay = 0,
  variant = 'default'
}: { 
  className?: string; 
  delay?: number;
  variant?: 'default' | 'paid' | 'pending';
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ 
        opacity: 1, 
        scale: 1,
        y: shouldReduceMotion ? 0 : [0, -8, 0]
      }}
      transition={{
        opacity: { duration: 0.6, delay },
        scale: { duration: 0.6, delay },
        y: { duration: 5, repeat: Infinity, ease: 'easeInOut', delay }
      }}
      className={cn(
        'bg-card/95 backdrop-blur-sm rounded-xl border border-border shadow-soft-lg p-4 w-48',
        className
      )}
    >
      <div className="flex items-center gap-2 mb-3">
        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
          <FileText className="w-4 h-4 text-primary" />
        </div>
        <div>
          <p className="text-xs font-medium text-foreground">Invoice #1247</p>
          <p className="text-[10px] text-muted-foreground">Due: Feb 15</p>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-lg font-bold text-foreground">$2,450</span>
        <span className={cn(
          'text-[10px] px-2 py-0.5 rounded-full font-medium',
          variant === 'paid' && 'bg-green-100 text-green-700',
          variant === 'pending' && 'bg-yellow-100 text-yellow-700',
          variant === 'default' && 'bg-primary/10 text-primary'
        )}>
          {variant === 'paid' ? 'Paid' : variant === 'pending' ? 'Pending' : 'Sent'}
        </span>
      </div>
    </motion.div>
  );
}

// Payment Notification
export function FloatingPaymentBadge({ 
  className, 
  delay = 0 
}: { 
  className?: string; 
  delay?: number;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, x: 20 }}
      animate={{ 
        opacity: 1, 
        scale: 1,
        x: 0,
        y: shouldReduceMotion ? 0 : [0, -6, 0]
      }}
      transition={{
        opacity: { duration: 0.5, delay },
        scale: { duration: 0.5, delay },
        y: { duration: 4, repeat: Infinity, ease: 'easeInOut', delay }
      }}
      className={cn(
        'bg-green-50 border border-green-200 rounded-full px-4 py-2 flex items-center gap-2 shadow-soft-md',
        className
      )}
    >
      <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
        <CheckCircle className="w-4 h-4 text-white" />
      </div>
      <div>
        <p className="text-xs font-medium text-green-800">Payment Received</p>
        <p className="text-[10px] text-green-600">+$1,250.00</p>
      </div>
    </motion.div>
  );
}

// Terminal/Code Snippet
export function FloatingTerminal({ 
  className, 
  delay = 0 
}: { 
  className?: string; 
  delay?: number;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ 
        opacity: 1, 
        scale: 1,
        y: shouldReduceMotion ? 0 : [0, -10, 0]
      }}
      transition={{
        opacity: { duration: 0.6, delay },
        scale: { duration: 0.6, delay },
        y: { duration: 6, repeat: Infinity, ease: 'easeInOut', delay }
      }}
      className={cn(
        'bg-slate-900 rounded-xl border border-slate-700 shadow-soft-xl overflow-hidden w-64',
        className
      )}
    >
      <div className="flex items-center gap-1.5 px-3 py-2 bg-slate-800 border-b border-slate-700">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
        <span className="ml-2 text-[10px] text-slate-400">terminal</span>
      </div>
      <div className="p-3 font-mono text-[10px] leading-relaxed">
        <p className="text-green-400">$ curl -X POST /v1/invoices</p>
        <p className="text-slate-400 mt-1">{"{"}"id": "inv_123", "status": "sent"{"}"}</p>
      </div>
    </motion.div>
  );
}

// API Endpoint Badge
export function FloatingEndpointBadge({ 
  method = 'POST',
  path = '/v1/invoices',
  className, 
  delay = 0 
}: { 
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  path?: string;
  className?: string; 
  delay?: number;
}) {
  const shouldReduceMotion = useReducedMotion();
  const methodColors = {
    GET: 'bg-green-100 text-green-700 border-green-200',
    POST: 'bg-blue-100 text-blue-700 border-blue-200',
    PUT: 'bg-yellow-100 text-yellow-700 border-yellow-200',
    DELETE: 'bg-red-100 text-red-700 border-red-200',
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ 
        opacity: 1, 
        scale: 1,
        y: shouldReduceMotion ? 0 : [0, -6, 0]
      }}
      transition={{
        opacity: { duration: 0.5, delay },
        scale: { duration: 0.5, delay },
        y: { duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay }
      }}
      className={cn(
        'bg-card/95 backdrop-blur-sm rounded-lg border border-border shadow-soft-md px-3 py-2 flex items-center gap-2',
        className
      )}
    >
      <span className={cn('px-2 py-0.5 rounded text-[10px] font-mono font-bold', methodColors[method])}>
        {method}
      </span>
      <code className="text-xs font-mono text-foreground">{path}</code>
    </motion.div>
  );
}

// Shield/Security Badge
export function FloatingSecurityBadge({ 
  label = 'Audit Ready',
  className, 
  delay = 0 
}: { 
  label?: string;
  className?: string; 
  delay?: number;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ 
        opacity: 1, 
        scale: 1,
        y: shouldReduceMotion ? 0 : [0, -8, 0]
      }}
      transition={{
        opacity: { duration: 0.5, delay },
        scale: { duration: 0.5, delay },
        y: { duration: 5, repeat: Infinity, ease: 'easeInOut', delay }
      }}
      className={cn(
        'bg-card/95 backdrop-blur-sm rounded-xl border border-border shadow-soft-lg p-4 flex items-center gap-3',
        className
      )}
    >
      <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
        <Shield className="w-6 h-6 text-green-600" />
      </div>
      <div>
        <p className="text-sm font-semibold text-foreground">{label}</p>
        <p className="text-xs text-muted-foreground">100% Compliant</p>
      </div>
    </motion.div>
  );
}

// Lock Badge
export function FloatingLockBadge({ 
  className, 
  delay = 0 
}: { 
  className?: string; 
  delay?: number;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ 
        opacity: 1, 
        scale: 1,
        y: shouldReduceMotion ? 0 : [0, -6, 0],
        rotate: shouldReduceMotion ? 0 : [0, 2, 0, -2, 0]
      }}
      transition={{
        opacity: { duration: 0.5, delay },
        scale: { duration: 0.5, delay },
        y: { duration: 4, repeat: Infinity, ease: 'easeInOut', delay },
        rotate: { duration: 6, repeat: Infinity, ease: 'easeInOut', delay }
      }}
      className={cn(
        'w-14 h-14 bg-card/95 backdrop-blur-sm rounded-2xl border border-border shadow-soft-lg flex items-center justify-center',
        className
      )}
    >
      <Lock className="w-7 h-7 text-primary" />
    </motion.div>
  );
}

// Chart/Analytics Card
export function FloatingChartCard({ 
  className, 
  delay = 0 
}: { 
  className?: string; 
  delay?: number;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ 
        opacity: 1, 
        scale: 1,
        y: shouldReduceMotion ? 0 : [0, -8, 0]
      }}
      transition={{
        opacity: { duration: 0.6, delay },
        scale: { duration: 0.6, delay },
        y: { duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay }
      }}
      className={cn(
        'bg-card/95 backdrop-blur-sm rounded-xl border border-border shadow-soft-lg p-4 w-44',
        className
      )}
    >
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-medium text-muted-foreground">Revenue</span>
        <TrendingUp className="w-4 h-4 text-green-500" />
      </div>
      <p className="text-xl font-bold text-foreground mb-2">$12,450</p>
      <div className="flex gap-1 h-8 items-end">
        {[40, 60, 45, 80, 65, 90, 75].map((height, i) => (
          <motion.div
            key={i}
            initial={{ height: 0 }}
            animate={{ height: `${height}%` }}
            transition={{ duration: 0.5, delay: delay + i * 0.1 }}
            className="flex-1 bg-primary/20 rounded-t"
          />
        ))}
      </div>
    </motion.div>
  );
}

// Mobile Device
export function FloatingMobileDevice({ 
  className, 
  delay = 0 
}: { 
  className?: string; 
  delay?: number;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
      animate={{ 
        opacity: 1, 
        scale: 1,
        rotate: 0,
        y: shouldReduceMotion ? 0 : [0, -8, 0]
      }}
      transition={{
        opacity: { duration: 0.6, delay },
        scale: { duration: 0.6, delay },
        rotate: { duration: 0.6, delay },
        y: { duration: 5, repeat: Infinity, ease: 'easeInOut', delay }
      }}
      className={cn(
        'bg-slate-800 rounded-3xl border-4 border-slate-700 shadow-soft-xl p-2 w-36',
        className
      )}
    >
      <div className="bg-card rounded-2xl p-3">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-6 h-6 rounded bg-primary/10 flex items-center justify-center">
            <FileText className="w-3 h-3 text-primary" />
          </div>
          <span className="text-[10px] font-medium text-foreground">Quick Invoice</span>
        </div>
        <div className="space-y-1.5">
          <div className="h-2 bg-muted rounded w-full" />
          <div className="h-2 bg-muted rounded w-3/4" />
          <div className="h-6 bg-primary rounded mt-2 flex items-center justify-center">
            <span className="text-[8px] text-white font-medium">Send</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Calendar/Due Date Badge
export function FloatingCalendarBadge({ 
  className, 
  delay = 0 
}: { 
  className?: string; 
  delay?: number;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ 
        opacity: 1, 
        scale: 1,
        y: shouldReduceMotion ? 0 : [0, -6, 0]
      }}
      transition={{
        opacity: { duration: 0.5, delay },
        scale: { duration: 0.5, delay },
        y: { duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay }
      }}
      className={cn(
        'bg-card/95 backdrop-blur-sm rounded-xl border border-border shadow-soft-md p-3 flex items-center gap-3',
        className
      )}
    >
      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
        <Calendar className="w-5 h-5 text-primary" />
      </div>
      <div>
        <p className="text-xs font-medium text-foreground">Due Today</p>
        <p className="text-[10px] text-muted-foreground">2 invoices</p>
      </div>
    </motion.div>
  );
}

// Immutable Record Stamp
export function FloatingImmutableStamp({ 
  className, 
  delay = 0 
}: { 
  className?: string; 
  delay?: number;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, rotate: -10 }}
      animate={{ 
        opacity: 1, 
        scale: 1,
        rotate: shouldReduceMotion ? 0 : [-5, 5, -5]
      }}
      transition={{
        opacity: { duration: 0.5, delay },
        scale: { duration: 0.5, delay },
        rotate: { duration: 8, repeat: Infinity, ease: 'easeInOut' }
      }}
      className={cn(
        'border-4 border-green-600 rounded-lg px-4 py-2 bg-green-50/80 backdrop-blur-sm',
        className
      )}
    >
      <p className="text-green-700 font-bold text-sm tracking-wide">IMMUTABLE</p>
      <p className="text-green-600 text-[10px]">Record Verified</p>
    </motion.div>
  );
}

// PDF Download Badge  
export function FloatingPDFBadge({ 
  className, 
  delay = 0 
}: { 
  className?: string; 
  delay?: number;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ 
        opacity: 1, 
        scale: 1,
        y: shouldReduceMotion ? 0 : [0, -6, 0]
      }}
      transition={{
        opacity: { duration: 0.5, delay },
        scale: { duration: 0.5, delay },
        y: { duration: 4, repeat: Infinity, ease: 'easeInOut', delay }
      }}
      className={cn(
        'bg-red-50 border border-red-200 rounded-lg px-3 py-2 flex items-center gap-2 shadow-soft-md',
        className
      )}
    >
      <div className="w-8 h-8 rounded bg-red-500 flex items-center justify-center">
        <span className="text-white text-[10px] font-bold">PDF</span>
      </div>
      <div>
        <p className="text-xs font-medium text-red-800">Download Ready</p>
        <p className="text-[10px] text-red-600">invoice_1247.pdf</p>
      </div>
    </motion.div>
  );
}

// Icon Float (generic animated icon)
export function FloatingIcon({ 
  icon: Icon,
  className, 
  delay = 0,
  size = 'md'
}: { 
  icon: typeof Shield;
  className?: string; 
  delay?: number;
  size?: 'sm' | 'md' | 'lg';
}) {
  const shouldReduceMotion = useReducedMotion();
  const sizeClasses = {
    sm: 'w-10 h-10',
    md: 'w-14 h-14',
    lg: 'w-20 h-20',
  };
  const iconSizes = {
    sm: 'w-5 h-5',
    md: 'w-7 h-7',
    lg: 'w-10 h-10',
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ 
        opacity: 1, 
        scale: 1,
        y: shouldReduceMotion ? 0 : [0, -10, 0]
      }}
      transition={{
        opacity: { duration: 0.5, delay },
        scale: { duration: 0.5, delay },
        y: { duration: 4, repeat: Infinity, ease: 'easeInOut', delay }
      }}
      className={cn(
        'bg-card/90 backdrop-blur-sm rounded-2xl border border-border shadow-soft-lg flex items-center justify-center',
        sizeClasses[size],
        className
      )}
    >
      <Icon className={cn('text-primary', iconSizes[size])} />
    </motion.div>
  );
}
