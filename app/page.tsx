'use client'

import { useState } from 'react'
import { NavBar, type PageId } from '@/components/nav-bar'
import { PageMarketingStrategy } from '@/components/page-marketing-strategy'
import { PageContentStrategy } from '@/components/page-content-strategy'
import { PageContentPlan } from '@/components/page-content-plan'

export default function Page() {
  const [activePage, setActivePage] = useState<PageId>('marketing-strategy')

  return (
    <div dir="rtl" className="min-h-screen font-sans bg-[#f4f8fc]">
      <NavBar activePage={activePage} onNavigate={setActivePage} />

      <main>
        {activePage === 'marketing-strategy' && <PageMarketingStrategy />}
        {activePage === 'content-strategy' && <PageContentStrategy />}
        {activePage === 'content-plan' && <PageContentPlan />}
      </main>

      <footer className="bg-[#0f2444] text-white/60 py-8 px-6 mt-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <div className="bg-white rounded-lg p-1.5 shrink-0">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-512-cropped-spaced-YrUX18yx4UjcxITy4y6kCMZe8hoBmy.png"
              alt="شعار معهد مسار التمكين"
              className="h-8 w-auto object-contain"
            />
          </div>
          <p className="text-center text-xs">
            هذا المستند سري وُعدّ خصيصاً لـ معهد مسار التمكين العالي للتدريب — يوليو 2026
          </p>
        </div>
      </footer>
    </div>
  )
}
