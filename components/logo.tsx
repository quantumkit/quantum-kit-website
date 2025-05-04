'use client';

import { useTheme } from 'next-themes';

export default function Logo() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className="flex items-center gap-2">
      <div className="relative w-8 h-8">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-6 h-6 rounded-full border-2 border-primary animate-pulse"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-3 h-3 bg-primary rounded-full"></div>
        </div>
        <div className="absolute inset-0">
          <div className="w-1 h-1 bg-primary rounded-full absolute top-1 left-1 animate-ping"></div>
          <div
            className="w-1 h-1 bg-primary rounded-full absolute bottom-1 right-2 animate-ping"
            style={{ animationDelay: '0.5s' }}
          ></div>
          <div
            className="w-1 h-1 bg-primary rounded-full absolute top-2 right-1 animate-ping"
            style={{ animationDelay: '1s' }}
          ></div>
        </div>
      </div>
      <div className="font-bold text-xl tracking-tight text-primary">
        QUANTUM<span className="text-foreground">KIT</span>
      </div>
    </div>
  );
}
