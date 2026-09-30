// Per-locale page copy. Neutral facts live in src/data/site.ts.
import { entity } from './data/site';

export type Locale = 'ar' | 'en';

export const locales: Locale[] = ['ar', 'en'];
export const defaultLocale: Locale = 'ar';

export const localeMeta: Record<Locale, { htmlLang: string; dir: 'rtl' | 'ltr'; ogLocale: string }> = {
  ar: { htmlLang: 'ar', dir: 'rtl', ogLocale: 'ar_EG' },
  en: { htmlLang: 'en', dir: 'ltr', ogLocale: 'en_US' }
};

export interface Content {
  title: string;
  description: string;
  nav: { href: string; label: string }[];
  breadcrumb: string[];
  heroKicker: string;
  h1: string;
  heroTagline: string;
  heroIntro: string;
  ctaDirections: string;
  ctaPlan: string;
  stats: { value: string; label: string }[];
  ratingNote: { text: string; linkText: string };
  expKicker: string;
  expTitle: string;
  expP1: string;
  expP2: string;
  expNotice: string;
  revKicker: string;
  revTitle: string;
  revMeta: string;
  revCta: string;
  planKicker: string;
  planTitle: string;
  planCards: { icon: string; title: string; text: string }[];
  schKicker: string;
  schTitle: string;
  schIntro: string;
  schCards: { icon: string; title: string; text: string }[];
  trKicker: string;
  trTitle: string;
  trSteps: { title: string; text: string }[];
  nbKicker: string;
  nbTitle: string;
  nbCards: { title: string; text: string }[];
  histKicker: string;
  histTitle: string;
  histP1: string;
  histP2: string;
  factTitle: string;
  facts: { label: string; value: string }[];
  govIntro: string;
  govLink: string;
  mapKicker: string;
  mapTitle: string;
  mapCreditAddress: string;
  mapCreditPrefix1: string;
  mapCreditLink1: string;
  mapCreditMid: string;
  mapCreditLink2: string;
  faqKicker: string;
  faqTitle: string;
  faq: [string, string][];
  srcKicker: string;
  srcTitle: string;
  sources: { strong: string; text: string; link?: string; linkText?: string }[];
  srcNote: string;
  footerText: string;
  privacyTitle: string;
  privacyText: string;
  termsTitle: string;
  termsText: string;
  cookiesTitle: string;
  cookiesText: string;
  cookieBannerTitle: string;
  cookieBannerText: string;
  consentYes: string;
  consentNo: string;
  dialogClose: string;
  langSwitch: { href: string; label: string };
}

