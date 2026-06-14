'use client';

import { useLocale } from '@/contexts/LocaleContext';
import LineButton from './LineButton';

export default function Hero() {
  const { t } = useLocale();

  return (
    <section className="relative min-h-screen bg-[#FAF8F5] flex items-center justify-center overflow-hidden">
      {/* Warm glow blobs */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/4 w-[400px] h-[400px] bg-gold-300/15 rounded-full blur-3xl pointer-events-none" />

      {/* Subtle grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />

      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-2.5 bg-gold-500/15 border border-gold-500/40 text-gold-600 text-sm font-semibold px-5 py-2 rounded-full mb-10">
          <span className="w-2 h-2 bg-gold-500 rounded-full animate-pulse-slow" />
          {t.hero.badge}
        </div>

        {/* Title */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-navy-900 mb-6 leading-tight whitespace-pre-line tracking-tight">
          {t.hero.title}
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-500 mb-12 whitespace-pre-line leading-relaxed font-medium">
          {t.hero.subtitle}
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <LineButton size="lg" label={t.hero.cta} />
          <a
            href="#why"
            className="
              inline-flex items-center gap-2 px-8 py-4 rounded-full
              border border-navy-700/30 text-navy-800 font-semibold text-base
              hover:bg-navy-900/5 hover:border-navy-700/60
              transition-all duration-300
            "
          >
            {t.nav.why}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>

        <p className="text-gray-400 text-sm font-medium">{t.hero.ctaSub}</p>
      </div>

      {/* Scroll indicator */}
      <a
        href="#why"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-300 hover:text-gray-500 transition-colors"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-gray-300 to-transparent" />
      </a>
    </section>
  );
}
