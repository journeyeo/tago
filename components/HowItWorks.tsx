'use client';

import { useLocale } from '@/contexts/LocaleContext';

export default function HowItWorks() {
  const { t } = useLocale();

  return (
    <section id="how-it-works" className="bg-white py-24 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 text-gold-600 text-sm font-bold uppercase tracking-widest mb-4">
            <div className="w-8 h-px bg-gold-500" />
            How It Works
            <div className="w-8 h-px bg-gold-500" />
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-navy-900 mb-4 tracking-tight">
            {t.howItWorks.title}
          </h2>
          <p className="text-gray-500 text-lg">{t.howItWorks.subtitle}</p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-12 left-[calc(16.67%+24px)] right-[calc(16.67%+24px)] h-px bg-gradient-to-r from-gold-500/30 via-gold-500/60 to-gold-500/30" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {t.howItWorks.steps.map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center relative">
                {/* Step number circle */}
                <div className="relative mb-8">
                  <div className="w-24 h-24 rounded-full bg-navy-900 flex flex-col items-center justify-center relative z-10 shadow-lg shadow-navy-900/30">
                    <span className="text-gold-400 text-xs font-bold tracking-widest">STEP</span>
                    <span className="text-white text-3xl font-black leading-none">{step.step}</span>
                  </div>
                  {/* Glow */}
                  <div className="absolute inset-0 rounded-full bg-gold-500/20 blur-xl scale-150 -z-10" />
                </div>

                <h3 className="text-xl font-bold text-navy-900 mb-3">{step.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm md:text-base">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* LINE icon and hint */}
        <div className="mt-16 flex flex-col items-center gap-3">
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <svg className="w-4 h-4 text-[#06C755]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
            </svg>
            LINE ID: @tago
          </div>
        </div>
      </div>
    </section>
  );
}