const ar: Content = {
  title: 'معدية بورسعيد - بورفؤاد: المواعيد والموقع والأسعار | Port Said Ferry',
  description:
    'تعرف على مواعيد عمل معدية بورسعيد - بورفؤاد، موقع المعدية، وأسعار التذاكر. دليل كامل للتنقل بين بورسعيد وبورفؤاد عبر قناة السويس.',
  nav: [
    { href: '#experience', label: 'التجربة' },
    { href: '#reviews', label: 'التقييمات' },
    { href: '#plan', label: 'التخطيط' },
    { href: '#schedule', label: 'المواعيد' },
    { href: '#transport', label: 'الوصول' },
    { href: '#nearby', label: 'حولك' },
    { href: '#history', label: 'التاريخ' },
    { href: '#faq', label: 'الأسئلة' },
    { href: '#map', label: 'الخريطة' },
    { href: '#sources', label: 'المصادر' }
  ],
  breadcrumb: [entity.fullName, entity.cityAr, entity.provinceAr, entity.countryAr],
  heroKicker: 'قناة السويس · بورسعيد ↔ بورفؤاد',
  h1: `${entity.fullNameAr} ${entity.fullName} (${entity.cityAr})`,
  heroTagline: 'دقائق فوق ممرّ عالمي',
  heroIntro: `مرحبًا بك في ${entity.fullName}، المعروفة محليًا باسم ${entity.shortNameAr} في قلب ${entity.cityAr}، ${entity.provinceAr}، ${entity.countryAr}. رحلة يومية بسيطة تحوّلت إلى واحدة من أكثر تجارب ${entity.cityAr} تميّزًا: عبور مباشر بالقارب بين ضفتي القناة، مع السفن التجارية والنوارس وقبة هيئة قناة السويس في المشهد.`,
  ctaDirections: 'افتح الاتجاهات',
  ctaPlan: 'خطّط للزيارة',
  stats: [
    { value: 'مجانية', label: 'بحسب مصادر سياحة بورسعيد' },
    { value: 'على مدار اليوم', label: 'تشغيل مستمر وفق تقارير محلية حديثة' },
    { value: 'أفراد + مركبات', label: 'عبور عملي وسياحي' },
    { value: '4.6 / 5', label: '10,444 تقييمًا على Google Maps' }
  ],
  ratingNote: {
    text: 'التقييم وعدد التقييمات من آراء مستخدمي Google Maps، آخر مزامنة سبتمبر 2026 ·',
    linkText: 'عرض جميع التقييمات على Google Maps ↗'
  },
  expKicker: `عن ${entity.fullName}`,
  expTitle: `About ${entity.fullNameAr} ${entity.fullName}: جزء من ذاكرة المدينة، لا مجرد وسيلة نقل`,
  expP1: `ارتبطت المعدية تاريخيًا بنشأة بورفؤاد ونقل العاملين بين ضفتي القناة. واليوم تظل رابطًا يوميًا بين ${entity.cityAr} وبورفؤاد، بينما صارت الرحلة نفسها مشهدًا محببًا للزوار: ماء مفتوح، سفن عملاقة، نوارس، وخط أفق بحري لا يشبه أي مواصلة داخل مدينة.`,
  expP2: `عند زيارة ${entity.fullName} (${entity.shortNameAr})، يسهل على الزائر استكشاف معالم تاريخية ونقاط اهتمام قريبة، مثل ${entity.landmark1Ar} و${entity.landmark2Ar}.`,
  expNotice: 'معلومة عملية: حركة الملاحة والطقس قد تؤثر على الانتظار أو الرؤية. اتبع دائمًا تعليمات الطاقم بالموقع.',
  revKicker: 'تقييمات الزوّار',
  revTitle: `تقييم ${entity.fullNameAr} ${entity.fullName} على Google Maps`,
  revMeta:
    'يقدّم هذا القسم ملخصًا لأرقام التقييم المنشورة على Google Maps فقط، ولا يعرض نصوص المراجعات؛ جميع آراء المستخدمين معروضة في مصدرها الأصلي عبر الرابط أدناه.',
  revCta: 'عرض جميع التقييمات على Google Maps ↗',
  planKicker: 'خططها بسهولة',
  planTitle: 'ما تحتاج معرفته قبل الصعود',
  planCards: [
    { icon: 'ج', title: 'التذكرة / التكلفة', text: 'العبور بين بورسعيد وبورفؤاد موصوف بأنه مجاني في بوابة السياحة الرسمية للمحافظة. لا تعتمد على أسعار قديمة للمواصلات المحيطة.' },
    { icon: '☀', title: 'أفضل وقت', text: 'الصباح الباكر لضوء واضح وحركة أهدأ نسبيًا، أو قبل الغروب للمشهد الذهبي. الشتاء قد يجلب ضبابًا جميلًا لكنه يقلل الرؤية.' },
    { icon: '⏱', title: 'مدة مقترحة', text: 'خصّص 30–60 دقيقة للتجربة والانتظار والتصوير. أضف وقتًا أطول إذا كنت ستكمل إلى بورفؤاد والمعالم القريبة.' },
    { icon: 'P', title: 'معلومات الوقوف', text: 'المنطقة المحيطة بالمعدية مركزية ومزدحمة. التزم بمناطق الوقوف المسموح بها ومسارات المركبات الخاصة بالصعود، وتجنب تعطيل بوابات التشغيل.' },
    { icon: '≈', title: 'الطقس والبحر', text: 'الرياح والضباب يؤثران على راحة التصوير. ارتدِ طبقة خفيفة مقاومة للهواء في الأشهر الأبرد، واحمِ هاتفك من رذاذ الماء.' },
    { icon: '◎', title: 'أفضل لقطة', text: 'قف في مكان يسمح به الطاقم مع خلفية بورفؤاد أو مبنى هيئة قناة السويس. لا تتجاوز الحواجز ولا تقف في مسار المركبات.' }
  ],
  schKicker: 'مواعيد العمل والأسعار',
  schTitle: `مواعيد معدية بورسعيد - بورفؤاد والأسعار`,
  schIntro:
    'من أكثر ما يبحث عنه الزوّار قبل العبور: متى تعمل المعدية، وكم تكلفة التذكرة. فيما يلي الخلاصة العملية المتاحة من المصادر السياحية الرسمية وتقارير التشغيل المحلية.',
  schCards: [
    { icon: '⏱', title: 'مواعيد العمل', text: 'تشير التقارير المحلية الحديثة إلى تشغيل مستمر على مدار اليوم (بما في ذلك فترات الليل)، دون جدول مواعيد ثابت. قد يتأثر الانتظار بحركة الملاحة في قناة السويس أو بحالة الطقس، لذا راقب التعليمات المعلنة عند نقطة العبور.' },
    { icon: '♻', title: 'الأسعار / التذاكر', text: 'تصف بوابة السياحة الرسمية للمحافظة العبور بين بورسعيد وبورفؤاد بأنه مجاني للمشاة. قد تختلف ترتيبات المركبات أو المسارات، لذلك راجع اللوحات والتعليمات المعلنة في الموقع عند الوصول.' }
  ],
  trKicker: 'تفاصيل الوصول',
  trTitle: `Location & How to Visit ${entity.fullNameAr} في ${entity.cityAr}: الوصول إلى نقطة العبور`,
  trSteps: [
    { title: 'من وسط بورسعيد', text: 'اتجه نحو منطقة الجمهورية والدائرة الجمركية عند الواجهة الشرقية للمدينة. استخدم رابط Google Maps المدرج في الصفحة للوصول إلى نقطة 7856+R8F.' },
    { title: 'بسيارة أو تاكسي', text: 'اطلب النزول عند «معدية بورسعيد – بورفؤاد». عند الاقتراب، راقب مسارات المركبات ولا تدخل منطقة التحميل إلا بتوجيه العاملين.' },
    { title: 'مشياً', text: 'من المنطقة المركزية والواجهة البحرية يمكن الوصول مشيًا حسب موقعك. الرصيف نفسه منطقة تشغيل، لذلك احترم الإشارات وممرات الركاب.' },
    { title: 'بعد الوصول إلى بورفؤاد', text: 'يمكنك متابعة الجولة إلى فيلات هيئة قناة السويس، المسجد الكبير، ميدان الملك فؤاد، أو جبال الملح بسيارة أجرة محلية.' }
  ],
  nbKicker: 'بعد العبور',
  nbTitle: `Landmarks & Attractions Around ${entity.fullName}: الأكل والمعالم القريبة`,
  nbCards: [
    { title: 'مأكولات بحرية قريبة', text: 'تشتهر المنطقة بتجربة السمك والمأكولات البحرية. من الخيارات المعروفة في المدينة سوق السمك، حيث يختار الزائر السمك أو الجمبري ثم يطلب الشوي أو القلي. جرّب البوري، السبيط، الجمبري، والسلطات المصرية البسيطة.' },
    { title: 'معالم قريبة', text: `مبنى هيئة قناة السويس التاريخي، حديقة فريال، فيلات بورفؤاد ذات الطابع الأوروبي، مسجد بورفؤاد الكبير، وجبال الملح من أكثر الإضافات المنطقية ليوم واحد. أقرب نقطتين للانطلاق هما ${entity.landmark1Ar} و${entity.landmark2Ar}.` }
  ],
  histKicker: 'التاريخ والأهمية',
  histTitle: `History & Significance of ${entity.fullNameAr} ${entity.fullName}`,
  histP1: `ارتبطت معدية بورسعيد تاريخيًا بنشأة بورفؤاد على الضفة الشرقية للقناة وبنقل العاملين بين الضفتين، ثم أصبحت مع الوقت جزءًا من الحياة اليومية للمدينة أكثر من كونها معلمًا سياحيًا مستقلًا.`,
  histP2: `تكمن أهمية ${entity.fullName} اليوم في أنها تجربة عبور حقيقية داخل ممرّ ملاحي عالمي: ماء مفتوح، سفن تجارية عابرة، نوارس، وخط أفق يجمع بين ${entity.cityAr} وبورفؤاد في رحلة لا تتعدى الدقائق، لكنها تلخّص علاقة المدينة بقناة السويس.`,
  factTitle: 'بطاقة المعلم',
  facts: [
    { label: 'الاسم:', value: `${entity.fullName} · ${entity.shortNameAr}` },
    { label: 'المدينة / المحافظة:', value: `${entity.cityAr} · ${entity.provinceAr}` },
    { label: 'الدولة:', value: `${entity.countryAr} (${entity.countryCode})` },
    { label: 'الرمز البريدي:', value: entity.postalCode },
    { label: 'الإحداثيات:', value: `${entity.latitude}, ${entity.longitude}` },
    { label: 'الهاتف:', value: entity.telephone },
    { label: 'التقييم:', value: `4.6 / 5 · 10,444 تقييمًا على Google Maps` }
  ],
  govIntro: 'للمعلومات السياحية الرسمية، زر',
  govLink: 'بوابة السياحة الرسمية في مصر',
  mapKicker: 'الموقع',
  mapTitle: `خريطة ${entity.fullNameAr} ${entity.fullName} في ${entity.cityAr}`,
  mapCreditAddress: `العنوان: ${entity.streetAddress}، ${entity.provinceAr} ${entity.postalCode}، ${entity.countryAr}. الإحداثيات: ${entity.latitude}, ${entity.longitude}.`,
  mapCreditPrefix1: 'للمعلومات السياحية الرسمية، تفضل بزيارة',
  mapCreditLink1: 'Egypt / Port Said Official Tourism Portal',
  mapCreditMid: ' وللاتجاهات المباشرة، افتح ',
  mapCreditLink2: `${entity.fullName} على Google Maps ↗`,
  faqKicker: 'الأسئلة الشائعة',
  faqTitle: 'أسئلة شائعة',
  faq: [
    ['أين تقع معدية بورسعيد (Port Said Ferry)؟', `تقع المعدية في مدينة ${entity.cityAr} ب${entity.provinceAr} في ${entity.countryAr}، عند نقطة العبور 7856+R8F في منطقة الجمهورية والدائرة الجمركية على الواجهة الشرقية للمدينة، وتربط بين ${entity.cityAr} وبورفؤاد عبر قناة السويس.`],
    ['هل عبور المعدية مجاني؟', 'المصادر السياحية الرسمية لمحافظة بورسعيد تصف المعدية بين بورسعيد وبورفؤاد بأنها مجانية. قد تتغير ترتيبات تشغيل المركبات أو المسارات، لذلك راجع التعليمات المعلنة في موقع العبور عند الوصول.'],
    ['كم تستغرق الرحلة؟', 'العبور نفسه قصير ويستغرق عادة دقائق قليلة، بينما يتأثر إجمالي الوقت بحجم الانتظار وحركة الملاحة في قناة السويس.'],
    ['هل يمكن عبور السيارات؟', 'تعمل معديات بورسعيد كوسيلة نقل للأفراد والمركبات. اتبع توجيهات الطاقم ومسارات الاصطفاف قبل الصعود.'],
    ['ما أفضل وقت للتجربة؟', 'الصباح الباكر مناسب لضوء هادئ وازدحام أقل غالبًا، وقبل الغروب يمنحك مشهدًا بحريًا جميلًا. الضباب والرياح قد يغيران الرؤية.'],
    ['هل توجد مواقف؟', 'المنطقة المحيطة بنقطة العبور حضرية ومزدحمة. الأفضل الوصول مبكرًا، واتباع أماكن الانتظار المسموح بها واللوحات المحلية بدل الاعتماد على الوقوف العشوائي.'],
    ['هل التجربة مناسبة للعائلات؟', 'نعم، هي رحلة قصيرة ومناسبة لمعظم الأعمار، مع الانتباه لمرافقة الأطفال قرب الحواجز ومسارات المركبات واتباع تعليمات الطاقم.'],
    ['ما أقرب المعالم بعد العبور؟', `${entity.landmark1Ar} و${entity.landmark2Ar} ومسجد بورفؤاد الكبير من أقرب الإضافات المنطقية ليوم واحد.`]
  ],
  srcKicker: 'المصادر',
  srcTitle: 'مصادر الصور والمعلومات',
  sources: [
    { strong: 'التقييم', text: 'التقييم وعدد التقييمات (4.6 / 5 · 10,444) مزامنة من آراء مستخدمي Google Maps بتاريخ سبتمبر 2026، وحقوق النشر تعود لأصحابها الأصليين ولـ Google Maps.', link: entity.mapsShareUrl, linkText: 'عرض جميع التقييمات على Google Maps ↗' },
    { strong: 'الصور', text: 'صور حقيقية من Wikimedia Commons: Nicola (ملكية عامة)، Redthunder22 (CC BY-SA 3.0)، Alaaeldeeb وAya abo elkasem (CC BY-SA 4.0).' },
    { strong: 'الموقع والاتصال', text: 'العنوان والإحداثيات وبيانات الاتصال من معدية بورسعيد على', link: entity.mapsShareUrl, linkText: 'Google Maps ↗' },
    { strong: 'التاريخ والسياحة', text: 'بوابة «اعرف بورسعيد» التابعة لمحافظة بورسعيد، و', link: entity.govtTourismUrl, linkText: 'بوابة السياحة الرسمية في مصر' }
  ],
  srcNote: 'معلومات التشغيل قد تتغير؛ تحقّق دائمًا من التعليمات المعلنة في موقع العبور قبل التخطيط.',
  footerText: 'هذا موقع إرشادي مستقل وغير رسمي، ولا يمثل هيئة قناة السويس أو محافظة بورسعيد أو مشغّل المعديات.',
  privacyTitle: 'سياسة الخصوصية',
  privacyText: 'لا يطلب الموقع تسجيل دخول ولا يخزن بيانات شخصية في قاعدة بيانات. إذا وافقت على التحليلات، يتم تحميل Google Analytics 4 لقياس الاستخدام بشكل مجمع. يمكنك رفض التحليلات أو تغيير قرارك من إعدادات ملفات الارتباط.',
  termsTitle: 'شروط الاستخدام',
  termsText: 'المحتوى لأغراض التخطيط السياحي العام. ساعات التشغيل والأسعار وحركة المركبات قد تتغير دون إشعار؛ اتبع التعليمات الرسمية في الموقع قبل اتخاذ قرار السفر.',
  cookiesTitle: 'إعدادات ملفات الارتباط',
  cookiesText: 'يمكن تشغيل أو إيقاف ملفات التحليلات. ملفات الوظائف الضرورية تستخدم فقط لحفظ اختيارك.',
  cookieBannerTitle: 'خصوصيتك أولاً',
  cookieBannerText: 'نستخدم GA4 فقط بعد موافقتك لقياس زيارات الموقع بشكل مجمع.',
  consentYes: 'موافق',
  consentNo: 'بدون تحليلات',
  dialogClose: 'إغلاق',
  langSwitch: { href: '/en/', label: 'EN' }
};

