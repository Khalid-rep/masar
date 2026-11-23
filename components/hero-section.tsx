'use client'

import { CalendarDays } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#0f2444]">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute -top-24 -left-24 w-96 h-96 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #27b5c8 0%, transparent 70%)' }}
        />
        <div
          className="absolute bottom-0 right-0 w-72 h-72 rounded-full opacity-5"
          style={{ background: 'radial-gradient(circle, #27b5c8 0%, transparent 70%)' }}
        />
        {/* Subtle grid lines */}
        <svg className="absolute inset-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-16 md:py-24">
        {/* Top bar */}
        <div className="flex justify-end mb-14">
          {/* Date badge */}
          <div className="flex items-center gap-2 bg-white/10 border border-white/20 text-white/80 text-sm px-4 py-2 rounded-full backdrop-blur-sm">
            <CalendarDays className="w-4 h-4 text-[#27b5c8] shrink-0" />
            <span>يوليو 2026</span>
          </div>
        </div>

        {/* Main headline */}
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight text-balance mb-6">
            الاستراتيجية التسويقية
            <br />
            <span className="text-[#27b5c8]">وخطة المحتوى</span>
          </h1>

          <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-2xl">
            عرض احترافي مُعدّ خصيصاً لـ{' '}
            <span className="text-white font-semibold">معهد مسار التمكين العالي للتدريب</span>،
            يتضمن الاستراتيجية التسويقية الشاملة وخطة المحتوى التفصيلية لموسم الصيف وافتتاح فرع الدمام.
          </p>
        </div>

        {/* Stats bar */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/10">
          {[
            { label: 'محاور المحتوى', value: '6' },
            { label: 'قطعة محتوى شهرياً', value: '18-12' },
            { label: 'منصات نشر', value: '5' },
            { label: 'شرائح مستهدفة', value: '5' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-white/5 hover:bg-white/10 transition-colors px-6 py-5 text-center"
            >
              <div className="text-2xl md:text-3xl font-bold text-[#27b5c8] mb-1">{stat.value}</div>
              <div className="text-white/60 text-xs md:text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
