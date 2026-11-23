'use client'

import { Layers, Eye, BookOpen, ShieldCheck, MessageCircle, ArrowLeftRight } from 'lucide-react'

const pillars = [
  {
    icon: Eye,
    title: 'تشويق وافتتاح الدمام',
    percent: 25,
    color: '#1a3f7a',
    desc: 'بناء وعي مبكر وقائمة اهتمام لفرع الدمام قبل وبعد الافتتاح. عد تنازلي، رسائل تشويقية، دعوة للتسجيل.',
  },
  {
    icon: BookOpen,
    title: 'وضوح البرامج',
    percent: 20,
    color: '#27b5c8',
    desc: 'تبسيط المعلومات حول الدبلومات المتاحة (حماية البيئة / السلامة المهنية) وتقليل حيرة الجمهور.',
  },
  {
    icon: Layers,
    title: 'قيمة التطبيق',
    percent: 15,
    color: '#1a3f7a',
    desc: 'إبراز الجانب العملي والمهني في تجربة التدريب — لقطات قاعات ومعامل، الفرق بين النظري والتطبيقي.',
  },
  {
    icon: MessageCircle,
    title: 'اعتراضات الشرائح',
    percent: 15,
    color: '#27b5c8',
    desc: 'معالجة أسباب التردد — هل مناسب بعد الثانوية؟ هل يناسب الموظفين؟ هل البرنامج معتمد؟',
  },
  {
    icon: ShieldCheck,
    title: 'الثقة والاعتماد',
    percent: 10,
    color: '#1a3f7a',
    desc: 'بناء الاطمئنان لدى المتدرب وولي الأمر — اعتمادات رسمية، بيئة مهنية، هوية مؤسسية.',
  },
  {
    icon: ArrowLeftRight,
    title: 'التحويل والمتابعة',
    percent: 15,
    color: '#27b5c8',
    desc: 'دفع الجمهور لاتخاذ خطوة واضحة: واتساب، نموذج اهتمام، تذكير بخطوات التسجيل.',
  },
]

export function ContentPillarsSection() {
  return (
    <section className="py-16 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-10 text-right">
          <div className="inline-flex items-center gap-2 bg-secondary text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            <Layers className="w-4 h-4 text-accent" />
            <span>محاور المحتوى</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-balance">
            المحاور الستة لاستراتيجية المحتوى
          </h2>
          <p className="text-muted-foreground mt-2 max-w-2xl">
            يُنتج الفريق من 12 إلى 18 قطعة محتوى أساسية شهرياً موزعة على هذه المحاور وفق أولوية كل مرحلة.
          </p>
        </div>

        {/* Pillars grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon
            return (
              <div
                key={pillar.title}
                className="bg-background rounded-2xl border border-border p-6 hover:shadow-md transition-shadow group"
              >
                {/* Top row */}
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="rounded-xl p-3"
                    style={{ backgroundColor: pillar.color + '18' }}
                  >
                    <Icon className="w-5 h-5" style={{ color: pillar.color }} />
                  </div>
                  <span
                    className="text-2xl font-bold tabular-nums"
                    style={{ color: pillar.color }}
                  >
                    {pillar.percent}%
                  </span>
                </div>

                <h3 className="text-foreground font-bold text-base mb-2">{pillar.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{pillar.desc}</p>

                {/* Progress bar */}
                <div className="mt-4 h-1.5 bg-border rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all"
                    style={{ width: `${pillar.percent * 4}%`, backgroundColor: pillar.color }}
                  />
                </div>
              </div>
            )
          })}
        </div>

        {/* Content formats summary */}
        <div className="mt-12 bg-[#0f2444] rounded-2xl p-8 text-white">
          <h3 className="text-lg font-bold mb-6 text-white">صيغ المحتوى المقترحة</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3">
            {[
              { label: 'Reels', sub: 'وصول وتحويل' },
              { label: 'Carousel', sub: 'فهم وثقة' },
              { label: 'Static Post', sub: 'إعلانات رسمية' },
              { label: 'Stories', sub: 'تفاعل يومي' },
              { label: 'Short Video', sub: 'انتشار' },
              { label: 'Lead Ad', sub: 'جمع بيانات' },
              { label: 'X Post', sub: 'ثقة مؤسسية' },
            ].map((f) => (
              <div
                key={f.label}
                className="bg-white/10 rounded-xl p-3 text-center hover:bg-white/15 transition-colors"
              >
                <p className="text-white font-bold text-sm">{f.label}</p>
                <p className="text-white/60 text-xs mt-1">{f.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
