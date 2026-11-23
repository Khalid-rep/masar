'use client'

import { useState } from 'react'
import { FileText, Camera, Smartphone, AtSign, Check } from 'lucide-react'

/* ─── Types ─── */
type ContentRow = {
  id: number
  month: string
  platform: string
  platformIcon: React.ReactNode
  type: string
  typeColor: string
  idea: string
  notes: string
}

/* ─── Platform icons ─── */
const platformIcons: Record<string, React.ReactNode> = {
  'Instagram / TikTok': (
    <span className="flex items-center gap-1">
      <Camera className="w-3.5 h-3.5" />
      <Smartphone className="w-3.5 h-3.5" />
    </span>
  ),
  Instagram: <Camera className="w-3.5 h-3.5" />,
  TikTok: <Smartphone className="w-3.5 h-3.5" />,
  'X (تويتر)': <AtSign className="w-3.5 h-3.5" />,
}

/* ─── Type badge colours ─── */
const typeColors: Record<string, string> = {
  'Reel قصير': 'bg-purple-100 text-purple-700',
  Carousel: 'bg-blue-100 text-blue-700',
  'فيديو مونتاج': 'bg-orange-100 text-orange-700',
  'منشور تصميم': 'bg-green-100 text-green-700',
  'منشور رسمي': 'bg-gray-100 text-gray-700',
  'إعلان نموذج': 'bg-teal-100 text-teal-700',
}

/* ─── Full content plan data (no truncation) ─── */
const contentPlanData: ContentRow[] = [
  {
    id: 1,
    month: 'يوليو',
    platform: 'Instagram / TikTok',
    platformIcon: platformIcons['Instagram / TikTok'],
    type: 'Reel قصير',
    typeColor: typeColors['Reel قصير'],
    idea: 'العد التنازلي لفرع الدمام — "مسار التمكين صار أقرب لك في الدمام.. شيء مميز بالطريق!"',
    notes: 'يُمنع ذكر اسم الدبلوم الجديد قبل الاعتماد الرسمي',
  },
  {
    id: 2,
    month: 'يوليو',
    platform: 'Instagram',
    platformIcon: platformIcons['Instagram'],
    type: 'Carousel',
    typeColor: typeColors['Carousel'],
    idea: 'التعريف بدبلوم حماية البيئة — 4 شرائح تشرح البرنامج وتقود للتواصل',
    notes: 'تجنب عبارة "وظيفة مضمونة"، التركيز على التأهيل المهني',
  },
  {
    id: 3,
    month: 'يوليو',
    platform: 'TikTok',
    platformIcon: platformIcons['TikTok'],
    type: 'فيديو مونتاج',
    typeColor: typeColors['فيديو مونتاج'],
    idea: 'لقطات من مختبرات المعهد — "ليش التدريب العملي يفرق في مسارك؟"',
    notes: 'الالتزام بمصطلح متدرب/مدرب/تدريب. يتطلب مواد خام من فريق العميل',
  },
  {
    id: 4,
    month: 'يوليو',
    platform: 'Instagram',
    platformIcon: platformIcons['Instagram'],
    type: 'منشور تصميم',
    typeColor: typeColors['منشور تصميم'],
    idea: 'مرونة أوقات التدريب للموظفين — "دوامك الحالي.. ما يوقف طموحك!"',
    notes: 'عدم ذكر أسعار إطلاقاً',
  },
  {
    id: 5,
    month: 'يوليو',
    platform: 'X (تويتر)',
    platformIcon: platformIcons['X (تويتر)'],
    type: 'منشور رسمي',
    typeColor: typeColors['منشور رسمي'],
    idea: 'إبراز اعتماد برامج المعهد من المؤسسة العامة للتدريب التقني والمهني',
    notes: 'ذكر الاعتمادات كما هي موثقة فقط، دون توسيع',
  },
  {
    id: 6,
    month: 'يوليو',
    platform: 'Instagram',
    platformIcon: platformIcons['Instagram'],
    type: 'إعلان نموذج',
    typeColor: typeColors['إعلان نموذج'],
    idea: 'Lead Ad لأهل الدمام والخبر — "بادر بتسجيل اهتمامك في فرعنا الجديد"',
    notes: 'التأكد من وجود حقل "الفرع" في النموذج',
  },
]

