'use client'

import { useState } from 'react'
import { CheckCircle, Save } from 'lucide-react'

function SectionBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="text-xl font-bold text-[#1a3f7a] border-r-4 border-[#27b5c8] pr-4 mb-4 leading-snug">
        {title}
      </h2>
      <div className="text-[#1a1a2e] leading-relaxed space-y-3 text-base">{children}</div>
    </section>
  )
}

function SubSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-5">
      <h3 className="text-base font-bold text-[#0f2444] mb-2">{title}</h3>
      <div className="text-[#334155] leading-relaxed space-y-2 text-sm">{children}</div>
    </div>
  )
}

export function PageContentStrategy() {
  const [notes, setNotes] = useState('')
  const [saved, setSaved] = useState(false)
  const [saving, setSaving] = useState(false)

  const handleSave = () => {
    if (!notes.trim()) return
    setSaving(true)
    setTimeout(() => {
      setSaving(false)
      setSaved(true)
      setTimeout(() => setSaved(false), 3000)
    }, 800)
  }

  return (
    <div className="max-w-5xl mx-auto px-4 md:px-6 py-10">

      {/* Page header */}
      <div className="bg-[#0f2444] rounded-2xl p-8 mb-10 text-white">
        <h1 className="text-2xl md:text-3xl font-bold mb-3 text-balance">استراتيجية المحتوى</h1>
        <p className="text-white/70 text-sm leading-relaxed max-w-2xl">
          تهدف استراتيجية المحتوى إلى تحويل الحضور الرقمي لمعهد مسار التمكين من مجرد نشر تعريفي إلى منظومة محتوى تقود الجمهور تدريجيًا من الوعي إلى الاهتمام ثم التسجيل.
        </p>
      </div>

      {/* 1. الملخص التنفيذي */}
      <SectionBlock title="1. الملخص التنفيذي">
        <p>تعتمد الخطة على مسارين متوازيين:</p>
        <ul className="list-disc list-inside space-y-1 pr-2 text-sm text-[#334155]">
          <li><strong>مسار التسجيل الحالي:</strong> دعم دبلومات فرع الأحساء القائمة، خصوصًا خلال الموسم الصيفي.</li>
          <li><strong>مسار التوسع:</strong> بناء التشويق والاهتمام المسبق بفرع الدمام الجديد، مع الالتزام بعدم نشر أي تفاصيل غير معتمدة.</li>
        </ul>
        <p className="text-sm text-[#334155]">المحتوى في هذه المرحلة يجب أن يكون واضحًا، واقعيًا، محفزًا، وموجهًا للتحويل، مع الحفاظ على الثقة المؤسسية والالتزام الكامل بقيود الرسائل المعتمدة.</p>
      </SectionBlock>

      {/* 2. أهداف المحتوى */}
      <SectionBlock title="2. أهداف المحتوى">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            ['2.1 رفع الوعي بالمعهد والفرعين', 'تعريف الجمهور بمعهد مسار التمكين، برامجه، بيئته التدريبية، وقرب افتتاح فرع الدمام.'],
            ['2.2 دعم التسجيل في الدبلومات القائمة', 'إنتاج محتوى يوضح قيمة دبلوم حماية البيئة ودبلوم السلامة والصحة المهنية، ويشجع المهتمين على التواصل والتسجيل.'],
            ['2.3 بناء قائمة اهتمام لفرع الدمام', 'جمع بيانات المهتمين بفرع الدمام قبل الافتتاح، وتحويل هذا الاهتمام إلى قاعدة يمكن متابعتها لاحقًا.'],
            ['2.4 معالجة اعتراضات الجمهور', 'تقديم محتوى يجيب عن الأسئلة المتكررة حول الاعتماد، الفترات التدريبية، طبيعة البرامج، الفئة المناسبة، وآلية التسجيل.'],
            ['2.5 تعزيز الثقة والامتثال', 'بناء صورة مهنية موثوقة دون استخدام وعود مبالغ فيها أو عبارات غير معتمدة مثل ضمان التوظيف.'],
          ].map(([title, desc]) => (
            <div key={title} className="bg-white border border-[#d0e4f0] rounded-xl p-5">
              <p className="font-bold text-[#1a3f7a] text-sm mb-2">{title}</p>
              <p className="text-sm text-[#334155] leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </SectionBlock>

      {/* 3. محاور المحتوى */}
      <SectionBlock title="3. محاور المحتوى الرئيسية">
        {[
          {
            title: '3.1 محور تشويق وافتتاح الدمام',
            weight: '25%',
            priority: 'الأعلى أولوية',
            goal: 'بناء وعي مبكر بفرع الدمام وجمع بيانات المهتمين قبل وبعد الافتتاح.',
            types: ['عد تنازلي للافتتاح.', 'رسائل تشويقية عامة.', 'دعوة لتسجيل الاهتمام.', 'إبراز قرب الفرع من سكان الدمام والمدن المجاورة.', 'محتوى افتتاح وتحويل عند اعتماد التفاصيل.'],
            warning: 'لا يتم نشر اسم البرنامج الجديد أو تفاصيله أو مساراته أو اعتماده إلا بعد اعتمادها رسميًا.',
          },
          {
            title: '3.2 محور وضوح البرامج',
            weight: '20%',
            priority: null,
            goal: 'تبسيط المعلومات حول الدبلومات المؤكدة، وتقليل حيرة الجمهور قبل التواصل.',
            types: ['ما هو دبلوم حماية البيئة؟', 'لمن يناسب دبلوم السلامة والصحة المهنية؟', 'كيف تختار الدبلوم الأنسب لك؟', 'ما الفرق بين المسارات المهنية المحتملة؟', 'كيف يساعدك التدريب المهني على تطوير مسارك؟'],
            warning: 'يجب تجنب أي صياغة توحي بضمان وظيفة أو نتيجة مهنية مؤكدة.',
          },
          {
            title: '3.3 محور قيمة التطبيق',
            weight: '15%',
            priority: null,
            goal: 'تعزيز ثقة الجمهور في أن البرامج ليست نظرية فقط، بل مرتبطة بالتطبيق والمهارة والبيئة المهنية.',
            types: ['لقطات من القاعات والمعامل عند توفرها.', 'شرح مبسط لطبيعة التدريب.', 'إبراز أهمية التطبيق في البرامج المهنية.', 'محتوى يوضح الفرق بين المعرفة النظرية والتدريب التطبيقي.'],
            warning: 'يعتمد هذا المحور بدرجة كبيرة على توفر مواد خام من فريق المعهد.',
          },
          {
            title: '3.4 محور اعتراضات الشرائح',
            weight: '15%',
            priority: null,
            goal: 'تقليل التردد وتحويل الاهتمام إلى استفسار فعلي.',
            types: ['هل الدبلوم مناسب بعد الثانوية؟', 'هل يناسب الموظفين؟', 'هل توجد فترات صباحية ومسائية؟', 'ما طبيعة الدراسة؟', 'هل البرنامج معتمد؟', 'هل يناسب الرجال والنساء؟', 'كيف أبدأ التسجيل؟'],
            warning: null,
          },
          {
            title: '3.5 محور الثقة والاعتماد',
            weight: '10%',
            priority: null,
            goal: 'تدعيم قرار التسجيل من خلال إبراز الجدية، الاعتماد، والهوية المؤسسية للمعهد.',
            types: ['معلومات عن الاعتماد بصياغة دقيقة.', 'إبراز المهنية في بيئة التدريب.', 'توضيح المصطلحات الصحيحة.', 'محتوى رسمي مناسب لمنصة X.', 'رسائل موجهة لأولياء الأمور.'],
            warning: 'يتم ذكر الاعتمادات فقط كما هي موثقة، دون توسيع أو استنتاج غير مؤكد.',
          },
          {
            title: '3.6 محور التحويل والمتابعة',
            weight: '15%',
            priority: null,
            goal: 'تحويل المشاهدة والتفاعل إلى محادثة واتساب أو تعبئة نموذج اهتمام.',
            types: ['دعوات مباشرة للتواصل.', 'روابط نماذج الاهتمام.', 'تذكير بخطوات التسجيل.', 'محتوى "اسألنا عن الدبلوم المناسب لك".', 'رسائل متابعة للمهتمين بفرع الدمام.'],
            warning: null,
          },
        ].map(({ title, weight, priority, goal, types, warning }) => (
          <div key={title} className="bg-white border border-[#d0e4f0] rounded-xl p-5 mb-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-bold text-[#0f2444]">{title}</h3>
              <div className="flex items-center gap-2">
                {priority && <span className="bg-[#1a3f7a] text-white text-xs font-bold px-2 py-0.5 rounded-full">{priority}</span>}
                <span className="bg-[#27b5c8] text-white text-xs font-bold px-2.5 py-0.5 rounded-full">{weight}</span>
              </div>
            </div>
            <p className="text-sm text-[#5a7a9a] font-semibold mb-2">الهدف</p>
            <p className="text-sm text-[#334155] mb-3">{goal}</p>
            <p className="text-sm text-[#5a7a9a] font-semibold mb-2">نوع المحتوى / الموضوعات</p>
            <ul className="space-y-1 mb-3">
              {types.map((t) => (
                <li key={t} className="flex gap-2 text-sm text-[#334155]">
                  <span className="text-[#27b5c8] shrink-0 mt-0.5">–</span>{t}
                </li>
              ))}
            </ul>
            {warning && (
              <div className="bg-amber-50 border border-amber-200 rounded-lg px-4 py-2.5 text-xs text-amber-700 font-medium">
                {warning}
              </div>
            )}
          </div>
        ))}
      </SectionBlock>

      {/* 4. هيكلة المحتوى الشهري */}
      <SectionBlock title="4. هيكلة المحتوى الشهري">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-[#0f2444] text-white rounded-xl p-5 text-center">
            <p className="text-3xl font-bold text-[#27b5c8]">12–18</p>
            <p className="text-sm mt-1 text-white/80">قطعة محتوى أساسية شهريًا</p>
          </div>
          <div className="bg-white border border-[#d0e4f0] rounded-xl p-5 text-center">
            <p className="text-3xl font-bold text-[#1a3f7a]">6</p>
            <p className="text-sm mt-1 text-[#5a7a9a]">فيديوهات شهرية (تحريك أو مونتاج)</p>
          </div>
          <div className="bg-white border border-[#d0e4f0] rounded-xl p-5 text-center">
            <p className="text-3xl font-bold text-[#1a3f7a]">يومية</p>
            <p className="text-sm mt-1 text-[#5a7a9a]">قصص Stories (لا تُحسب في العدد الأساسي)</p>
          </div>
        </div>
        <SubSection title="4.1 الإنتاج الأساسي">
          <p>يشمل: منشورات تصميمية، Carousels، Reels، فيديوهات قصيرة، محتوى تحويل مباشر، محتوى تشويقي أو توعوي.</p>
        </SubSection>
        <SubSection title="4.2 الفيديوهات">
          <p>أمثلة: Reel تعريفي بدبلوم، فيديو قصير عن فرع الدمام، فيديو يشرح اعتراضًا شائعًا، فيديو من بيئة التدريب، فيديو CTA للتواصل أو التسجيل.</p>
        </SubSection>
        <SubSection title="4.3 القصص اليومية Stories">
          <p>تُستخدم في: التذكير المستمر، إعادة نشر المحتوى، عرض لقطات يومية من المعهد، الرد على الأسئلة، إبراز الأنشطة اليومية.</p>
          <p>يُفضل إدارتها اليومية بالتعاون مع فريق المعهد الداخلي لأنها تعتمد على الحضور اللحظي داخل الفروع.</p>
        </SubSection>
      </SectionBlock>

      {/* 5. المنصات */}
      <SectionBlock title="5. المنصات ودور كل منصة">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              platform: 'Instagram',
              role: 'المنصة الرئيسية للتحويل وبناء الثقة',
              uses: ['Reels للتوعية السريعة.', 'Carousels لشرح البرامج والاعتراضات.', 'Posts للإعلانات الرسمية.', 'Stories للتذكير والمتابعة.', 'Lead Ads لجمع المهتمين.'],
            },
            {
              platform: 'TikTok',
              role: 'الوصول السريع والانتشار، خصوصًا مع خريجي الثانوية',
              uses: ['فيديوهات قصيرة مباشرة.', 'محتوى يلامس الحيرة بعد الثانوية.', 'مشاهد من البيئة التدريبية.', 'محتوى تشويقي لفرع الدمام.', 'أسئلة وأجوبة بصيغة خفيفة.'],
            },
            {
              platform: 'X',
              role: 'الحضور الرسمي وتعزيز الثقة',
              uses: ['تحديثات رسمية.', 'رسائل اعتماد وثقة.', 'محتوى مؤسسي.', 'أخبار الافتتاح.', 'رسائل مختصرة لأولياء الأمور والمهتمين.'],
            },
            {
              platform: 'WhatsApp',
              role: 'التأهيل والتحويل',
              uses: ['استقبال الاستفسارات.', 'فرز المهتمين.', 'متابعة طلبات التسجيل.', 'توجيه الجمهور للبرنامج المناسب.', 'تحويل المهتم إلى خطوة التسجيل.'],
            },
            {
              platform: 'Google Forms',
              role: 'تنظيم البيانات',
              uses: ['نموذج اهتمام بفرع الدمام.', 'نموذج اهتمام بالدبلومات.', 'تصنيف المهتمين حسب المدينة، الدبلوم، الفرع.', 'تسهيل المتابعة على فريق المبيعات.'],
            },
          ].map(({ platform, role, uses }) => (
            <div key={platform} className="bg-white border border-[#d0e4f0] rounded-xl p-5">
              <p className="font-bold text-[#1a3f7a] mb-1">{platform}</p>
              <p className="text-xs text-[#27b5c8] font-semibold mb-3">{role}</p>
              <ul className="space-y-1">
                {uses.map((u) => (
                  <li key={u} className="flex gap-2 text-sm text-[#334155]">
                    <span className="text-[#27b5c8] shrink-0">–</span>{u}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </SectionBlock>

      {/* 6. صيغ المحتوى */}
      <SectionBlock title="6. صيغ المحتوى المقترحة">
        <div className="overflow-x-auto rounded-xl border border-[#d0e4f0]">
          <table className="w-full text-sm text-right">
            <thead>
              <tr className="bg-[#1a3f7a] text-white">
                {['الصيغة', 'الاستخدام', 'الهدف'].map((h) => (
                  <th key={h} className="px-4 py-3 font-semibold">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ['Reels', 'شرح سريع، تشويق، إجابة اعتراض', 'الوصول والتحويل'],
                ['Carousel', 'شرح البرامج، المقارنات، الأسئلة الشائعة', 'الفهم والثقة'],
                ['Static Post', 'إعلان رسمي أو رسالة واضحة', 'التذكير والحضور'],
                ['Stories', 'تفاعل يومي، أسئلة، روابط', 'المتابعة'],
                ['Short Video', 'تجربة تدريبية أو رسالة مباشرة', 'الانتشار'],
                ['Lead Ad', 'جمع بيانات المهتمين', 'التحويل'],
                ['X Post', 'اعتماد، تحديثات، رسائل مؤسسية', 'الثقة'],
              ].map(([format, use, goal], i) => (
                <tr key={format} className={i % 2 === 0 ? 'bg-white' : 'bg-[#f4f8fc]'}>
                  <td className="px-4 py-3 font-semibold text-[#1a3f7a]">{format}</td>
                  <td className="px-4 py-3 text-[#334155]">{use}</td>
                  <td className="px-4 py-3 text-[#334155]">{goal}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionBlock>

      {/* 7. الحملات والمبادرات */}
      <SectionBlock title="7. الحملات والمبادرات الشهرية">
        {[
          { title: '7.1 حملة: قريبًا في الدمام', audience: 'سكان الدمام، الخبر، الظهران، القطيف، والمناطق القريبة.', goal: 'بناء الوعي وقائمة الاهتمام.', message: 'مسار أقرب إليك قريبًا — سجّل اهتمامك لتصلك التحديثات.' },
          { title: '7.2 حملة: افتتاح فرع الدمام', audience: 'قائمة الاهتمام + الجمهور المحلي.', goal: 'تحويل المهتمين إلى استفسارات وتسجيلات عند اعتماد الافتتاح.', message: 'فرع الدمام أصبح أقرب — تواصل معنا لمعرفة البرامج المتاحة وخطوات التسجيل.' },
          { title: '7.3 حملة: صيفك بداية مسارك', audience: 'خريجو الثانوية وأولياء الأمور.', goal: 'جذب خريجي الثانوية والمهتمين بالتسجيل في الصيف.', message: 'استثمر صيفك في بداية مسار تدريبي مهني واضح.' },
          { title: '7.4 سلسلة: وضوح المسار', audience: 'جميع الشرائح.', goal: 'تثقيف الجمهور ومساعدته على اتخاذ القرار.', message: 'كيف تختار الدبلوم المناسب؟ هل الدبلوم المهني مناسب بعد الثانوية؟ ما أهمية التدريب التطبيقي؟' },
          { title: '7.5 سلسلة: تجربة مسار', audience: 'كل المهتمين.', goal: 'بناء الثقة من خلال البيئة التدريبية.', message: 'من داخل القاعات، المعامل، يوم تدريبي في مسار.' },
        ].map(({ title, audience, goal, message }) => (
          <div key={title} className="bg-white border border-[#d0e4f0] rounded-xl p-5 mb-3">
            <p className="font-bold text-[#0f2444] mb-3">{title}</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div><p className="text-xs text-[#5a7a9a] font-semibold mb-1">الهدف</p><p className="text-sm text-[#334155]">{goal}</p></div>
              <div><p className="text-xs text-[#5a7a9a] font-semibold mb-1">الجمهور</p><p className="text-sm text-[#334155]">{audience}</p></div>
              <div><p className="text-xs text-[#5a7a9a] font-semibold mb-1">الرسالة</p><p className="text-sm text-[#334155]">{message}</p></div>
            </div>
          </div>
        ))}
      </SectionBlock>

      {/* 8. ربط الجمهور بالمحتوى */}
      <SectionBlock title="8. ربط الجمهور بالمحتوى">
        <div className="overflow-x-auto rounded-xl border border-[#d0e4f0]">
          <table className="w-full text-sm text-right">
            <thead>
              <tr className="bg-[#1a3f7a] text-white">
                {['الشريحة', 'نوع المحتوى الأنسب', 'الرسالة'].map((h) => (
                  <th key={h} className="px-4 py-3 font-semibold">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ['خريجو الثانوية', 'Reels، Carousels، قصص تفاعلية', 'ابدأ مسارك المهني بخيار تدريبي واضح'],
                ['خريجو التخصصات النظرية', 'محتوى توعوي وتطبيقي', 'أضف جانبًا عمليًا لمؤهلك'],
                ['الموظفون', 'اعتراضات، مرونة، فترات تدريب', 'طوّر مسارك دون تعطيل التزاماتك'],
                ['سكان الدمام', 'تشويق، عد تنازلي، نموذج اهتمام', 'فرع مسار قريب منك'],
                ['أولياء الأمور', 'اعتماد، ثقة، بيئة تدريبية', 'خيار تدريبي مهني موثوق'],
              ].map(([segment, type, message], i) => (
                <tr key={segment} className={i % 2 === 0 ? 'bg-white' : 'bg-[#f4f8fc]'}>
                  <td className="px-4 py-3 font-semibold text-[#0f2444]">{segment}</td>
                  <td className="px-4 py-3 text-[#334155]">{type}</td>
                  <td className="px-4 py-3 text-[#334155]">{message}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionBlock>

      {/* 9. منطق النشر */}
      <SectionBlock title="9. منطق النشر والتوزيع">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            ['9.1 حجم الإنتاج', 'يتم إنتاج من 12 إلى 18 قطعة محتوى أساسية شهريًا كحد أقصى، موزعة على المحاور حسب الأولوية.'],
            ['9.2 إعادة التطويع', 'يتم تطويع المحتوى الأساسي ليناسب Instagram وTikTok وX من حيث: المقاس، الصيغة، طول النص، طريقة العرض، CTA المناسب.'],
            ['9.3 تخصيص المنصات', 'الأصل هو إنتاج محتوى أساسي قوي، ثم تكييفه بذكاء لكل منصة دون مضاعفة الجهد التشغيلي.'],
            ['9.4 توزيع الأولويات', 'خلال شهر الافتتاح تزيد أولوية محتوى الدمام. بعد الاستقرار يعود التوازن بين دبلومات الأحساء والدمام والتوعية العامة.'],
          ].map(([title, desc]) => (
            <div key={title} className="bg-white border border-[#d0e4f0] rounded-xl p-5">
              <p className="font-bold text-[#1a3f7a] text-sm mb-2">{title}</p>
              <p className="text-sm text-[#334155] leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </SectionBlock>

      {/* 10. آلية الاعتماد */}
      <SectionBlock title="10. آلية الاعتماد وسير العمل">
        <div className="space-y-3">
          {[
            ['10.1 إعداد الخطة', 'يتم إعداد خطة المحتوى على شكل دفعات، ويفضل أن تغطي كل دفعة شهرين.'],
            ['10.2 الاعتماد', 'تُرسل الخطة عبر قناة الاعتماد المتفق عليها، مثل مجموعة واتساب العميل، لمراجعتها واعتمادها.'],
            ['10.3 الإنتاج', 'بعد الاعتماد، يبدأ تنفيذ التصاميم والمونتاج والكتابة النهائية.'],
            ['10.4 المراجعة', 'يتم إرسال المواد للمراجعة قبل النشر، مع الالتزام بأي ملاحظات تشغيلية أو نظامية.'],
          ].map(([step, desc], i) => (
            <div key={step} className="flex gap-4 items-start bg-white border border-[#d0e4f0] rounded-xl p-4">
              <span className="w-8 h-8 rounded-full bg-[#1a3f7a] text-white text-sm font-bold flex items-center justify-center shrink-0">{i + 1}</span>
              <div>
                <p className="font-bold text-[#0f2444] text-sm mb-1">{step}</p>
                <p className="text-sm text-[#334155]">{desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 bg-amber-50 border border-amber-200 rounded-xl p-4">
          <p className="text-sm font-bold text-amber-700">قاعدة تشغيلية مهمة</p>
          <p className="text-sm text-amber-600 mt-1">لا يتم بدء إنتاج الدفعة التالية قبل اعتماد الدفعة الحالية، لضمان وضوح المسؤوليات وتفادي التعديلات المتراكمة.</p>
        </div>
      </SectionBlock>

      {/* 11. ملاحظات الإنتاج */}
      <SectionBlock title="11. ملاحظات الإنتاج والتعاون">
        <p className="text-sm text-[#334155]">لرفع جودة المحتوى، نوصي بتوفير مواد خام شهرية من فريق معهد مسار، مثل:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
          {['صور حديثة للفرع.', 'صور القاعات والمعامل.', 'لقطات من البيئة التدريبية.', 'فيديوهات قصيرة من الأنشطة.', 'لقطات عامة لا تظهر وجوه المتدربين دون موافقة.', 'مواد مرتبطة بفرع الدمام عند جاهزيتها.'].map((item) => (
            <div key={item} className="flex gap-2 items-start bg-[#f4f8fc] border border-[#d0e4f0] rounded-lg p-3 text-sm text-[#334155]">
              <span className="text-[#27b5c8] mt-0.5 shrink-0">–</span>{item}
            </div>
          ))}
        </div>
        <div className="mt-4 bg-[#f4f8fc] border border-[#d0e4f0] rounded-xl p-5">
          <p className="font-bold text-[#0f2444] text-sm mb-2">المطلوب شهريًا من فريق المعهد</p>
          <p className="text-sm text-[#334155]">يُفضل توفير <strong>3 فيديوهات Raw</strong> شهريًا على الأقل، يمكن تحويلها إلى محتوى احترافي مناسب للمنصات.</p>
        </div>
      </SectionBlock>

      {/* 12. محتوى يجب تجنبه */}
      <SectionBlock title="12. محتوى يجب تجنبه">
        <div className="bg-red-50 border border-red-200 rounded-xl p-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {['تدريب منتهي بالتوظيف.', 'وظيفة مضمونة.', 'مستقبل مضمون.', 'ضمان القبول في التجسير.', 'نشر أسعار داخلية.', 'نشر خصومات غير معتمدة.', 'استخدام كلمة "طالب" بدل "متدرب".', 'استخدام كلمة "مدرس" بدل "مدرب".', 'نشر تفاصيل غير معتمدة عن دبلوم الدمام الجديد.', 'استخدام الندرة أو المقاعد المحدودة دون رقم رسمي مؤكد.', 'استخدام صور متدربين دون موافقة.', 'أي مبالغة قد تخلق توقعًا غير واقعي لدى الجمهور.'].map((item) => (
              <div key={item} className="flex gap-2 text-sm text-red-700">
                <span className="text-red-400 shrink-0 mt-0.5">✕</span>{item}
              </div>
            ))}
          </div>
        </div>
      </SectionBlock>

      {/* 13. مؤشرات قياس الأداء */}
      <SectionBlock title="13. مؤشرات قياس أداء المحتوى">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { title: 'مؤشرات الوعي', items: ['Reach', 'Impressions', 'Video views', 'Profile visits', 'Follower growth'] },
            { title: 'مؤشرات التفاعل', items: ['Saves', 'Shares', 'Comments', 'Story replies', 'Link clicks'] },
            { title: 'مؤشرات التحويل', items: ['WhatsApp clicks', 'Form submissions', 'Leads by branch', 'Leads by diploma', 'Cost per lead', 'Lead-to-registration rate'] },
            { title: 'مؤشرات الجودة', items: ['أكثر موضوعات توليدًا للاستفسارات', 'أكثر اعتراضات تكرارًا', 'أكثر منصة تحقق مهتمين مؤهلين', 'أكثر شريحة تفاعلًا'] },
          ].map(({ title, items }) => (
            <div key={title} className="bg-white border border-[#d0e4f0] rounded-xl p-4">
              <p className="font-bold text-[#1a3f7a] text-sm mb-3 pb-2 border-b border-[#d0e4f0]">{title}</p>
              <ul className="space-y-1.5">
                {items.map((item) => (
                  <li key={item} className="text-xs text-[#334155] flex gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#27b5c8] mt-1.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </SectionBlock>

      {/* 14. التوصيات العملية */}
      <SectionBlock title="14. التوصيات العملية">
        <ol className="space-y-2">
          {[
            'إعطاء أولوية مؤقتة لمحتوى الدمام خلال فترة الافتتاح.',
            'تخصيص رسائل منفصلة للأحساء والدمام حتى يسهل قياس الأداء.',
            'إنشاء نموذج اهتمام مستقل لفرع الدمام.',
            'تحويل الأسئلة المتكررة إلى سلسلة محتوى ثابتة.',
            'استخدام Reels لزيادة الوصول وCarousels لبناء الفهم.',
            'عدم نشر تفاصيل البرنامج الجديد إلا بعد اعتمادها.',
            'بناء مكتبة محتوى من المواد الخام الشهرية.',
            'استخدام WhatsApp كقناة تحويل رئيسية.',
            'مراجعة أداء المحتوى أسبوعيًا خلال الموسم الصيفي.',
            'إعادة توظيف أفضل القطع في الإعلانات المدفوعة.',
          ].map((item, i) => (
            <li key={i} className="flex gap-3 items-start bg-white border border-[#d0e4f0] rounded-xl px-4 py-3 text-sm text-[#334155]">
              <span className="w-6 h-6 rounded-full bg-[#1a3f7a] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
              {item}
            </li>
          ))}
        </ol>
      </SectionBlock>

      {/* 15. الخلاصة */}
      <SectionBlock title="15. الخلاصة">
        <div className="bg-[#f4f8fc] border border-[#d0e4f0] rounded-xl p-6 text-[#0f2444] leading-relaxed space-y-3">
          <p>استراتيجية المحتوى لمعهد مسار التمكين يجب أن تجمع بين الوضوح، الثقة، والتحويل.</p>
          <p>المحتوى المطلوب ليس مجرد منشورات تعريفية، بل منظومة تقود الجمهور من سؤال: <strong>"ما هو المسار المناسب لي؟"</strong> إلى خطوة عملية: <strong>"أريد التسجيل أو معرفة التفاصيل."</strong></p>
          <p>ومن خلال التركيز على دبلومات الأحساء القائمة، وبناء الزخم لفرع الدمام، والالتزام برسائل واقعية ومعتمدة، يمكن للمحتوى أن يصبح أداة مباشرة لدعم التسجيلات وبناء حضور قوي للمعهد في المنطقة الشرقية.</p>
        </div>
      </SectionBlock>

      {/* General feedback textarea */}
      <div className="mt-10 bg-white border border-[#d0e4f0] rounded-2xl p-6">
        <h2 className="text-lg font-bold text-[#0f2444] mb-1">ملاحظات عامة على استراتيجية المحتوى</h2>
        <p className="text-sm text-[#5a7a9a] mb-4">أضف ملاحظاتك واقتراحاتك على هذه الاستراتيجية.</p>
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          rows={5}
          placeholder="اكتب ملاحظاتك هنا..."
          className="w-full border border-[#d0e4f0] rounded-xl px-4 py-3 text-sm text-[#0f2444] placeholder:text-[#a0b4c4] resize-none focus:outline-none focus:ring-2 focus:ring-[#27b5c8] focus:border-[#27b5c8] transition-all"
        />
        <div className="flex items-center justify-between mt-3">
          <button
            onClick={handleSave}
            disabled={saving || !notes.trim()}
            className="flex items-center gap-2 bg-[#1a3f7a] hover:bg-[#0f2444] disabled:opacity-40 disabled:cursor-not-allowed text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors"
          >
            <Save className="w-4 h-4" />
            {saving ? 'جاري الحفظ...' : 'حفظ الملاحظات'}
          </button>
          {saved && (
            <div className="flex items-center gap-2 text-emerald-600 text-sm font-semibold">
              <CheckCircle className="w-4 h-4" />
              تم حفظ ملاحظاتك بنجاح
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
