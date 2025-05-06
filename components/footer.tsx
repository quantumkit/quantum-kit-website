import Link from 'next/link';
import { Github, Twitter, Linkedin, Instagram } from 'lucide-react';
import Logo from './logo';

export default function Footer() {
  return (
    <footer className="bg-muted/50 py-12 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <Logo />
            </Link>
            <p className="text-foreground/70 mb-4">
              Transforming ideas into digital reality with cutting-edge
              technology solutions.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://github.com/quantumkit/"
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="#"
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="https://www.linkedin.com/company/quantamkit/"
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="#"
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#services"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  Mobile App Development
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  AI Integration
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  Custom Software
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#about"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-foreground/70">
                123 Innovation Drive
                <br />
                Tech City, CA 94103
              </li>
              <li>
                <Link
                  href="mailto:info@quantumkit.co"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  info@quantumkit.co
                </Link>
              </li>
              <li>
                <Link
                  href="tel:+251974894532"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  +251-974-894532
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 mt-12 pt-8 text-center text-foreground/60 text-sm">
          <p>
            &copy; {new Date().getFullYear()} QuantumKit. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
