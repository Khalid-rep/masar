'use client'

export type PageId = 'marketing-strategy' | 'content-strategy' | 'content-plan'

const tabs: { id: PageId; label: string }[] = [
  { id: 'marketing-strategy', label: 'الخطة التسويقية' },
  { id: 'content-strategy', label: 'استراتيجية المحتوى' },
  { id: 'content-plan', label: 'المحتوى' },
]

interface NavBarProps {
  activePage: PageId
  onNavigate: (page: PageId) => void
}

export function NavBar({ activePage, onNavigate }: NavBarProps) {
  return (
    <header
      dir="rtl"
      className="sticky top-0 z-50 w-full bg-white border-b border-[#d0e4f0] shadow-sm"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between gap-4">

        {/* Logo on white background */}
        <div className="shrink-0 flex items-center">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-512-cropped-spaced-YrUX18yx4UjcxITy4y6kCMZe8hoBmy.png"
            alt="معهد مسار التمكين العالي للتدريب"
            className="h-10 w-auto object-contain"
          />
        </div>

        {/* Navigation tabs */}
        <nav aria-label="التنقل بين الأقسام" className="flex items-center gap-1">
          {tabs.map(({ id, label }) => {
            const isActive = activePage === id
            return (
              <button
                key={id}
                onClick={() => onNavigate(id)}
                aria-current={isActive ? 'page' : undefined}
                className={`relative px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-150 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1a3f7a] ${
                  isActive
                    ? 'text-[#1a3f7a] bg-[#e8f4f8]'
                    : 'text-[#5a7a9a] hover:text-[#1a3f7a] hover:bg-[#f4f8fc]'
                }`}
              >
                {label}
                {isActive && (
                  <span
                    className="absolute bottom-0 right-0 left-0 mx-auto h-0.5 rounded-full bg-[#27b5c8] w-3/4"
                    aria-hidden="true"
                  />
                )}
              </button>
            )
          })}
        </nav>
      </div>
    </header>
  )
}
