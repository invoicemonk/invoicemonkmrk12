import { Check, DollarSign, FileText, Send } from "lucide-react";

const InvoiceMockup = () => {
  return (
    <div className="relative">
      {/* Main Invoice Card */}
      <div className="relative bg-card rounded-2xl shadow-2xl border border-border p-6 sm:p-8 animate-float transition-transform duration-300 hover:scale-[1.02]">
        {/* Invoice Header */}
        <div className="flex justify-between items-start mb-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <FileText className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Invoice</p>
                <p className="text-lg font-bold text-foreground">#INV-2024-001</p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent">
            <Check className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs font-medium text-primary">Paid</span>
          </div>
        </div>

        {/* Invoice Details */}
        <div className="space-y-4 mb-6">
          <div className="flex justify-between items-center py-3 border-b border-border">
            <span className="text-sm text-muted-foreground">Client</span>
            <span className="text-sm font-medium text-foreground">Acme Corporation</span>
          </div>
          <div className="flex justify-between items-center py-3 border-b border-border">
            <span className="text-sm text-muted-foreground">Due Date</span>
            <span className="text-sm font-medium text-foreground">Feb 15, 2024</span>
          </div>
          <div className="flex justify-between items-center py-3">
            <span className="text-sm text-muted-foreground">Amount</span>
            <span className="text-2xl font-bold text-foreground">$2,450.00</span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="space-y-2">
          <div className="flex justify-between text-xs">
            <span className="text-muted-foreground">Payment Progress</span>
            <span className="font-medium text-primary">100%</span>
          </div>
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full transition-all duration-1000"
              style={{ width: "100%" }}
            />
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      {/* Success Notification */}
      <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 bg-card rounded-xl shadow-lg border border-border p-3 sm:p-4 animate-float-delayed z-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
            <Check className="w-5 h-5 text-primary" />
          </div>
          <div>
            <p className="text-xs font-medium text-foreground">Payment Received</p>
            <p className="text-xs text-muted-foreground">Just now</p>
          </div>
        </div>
      </div>

      {/* Dollar Badge */}
      <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/80 shadow-lg flex items-center justify-center animate-float-slow z-10">
        <DollarSign className="w-7 h-7 sm:w-8 sm:h-8 text-primary-foreground" />
      </div>

      {/* Send Badge */}
      <div className="absolute top-1/2 -right-3 sm:-right-6 transform -translate-y-1/2 w-12 h-12 rounded-xl bg-card shadow-lg border border-border flex items-center justify-center animate-bounce-gentle z-10">
        <Send className="w-5 h-5 text-primary" />
      </div>

      {/* Decorative Dots */}
      <div className="absolute -top-8 left-1/4 w-3 h-3 rounded-full bg-primary/30 animate-pulse" />
      <div className="absolute -bottom-6 right-1/4 w-2 h-2 rounded-full bg-primary/40 animate-pulse" style={{ animationDelay: "0.5s" }} />
      <div className="absolute top-1/4 -left-8 w-4 h-4 rounded-full bg-primary/20 animate-pulse" style={{ animationDelay: "1s" }} />
    </div>
  );
};

export default InvoiceMockup;
