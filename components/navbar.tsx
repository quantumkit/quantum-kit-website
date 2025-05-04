// 'use client';

// import { useState, useEffect } from 'react';
// import Link from 'next/link';
// import { ModeToggle } from './mode-toggle';
// import { Menu, X } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import Logo from './logo';

// export default function Navbar() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 10) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <header
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         isScrolled
//           ? 'bg-background/80 backdrop-blur-md shadow-sm'
//           : 'bg-transparent'
//       }`}
//     >
//       <div className="container mx-auto px-4 py-4">
//         <div className="flex items-center justify-between">
//           <Link href="/" className="flex items-center">
//             <Logo />
//           </Link>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex items-center space-x-8">
//             <Link
//               href="#services"
//               className="text-foreground/80 hover:text-primary transition-colors"
//             >
//               Services
//             </Link>
//             <Link
//               href="#projects"
//               className="text-foreground/80 hover:text-primary transition-colors"
//             >
//               Projects
//             </Link>
//             <Link
//               href="#contact"
//               className="text-foreground/80 hover:text-primary transition-colors"
//             >
//               Contact
//             </Link>
//             <div className="relative group">
//               <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/30 to-cyan-500/30 rounded-full blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
//               <ModeToggle />
//             </div>
//           </nav>

//           {/* Mobile Menu Button */}
//           <div className="flex items-center md:hidden">
//             <div className="relative group">
//               <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/30 to-cyan-500/30 rounded-full blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
//               <ModeToggle />
//             </div>
//             <Button
//               variant="ghost"
//               size="icon"
//               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//               className="ml-2"
//             >
//               {mobileMenuOpen ? (
//                 <X className="h-6 w-6" />
//               ) : (
//                 <Menu className="h-6 w-6" />
//               )}
//             </Button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {mobileMenuOpen && (
//         <div className="md:hidden bg-background/95 backdrop-blur-lg">
//           <div className="container mx-auto px-4 py-4">
//             <nav className="flex flex-col space-y-4">
//               <Link
//                 href="#services"
//                 className="text-foreground/80 hover:text-primary transition-colors py-2"
//                 onClick={() => setMobileMenuOpen(false)}
//               >
//                 Services
//               </Link>
//               <Link
//                 href="#projects"
//                 className="text-foreground/80 hover:text-primary transition-colors py-2"
//                 onClick={() => setMobileMenuOpen(false)}
//               >
//                 Projects
//               </Link>
//               <Link
//                 href="#contact"
//                 className="text-foreground/80 hover:text-primary transition-colors py-2"
//                 onClick={() => setMobileMenuOpen(false)}
//               >
//                 Contact
//               </Link>
//             </nav>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }

'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ModeToggle } from './mode-toggle';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Logo from './logo';
import { motion, AnimatePresence } from 'framer-motion';
import ContactBar from './contact-bar';

interface NavbarProps {
  activeSection: string;
}

export default function Navbar({ activeSection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#hero', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  const getNavItemClass = (href: string) => {
    const sectionId = href.replace('#', '');
    const isActive = activeSection === sectionId;

    return `relative px-3 py-2 transition-colors ${
      isActive
        ? 'text-primary font-medium'
        : 'text-foreground/70 hover:text-primary'
    }`;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || mobileMenuOpen
          ? 'bg-background/90 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      {/* Contact Bar */}
      <ContactBar />

      {/* Main Navigation */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map(item => (
              <Link
                key={item.href}
                href={item.href}
                className={getNavItemClass(item.href)}
              >
                {item.label}
                {activeSection === item.href.replace('#', '') && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                )}
              </Link>
            ))}
            <div className="ml-4">
              <ModeToggle />
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <div className="mr-2">
              <ModeToggle />
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="focus-ring"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden bg-background/95 backdrop-blur-lg border-b border-border/10"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-3">
                {navItems.map(item => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`${getNavItemClass(item.href)} py-3`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
