'use client';

import { useLocale } from '@/contexts/LocaleContext';

export default function Footer() {
  const { t } = useLocale();

  return (
    <footer className="bg-navy-900 border-t border-white/5 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo + tagline */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center">
              <span className="relative text-white font-black text-lg tracking-widest">
                TAGO
              <svg className="absolute -bottom-1 left-0 w-full" height="5" viewBox="0 0 60 5" fill="none" preserveAspectRatio="none">
                  <line x1="0" y1="1" x2="60" y2="1" stroke="#D4956A" strokeWidth="1.2" strokeDasharray="5 3" strokeLinecap="round"/>
                  <line x1="0" y1="4" x2="60" y2="4" stroke="#D4956A" strokeWidth="1.2" strokeDasharray="5 3" strokeLinecap="round"/>
                </svg>
              </span>
            </div>
            <p className="text-gray-600 text-sm">{t.footer.tagline}</p>
          </div>

          {/* Nav links */}
          <nav className="flex items-center gap-6">
            {[
              { href: '#why', label: t.nav.why },
              { href: '#pricing', label: t.nav.pricing },
              { href: '#how-it-works', label: t.nav.howItWorks },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-600 hover:text-gray-300 text-sm transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-gray-700 text-xs">{t.footer.company}</p>
          <p className="text-gray-700 text-xs">{t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
}
