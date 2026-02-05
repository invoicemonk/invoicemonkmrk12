import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, FileText, Receipt, CreditCard, Calculator, FileCheck, Wallet } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CountrySelector } from '@/components/CountrySelector';
import logo from '@/assets/invoicemonk-logo.png';
const products = [
  { 
    name: 'Invoicing', 
    href: '/invoicing', 
    icon: FileText, 
    description: 'Professional invoicing with compliance',
    status: 'available'
  },
  { 
    name: 'Expenses', 
    href: '/expenses', 
    icon: Wallet, 
    description: 'Track and manage expenses',
    status: 'available'
  },
  { 
    name: 'Payments', 
    href: '/payments', 
    icon: CreditCard, 
    description: 'Accept and track payments',
    status: 'coming-soon'
  },
  { 
    name: 'Accounting', 
    href: '/accounting', 
    icon: Calculator, 
    description: 'Full-featured accounting',
    status: 'available'
  },
  { 
    name: 'Estimates', 
    href: '/estimates', 
    icon: FileCheck, 
    description: 'Create professional estimates',
    status: 'coming-soon'
  },
  { 
    name: 'Receipts', 
    href: '/receipts', 
    icon: Receipt, 
    description: 'Digital receipt management',
    status: 'coming-soon'
  },
];

const navLinks = [
  { name: 'Guides', href: '/guides' },
  { name: 'Blog', href: '/blog' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Why Invoicemonk', href: '/why-invoicemonk' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsProductsOpen(false);
  }, [location]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-card/95 backdrop-blur-md shadow-soft border-b border-border'
            : 'bg-transparent'
        }`}
      >
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 relative z-10">
              <img src={logo} alt="Invoicemonk" className="h-8 lg:h-10 w-auto" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {/* Products Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setIsProductsOpen(true)}
                onMouseLeave={() => setIsProductsOpen(false)}
              >
                <button
                  className={`flex items-center gap-1 text-body-sm font-medium transition-colors duration-200 hover:text-primary ${
                    isProductsOpen ? 'text-primary' : 'text-foreground/80'
                  }`}
                >
                  Products
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isProductsOpen ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {isProductsOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-4"
                    >
                      <div className="bg-card rounded-2xl shadow-soft-xl border border-border p-4 w-[420px]">
                        <div className="grid grid-cols-2 gap-2">
                          {products.map((product) => {
                            const Icon = product.icon;
                            const isAvailable = product.status === 'available';
                            
                            return (
                              <Link
                                key={product.name}
                                to={product.href}
                                className={`flex items-start gap-3 p-3 rounded-xl transition-all duration-200 ${
                                  isAvailable 
                                    ? 'hover:bg-primary/5 group' 
                                    : 'hover:bg-muted/50'
                                }`}
                              >
                                <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center ${
                                  isAvailable 
                                    ? 'bg-primary/10 text-primary' 
                                    : 'bg-muted text-muted-foreground'
                                }`}>
                                  <Icon className="w-5 h-5" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center gap-2">
                                    <span className={`text-body-sm font-medium ${
                                      isAvailable ? 'text-foreground group-hover:text-primary' : 'text-foreground'
                                    }`}>
                                      {product.name}
                                    </span>
                                    {isAvailable ? (
                                      <span className="px-1.5 py-0.5 text-[10px] font-medium rounded-full bg-green-100 text-green-700">
                                        Available
                                      </span>
                                    ) : (
                                      <span className="px-1.5 py-0.5 text-[10px] font-medium rounded-full bg-muted text-muted-foreground">
                                        Soon
                                      </span>
                                    )}
                                  </div>
                                  <p className="text-caption text-muted-foreground mt-0.5 truncate">
                                    {product.description}
                                  </p>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`text-body-sm font-medium transition-colors duration-200 hover:text-primary ${
                    location.pathname === link.href
                      ? 'text-primary'
                      : 'text-foreground/80'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <CountrySelector variant="compact" />
              <a
                href="https://app.invoicemonk.com/login"
                className="text-body-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
              >
                Log in
              </a>
              <Button asChild className="rounded-full px-6 shadow-soft hover:shadow-soft-md transition-all duration-300 hover:-translate-y-0.5">
                <a href="https://app.invoicemonk.com/signup">Get Started</a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-foreground/20 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="fixed top-0 right-0 bottom-0 w-[min(80vw,320px)] bg-card shadow-soft-xl z-50 lg:hidden overflow-y-auto"
            >
              <div className="flex flex-col h-full pt-20 pb-8 px-6">
                {/* Products Section */}
                <div className="mb-4">
                  <h4 className="text-caption font-semibold text-muted-foreground uppercase tracking-wider mb-3 px-4">
                    Products
                  </h4>
                  <nav className="space-y-1">
                    {products.map((product, index) => {
                      const Icon = product.icon;
                      const isAvailable = product.status === 'available';
                      
                      return (
                        <motion.div
                          key={product.name}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.03 + 0.1 }}
                        >
                          <Link
                            to={product.href}
                            className={`flex items-center gap-3 py-3 px-4 rounded-lg transition-colors ${
                              isAvailable
                                ? 'text-foreground hover:bg-primary/5 hover:text-primary'
                                : 'text-muted-foreground hover:bg-muted'
                            }`}
                          >
                            <Icon className="w-5 h-5" />
                            <span className="text-body font-medium">{product.name}</span>
                            {isAvailable ? (
                              <span className="ml-auto px-2 py-0.5 text-[10px] font-medium rounded-full bg-green-100 text-green-700">
                                Available
                              </span>
                            ) : (
                              <span className="ml-auto px-2 py-0.5 text-[10px] font-medium rounded-full bg-muted text-muted-foreground">
                                Soon
                              </span>
                            )}
                          </Link>
                        </motion.div>
                      );
                    })}
                  </nav>
                </div>

                {/* Other Links */}
                <div className="mb-4">
                  <h4 className="text-caption font-semibold text-muted-foreground uppercase tracking-wider mb-3 px-4">
                    Company
                  </h4>
                  <nav className="space-y-1">
                    {navLinks.map((link, index) => (
                      <motion.div
                        key={link.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: (products.length + index) * 0.03 + 0.1 }}
                      >
                        <Link
                          to={link.href}
                          className={`block py-3 px-4 rounded-lg text-body font-medium transition-colors ${
                            location.pathname === link.href
                              ? 'bg-primary/10 text-primary'
                              : 'text-foreground hover:bg-muted'
                          }`}
                        >
                          {link.name}
                        </Link>
                      </motion.div>
                    ))}
                  </nav>
                </div>

                <div className="mt-auto flex flex-col gap-3">
                  {/* Country Selector for Mobile */}
                  <div className="flex items-center justify-center pb-4 border-b border-border">
                    <CountrySelector variant="default" />
                  </div>
                  <a
                    href="https://app.invoicemonk.com/login"
                    className="text-center py-3 text-body font-medium text-foreground hover:text-primary transition-colors"
                  >
                    Log in
                  </a>
                  <Button asChild className="w-full rounded-full">
                    <a href="https://app.invoicemonk.com/signup">Get Started</a>
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