/* ─── Per-row feedback sub-component ─── */
function RowFeedback({ rowId }: { rowId: number }) {
  const [value, setValue] = useState('')
  const [saved, setSaved] = useState(false)

  const handleSave = () => {
    if (!value.trim()) return
    setSaved(true)
    setTimeout(() => setSaved(false), 2500)
  }

  return (
    <div className="flex flex-col gap-2 min-w-[180px]">
      <textarea
        rows={2}
        value={value}
        onChange={(e) => { setValue(e.target.value); setSaved(false) }}
        placeholder="أضف ملاحظتك على هذا المنشور..."
        className="w-full px-3 py-2 rounded-lg border border-input bg-background text-foreground text-xs placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-colors resize-none leading-relaxed"
        dir="rtl"
        aria-label={`ملاحظة العميل على المنشور ${rowId}`}
      />
      <button
        type="button"
        onClick={handleSave}
        disabled={!value.trim()}
        className={`inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all disabled:opacity-40 disabled:cursor-not-allowed ${
          saved
            ? 'bg-green-100 text-green-700 border border-green-300'
            : 'bg-primary text-primary-foreground hover:bg-primary/90'
        }`}
        aria-label="حفظ الملاحظة"
      >
        {saved ? (
          <>
            <Check className="w-3 h-3" />
            <span>تم</span>
          </>
        ) : (
          <span>حفظ</span>
        )}
      </button>
    </div>
  )
}

/* ─── Main component ─── */
export function ContentPlanTable() {
  return (
    <section className="py-16 px-6 bg-[#0f2444]/5">
      <div className="max-w-7xl mx-auto">

        {/* Section header */}
        <div className="mb-10 text-right">
          <div className="inline-flex items-center gap-2 bg-secondary text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            <FileText className="w-4 h-4 text-accent" />
            <span>خطة المحتوى</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-balance">
            جدول خطة المحتوى التفصيلي
          </h2>
          <p className="text-muted-foreground mt-2">
            خطة المحتوى لشهر يوليو 2026 — موزعة على المنصات وفق الاستراتيجية المعتمدة
          </p>
        </div>

        {/* Table wrapper — horizontal scroll on mobile */}
        <div className="bg-card rounded-2xl border border-border shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm" dir="rtl">
              <thead>
                <tr className="bg-[#0f2444] text-white">
                  <th className="px-4 py-4 text-right font-semibold w-12">الرقم</th>
                  <th className="px-4 py-4 text-right font-semibold w-20">الشهر</th>
                  <th className="px-4 py-4 text-right font-semibold w-36">المنصة</th>
                  <th className="px-4 py-4 text-right font-semibold w-32">نوع المحتوى</th>
                  <th className="px-4 py-4 text-right font-semibold">الفكرة</th>
                  <th className="px-4 py-4 text-right font-semibold w-52">ملاحظات</th>
                  <th className="px-4 py-4 text-right font-semibold w-56">ملاحظات العميل</th>
                </tr>
              </thead>
              <tbody>
                {contentPlanData.map((row, idx) => (
                  <tr
                    key={row.id}
                    className={`border-t border-border transition-colors hover:bg-secondary/50 ${
                      idx % 2 === 0 ? 'bg-card' : 'bg-background'
                    }`}
                  >
                    <td className="px-4 py-4 text-center align-top">
                      <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-primary text-primary-foreground text-xs font-bold">
                        {row.id}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-muted-foreground font-medium align-top">{row.month}</td>
                    <td className="px-4 py-4 align-top">
                      <div className="flex items-center gap-1.5 text-foreground">
                        <span className="text-accent">{row.platformIcon}</span>
                        <span className="font-medium">{row.platform}</span>
                      </div>
                    </td>
                    <td className="px-4 py-4 align-top">
                      <span className={`inline-block px-2.5 py-1 rounded-full text-xs font-semibold ${row.typeColor}`}>
                        {row.type}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-foreground/80 leading-relaxed align-top">{row.idea}</td>
                    <td className="px-4 py-4 text-muted-foreground text-xs leading-relaxed align-top">{row.notes}</td>
                    <td className="px-4 py-4 align-top">
                      <RowFeedback rowId={row.id} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Row count footer */}
          <div className="px-6 py-3 border-t border-border bg-background/50 text-left">
            <span className="text-xs text-muted-foreground">
              إجمالي المنشورات: {contentPlanData.length}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
