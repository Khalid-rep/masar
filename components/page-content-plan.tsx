'use client'

import { useState } from 'react'
import { CheckCircle, Save, Download } from 'lucide-react'
import { utils, writeFile } from 'xlsx'

type ContentRow = {
  id: number
  month: string
  platform: string
  type: string
  visualDirection: string
  designText: string
  caption: string
  cta: string
  notes: string
}

const contentData: ContentRow[] = [
  {
    id: 1, month: 'يوليو', platform: 'Instagram / TikTok', type: 'Reel قصير',
    visualDirection: 'لقطات إيقاعية سريعة لمعالم الدمام، تليها لقطات تشويقية مظللة لفرع المعهد الجديد.',
    designText: 'الهوك: أهل الشرقية.. مستعدين لشيء يغير مساركم؟\nنص متحرك: مسار التمكين صار أقرب لكم! / فرعنا الجديد يجهز لاستقبالكم / تخصصات مطلوبة.',
    caption: 'لأن طموحكم يستاهل.. قررنا نكون أقرب لكم في الدمام!\nفرعنا الجديد يجهز لفتح أبوابه قريباً بتدريب تطبيقي يلبي طموحك.',
    cta: 'سجل اهتمامك الآن عبر الرابط لتكون أول من يعرف التفاصيل!',
    notes: 'يُمنع ذكر اسم الدبلوم الجديد إطلاقاً. الاعتماد على موسيقى حماسية.',
  },
  {
    id: 2, month: 'يوليو', platform: 'Instagram', type: 'Carousel',
    visualDirection: '4 شرائح: (1) محتار كيف تبدأ مسارك؟ (2) دبلوم حماية البيئة. (3) أيقونات للمسارات. (4) متاح في الأحساء والدمام.',
    designText: 'دبلوم حماية البيئة',
    caption: 'دبلوم حماية البيئة من معهد مسار التمكين، خطوتك الأولى نحو مسار مهني تطبيقي. برنامج معتمد مصمم ليؤهلك لفرص متعددة.',
    cta: 'تواصل معنا لاختيار الفرع ومعرفة التفاصيل.',
    notes: 'تجنب استخدام "وظيفة مضمونة".',
  },
  {
    id: 3, month: 'يوليو', platform: 'TikTok', type: 'فيديو مونتاج',
    visualDirection: 'تجميع لقطات عفوية (Raw) من مختبرات المعهد. الهوك: ليش التدريب العملي يفرق في مسارك؟',
    designText: 'الهوك: ليش التدريب العملي يفرق في مسارك؟\nنص متزامن: المهارة تُبنى في المعامل / تدريبنا يعتمد على التطبيق / جاهز لسوق العمل.',
    caption: 'المهارة باليد هي اللي تصنع الفارق!\nنركز على الجانب التطبيقي والميداني لأننا نؤمن أن التجربة العملية هي أساس التأهيل الحقيقي.',
    cta: 'اطلب التفاصيل وتعرف على بيئتنا.',
    notes: 'الالتزام بمصطلح (متدرب/مدرب/تدريب).',
  },
  {
    id: 4, month: 'يوليو', platform: 'Instagram', type: 'منشور تصميم',
    visualDirection: 'شخص في بيئة عمل يراجع ساعته، بخط واضح.',
    designText: 'دوامك الحالي.. ما يوقف طموحك!',
    caption: 'موظف وتطمح تطور مؤهلاتك بس وقتك ضيق؟ وفرنا لك مرونة في أوقات التدريب. اختار الفترات الصباحية أو المسائية اللي تناسب جدولك.',
    cta: 'أي فترة تناسبك أكثر؟ تواصل للاستفسار.',
    notes: 'عدم ذكر أسعار إطلاقاً.',
  },
  {
    id: 5, month: 'يوليو', platform: 'X (تويتر)', type: 'منشور رسمي',
    visualDirection: 'تصميم نظيف يبرز شعار المعهد وشعار المؤسسة العامة للتدريب التقني والمهني.',
    designText: 'دبلومات مهنية معتمدة',
    caption: 'دبلومات مهنية معتمدة تبني عليها مسارك وأنت مطمئن. برامجنا تحت إشراف المؤسسة العامة للتدريب التقني والمهني.',
    cta: 'نرحب باستفساراتكم عبر قنواتنا الرسمية.',
    notes: '—',
  },
  {
    id: 6, month: 'يوليو', platform: 'Instagram', type: 'إعلان نموذج',
    visualDirection: 'تصميم لافت بشعار "قريباً جداً"، مع خريطة أو دبوس موقع للدمام.',
    designText: 'قريباً جداً في الدمام',
    caption: 'لأهل الدمام والخبر.. مسار التمكين يقترب منكم! بادر بتسجيل اهتمامك لتكون من أوائل المنضمين لفرعنا الجديد.',
    cta: 'أرسل بياناتك وسجل اهتمامك.',
    notes: 'التأكد من وجود حقل "الفرع" بالنموذج.',
  },
  {
    id: 7, month: 'يوليو', platform: 'TikTok', type: 'فيديو قصير',
    visualDirection: 'لقطات ديناميكية لأدوات السلامة المهنية وبيئات عمل. الهوك: تخصص تحتاجه كل جهة!',
    designText: 'الهوك: تخصص تحتاجه كل جهة!\nنصوص سريعة: الأمان عنصر أساسي / تخصص معتمد ومطلوب / متاح الآن في الأحساء.',
    caption: 'الأمان أولوية ما تستغني عنها أي منشأة! الدبلوم يجهزك لتكون خبير في توفير بيئة عمل آمنة. متاح للتسجيل في الأحساء.',
    cta: 'ابدأ مسارك وتواصل معنا.',
    notes: 'الإشارة بوضوح لتوفر الدبلوم بالأحساء فقط.',
  },
  {
    id: 8, month: 'يوليو', platform: 'Instagram', type: 'Story',
    visualDirection: 'تصميم يوضح فكرة التدرج المريح للسداد.',
    designText: 'استثمر في مسارك.. براحة تامة.',
    caption: 'شايل هم الدفعة كاملة؟ سهلناها عليك! تقدر تدفع رسوم الدبلوم على أقساط ودفعات ميسرة تتناسب مع ميزانيتك.',
    cta: 'ارفع الشاشة لمعرفة آلية السداد!',
    notes: 'يمنع ذكر السعر.',
  },
  {
    id: 9, month: 'يوليو', platform: 'Instagram', type: 'Carousel',
    visualDirection: '3 شرائح مقارنة: (1) التدريب التقليدي vs المجزأ. (2) النظري vs التطبيقي. (3) اختار مسار التمكين.',
    designText: 'ليش نظامنا يفرق؟',
    caption: 'في معهد مسار التمكين، نعتمد نظام التدريب المجزأ اللي يركز على التطبيق العملي والميداني أكثر من الحشو النظري.',
    cta: 'اختار الطريق الذكي لمستقبلك.. تواصل معنا.',
    notes: 'استخدام مونتاج نصوص (Typography) إذا لزم.',
  },
  {
    id: 10, month: 'يوليو', platform: 'X (تويتر)', type: 'منشور رسمي',
    visualDirection: 'إعلان بدء التسجيل الصيفي لفرع الأحساء.',
    designText: 'التسجيل مستمر — فرع الأحساء',
    caption: 'لخريجي الثانوية والباحثين عن تطوير مسارهم المهني. التسجيل مستمر في دبلومات معهد مسار التمكين بفرع الأحساء.',
    cta: 'سجل عبر الرابط المرفق.',
    notes: '—',
  },
  {
    id: 11, month: 'يوليو', platform: 'TikTok', type: 'فيديو Q&A',
    visualDirection: 'مونتاج للقطات من المعهد مع نصوص تظهر تباعاً. الهوك: كم مدة الدراسة في الدبلوم؟',
    designText: 'الهوك: كم مدة الدراسة في الدبلوم؟\nنص الإجابة: نعتمد نظام "التدريب المجزأ" / يختصر المدة / يركز على الجانب العملي.',
    caption: 'نظام التدريب المجزأ مصمم عشان يعطيك الخلاصة والم��ارة اللي يحتاجها سوق العمل في وقت قياسي.',
    cta: 'اطلب خطة التدريب عبر الواتساب.',
    notes: 'استخدام مؤثرات صوتية (SFX) عند ظهور النصوص.',
  },
  {
    id: 12, month: 'يوليو', platform: 'Instagram', type: 'منشور تصميم',
    visualDirection: 'شاب خريج ثانوية بنظرة واثقة.',
    designText: 'التخرج من الثانوية.. حدد مسارك.',
    caption: 'التخرج من الثانوية هو بداية لأهم قرار! في معهد مسار التمكين، نوفر لك دبلومات مهنية معتمدة تختصر طريقك وتبني مهاراتك العملية.',
    cta: 'استشرنا في اختيار دبلومك المناسب.',
    notes: 'مراعاة الحشمة وعدم الاختلاط في التصميم.',
  },
  {
    id: 13, month: 'يوليو', platform: 'Instagram', type: 'Story تفاعلي',
    visualDirection: 'تصميم مقسوم: بيئة صحية وبيئية / مصنع وخوذة سلامة.',
    designText: 'وين تشوف نفسك مبدع أكثر؟',
    caption: 'كل تخصص وله جوّه.. ناس تحب العمل الميداني والسلامة، وناس تحب الرقابة الصحية والبيئية. أنت أي فريق؟',
    cta: 'شاركنا في التصويت! (حماية البيئة / السلامة المهنية).',
    notes: '—',
  },
  {
    id: 14, month: 'يوليو', platform: 'TikTok', type: 'مونتاج يوميات',
    visualDirection: 'دمج لقطات سريعة (Raw) لليوم التدريبي. الهوك: يوم في حياة متدرب في مسار!',
    designText: 'الهوك: يوم في حياة متدرب في مسار!\nعناوين على اللقطات: قاعات مجهزة / تطبيق عملي / بيئة محفزة.',
    caption: 'بيئة التدريب تلعب دور كبير في نجاحك! عشنا يوم مع متدربينا لننقل لكم الصورة من الداخل.',
    cta: 'احجز مقعدك وعش التجربة.',
    notes: '—',
  },
  {
    id: 15, month: 'يوليو', platform: 'Instagram', type: 'إعلان نموذج',
    visualDirection: 'صورة قوية للمعهد مع عبارة "صيفك بداية مسارك المهني".',
    designText: 'صيفك بداية مسارك المهني',
    caption: 'استثمر صيفك في بناء مسار مهني معتمد! سجل اهتمامك الآن في دبلومات معهد مسار التمكين (فرع الأحساء).',
    cta: 'سجل بياناتك الآن لنتواصل معك.',
    notes: 'إعلان مخصص لفرع الأحساء المؤكد.',
  },
  {
    id: 16, month: 'أغسطس', platform: 'Insta / TikTok', type: 'Reel عالي التأثير',
    visualDirection: 'فيديو احترافي يظهر واجهة فرع الدمام والاستقبال. الهوك: الانتظار انتهى.. مسار التمكين في الدمام فتح أبوابه!',
    designText: 'الهوك: الانتظار انتهى.. مسار التمكين في الدمام فتح أبوابه!\nنصوص متحركة: بيئة تدريبية متكاملة / المقاعد متاحة الآن للتسجيل.',
    caption: 'اللحظة اللي انتظرناها وصلّت! فرع الدمام جاهز لاستقبالكم. دبلومات معتمدة وبيئة تدريبية مجهزة بالكامل.',
    cta: 'المقاعد للدفعة الأولى متاحة.. احجز مقعدك وتواصل!',
    notes: 'لا ي��نشر إلا بعد الاعتماد الرسمي للافتتاح.',
  },
  {
    id: 17, month: 'أغسطس', platform: 'Instagram', type: 'Carousel',
    visualDirection: '3 شرائح لصور حقيقية للمعهد (بيئة التدريب، المعامل، وقاعات مستقلة).',
    designText: 'بيئة احترافية.. لراحتك وتركيزك',
    caption: 'لأن راحتك وتركيزك أولويتنا.. وفرنا بيئة احترافية بمعامل متكاملة، مع تخصيص مرافق وقاعات مستقلة للرجال والنساء.',
    cta: 'تعرف أكثر على المعهد أو تواصل للاستفسار.',
    notes: 'يمنع إظهار الاختلاط وتُشترط موافقات المتدربين.',
  },
  {
    id: 18, month: 'أغسطس', platform: 'Instagram', type: 'إعلان نموذج',
    visualDirection: 'تصميم مباشر يبرز بدء التسجيل الفعلي لفرع الدمام مع شعار المعهد.',
    designText: 'بدأ التسجيل الفعلي — الدمام',
    caption: 'انطلق في مسارك المهني من الدمام! بدأ التسجيل الفعلي في دبلوماتنا المعتمدة بفرع الدمام. لا تفوت فرصة الانضمام للدفعة الأولى.',
    cta: 'أكمل بياناتك لتأكيد تسجيلك.',
    notes: 'مخصص لتحويل قائمة الانتظار لتسجيل فعلي.',
  },
  {
    id: 19, month: 'أغسطس', platform: 'TikTok', type: 'Reel تجربة',
    visualDirection: 'فيديو (Raw) لمتدرب مع مونتاج للنصوص. الهوك: ليش اختار مسار التمكين لبداية مساره؟',
    designText: 'الهوك: ليش اختار مسار التمكين لبداية مساره؟\nنص الشاشة: أبرز ما يقوله المتدرب كعناوين تبرز على الشاشة.',
    caption: 'التجربة الحقيقية هي أقوى إثبات! نشارككم تجارب متدربينا اللي يصنعون مسارهم المهني كل يوم بالتدريب العملي.',
    cta: 'خل مسار التمكين هو بدايتك.. اطلب التفاصيل الآن.',
    notes: 'يتطلب المقطع موافقة خطية صريحة.',
  },
  {
    id: 20, month: 'أغسطس', platform: 'Instagram', type: '��نشور تصميم',
    visualDirection: 'شخص في بيئة صناعية يرتدي معدات السلامة المهنية.',
    designText: 'خبراء السلامة في طلب دائم',
    caption: 'الحاجة لخبراء السلامة والصحة المهنية مستمرة وفي تزايد. دبلوم يفتح لك آفاق واسعة. متاح للتسجيل في فرع الأحساء.',
    cta: 'عزز سيرتك الذاتية بتخصص مطلوب.. تواصل معنا.',
    notes: 'التأكيد على أن التخصص متاح في الأحساء فقط.',
  },
  {
    id: 21, month: 'أغسطس', platform: 'Insta / X', type: 'Carousel FAQ',
    visualDirection: 'تصميم بنمط سؤال وجواب يغطي (الاعتمادات، الفترات، ونظام التدريب).',
    designText: 'أسئلتكم.. إجاباتنا',
    caption: 'لخصنا لكم أهم الإجابات على أسئلة الاعتمادات ونظام التدريب التي تساعدكم في اتخاذ القرار.',
    cta: 'عندك سؤال إضافي؟ تواصل معنا عبر الواتساب!',
    notes: 'لا تذكر أي أرقام للأسعار.',
  },
  {
    id: 22, month: 'أغسطس', platform: 'Instagram', type: 'Story',
    visualDirection: 'تصميم يوضح فكرة السداد على دفعات.',
    designText: 'طموحك ما يوقفه عائق مالي.',
    caption: 'في مسار التمكين سهلناها عليك! تقدر تدفع رسوم الدبلوم على دفعات ميسرة تتناسب مع ميزانيتك وبدون تعقيد.',
    cta: 'ارفع الشاشة لمعرفة تفاصيل السداد!',
    notes: 'يُمنع ذكر السعر الإجمالي.',
  },
  {
    id: 23, month: 'أغسطس', platform: 'TikTok', type: 'فيديو مقارنة',
    visualDirection: 'لقطات منقسمة الشاشة: يمين (رقابة صحية)، يسار (مصنع وسلامة). الهوك: حماية بيئة ولا سلامة مهنية؟',
    designText: 'الهوك: حماية بيئة ولا سلامة مهنية؟\nنصوص: يمين — للرقابة الصحية / يسار — لمنع المخاطر.',
    caption: 'محتار بين التخصصين؟ كل دبلوم له مجالاته وتطبيقاته.. شوف الفيديو واختار مسارك اللي تبدع فيه.',
    cta: 'تواصل معنا لنساعدك في الاختيار.',
    notes: 'الاعتماد على التصميم الحركي (Motion Typography).',
  },
  {
    id: 24, month: 'أغسطس', platform: 'X (تويتر)', type: 'منشور رسمي',
    visualDirection: 'صورة رسمية لواجهة فرع الدمام مع نص التهنئة بالافتتاح.',
    designText: 'افتتاح فرع الدمام',
    caption: 'بتوفيق من الله، نعلن افتتاح فرعنا الجديد في مدينة الدمام. خطوة جديدة في مسيرتنا نحو تأهيل الكفاءات الوطنية.',
    cta: 'تفضلوا بزيارتنا أو تواصلوا معنا للتسجيل.',
    notes: 'يستخدم كإعلان مؤسسي رسمي.',
  },
  {
    id: 25, month: 'أغسطس', platform: 'Instagram', type: 'Story تفاعلي',
    visualDirection: 'خلفية هادئة مع ملصق صندوق الأسئلة (Q&A).',
    designText: 'اسألنا.. فريق القبول جاهز!',
    caption: 'اسألنا عن الدبلومات، الفترات، أو طريقة التسجيل.. وبنجا��بك فوراً!',
    cta: '(ضع سؤالك هنا)',
    notes: 'لزيادة التفاعل العضوي.',
  },
  {
    id: 26, month: 'أغسطس', platform: 'TikTok', type: 'مونتاج جولة',
    visualDirection: 'تجميع لقطات سريعة داخل فرع الدمام. الهوك: جولة سريعة في فرع الدمام الجديد!',
    designText: 'الهوك: جولة سريعة في فرع الدمام الجديد!\nنصوص متزامنة: الاستقبال / القاعات المجهزة / المعامل.',
    caption: 'مستعدين لبداية قوية؟ أخذناكم في جولة سريعة داخل فرعنا الجديد بالدمام.. المكان جاهز لاستقبالكم.',
    cta: 'احجز مقعدك في الدفعة الأولى.',
    notes: 'استخدام موسيقى تريند حيوية.',
  },
  {
    id: 27, month: 'أغسطس', platform: 'Instagram', type: 'Carousel',
    visualDirection: '4 شرائح تفصل مجالات عمل دبلوم حماية البيئة.',
    designText: 'مجالات دبلوم حماية البيئة',
    caption: 'هل تعلم أن دبلوم حماية البيئة يؤهلك لعدة مسارات؟ من فني صحة عامة إلى مراقب بيئي.. مجالات دقيقة وعليها طلب عالي.',
    cta: 'سجل الآن في فرعي الأحساء أو الدمام.',
    notes: 'تُعرض المسارات كفرص محتملة مرتبطة بالتأهيل.',
  },
  {
    id: 28, month: 'أغسطس', platform: 'Instagram', type: 'منشور تصميم',
    visualDirection: 'موظف ينجز عمله صباحاً ويتدرب مساءً (تصميم مقسوم).',
    designText: 'فترات مرنة تناسب جدولك',
    caption: 'صممنا الفترات التدريبية عشان تخدمك، مو عشان تعطلك! اختار الفترة (الصباحية أو المسائية) اللي تتوافق مع التزاماتك.',
    cta: 'اسأل عن الجداول المتاحة للتسجيل.',
    notes: '—',
  },
  {
    id: 29, month: 'أغسطس', platform: 'Instagram', type: 'إعلان إعادة استهداف',
    visualDirection: 'تصميم قوي بعبارة: "الفرصة الأخيرة للتسجيل بالدفعة الحالية".',
    designText: 'الفرصة الأخيرة للتسجيل',
    caption: 'كنت تفكر تبدأ دبلومك المهني؟ التحق بالدفعة الجديدة. برامج تطبيقية معتمدة، فترات مرنة، وخطط سداد ميسرة.',
    cta: 'أكمل بياناتك الآن لنتواصل معك.',
    notes: 'يستهدف من تفاعل ولم يسجل بياناته.',
  },
  {
    id: 30, month: 'أغسطس', platform: 'Instagram', type: 'Story',
    visualDirection: 'صورة لباب قاعة تدريب نسائية (مع مراعاة الخصوصية).',
    designText: 'بيئة تراعي خصوصيتك بالكامل.',
    caption: 'لأن راحتك تهمنا.. خصصنا في معهد مسار قاعات ومرافق مستقلة بالكامل للقسم النسائي.',
    cta: 'استفسري أكثر عبر الواتساب.',
    notes: 'رسالة تطمين مهمة للجمهور النسائي.',
  },
  {
    id: 31, month: 'أغسطس', platform: 'X (تويتر)', type: 'منشور رسمي',
    visualDirection: 'نص يبرز المرجعية (وزارة الموارد البشرية).',
    designText: 'اعتماد وزارة الموارد البشرية',
    caption: 'برامجنا التدريبية المعتمدة تتيح للخريجين إمكانية التصنيف على (المرتبة الخامسة) وفق لوائح وزارة الموارد البشرية.',
    cta: 'استثمر في تدريبك المهني المعتمد اليوم.',
    notes: 'يعزز الثقة بقيمة الشهادة في السوق.',
  },
  {
    id: 32, month: 'أغسطس', platform: 'TikTok', type: 'فيديو Typography',
    visualDirection: 'نصوص حركية سريعة على خلفية من المعهد. الهوك: 3 أسباب تخليك تختار مسار التمكين!',
    designText: 'الهوك: 3 أسباب تخليك تختار مسار التمكين!\nنصوص: 1. اعتمادات قوية. / 2. تدريب مجزأ وعملي. / 3. فترات تناسب وقتك.',
    caption: 'ليش مسار التمكين؟ لأننا نركز على التأهيل اللي تحتاجه فعلاً. 1. اعتمادات قوية. 2. تدريب مجزأ وعملي. 3. فترات تناسب وقتك.',
    cta: 'الرابط في البايو للتسجيل.',
    notes: '—',
  },
]