const en: Content = {
  title: 'Port Said Ferry (Port Said – Port Fouad): Schedule, Location & Fares | معدية بورسعيد',
  description:
    'Find the Port Said – Port Fouad ferry schedule, location, directions and fares. A complete guide to crossing the Suez Canal between Port Said and Port Fouad, Egypt.',
  nav: [
    { href: '#experience', label: 'Experience' },
    { href: '#reviews', label: 'Reviews' },
    { href: '#plan', label: 'Plan' },
    { href: '#schedule', label: 'Hours' },
    { href: '#transport', label: 'Getting here' },
    { href: '#nearby', label: 'Nearby' },
    { href: '#history', label: 'History' },
    { href: '#faq', label: 'FAQ' },
    { href: '#map', label: 'Map' },
    { href: '#sources', label: 'Sources' }
  ],
  breadcrumb: [entity.fullName, entity.city, entity.province, entity.country],
  heroKicker: 'Suez Canal · Port Said ↔ Port Fouad',
  h1: `${entity.fullName} (${entity.city} – Port Fouad)`,
  heroTagline: 'Minutes above a global waterway',
  heroIntro: `Welcome to ${entity.fullName}, known locally as ${entity.shortNameAr}, in the heart of ${entity.city}, ${entity.province}, ${entity.country}. A simple daily crossing that has become one of ${entity.city}'s most distinctive experiences: a direct boat trip between the two banks of the canal, with cargo ships, gulls and the dome of the Suez Canal Authority building in the scene.`,
  ctaDirections: 'Open directions',
  ctaPlan: 'Plan your visit',
  stats: [
    { value: 'Free', label: 'per Port Said tourism sources' },
    { value: 'Around the clock', label: 'continuous operation per recent local reports' },
    { value: 'People + vehicles', label: 'practical and tourist crossing' },
    { value: '4.6 / 5', label: '10,444 reviews on Google Maps' }
  ],
  ratingNote: {
    text: 'Rating and review counts are from Google Maps user opinions, last synced September 2026 ·',
    linkText: 'View all reviews on Google Maps ↗'
  },
  expKicker: `About ${entity.fullName}`,
  expTitle: `About ${entity.fullNameAr} ${entity.fullName}: part of the city's memory, not just transport`,
  expP1: `The ferry has historically been tied to the founding of Port Fouad and to moving workers between the two banks of the canal. Today it remains a daily link between ${entity.city} and Port Fouad, while the crossing itself has become a favourite scene for visitors: open water, giant ships, gulls, and a seascape unlike any in-city commute.`,
  expP2: `When visiting ${entity.fullName} (${entity.shortNameAr}), it is easy to explore nearby historic landmarks and points of interest, such as ${entity.landmark1} and ${entity.landmark2}.`,
  expNotice: 'Practical note: shipping traffic and weather may affect waiting time or visibility. Always follow the crew’s instructions on site.',
  revKicker: 'Visitor ratings',
  revTitle: `${entity.fullName} rating on Google Maps`,
  revMeta:
    'This section presents only a summary of the rating figures published on Google Maps, and does not display review text; all user opinions are shown at their original source via the link below.',
  revCta: 'View all reviews on Google Maps ↗',
  planKicker: 'Plan with ease',
  planTitle: 'What you need to know before boarding',
  planCards: [
    { icon: 'T', title: 'Ticket / cost', text: 'The crossing between Port Said and Port Fouad is described as free on the governorate’s official tourism portal. Do not rely on outdated prices for surrounding transport.' },
    { icon: '☀', title: 'Best time', text: 'Early morning offers calmer light and relatively quieter movement, or just before sunset for the golden view. Winter may bring beautiful fog but reduces visibility.' },
    { icon: '⏱', title: 'Suggested duration', text: 'Allow 30–60 minutes for the experience, waiting and photos. Add more time if you continue to Port Fouad and nearby landmarks.' },
    { icon: 'P', title: 'Parking info', text: 'The area around the ferry is central and busy. Use the permitted parking zones and the vehicle boarding lanes, and avoid blocking the operating gates.' },
    { icon: '≈', title: 'Weather & sea', text: 'Wind and fog affect shooting comfort. Wear a light wind-resistant layer in the colder months and protect your phone from spray.' },
    { icon: '◎', title: 'Best shot', text: 'Stand where the crew allows, with Port Fouad or the Suez Canal Authority building behind you. Do not cross barriers or stand in vehicle lanes.' }
  ],
  schKicker: 'Hours & fares',
  schTitle: `Port Said – Port Fouad ferry hours & fares`,
  schIntro:
    'Among the most searched questions before crossing: when does the ferry run, and how much is the ticket. Here is the practical summary from official tourism sources and local operating reports.',
  schCards: [
    { icon: '⏱', title: 'Operating hours', text: 'Recent local reports point to continuous operation around the clock (including night periods), without a fixed timetable. Waiting can be affected by shipping traffic in the Suez Canal or weather conditions, so watch the posted instructions at the crossing point.' },
    { icon: '♻', title: 'Fares / tickets', text: 'The governorate’s official tourism portal describes the crossing between Port Said and Port Fouad as free for pedestrians. Vehicle arrangements or routes may differ, so check the posted signs and instructions at the site on arrival.' }
  ],
  trKicker: 'Getting here',
  trTitle: `Location & how to visit ${entity.fullName}: reaching the crossing point`,
  trSteps: [
    { title: 'From central Port Said', text: 'Head towards the El-Gomhoreya area and the customs district on the eastern waterfront of the city. Use the Google Maps link on the page to reach the 7856+R8F point.' },
    { title: 'By car or taxi', text: 'Ask to be dropped at “Port Said – Port Fouad Ferry”. As you approach, watch the vehicle lanes and only enter the loading area when directed by staff.' },
    { title: 'On foot', text: 'From the central area and the waterfront you can walk depending on your location. The pier itself is an operating area, so respect the signs and passenger walkways.' },
    { title: 'After arriving in Port Fouad', text: 'You can continue to the Suez Canal Authority villas, the Grand Mosque, King Fouad Square, or the salt mountains by local taxi.' }
  ],
  nbKicker: 'After crossing',
  nbTitle: `Landmarks & attractions around ${entity.fullName}: food & nearby sights`,
  nbCards: [
    { title: 'Nearby seafood', text: 'The area is known for a fish and seafood experience. A well-known city option is the fish market, where visitors choose fish or shrimp and then ask for it grilled or fried. Try the bogue, cuttlefish, shrimp, and simple Egyptian salads.' },
    { title: 'Nearby landmarks', text: `The historic Suez Canal Authority building, Ferial Garden, the European-style Port Fouad villas, the Grand Mosque of Port Fouad, and the salt mountains are the most logical additions for a day trip. The two closest launch points are ${entity.landmark1} and ${entity.landmark2}.` }
  ],
  histKicker: 'History & significance',
  histTitle: `History & significance of ${entity.fullName}`,
  histP1: `The Port Said ferry has historically been tied to the founding of Port Fouad on the eastern bank of the canal and to moving workers between the two sides, and over time became part of the city’s daily life more than a standalone tourist attraction.`,
  histP2: `The importance of ${entity.fullName} today lies in being a real crossing experience inside a global shipping lane: open water, passing cargo ships, gulls, and a skyline that joins ${entity.city} and Port Fouad in a journey of just a few minutes, yet sums up the city’s relationship with the Suez Canal.`,
  factTitle: 'Landmark facts',
  facts: [
    { label: 'Name:', value: `${entity.fullName} · ${entity.shortNameAr}` },
    { label: 'City / Governorate:', value: `${entity.city} · ${entity.province}` },
    { label: 'Country:', value: `${entity.country} (${entity.countryCode})` },
    { label: 'Postal code:', value: entity.postalCode },
    { label: 'Coordinates:', value: `${entity.latitude}, ${entity.longitude}` },
    { label: 'Phone:', value: entity.telephone },
    { label: 'Rating:', value: `4.6 / 5 · 10,444 reviews on Google Maps` }
  ],
  govIntro: 'For official tourism information, visit the',
  govLink: 'Official Tourism Portal of Egypt',
  mapKicker: 'Location',
  mapTitle: `Map of ${entity.fullName} in ${entity.city}`,
  mapCreditAddress: `Address: ${entity.streetAddress}, ${entity.province} ${entity.postalCode}, ${entity.country}. Coordinates: ${entity.latitude}, ${entity.longitude}.`,
  mapCreditPrefix1: 'For official tourism information, visit',
  mapCreditLink1: 'Egypt / Port Said Official Tourism Portal',
  mapCreditMid: ' and for direct directions, open ',
  mapCreditLink2: `${entity.fullName} on Google Maps ↗`,
  faqKicker: 'Frequently asked questions',
  faqTitle: 'Frequently asked questions',
  faq: [
    [`Where is the Port Said Ferry (معدية بورسعيد) located?`, `The ferry is in ${entity.city}, ${entity.province}, ${entity.country}, at the crossing point 7856+R8F in the El-Gomhoreya area and customs district on the eastern waterfront, connecting ${entity.city} and Port Fouad across the Suez Canal.`],
    ['Is the ferry crossing free?', 'The official tourism sources of Port Said Governorate describe the ferry between Port Said and Port Fouad as free. Vehicle operating arrangements or routes may change, so check the posted instructions at the crossing on arrival.'],
    ['How long does the trip take?', 'The crossing itself is short and usually takes just a few minutes, while total time depends on the waiting queue and shipping traffic in the Suez Canal.'],
    ['Can cars cross?', 'Port Said ferries operate as transport for both people and vehicles. Follow the crew’s directions and the queuing lanes before boarding.'],
    ['What is the best time to experience it?', 'Early morning suits calm light and usually lighter crowds, while just before sunset gives a beautiful seascape. Fog and wind may change visibility.'],
    ['Is there parking?', 'The area around the crossing point is urban and busy. Arrive early, use the permitted parking zones and local signs rather than random stopping.'],
    ['Is it suitable for families?', 'Yes, it is a short trip suitable for most ages, with attention to supervising children near barriers and vehicle lanes and following crew instructions.'],
    ['What are the nearest sights after crossing?', `${entity.landmark1} and ${entity.landmark2}, plus the Grand Mosque of Port Fouad, are the most logical additions for a day trip.`]
  ],
  srcKicker: 'Sources',
  srcTitle: 'Image & information sources',
  sources: [
    { strong: 'Rating', text: 'Rating and review counts (4.6 / 5 · 10,444) synced from Google Maps user opinions as of September 2026; copyright belongs to the original authors and to Google Maps.', link: entity.mapsShareUrl, linkText: 'View all reviews on Google Maps ↗' },
    { strong: 'Images', text: 'Real photos from Wikimedia Commons: Nicola (public domain), Redthunder22 (CC BY-SA 3.0), Alaaeldeeb and Aya abo elkasem (CC BY-SA 4.0).' },
    { strong: 'Location & contact', text: 'Address, coordinates and contact data are from the Port Said Ferry on', link: entity.mapsShareUrl, linkText: 'Google Maps ↗' },
    { strong: 'History & tourism', text: 'The “Know Port Said” portal of Port Said Governorate, and the', link: entity.govtTourismUrl, linkText: 'Official Tourism Portal of Egypt' }
  ],
  srcNote: 'Operating information may change; always verify the posted instructions at the crossing point before planning.',
  footerText: 'This is an independent, unofficial guide site and does not represent the Suez Canal Authority, Port Said Governorate, or the ferry operator.',
  privacyTitle: 'Privacy Policy',
  privacyText: 'The site requires no login and stores no personal data in a database. If you consent to analytics, Google Analytics 4 is loaded to measure aggregate usage. You can decline analytics or change your decision from the cookie settings.',
  termsTitle: 'Terms of Use',
  termsText: 'Content is for general travel planning purposes. Operating hours, fares and vehicle movement may change without notice; follow the official instructions on site before making travel decisions.',
  cookiesTitle: 'Cookie Settings',
  cookiesText: 'You can enable or disable analytics cookies. Essential functional cookies are used only to remember your choice.',
  cookieBannerTitle: 'Your privacy first',
  cookieBannerText: 'We use GA4 only after your consent to measure site visits in aggregate.',
  consentYes: 'Allow',
  consentNo: 'No analytics',
  dialogClose: 'Close',
  langSwitch: { href: '/', label: 'العربية' }
};

export const content: Record<Locale, Content> = { ar, en };
