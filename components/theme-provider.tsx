'use client';

import type React from 'react';

import { createContext, useContext, useEffect, useState } from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { motion, AnimatePresence } from 'framer-motion';

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: string;
  enableSystem?: boolean;
  attribute?: string;
  disableTransitionOnChange?: boolean;
};

export function ThemeProvider({
  children,
  defaultTheme = 'system',
  enableSystem = true,
  attribute = 'class',
  disableTransitionOnChange = false,
  ...props
}: ThemeProviderProps) {
  const [themeChangeEffect, setThemeChangeEffect] = useState<{
    active: boolean;
    theme: string;
    position: { x: number; y: number };
  } | null>(null);

  // Listen for theme changes and trigger the ripple effect
  useEffect(() => {
    const handleThemeChange = (e: CustomEvent) => {
      if (e.detail && e.detail.theme && e.detail.position) {
        setThemeChangeEffect({
          active: true,
          theme: e.detail.theme,
          position: e.detail.position,
        });

        // Reset after animation completes
        setTimeout(() => {
          setThemeChangeEffect(null);
        }, 1000);
      }
    };

    window.addEventListener('themeChange' as any, handleThemeChange);
    return () => {
      window.removeEventListener('themeChange' as any, handleThemeChange);
    };
  }, []);

  return (
    <NextThemesProvider
      attribute={attribute}
      defaultTheme={defaultTheme}
      enableSystem={enableSystem}
      disableTransitionOnChange={disableTransitionOnChange}
      {...props}
    >
      <AnimatePresence>
        {themeChangeEffect && themeChangeEffect.active && (
          <motion.div
            key="theme-ripple"
            initial={{ scale: 0, opacity: 0.8 }}
            animate={{ scale: 100, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className={`fixed rounded-full z-[9999] pointer-events-none ${
              themeChangeEffect.theme === 'dark' ? 'bg-black' : 'bg-white'
            }`}
            style={{
              top: themeChangeEffect.position.y,
              left: themeChangeEffect.position.x,
              transformOrigin: 'center center',
            }}
          />
        )}
      </AnimatePresence>
      <div className="theme-transition">{children}</div>
    </NextThemesProvider>
  );
}

export const ThemeContext = createContext({
  theme: '',
  setTheme: (theme: string) => {},
});

export const useThemeContext = () => useContext(ThemeContext);
