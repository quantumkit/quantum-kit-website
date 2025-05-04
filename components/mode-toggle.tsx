'use client';
import { useState, useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Laptop } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef(null);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleThemeChange = newTheme => {
    // Get button position for ripple effect
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      const position = {
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
      };

      // Dispatch custom event with theme and position
      const themeChangeEvent = new CustomEvent('themeChange', {
        detail: { theme: newTheme, position },
      });
      window.dispatchEvent(themeChangeEvent);
    }

    setTheme(newTheme);
    setTimeout(() => setIsOpen(false), 200);
  };

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="rounded-full w-10 h-10">
        <span className="sr-only">Toggle theme</span>
      </Button>
    );
  }

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          ref={buttonRef}
          variant="ghost"
          size="icon"
          className="relative rounded-full w-10 h-10 overflow-hidden border border-primary/20 hover:border-primary/40 transition-colors"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={theme}
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 30, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              {theme === 'light' ? (
                <Sun className="h-5 w-5 text-primary" />
              ) : theme === 'dark' ? (
                <Moon className="h-5 w-5 text-primary" />
              ) : (
                <Laptop className="h-5 w-5 text-primary" />
              )}
            </motion.div>
          </AnimatePresence>
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="mt-2 min-w-[8rem] rounded-xl overflow-hidden p-1"
      >
        <AnimatePresence>
          {isOpen && (
            <>
              <ThemeMenuItem
                icon={<Sun className="mr-2 h-4 w-4" />}
                theme="light"
                currentTheme={theme}
                setTheme={handleThemeChange}
              />
              <ThemeMenuItem
                icon={<Moon className="mr-2 h-4 w-4" />}
                theme="dark"
                currentTheme={theme}
                setTheme={handleThemeChange}
              />
              <ThemeMenuItem
                icon={<Laptop className="mr-2 h-4 w-4" />}
                theme="system"
                currentTheme={theme}
                setTheme={handleThemeChange}
              />
            </>
          )}
        </AnimatePresence>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function ThemeMenuItem({ icon, theme, currentTheme, setTheme }) {
  const isActive = currentTheme === theme;

  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 10 }}
      transition={{ duration: 0.15 }}
    >
      <DropdownMenuItem
        className={`flex items-center gap-2 rounded-lg capitalize ${isActive ? 'bg-primary/10 text-primary' : ''}`}
        onClick={() => setTheme(theme)}
      >
        <div className="relative">
          {icon}
          {isActive && (
            <motion.div
              layoutId="activeIndicator"
              className="absolute inset-0 rounded-full"
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0.8, 1.2, 1],
              }}
              transition={{ duration: 0.5 }}
            />
          )}
        </div>
        {theme}
        {isActive && (
          <motion.div
            layoutId="activeTheme"
            className="ml-auto h-1.5 w-1.5 rounded-full bg-primary"
          />
        )}
      </DropdownMenuItem>
    </motion.div>
  );
}
