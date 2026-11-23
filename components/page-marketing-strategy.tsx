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

function InfoCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-[#f4f8fc] border border-[#d0e4f0] rounded-xl p-4">
      <p className="text-xs text-[#5a7a9a] font-semibold mb-1">{label}</p>
      <p className="text-[#0f2444] font-semibold text-sm">{value}</p>
    </div>
  )
}

function TableSection() {
  return (
    <div className="overflow-x-auto rounded-xl border border-[#d0e4f0] mb-6">
      <table className="w-full text-sm text-right">
        <thead>
          <tr className="bg-[#1a3f7a] text-white">
            {['المرحلة', 'الهدف', 'القناة', 'الإجراء'].map((h) => (
              <th key={h} className="px-4 py-3 font-semibold whitespace-nowrap">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {[
            ['Awareness', 'بناء الوعي', 'Instagram / TikTok / X', 'محتوى تعريفي بالدبلومات والفرعين'],
            ['Interest', 'جذب الاهتمام', 'Reels / Carousels / Ads', 'CTA واضح للتواصل أو التسجيل'],
            ['Lead', 'جمع البيانات', 'WhatsApp / صفحة التسجيل', 'طلب تسجيل مبدئي أو محادثة مباشرة'],
            ['Qualification', 'تأهيل المهتم', 'WhatsApp', 'فرز حسب الفرع والدبلوم'],
            ['Conversion', 'التسجيل', 'WhatsApp / زيارة الفرع', 'دفع القسط الأول أو تأكيد الحجز'],
            ['Follow-up', 'المتابعة', 'WhatsApp / Sheets', 'تنظيم الحالات ومتابعتها'],
          ].map(([stage, goal, channel, action], i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-[#f4f8fc]'}>
              <td className="px-4 py-3 font-semibold text-[#1a3f7a]">{stage}</td>
              <td className="px-4 py-3 text-[#0f2444]">{goal}</td>
              <td className="px-4 py-3 text-[#334155]">{channel}</td>
              <td className="px-4 py-3 text-[#334155]">{action}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export function PageMarketingStrategy() {
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
        <h1 className="text-2xl md:text-3xl font-bold mb-3 text-balance">الاستراتيجية التسويقية</h1>
        <p className="text-white/70 text-sm leading-relaxed max-w-2xl">
          بعد افتتاح فرع الدمام وإطلاق دبلوم المختبرات الكيميائية، أصبح لمعهد مسار فرعان قائمان في المنطقة الشرقية وثلاثة دبلومات مهنية. تهدف الاستراتيجية إلى تحويل هذا التوسع إلى تسجيلات فعلية في الفرعين، مع ترسيخ حضور الدمام كفرع جديد يقدّم تخصصًا جديدًا في محفظة المعهد.
        </p>
      </div>

      {/* 1. الملخص الاستراتيجي */}
      <SectionBlock title="الملخص الاستراتيجي">
        <p>تقوم الخطة على خطين يسيران معًا. الأول هو التحويل المباشر في الفرعين، أي جذب المهتمين المؤهلين لدبلومات الأحساء والدمام وتحويلهم إلى تسجيلات فعلية. والثاني هو ترسيخ فرع الدمام ودبلوم المختبرات الكيميائية بعد الافتتاح، بحيث يصبح الفرع الجديد معروفًا في الدمام والخبر والظهران كخيار تدريبي قريب ومتكامل.</p>
        <p>الهدف في النهاية أن يتحول الاهتمام بالفرع الجديد والتخصص الجديد إلى طلبات تسجيل حقيقية، وأن تُبنى في الوقت نفسه ثقة مؤسسية طويلة المدى لمعهد مسار في المنطقة الشرقية.</p>
      </SectionBlock>

      {/* 2. التحدي الاستراتيجي */}
      <SectionBlock title="التحدي الاستراتيجي">
        <p>مع افتتاح فرع الدمام لم يعد التحدي هو التعريف بفرع قادم، بل إقناع جمهور الدمام بأن هناك خيارًا تدريبيًا جديدًا قريبًا منهم يستحق التسجيل، وتقديم دبلوم المختبرات الكيميائية كتخصص جديد يحتاج إلى شرح واضح لطبيعته ومجالات العمل المرتبطة به.</p>
        <p>وفي المقابل يحتاج فرع الأحساء إلى استمرار الزخم في دبلومي حماية البيئة والسلامة والصحة المهنية، دون أن يطغى الحديث عن الفرع الجديد على حضوره. لذلك يكمن التحدي في توزيع الاهتمام والميزانية الإعلانية بين الفرعين والدبلومات الثلاثة بشكل متوازن، وتوجيه كل رسالة إلى الجمهور الأقرب للتحويل.</p>
      </SectionBlock>

      {/* 3. الأهداف */}
      <SectionBlock title="الأهداف التسويقية الرئيسية">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            ['الهدف الأول', 'زيادة التسجيلات المؤهلة', 'تحقيق تدفق مستمر من العملاء المحتملين المهتمين بالدبلومات القائمة، مع التركيز على جودة الطلبات وليس حجمها فقط.'],
            ['الهدف الثاني', 'ترسيخ فرع الدمام ودبلوم المختبرات', 'تحويل الاهتمام بالفرع الجديد إلى تسجيلات في دبلومي المختبرات الكيميائية وحماية البيئة، وتعريف جمهور الدمام والمدن القريبة بما يقدمه الفرع.'],
            ['الهدف الثالث', 'تعزيز الثقة المؤسسية', 'ترسيخ صورة معهد مسار كجهة تدريبية مهنية موثوقة تقدم برامج معتمدة وتخاطب احتياجات سوق العمل بلغة واضحة وواقعية.'],
            ['الهدف الرابع', 'تحسين كفاءة التحويل', 'تنظيم رحلة العميل من الإعلان إلى الاستفسار ثم التأهيل ثم التسجيل، مع الاعتماد على واتساب وصفحة التسجيل الرسمية كقناتين رئيسيتين.'],
            ['الهدف الخامس', 'بناء خط أساس للأداء', 'تأسيس مؤشرات أداء واضحة خلال الأشهر الأولى، خاصة في ظل عدم توفر بيانات أداء تاريخية معتمدة يمكن الاعتماد عليها بالكامل.'],
          ].map(([num, title, desc]) => (
            <div key={num} className="bg-white border border-[#d0e4f0] rounded-xl p-5">
              <p className="text-xs text-[#27b5c8] font-bold mb-1">{num}</p>
              <p className="font-bold text-[#0f2444] mb-2">{title}</p>
              <p className="text-sm text-[#334155] leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </SectionBlock>

      {/* 4. الجمهور المستهدف */}
      <SectionBlock title="شرائح الجمهور المستهدف">
        {[
          ['خريجو الثانوية العامة', 'البحث عن مسار مهني واضح بعد الثانوية.', 'بديل تطبيقي يساعدهم على دخول سوق العمل بمهارات مهنية.', 'ابدأ مسارك بدبلوم مهني معتمد يمنحك معرفة تطبيقية وفرصًا أوسع للتطور المهني.'],
          ['خريجو التخصصات النظرية', 'تعزيز المؤهل الأكاديمي بمهارات عملية.', 'إضافة مسار تطبيقي يدعم فرصهم المهنية.', 'حوّل معرفتك النظرية إلى مسار عملي أكثر ارتباطًا باحتياجات سوق العمل.'],
          ['الموظفون والباحثون عن التطوير', 'التطوير أو الانتقال المهني دون تعطيل الالتزامات الحالية.', 'برامج مرنة وواضحة تساعدهم على تحسين مسارهم المهني.', 'طوّر مسارك المهني بخيار تدريبي مرن يساعدك على اكتساب مهارات تطبيقية جديدة.'],
          ['سكان الدمام والخبر والظهران', 'وجود فرع قريب يقدّم تدريبًا مهنيًا معتمدًا.', 'معرفة الدبلومات المتاحة في الفرع وطريقة التسجيل.', 'مسار الآن في الدمام، بدبلومي المختبرات الكيميائية وحماية البيئة.'],
          ['أولياء الأمور والمؤثرون في قرار التسجيل', 'الاطمئنان إلى الاعتماد والجدية والبيئة التدريبية.', 'رسائل موثوقة توضّح قيمة التدريب، الاعتماد، والانضباط.', 'بيئة تدريبية مهنية ومعتمدة تساعد المتدرب على بناء مسار واضح بثقة.'],
        ].map(([title, motivation, need, message]) => (
          <SubSection key={title} title={title}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <InfoCard label="الدافع الأساسي" value={motivation} />
              <InfoCard label="الاحتياج" value={need} />
              <InfoCard label="الرسالة المناسبة" value={message} />
            </div>
          </SubSection>
        ))}
      </SectionBlock>

      {/* 5. العروض */}
      <SectionBlock title="العروض والخدمات الأساسية للترويج">
        <SubSection title="دبلوم المختبرات الكيميائية (الدمام)">
          <p>التخصص الجديد في محفظة المعهد، ويقدَّم في فرع الدمام. يركز على التحليل والجودة والعمل داخل المختبرات الحديثة، ويرتبط بقطاعات واسعة في المنطقة الشرقية مثل النفط والغاز والبتروكيماويات والمياه والأغذية والأدوية. لذلك يحظى بالحصة الأكبر من المحتوى في هذه المرحلة.</p>
          <div className="bg-[#e8f4f8] border border-[#27b5c8]/30 rounded-lg p-4 mt-2">
            <p className="text-sm font-semibold text-[#1a3f7a] mb-1">زاوية الترويج:</p>
            <p className="text-sm text-[#334155]">تدريب عملي داخل مختبرات مجهزة بأجهزة حديثة، يؤهل المتدرب للعمل في مختبرات الصناعة والبيئة والغذاء والجودة.</p>
          </div>
        </SubSection>
        <SubSection title="دبلوم حماية البيئة (الدمام والأحساء)">
          <p>الدبلوم الوحيد المتاح في الفرعين، ومن أهم البرامج التي يمكن التركيز عليها تسويقيًا لارتباطه بعدة مسارات مهنية محتملة في مجالات الصحة العامة والبيئة والرقابة.</p>
          <div className="bg-[#e8f4f8] border border-[#27b5c8]/30 rounded-lg p-4 mt-2">
            <p className="text-sm font-semibold text-[#1a3f7a] mb-1">زاوية الترويج:</p>
            <p className="text-sm text-[#334155]">دبلوم مهني يفتح أمام المتدرب فهمًا أوسع لمجالات الصحة العامة والبيئة، مع تأهيل تطبيقي يدعم تطوره المهني.</p>
          </div>
        </SubSection>
        <SubSection title="دبلوم السلامة والصحة المهنية (الأحساء)">
          <p>يقدَّم في فرع الأحساء، وهو برنامج مناسب للمهتمين ببيئات العمل، السلامة، المخاطر، الطوارئ، والإجراءات الوقائية.</p>
          <div className="bg-[#e8f4f8] border border-[#27b5c8]/30 rounded-lg p-4 mt-2">
            <p className="text-sm font-semibold text-[#1a3f7a] mb-1">زاوية الترويج:</p>
            <p className="text-sm text-[#334155]">تخصص مطلوب في قطاعات متعددة، يركز على سلامة بيئة العمل وفهم المخاطر وأساليب الوقاية.</p>
          </div>
        </SubSection>
      </SectionBlock>

      {/* 6. القيمة المقترحة */}
      <SectionBlock title="القيمة المقترحة">
        <blockquote className="border-r-4 border-[#27b5c8] pr-5 py-3 bg-[#f4f8fc] rounded-l-xl text-[#0f2444] font-semibold italic text-base">
          برامج تدريبية مهنية معتمدة، تساعد المتدرب على بناء مسار تطبيقي واضح، من خلال بيئة تدريبية احترافية تجمع بين المعرفة، التطبيق، والانضباط المهني.
        </blockquote>
        <p className="mt-4">تعتمد الرسائل على عناصر الثقة التالية:</p>
        <ul className="list-disc list-inside space-y-1 pr-2 text-sm text-[#334155]">
          <li>الاعتماد المهني والتدريبي.</li>
          <li>وضوح البرامج والمسارات.</li>
          <li>البيئة التدريبية الاحترافية.</li>
          <li>وجود برامج للرجال والنساء بترتيبات مناسبة.</li>
          <li>التركيز على التأهيل والتطوير دون تقديم وعود توظيف غير مضمونة.</li>
        </ul>
      </SectionBlock>

      {/* 7. اتجاه الرسائل */}
      <SectionBlock title="اتجاه الرسائل التسويقية">
        <div className="bg-[#0f2444] text-white rounded-xl p-5 mb-4">
          <p className="text-xs text-[#27b5c8] font-semibold mb-1">الرسالة المركزية</p>
          <p className="text-lg font-bold">"نمكنك لتصنع مسارك المهني بثقة."</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {[
            ['وضوح المسار', 'مساعدة المتدرب على اختيار دبلوم مناسب لتوجهه.'],
            ['التأهيل المهني', 'التركيز على الجانب التطبيقي والمهارات المهنية.'],
            ['الثقة والاعتماد', 'إبراز الاعتمادات والجهات المنظمة بصياغة دقيقة.'],
            ['القرب الجغرافي', 'فرعان قائمان في الأحساء والدمام.'],
            ['المرونة', 'إبراز الفترات التدريبية المناسبة عند الحاجة.'],
            ['الالتزام والواقعية', 'تجنب المبالغات والوعود غير المعتمدة.'],
          ].map(([title, desc]) => (
            <div key={title} className="bg-white border border-[#d0e4f0] rounded-xl p-4">
              <p className="font-bold text-[#1a3f7a] text-sm mb-1">{title}</p>
              <p className="text-xs text-[#334155] leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </SectionBlock>

      {/* 8. الشخصية والنبرة */}
      <SectionBlock title="شخصية ونبرة العلامة التجارية">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-sm font-bold text-[#0f2444] mb-3">شخصية العلامة</h3>
            <div className="flex flex-wrap gap-2">
              {['مهنية', 'موثوقة', 'محفزة', 'واضحة', 'طموحة', 'قريبة من المتدرب'].map((tag) => (
                <span key={tag} className="bg-[#1a3f7a] text-white text-xs font-semibold px-3 py-1 rounded-full">{tag}</span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-bold text-[#0f2444] mb-3">مصطلحات يجب تجنبها</h3>
            <div className="flex flex-wrap gap-2">
              {['طالب', 'مدرس', 'تدريس', 'وظيفة مضمونة', 'تدريب منتهي بالتوظيف', 'مستقبل مضمون', 'تجسير مضمون'].map((tag) => (
                <span key={tag} className="bg-red-50 text-red-700 border border-red-200 text-xs font-semibold px-3 py-1 rounded-full">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </SectionBlock>

      {/* 9. استراتيجية القنوات */}
      <SectionBlock title="استراتيجية القنوات">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { platform: 'Instagram', role: 'قناة رئيسية للتوعية والتحويل', uses: ['Reels لشرح الدبلومات والرد على الاعتراضات.', 'Carousels لتبسيط المسارات والاعتمادات.', 'Stories للتذكير، الأسئلة، وروابط التسجيل.', 'Lead Ads لجمع بيانات المهتمين.'] },
            { platform: 'TikTok', role: 'قناة انتشار وجذب للشرائح الأصغر سنًا', uses: ['فيديوهات قصيرة بلغة مباشرة.', 'محتوى يلامس حيرة ما بعد الثانوية.', 'لقطات من البيئة التدريبية عند توفر مواد مناسبة.', 'محتوى من فرع الدمام ومختبراته.'] },
            { platform: 'X', role: 'قناة ثقة وحضور مؤسسي', uses: ['نشر رسائل رسمية عن الاعتماد والقيم.', 'إبراز الأخبار والتحديثات العامة.', 'محتوى موجه لأولياء الأمور والمهتمين بالجهات الرسمية.'] },
            { platform: 'WhatsApp', role: 'قناة التأهيل والإغلاق', uses: ['استقبال الاستفسارات.', 'تأهيل المهتمين.', 'فرز الطلبات حسب الفرع والدبلوم.', 'متابعة المهتمين حتى خطوة التسجيل.'] },
            { platform: 'صفحة التسجيل', role: 'استقبال طلبات التسجيل المبدئية', uses: ['رابط موحّد في الإعلانات والبايو: masarinstitute.edu.sa/apply-diploma', 'اختيار الدبلوم، ويظهر الفرع المتاح تلقائيًا.', 'تصنيف الطلبات حسب الدبلوم والفرع.'] },
          ].map(({ platform, role, uses }) => (
            <div key={platform} className="bg-white border border-[#d0e4f0] rounded-xl p-5">
              <p className="font-bold text-[#1a3f7a] mb-1">{platform}</p>
              <p className="text-xs text-[#27b5c8] font-semibold mb-3">{role}</p>
              <ul className="space-y-1">
                {uses.map((u) => (
                  <li key={u} className="text-xs text-[#334155] flex gap-2">
                    <span className="text-[#27b5c8] mt-0.5 shrink-0">–</span>
                    <span>{u}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </SectionBlock>

      {/* 10. محاور الحملات */}
      <SectionBlock title="محاور الحملات المقترحة">
        {[
          ['إطلاق المختبرات الكيميائية في الدمام', 'التعريف بالتخصص الجديد وبيئته التدريبية وتحويل الاهتمام إلى تسجيلات.', 'من المختبر تبدأ مهنتك: تدريب عملي على أجهزة حديثة في فرع الدمام.'],
          ['حماية البيئة في الأحساء والدمام', 'الاستمرار في الدبلوم الأكثر نجاحًا تاريخيًا وتوسيع جمهوره ليشمل الفرعين.', 'مسار مهني في الصحة العامة والرقابة البيئية، متاح الآن في فرعين.'],
          ['وضوح المسار', 'معالجة الاعتراضات والأسئلة الشائعة.', 'ما الفرق بين التدريب الأكاديمي والمهني؟ كيف تختار الدبلوم الأنسب؟'],
          ['تجربة مسار', 'بناء الثقة من خلال إبراز البيئة التدريبية.', 'لقطات من المعهد، المعامل، وشرح مبسط لطبيعة التدريب.'],
        ].map(([title, goal, message]) => (
          <div key={title} className="bg-[#f4f8fc] border border-[#d0e4f0] rounded-xl p-5 mb-3">
            <p className="font-bold text-[#0f2444] mb-2">{title}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div><p className="text-xs text-[#5a7a9a] mb-1 font-semibold">الهدف</p><p className="text-sm text-[#334155]">{goal}</p></div>
              <div><p className="text-xs text-[#5a7a9a] mb-1 font-semibold">الرسالة</p><p className="text-sm text-[#334155]">{message}</p></div>
            </div>
          </div>
        ))}
      </SectionBlock>

      {/* 11. منهجية جذب العملاء */}
      <SectionBlock title="منهجية جذب العملاء المحتملين">
        <SubSection title="آلية العمل">
          <ol className="list-decimal list-inside space-y-1 pr-2 text-sm text-[#334155]">
            <li>جذب الانتباه بمحتوى قصير وواضح.</li>
            <li>توجيه المهتم إلى واتساب أو صفحة التسجيل.</li>
            <li>فرز الطلب حسب: المدينة، الفرع، الدبلوم، مستوى الجاهزية، المرحلة العمرية أو الدراسية.</li>
            <li>متابعة المهتم من فريق العميل.</li>
            <li>تحويل المهتم الجاد إلى زيارة أو تسجيل أو حجز.</li>
          </ol>
        </SubSection>
        <SubSection title="تقسيم العملاء المحتملين">
          <div className="flex flex-wrap gap-2">
            {['مهتم جاهز للتسجيل', 'مهتم يحتاج معلومات إضافية', 'مهتم غير مؤهل حاليًا', 'مهتم يحتاج متابعة لاحقة'].map((item) => (
              <span key={item} className="bg-[#e8f4f8] text-[#1a3f7a] border border-[#27b5c8]/30 text-xs font-semibold px-3 py-1.5 rounded-full">{item}</span>
            ))}
          </div>
        </SubSection>
      </SectionBlock>

      {/* 12. مسار التحويل */}
      <SectionBlock title="مسار التحويل">
        <TableSection />
      </SectionBlock>

      {/* 13. إدارة المخاطر */}
      <SectionBlock title="إدارة المخاطر والقيود">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <h3 className="text-sm font-bold text-[#0f2444] mb-3">قيود الرسائل — يجب تجنب:</h3>
            <ul className="space-y-1">
              {['أي وعد مباشر بالتوظيف.', 'أي ضمان للمستقبل المهني.', 'أي ضمان للتجسير.', 'أي أسعار غير معتمدة للنشر.', 'أي خصومات غير مؤكدة.', 'أي معلومة عن الدبلومات غير واردة في مواصفاتها المعتمدة.', 'أي صياغة توحي بندرة المقاعد إلا عند وجود رقم رسمي.'].map((item) => (
                <li key={item} className="flex gap-2 text-sm text-red-700"><span className="text-red-400 mt-0.5 shrink-0">✕</span><span>{item}</span></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-bold text-[#0f2444] mb-3">قيود الإنتاج:</h3>
            <ul className="space-y-1">
              {['لا يتم نشر صور أو فيديوهات للمتدربين دون موافقات واضحة.', 'يجب الحفاظ على الطابع المهني والمحتشم للمواد البصرية.', 'يجب استخدام مواد حديثة من الفروع قدر الإمكان.', 'لا يتم الاعتماد على محتوى قديم يتضمن وعودًا غير محدثة.'].map((item) => (
                <li key={item} className="flex gap-2 text-sm text-[#334155]"><span className="text-[#27b5c8] mt-0.5 shrink-0">–</span><span>{item}</span></li>
              ))}
            </ul>
          </div>
        </div>
      </SectionBlock>

      {/* 14. مؤشرات الأداء */}
      <SectionBlock title="مؤشرات الأداء الرئيسية">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { title: 'مؤشرات الوعي', items: ['Reach', 'Impressions', 'Profile visits', 'Video views', 'Engagement rate'] },
            { title: 'مؤشرات الاهتمام', items: ['عدد الرسائل على واتساب', 'عدد نماذج التسجيل', 'عدد المهتمين حسب الفرع', 'عدد الاستفسارات حسب البرنامج'] },
            { title: 'مؤشرات التحويل', items: ['Cost per Lead', 'Lead quality', 'نسبة الرد على المهتمين', 'نسبة تحويل المهتم إلى زيارة أو تسجيل', 'عدد المسجلين فعليًا'] },
            { title: 'مؤشرات التحسين', items: ['أفضل منصة من حيث جودة المهتمين', 'أفضل رسالة تسويقية', 'أفضل دبلوم من حيث الطلب', 'أكثر اعتراضات متكررة'] },
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

      {/* 15. توصيات تنفيذية */}
      <SectionBlock title="التوصيات التنفيذية">
        <ol className="space-y-2">
          {[
            'تخصيص رسائل مختلفة لكل شريحة بدل استخدام رسالة واحدة عامة.',
            'فصل حملات الأحساء عن حملات الدمام لتسهيل القياس والمتابعة.',
            'استخدام واتساب كقناة إغلاق رئيسية وليس مجرد قناة استفسار.',
            'بناء مكتبة ردود جاهزة للأسئلة المتكررة.',
            'إنتاج محتوى يشرح الدبلومات بلغة بسيطة وغير مبالغ فيها.',
            'توزيع المحتوى بنسبة تقريبية: 50% لدبلوم المختبرات الكيميائية، و40% لحماية البيئة في الفرعين، و10% للسلامة والصحة المهنية.',
            'استخدام القصص اليومية للتذكير والتفاعل دون احتسابها ضمن المحتوى الأساسي.',
            'مراجعة الأداء أسبوعيًا.',
            'بناء Dashboard بسيط لتتبع المهتمين حسب الفرع والدبلوم والحالة.',
          ].map((item, i) => (
            <li key={i} className="flex gap-3 items-start bg-white border border-[#d0e4f0] rounded-xl px-4 py-3 text-sm text-[#334155]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#27b5c8] shrink-0 mt-2" />
              {item}
            </li>
          ))}
        </ol>
      </SectionBlock>

      {/* 16. الخلاصة */}
      <SectionBlock title="الخلاصة الاستراتيجية">
        <div className="bg-[#f4f8fc] border border-[#d0e4f0] rounded-xl p-6 text-[#0f2444] leading-relaxed space-y-3">
          <p>تعتمد استراتيجية معهد مسار في هذه المرحلة على استثمار افتتاح فرع الدمام وإطلاق دبلوم المختبرات الكيميائية كنقطة انطلاق جديدة، مع الحفاظ على زخم التسجيل في فرع الأحساء.</p>
          <p>النجاح لن يتحقق فقط من خلال زيادة الإعلانات، بل من خلال وضوح الرسائل، دقة الاستهداف، سرعة المتابعة، وتنظيم رحلة العميل من أول تفاعل حتى التسجيل.</p>
          <p>الاستراتيجية المقترحة تضع معهد مسار في موقع مهني موثوق: معهد يعرف جمهوره، يلتزم بوعوده، ويتحدث بلغة واضحة تساعد المتدرب على اتخاذ قرار تدريبي واعٍ.</p>
        </div>
      </SectionBlock>

      {/* General feedback textarea */}
      <div className="mt-10 bg-white border border-[#d0e4f0] rounded-2xl p-6">
        <h2 className="text-lg font-bold text-[#0f2444] mb-1">ملاحظات عامة على الاستراتيجية التسويقية</h2>
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
