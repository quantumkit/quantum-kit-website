'use client';

import { Phone, Mail, MapPin, Clock, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { useMobile } from '@/hooks/use-mobile';

export default function ContactBar() {
  const { isMobile, isTablet } = useMobile();

  // Show fewer items on mobile
  const showAddress = !isMobile;
  const showHours = !isMobile && !isTablet;

  return (
    <div className="bg-gradient-to-r from-primary/90 to-cyan-500/90 text-white py-2 shadow-md">
      <div className="content-container">
        <div className="flex flex-wrap justify-between items-center">
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm">
            <Link
              href="tel:+15551234567"
              className="flex items-center gap-1.5 hover:text-white/90 transition-colors group"
            >
              <div className="bg-white/20 rounded-full p-1 group-hover:bg-white/30 transition-colors">
                <Phone className="h-3 w-3" />
              </div>
              <span>+251-974-894532</span>
            </Link>

            <Link
              href="mailto:info@quantumkit.co"
              className="flex items-center gap-1.5 hover:text-white/90 transition-colors group"
            >
              <div className="bg-white/20 rounded-full p-1 group-hover:bg-white/30 transition-colors">
                <Mail className="h-3 w-3" />
              </div>
              <span>info@quantumkit.co</span>
            </Link>

            {showAddress && (
              <div className="flex items-center gap-1.5">
                <div className="bg-white/20 rounded-full p-1">
                  <MapPin className="h-3 w-3" />
                </div>
                <span>123 Innovation Drive, Tech City</span>
              </div>
            )}

            {showHours && (
              <div className="flex items-center gap-1.5">
                <div className="bg-white/20 rounded-full p-1">
                  <Clock className="h-3 w-3" />
                </div>
                <span>Mon-Fri: 9AM-6PM</span>
              </div>
            )}
          </div>

          <Link
            href="#contact"
            className="hidden sm:flex items-center gap-1 text-sm hover:text-white/90 transition-colors"
          >
            <span>Get a Free Consultation</span>
            <ExternalLink className="h-3 w-3" />
          </Link>
        </div>
      </div>
    </div>
  );
}
