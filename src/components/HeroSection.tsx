import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Play, Check, ArrowRight, Zap, Shield, Clock } from "lucide-react";
import InvoiceMockup from "./InvoiceMockup";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const words = ["Simple", "Fast", "Powerful"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const trustBadges = [
    { icon: Zap, text: "Lightning Fast" },
    { icon: Shield, text: "Bank-Grade Security" },
    { icon: Clock, text: "24/7 Support" },
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Content */}
          <div
            className={`space-y-8 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent border border-primary/20 text-sm font-medium text-accent-foreground">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              New: AI-powered invoice generation
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
                Invoicing Made{" "}
                <span className="relative inline-block">
                  <span
                    key={currentWordIndex}
                    className="text-gradient inline-block animate-fade-in"
                  >
                    {words[currentWordIndex]}
                  </span>
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary/50 rounded-full" />
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-lg leading-relaxed">
                Create professional invoices in seconds. Track payments, automate reminders, and get paid faster with Invoicemonk.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl shadow-primary/25 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/30 hover:scale-105 group text-base px-8"
              >
                Start Free
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-border hover:border-primary/50 hover:bg-accent transition-all duration-300 group text-base px-8"
              >
                <Play className="mr-2 h-4 w-4 text-primary transition-transform group-hover:scale-110" />
                Watch Demo
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="pt-4 space-y-4">
              <div className="flex flex-wrap gap-6">
                {trustBadges.map((badge, index) => (
                  <div
                    key={badge.text}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <badge.icon className="h-4 w-4 text-primary" />
                    <span>{badge.text}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-gradient-to-br from-muted to-muted-foreground/20 border-2 border-background flex items-center justify-center text-xs font-medium text-muted-foreground"
                    >
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <div className="text-sm">
                  <span className="font-semibold text-foreground">10,000+</span>
                  <span className="text-muted-foreground"> businesses trust us</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Interactive Visual */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <InvoiceMockup />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