function RowFeedback({
  rowId,
  value,
  onChange,
}: {
  rowId: number
  value: string
  onChange: (id: number, val: string) => void
}) {
  const [status, setStatus] = useState<'idle' | 'saving' | 'saved'>('idle')

  const handleSave = () => {
    if (!value.trim()) return
    setStatus('saving')
    setTimeout(() => {
      setStatus('saved')
      setTimeout(() => setStatus('idle'), 2500)
    }, 600)
  }

  return (
    <div className="flex flex-col gap-1 w-44">
      <textarea
        value={value}
        onChange={(e) => onChange(rowId, e.target.value)}
        rows={2}
        placeholder="ملاحظتك..."
        className="w-full border border-[#d0e4f0] rounded px-2 py-1 text-xs text-[#0f2444] placeholder:text-[#a0b4c4] resize-none focus:outline-none focus:ring-1 focus:ring-[#27b5c8] focus:border-[#27b5c8] transition-all leading-relaxed"
        aria-label={`ملاحظات العميل للسطر ${rowId}`}
      />
      <button
        onClick={handleSave}
        disabled={status === 'saving' || !value.trim()}
        className={`flex items-center justify-center gap-1 text-xs font-semibold px-2 py-1 rounded transition-all ${
          status === 'saved'
            ? 'bg-emerald-500 text-white'
            : 'bg-[#1a3f7a] hover:bg-[#0f2444] text-white disabled:opacity-40 disabled:cursor-not-allowed'
        }`}
      >
        {status === 'saved' ? (
          <><CheckCircle className="w-3 h-3 shrink-0" />تم</>
        ) : status === 'saving' ? (
          'جاري...'
        ) : (
          <><Save className="w-3 h-3 shrink-0" />حفظ / اعتماد</>
        )}
      </button>
    </div>
  )
}

