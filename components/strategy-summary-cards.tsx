'use client'

import {
  Target,
  Users,
  Radio,
  TrendingUp,
  CheckCircle,
} from 'lucide-react'

const cards = [
  {
    icon: Target,
    title: 'أهداف الحملة',
    color: '#1a3f7a',
    items: [
      'زيادة التسجيلات المؤهلة لدبلومات الأحساء',
      'بناء قائمة اهتمام مبكرة لفرع الدمام',
      'تعزيز الثقة المؤسسية والصورة المهنية',
      'تحسين كفاءة تحويل المهتم إلى متسجل',
    ],
  },
  {
    icon: Users,
    title: 'الجمهور المستهدف',
    color: '#27b5c8',
    items: [
      'خريجو الثانوية العامة',
      'خريجو التخصصات النظرية',
      'الموظفون الباحثون عن التطوير المهني',
      'سكان الدمام والمدن القريبة',
      'أولياء الأمور والمؤثرون في قرار التسجيل',
    ],
  },
  {
    icon: Radio,
    title: 'قنوات النشر',
    color: '#1a3f7a',
    items: [
      'Instagram — التوعية والتحويل الرئيسي',
      'TikTok — الانتشار والشرائح الأصغر سناً',
      'X (تويتر) — الثقة والحضور المؤسسي',
      'WhatsApp — التأهيل والإغلاق',
      'Google Forms — تنظيم بيانات المهتمين',
    ],
  },
  {
    icon: TrendingUp,
    title: 'مؤشرات الأداء',
    color: '#27b5c8',
    items: [
      'Reach & Impressions — الوعي',
      'WhatsApp Clicks — الاهتمام',
      'Cost per Lead — كفاءة التحويل',
      'نسبة المهتم إلى المتسجل',
      'أكثر منصة تحقق مهتمين مؤهلين',
    ],
  },
]

export function StrategySummaryCards() {
  return (
    <section className="bg-background py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-10 text-right">
          <div className="inline-flex items-center gap-2 bg-secondary text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            <CheckCircle className="w-4 h-4 text-accent" />
            <span>ملخص الاستراتيجية</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-balance">
            الركائز الأساسية للخطة التسويقية
          </h2>
          <p className="text-muted-foreground mt-2 max-w-2xl">
            تعتمد استراتيجية مسار على مسارين متوازيين: دعم تسجيلات الأحساء والتهيئة المسبقة لفرع الدمام.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card) => {
            const Icon = card.icon
            return (
              <div
                key={card.title}
                className="bg-card rounded-2xl border border-border shadow-sm overflow-hidden hover:shadow-md transition-shadow group"
              >
                {/* Card header */}
                <div
                  className="px-6 py-5 flex items-center gap-3"
                  style={{ backgroundColor: card.color }}
                >
                  <div className="bg-white/15 rounded-xl p-2.5">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-white font-bold text-base">{card.title}</h3>
                </div>

                {/* Card body */}
                <ul className="px-6 py-5 space-y-3">
                  {card.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-foreground/80 leading-relaxed">
                      <span
                        className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ backgroundColor: card.color }}
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
