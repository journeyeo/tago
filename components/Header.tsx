'use client';

import { useState, useEffect } from 'react';
import { useLocale, type Locale } from '@/contexts/LocaleContext';
import LineButton from './LineButton';

export default function Header() {
  const { locale, setLocale, t } = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { href: '#why', label: t.nav.why },
    { href: '#pricing', label: t.nav.pricing },
    { href: '#how-it-works', label: t.nav.howItWorks },
  ];

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-300
        ${scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm shadow-black/5'
          : 'bg-transparent'
        }
      `}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center group">
            <span className="relative text-navy-900 font-black text-xl tracking-widest">
              TAGO
              <svg className="absolute -bottom-1 left-0 w-full" height="5" viewBox="0 0 60 5" fill="none" preserveAspectRatio="none">
                <line x1="0" y1="1" x2="60" y2="1" stroke="#D4956A" strokeWidth="1.2" strokeDasharray="5 3" strokeLinecap="round"/>
                <line x1="0" y1="4" x2="60" y2="4" stroke="#D4956A" strokeWidth="1.2" strokeDasharray="5 3" strokeLinecap="round"/>
              </svg>
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-500 hover:text-navy-900 text-sm font-medium transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right controls */}
          <div className="flex items-center gap-3">
            {/* Language switcher */}
            <div className="flex items-center bg-black/5 rounded-full p-0.5">
              {(['ja', 'ko', 'en'] as Locale[]).map((lang) => (
                <button
                  key={lang}
                  type="button"
                  onClick={() => setLocale(lang)}
                  className={`
                    px-3 py-1 rounded-full text-xs font-bold uppercase transition-all duration-200
                    ${locale === lang
                      ? 'bg-gold-500 text-navy-900'
                      : 'text-gray-400 hover:text-navy-900'
                    }
                  `}
                >
                  {lang}
                </button>
              ))}
            </div>

            {/* LINE CTA - desktop only */}
            <div className="hidden md:block">
              <LineButton size="sm" label={t.nav.contact} />
            </div>

            {/* Hamburger - mobile only */}
            <button
              className="md:hidden text-navy-800 p-1"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                {menuOpen
                  ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                }
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border border-black/5 shadow-lg rounded-2xl mb-4 p-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-gray-600 hover:text-navy-900 py-2 text-base font-medium border-b border-black/5 last:border-0"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <LineButton size="default" label={t.nav.contact} />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