export function PageContentPlan() {
  const [feedbackMap, setFeedbackMap] = useState<Record<number, string>>({})

  const handleFeedbackChange = (id: number, val: string) => {
    setFeedbackMap((prev) => ({ ...prev, [id]: val }))
  }

  const handleExport = () => {
    const rows = contentData.map((row) => ({
      'الرقم': row.id,
      'الشهر': row.month,

      'نوع المحتوى': row.type,
      'الاتجاه البصري': row.visualDirection,
      'النص داخل التصميم': row.designText,
      'المحتوى النصي (Caption)': row.caption,
      'الدعوة لاتخاذ إجراء': row.cta,
      'ملاحظات العميل': feedbackMap[row.id] ?? '',
    }))

    const worksheet = utils.json_to_sheet(rows, { skipHeader: false })

    // Column widths
    worksheet['!cols'] = [
      { wch: 6 },   // رقم
      { wch: 10 },  // شهر
      { wch: 20 },  // منصة
      { wch: 20 },  // نوع
      { wch: 50 },  // اتجاه بصري
      { wch: 30 },  // نص تصميم
      { wch: 60 },  // caption
      { wch: 40 },  // cta
      { wch: 40 },  // ملاحظات عميل
    ]

    const workbook = utils.book_new()
    utils.book_append_sheet(workbook, worksheet, 'خطة المحتوى')
    writeFile(workbook, 'خطة-المحتوى-مسار-التمكين.xlsx')
  }

  const julyRows = contentData.filter((r) => r.month === 'يوليو')
  const augustRows = contentData.filter((r) => r.month === 'أغسطس')
  const filledCount = Object.values(feedbackMap).filter((v) => v.trim()).length

  function renderTable(rows: ContentRow[]) {
    return (
      <div className="overflow-x-auto rounded-xl border border-[#d0e4f0]" dir="rtl">
        <table className="table-auto text-xs text-right">
          <colgroup>
            {/* slim fixed cols */}
            <col className="min-w-[40px] max-w-[60px]" />
            <col className="min-w-[80px] max-w-[120px]" />
            {/* flexible content cols */}
            <col className="w-full min-w-[180px]" />
            <col className="w-full min-w-[160px]" />
            <col className="w-full min-w-[200px]" />
            <col className="w-full min-w-[160px]" />
            {/* feedback col */}
            <col className="min-w-[160px] max-w-[190px]" />
          </colgroup>
          <thead>
            <tr className="bg-[#1a3f7a] text-white">
              <th className="p-1 px-2 font-semibold whitespace-nowrap text-center">رقم</th>
              <th className="p-1 px-2 font-semibold whitespace-nowrap">نوع المحتوى</th>
              <th className="p-1 px-2 font-semibold">الاتجاه البصري</th>
              <th className="p-1 px-2 font-semibold">النص داخل التصميم</th>
              <th className="p-1 px-2 font-semibold">المحتوى النصي</th>
              <th className="p-1 px-2 font-semibold">الدعوة لاتخاذ إجراء</th>
              <th className="p-1 px-2 font-semibold">ملاحظات العميل</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={row.id} className={i % 2 === 0 ? 'bg-white' : 'bg-[#f4f8fc]'}>
                <td className="p-1 px-2 text-center font-bold text-[#1a3f7a] whitespace-nowrap">{row.id}</td>
                <td className="p-1 px-2 font-semibold text-[#0f2444] whitespace-nowrap">{row.type}</td>
                <td className="p-1 px-2 text-[#334155] leading-relaxed align-top">{row.visualDirection}</td>
                <td className="p-1 px-2 text-[#0f2444] font-medium leading-relaxed align-top whitespace-pre-line">{row.designText}</td>
                <td className="p-1 px-2 text-[#334155] leading-relaxed align-top">{row.caption}</td>
                <td className="p-1 px-2 text-[#1a3f7a] font-medium leading-relaxed align-top">{row.cta}</td>
                <td className="p-1 px-2 align-top">
                  <RowFeedback
                    rowId={row.id}
                    value={feedbackMap[row.id] ?? ''}
                    onChange={handleFeedbackChange}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }

  return (
    <div className="max-w-full px-4 md:px-6 py-10" dir="rtl">

      {/* Page header */}
      <div className="max-w-5xl mx-auto bg-[#0f2444] rounded-2xl p-8 mb-10 text-white">
        <h1 className="text-2xl md:text-3xl font-bold mb-3 text-balance">المحتوى — يوليو وأغسطس 2026</h1>
        <p className="text-white/70 text-sm leading-relaxed max-w-2xl">
          يُعرض أدناه جميع قطع المحتوى المخططة للشهرين. لكل سطر خانة ملاحظات للعميل تتيح إضافة تعليق. عند الانتهاء اضغط زر التصدير لتحميل ملف Excel يضم كافة الملاحظات.
        </p>
        <div className="flex flex-wrap items-center gap-3 mt-5">
          <div className="bg-white/10 rounded-xl px-4 py-2 text-center">
            <p className="text-2xl font-bold text-[#27b5c8]">32</p>
            <p className="text-xs text-white/70 mt-0.5">قطعة محتوى</p>
          </div>
          <div className="bg-white/10 rounded-xl px-4 py-2 text-center">
            <p className="text-2xl font-bold text-[#27b5c8]">15</p>
            <p className="text-xs text-white/70 mt-0.5">يوليو</p>
          </div>
          <div className="bg-white/10 rounded-xl px-4 py-2 text-center">
            <p className="text-2xl font-bold text-[#27b5c8]">17</p>
            <p className="text-xs text-white/70 mt-0.5">أغسطس</p>
          </div>
          <div className="bg-white/10 rounded-xl px-4 py-2 text-center">
            <p className="text-2xl font-bold text-[#27b5c8]">5</p>
            <p className="text-xs text-white/70 mt-0.5">منصات</p>
          </div>

          {/* Export button */}
          <button
            onClick={handleExport}
            className="mr-auto flex items-center gap-2 bg-[#27b5c8] hover:bg-[#1fa3b5] active:scale-95 text-white font-bold text-sm px-5 py-2.5 rounded-xl transition-all shadow-lg shadow-[#27b5c8]/30"
          >
            <Download className="w-4 h-4 shrink-0" />
            تصدير كـ Excel
            {filledCount > 0 && (
              <span className="bg-white/20 text-white text-xs font-semibold px-2 py-0.5 rounded-full">
                {filledCount} ملاحظة
              </span>
            )}
          </button>
        </div>
      </div>

      {/* July table */}
      <div className="max-w-full mb-12">
        <h2 className="text-xl font-bold text-[#1a3f7a] border-r-4 border-[#27b5c8] pr-4 mb-5">
          يوليو 2026
        </h2>
        {renderTable(julyRows)}
      </div>

      {/* August table */}
      <div className="max-w-full mb-10">
        <h2 className="text-xl font-bold text-[#1a3f7a] border-r-4 border-[#27b5c8] pr-4 mb-5">
          أغسطس 2026
        </h2>
        {renderTable(augustRows)}
      </div>

      {/* Sticky export footer */}
      {filledCount > 0 && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 animate-in fade-in slide-in-from-bottom-4 duration-300">
          <button
            onClick={handleExport}
            className="flex items-center gap-2 bg-[#1a3f7a] hover:bg-[#0f2444] text-white font-bold text-sm px-6 py-3 rounded-2xl shadow-2xl transition-all active:scale-95"
          >
            <Download className="w-4 h-4 shrink-0" />
            تصدير {filledCount} ملاحظة كـ Excel
          </button>
        </div>
      )}
    </div>
  )
}
