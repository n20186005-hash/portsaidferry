// Per-locale page copy. Neutral facts live in src/data/site.ts.

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

export const content: Record<Locale, Content> = {
  "ar": {
    "title": "معدية بورسعيد–بورفؤاد: التحقق من المواعيد والأسعار وضفتي الصعود",
    "description": "خطط لعبور بورسعيد–بورفؤاد مع توضيح حدود معلومات المواعيد والأسعار، وضفتي الصعود، وأسئلة المركبات وإمكانية الوصول والمصادر المؤرخة.",
    "nav": [
      {
        "href": "#experience",
        "label": "التجربة"
      },
      {
        "href": "#reviews",
        "label": "التقييمات"
      },
      {
        "href": "#plan",
        "label": "التخطيط"
      },
      {
        "href": "#schedule",
        "label": "المواعيد"
      },
      {
        "href": "#transport",
        "label": "الوصول"
      },
      {
        "href": "#nearby",
        "label": "حولك"
      },
      {
        "href": "#history",
        "label": "التاريخ"
      },
      {
        "href": "#faq",
        "label": "الأسئلة"
      },
      {
        "href": "#map",
        "label": "الخريطة"
      },
      {
        "href": "#sources",
        "label": "المصادر"
      }
    ],
    "breadcrumb": [
      "Port Said Ferry",
      "بورسعيد",
      "محافظة بورسعيد",
      "مصر"
    ],
    "heroKicker": "قناة السويس · بورسعيد ↔ بورفؤاد",
    "h1": "معدية بورسعيد Port Said Ferry (بورسعيد)",
    "heroTagline": "تحقق قبل عبور القناة",
    "heroIntro": "دليل مستقل للتخطيط لعبور القناة بين بورسعيد وبورفؤاد. تأكد من نقطة المغادرة العاملة حاليًا وترتيب العودة وأي رسوم قبل السفر؛ لا تعرض الصفحة رحلات حية.",
    "ctaDirections": "افتح الاتجاهات",
    "ctaPlan": "خطّط للزيارة",
    "stats": [
      {
        "value": "تحقق من الرسوم الحالية",
        "label": "لا توجد تعريفة حالية موثقة هنا"
      },
      {
        "value": "تحقق من تشغيل اليوم",
        "label": "لا أول/آخر رحلة أو فاصل موثّق"
      },
      {
        "value": "أفراد ومركبات",
        "label": "القواعد حسب المعدية ومسار الصعود"
      },
      {
        "value": "4.6 / 5",
        "label": "10,502 تقييمًا على Google Maps"
      }
    ],
    "ratingNote": {
      "text": "لقطة Google Maps · 29 أكتوبر 2026 · 4.6/5 من 10,502 تقييمًا. قد تتغير أرقام المصدر الخارجي؛ لا يجمع الموقع مراجعات ولا ينسخ نصوصها ولا يزامنها تلقائيًا.",
      "linkText": "عرض جميع التقييمات على Google Maps ↗"
    },
    "expKicker": "عن Port Said Ferry",
    "expTitle": "About معدية بورسعيد Port Said Ferry: جزء من ذاكرة المدينة، لا مجرد وسيلة نقل",
    "expP1": "ارتبطت المعدية تاريخيًا بنشأة بورفؤاد ونقل العاملين بين ضفتي القناة. واليوم تظل رابطًا يوميًا بين بورسعيد وبورفؤاد، بينما صارت الرحلة نفسها مشهدًا محببًا للزوار: ماء مفتوح، سفن عملاقة، نوارس، وخط أفق بحري لا يشبه أي مواصلة داخل مدينة.",
    "expP2": "خطط لزيارات منفصلة لمبنى هيئة قناة السويس وحديقة فريال وفيلات بورفؤاد، مع التحقق من ضفة كل موقع وقواعد دخوله. نقطة المعدية على الخريطة لا تثبت مسار مشي متصلًا.",
    "expNotice": "معلومة عملية: حركة الملاحة والطقس قد تؤثر على الانتظار أو الرؤية. اتبع دائمًا تعليمات الطاقم بالموقع.",
    "revKicker": "تقييمات الزوّار",
    "revTitle": "تقييم معدية بورسعيد Port Said Ferry على Google Maps",
    "revMeta": "يقدّم هذا القسم ملخصًا لأرقام التقييم المنشورة على Google Maps فقط، ولا يعرض نصوص المراجعات؛ جميع آراء المستخدمين معروضة في مصدرها الأصلي عبر الرابط أدناه.",
    "revCta": "عرض جميع التقييمات على Google Maps ↗",
    "planKicker": "خططها بسهولة",
    "planTitle": "ما تحتاج معرفته قبل الصعود",
    "planCards": [
      {
        "icon": "ج",
        "title": "التذكرة / التكلفة",
        "text": "يتضمن برنامج سياحي غير مؤرخ للمحافظة ركوب المعدية ضمن أنشطة مجانية، لكنه ليس تعريفة حالية لكل راكب أو مركبة أو مسار. تأكد من أي رسوم لعبورك وفئة مركبتك لدى المشغّل؛ أجرة الحافلات العامة ليست تذكرة معدية."
      },
      {
        "icon": "☀",
        "title": "أفضل وقت",
        "text": "اختر الوقت بعد التأكد من التشغيل الحالي والطقس والمسار المناسب لمجموعتك. الضوء الجميل أو الصورة التاريخية لا يثبتان إتاحة الليل أو سهولة الصعود أو فتح الممرات."
      },
      {
        "icon": "⏱",
        "title": "مدة مقترحة",
        "text": "لا نضمن وقتًا للعبور أو الانتظار. اترك وقتًا مرنًا للصعود وحركة الملاحة والطقس ووصلة العودة؛ مقترح الزيارة ليس موعد إبحار."
      },
      {
        "icon": "P",
        "title": "معلومات الوقوف",
        "text": "تحقق من مكان الانتظار أو النزول المسموح حاليًا ورسومه ومن مسار الأفراد أو المركبات الفعلي. لا تعطل بوابات التشغيل ولا تفترض وجود مكان محجوز."
      },
      {
        "icon": "≈",
        "title": "الطقس والبحر",
        "text": "الرياح والضباب يؤثران على راحة التصوير. ارتدِ طبقة خفيفة مقاومة للهواء في الأشهر الأبرد، واحمِ هاتفك من رذاذ الماء."
      },
      {
        "icon": "◎",
        "title": "أفضل لقطة",
        "text": "قف في مكان يسمح به الطاقم مع خلفية بورفؤاد أو مبنى هيئة قناة السويس. لا تتجاوز الحواجز ولا تقف في مسار المركبات."
      }
    ],
    "schKicker": "مواعيد العمل والأسعار",
    "schTitle": "مواعيد معدية بورسعيد - بورفؤاد والأسعار",
    "schIntro": "رُوجعت المصادر في 29 أكتوبر 2026. للتاريخ الرسمي والبرامج السياحية غير المؤرخة وإعلانات التطوير المؤرخة نطاقات مختلفة؛ لا يثبت أي منها جدول إبحار حاليًا أو تعريفة لكل فئة.",
    "schCards": [
      {
        "icon": "⏱",
        "title": "مواعيد العمل",
        "text": "لم يُتحقق من جدول تشغيل حالي معتمد من المشغّل أو أول وآخر رحلة أو فاصل المغادرة. لم تعرض خرائط Google ساعات في 29 أكتوبر 2026. لا تفترض خدمة على مدار 24 ساعة أو ليلًا من تقارير قديمة؛ راجع الإعلانات الحالية وتعليمات الطاقم عند نقطة الصعود الفعلية."
      },
      {
        "icon": "♻",
        "title": "الأسعار / التذاكر",
        "text": "يتضمن برنامج سياحي غير مؤرخ للمحافظة ركوب المعدية ضمن أنشطة مجانية، لكنه ليس تعريفة حالية لكل راكب أو مركبة أو مسار. تأكد من أي رسوم لعبورك وفئة مركبتك لدى المشغّل؛ أجرة الحافلات العامة ليست تذكرة معدية."
      },
      {
        "icon": "↔",
        "title": "أي ضفة وبوابة صعود أستخدم؟",
        "text": "تشير نقطة الخرائط 7856+R8F إلى منطقة بورسعيد على الضفة الغربية عند الجمهورية والدائرة الجمركية، وليست نقطة للمحطتين معًا. تقع بورفؤاد على الضفة الشرقية. تصف تقارير رسمية لعام 2026 أعمالًا بميادين المعديات والمراسي، لكن يلزم تأكيد بوابات الصعود الحالية والتحويلات بالموقع. لا يتوفر هنا عنوان دقيق موثّق لبوابة الضفة الشرقية."
      },
      {
        "icon": "◎",
        "title": "هل رحلة العبور كاملة مهيأة للكراسي المتحركة؟",
        "text": "تخص علامة إمكانية الوصول في الخرائط مدخلًا مدرجًا، لا رحلة كاملة جرى التحقق منها. اسأل عن الضفتين والمعدية المخصصة ومنحدر الصعود وميله والفجوات والدرجات والمساحة والمساعدة. لم يتأكد مسار خالٍ من الدرج أو مرحاض مهيأ."
      }
    ],
    "trKicker": "تفاصيل الوصول",
    "trTitle": "Location & How to Visit معدية بورسعيد في بورسعيد: الوصول إلى نقطة العبور",
    "trSteps": [
      {
        "title": "من وسط بورسعيد",
        "text": "تشير نقطة الخرائط 7856+R8F إلى منطقة بورسعيد على الضفة الغربية عند الجمهورية والدائرة الجمركية، وليست نقطة للمحطتين معًا. تقع بورفؤاد على الضفة الشرقية. تصف تقارير رسمية لعام 2026 أعمالًا بميادين المعديات والمراسي، لكن يلزم تأكيد بوابات الصعود الحالية والتحويلات بالموقع. لا يتوفر هنا عنوان دقيق موثّق لبوابة الضفة الشرقية."
      },
      {
        "title": "بسيارة أو تاكسي",
        "text": "تصف مواد هيئة قناة السويس في فبراير وأبريل 2026 عبور الأفراد والمركبات. لا يثبت ذلك قبول كل فئة في كل معدية أو بوابة. اسأل عن مسار المركبات الحالي وحدود الحجم والوزن والاصطفاف والعودة قبل الصعود بالسيارة."
      },
      {
        "title": "مشياً",
        "text": "تخص علامة إمكانية الوصول في الخرائط مدخلًا مدرجًا، لا رحلة كاملة جرى التحقق منها. اسأل عن الضفتين والمعدية المخصصة ومنحدر الصعود وميله والفجوات والدرجات والمساحة والمساعدة. لم يتأكد مسار خالٍ من الدرج أو مرحاض مهيأ."
      },
      {
        "title": "بعد الوصول إلى بورفؤاد",
        "text": "هذه وجهات مستقلة على ضفتين مختلفتين. تحقق من الطريق وقواعد الدخول والمواعيد لكل منها؛ لا نعد بمسار مشي قصير متصل أو بإكمالها في يوم واحد."
      }
    ],
    "nbKicker": "بعد العبور",
    "nbTitle": "Landmarks & Attractions Around Port Said Ferry: الأكل والمعالم القريبة",
    "nbCards": [
      {
        "title": "مأكولات بحرية قريبة",
        "text": "تشتهر المنطقة بتجربة السمك والمأكولات البحرية. من الخيارات المعروفة في المدينة سوق السمك، حيث يختار الزائر السمك أو الجمبري ثم يطلب الشوي أو القلي. جرّب البوري، السبيط، الجمبري، والسلطات المصرية البسيطة."
      },
      {
        "title": "معالم قريبة",
        "text": "هذه وجهات مستقلة على ضفتين مختلفتين. تحقق من الطريق وقواعد الدخول والمواعيد لكل منها؛ لا نعد بمسار مشي قصير متصل أو بإكمالها في يوم واحد."
      }
    ],
    "histKicker": "التاريخ والأهمية",
    "histTitle": "History & Significance of معدية بورسعيد Port Said Ferry",
    "histP1": "ارتبطت معدية بورسعيد تاريخيًا بنشأة بورفؤاد على الضفة الشرقية للقناة وبنقل العاملين بين الضفتين، ثم أصبحت مع الوقت جزءًا من الحياة اليومية للمدينة أكثر من كونها معلمًا سياحيًا مستقلًا.",
    "histP2": "يعبر هذا النقل ضفتي القناة ضمن بيئة ملاحية؛ لا تُستخدم صور الماضي لتقدير وقت الانتظار أو حالة مرافق اليوم.",
    "factTitle": "بطاقة المعلم",
    "facts": [
      {
        "label": "الاسم:",
        "value": "Port Said Ferry · معدية بورسعيد - بورفؤاد"
      },
      {
        "label": "المدينة / المحافظة:",
        "value": "بورسعيد · محافظة بورسعيد"
      },
      {
        "label": "الدولة:",
        "value": "مصر (EG)"
      },
      {
        "label": "الرمز البريدي:",
        "value": "8576001"
      },
      {
        "label": "التقييم:",
        "value": "4.6/5 · 10,502 تقييمًا"
      }
    ],
    "govIntro": "للمعلومات السياحية الرسمية، زر",
    "govLink": "بوابة السياحة الرسمية في مصر",
    "mapKicker": "الموقع",
    "mapTitle": "خريطة معدية بورسعيد Port Said Ferry في بورسعيد",
    "mapCreditAddress": "العنوان: 7856+R8F، الجمهورية، الدائرة الجمركية بورسعيد، محافظة بورسعيد 8576001، مصر. ",
    "mapCreditPrefix1": "للمعلومات السياحية الرسمية، تفضل بزيارة",
    "mapCreditLink1": "Egypt / Port Said Official Tourism Portal",
    "mapCreditMid": " وللاتجاهات المباشرة، افتح ",
    "mapCreditLink2": "Port Said Ferry على Google Maps ↗",
    "faqKicker": "الأسئلة الشائعة",
    "faqTitle": "أسئلة شائعة",
    "faq": [
      [
        "أين تقع معدية بورسعيد (Port Said Ferry)؟",
        "تشير نقطة الخرائط 7856+R8F إلى منطقة بورسعيد على الضفة الغربية عند الجمهورية والدائرة الجمركية، وليست نقطة للمحطتين معًا. تقع بورفؤاد على الضفة الشرقية. تصف تقارير رسمية لعام 2026 أعمالًا بميادين المعديات والمراسي، لكن يلزم تأكيد بوابات الصعود الحالية والتحويلات بالموقع. لا يتوفر هنا عنوان دقيق موثّق لبوابة الضفة الشرقية."
      ],
      [
        "هل عبور المعدية مجاني؟",
        "يتضمن برنامج سياحي غير مؤرخ للمحافظة ركوب المعدية ضمن أنشطة مجانية، لكنه ليس تعريفة حالية لكل راكب أو مركبة أو مسار. تأكد من أي رسوم لعبورك وفئة مركبتك لدى المشغّل؛ أجرة الحافلات العامة ليست تذكرة معدية."
      ],
      [
        "كم تستغرق الرحلة؟",
        "لا نضمن وقتًا للعبور أو الانتظار. اترك وقتًا مرنًا للصعود وحركة الملاحة والطقس ووصلة العودة؛ مقترح الزيارة ليس موعد إبحار."
      ],
      [
        "هل يمكن عبور السيارات؟",
        "تصف مواد هيئة قناة السويس في فبراير وأبريل 2026 عبور الأفراد والمركبات. لا يثبت ذلك قبول كل فئة في كل معدية أو بوابة. اسأل عن مسار المركبات الحالي وحدود الحجم والوزن والاصطفاف والعودة قبل الصعود بالسيارة."
      ],
      [
        "ما أفضل وقت للتجربة؟",
        "اختر الوقت بعد التأكد من التشغيل الحالي والطقس والمسار المناسب لمجموعتك. الضوء الجميل أو الصورة التاريخية لا يثبتان إتاحة الليل أو سهولة الصعود أو فتح الممرات."
      ],
      [
        "هل توجد مواقف؟",
        "تحقق من مكان الانتظار أو النزول المسموح حاليًا ورسومه ومن مسار الأفراد أو المركبات الفعلي. لا تعطل بوابات التشغيل ولا تفترض وجود مكان محجوز."
      ],
      [
        "هل التجربة مناسبة للعائلات؟",
        "لا تفترض ملاءمة العبور لكل مجموعة. تأكد من مساري الصعود والحواجز والمساعدة مع الطاقم، وأبعد الأطفال عن مسارات المركبات وحواف الماء، وخطط لبديل للعودة."
      ],
      [
        "ما أقرب المعالم بعد العبور؟",
        "هذه وجهات مستقلة على ضفتين مختلفتين. تحقق من الطريق وقواعد الدخول والمواعيد لكل منها؛ لا نعد بمسار مشي قصير متصل أو بإكمالها في يوم واحد."
      ],
      [
        "ما مواعيد المعدية الحالية وفواصل المغادرة؟",
        "لم يُتحقق من جدول تشغيل حالي معتمد من المشغّل أو أول وآخر رحلة أو فاصل المغادرة. لم تعرض خرائط Google ساعات في 29 أكتوبر 2026. لا تفترض خدمة على مدار 24 ساعة أو ليلًا من تقارير قديمة؛ راجع الإعلانات الحالية وتعليمات الطاقم عند نقطة الصعود الفعلية."
      ],
      [
        "أي ضفة وبوابة صعود أستخدم؟",
        "تشير نقطة الخرائط 7856+R8F إلى منطقة بورسعيد على الضفة الغربية عند الجمهورية والدائرة الجمركية، وليست نقطة للمحطتين معًا. تقع بورفؤاد على الضفة الشرقية. تصف تقارير رسمية لعام 2026 أعمالًا بميادين المعديات والمراسي، لكن يلزم تأكيد بوابات الصعود الحالية والتحويلات بالموقع. لا يتوفر هنا عنوان دقيق موثّق لبوابة الضفة الشرقية."
      ],
      [
        "هل رحلة العبور كاملة مهيأة للكراسي المتحركة؟",
        "تخص علامة إمكانية الوصول في الخرائط مدخلًا مدرجًا، لا رحلة كاملة جرى التحقق منها. اسأل عن الضفتين والمعدية المخصصة ومنحدر الصعود وميله والفجوات والدرجات والمساحة والمساعدة. لم يتأكد مسار خالٍ من الدرج أو مرحاض مهيأ."
      ]
    ],
    "srcKicker": "المصادر",
    "srcTitle": "مصادر الصور والمعلومات",
    "sources": [
      {
        "strong": "سجل المصادر",
        "text": "رُوجعت المصادر في 29 أكتوبر 2026. للتاريخ الرسمي والبرامج السياحية غير المؤرخة وإعلانات التطوير المؤرخة نطاقات مختلفة؛ لا يثبت أي منها جدول إبحار حاليًا أو تعريفة لكل فئة."
      },
      {
        "strong": "Suez Canal Authority · 4 February 2026",
        "text": "عبور الأفراد والمركبات وأعمال التطوير؛ ليس جدولًا حاليًا.",
        "link": "https://www.suezcanal.gov.eg/Arabic/MediaCenter/News/Pages/Sca_4-2-2026-%281%29.aspx",
        "linkText": "SCA"
      },
      {
        "strong": "Suez Canal Authority · 8 April 2026",
        "text": "المراسي والتحديث وخطط الكباري؛ لا تثبت افتتاح مشروع مخطط.",
        "link": "https://www.suezcanal.gov.eg/Arabic/MediaCenter/News/Pages/Sca_8-4-2026.aspx",
        "linkText": "SCA"
      },
      {
        "strong": "تاريخ المعدية",
        "text": "تاريخ بورسعيد وبورفؤاد؛ لا مواعيد حالية.",
        "link": "https://e3rafportsaid.portsaid.gov.eg/Home/EventDetails?eventid=65",
        "linkText": "Port Said Governorate"
      },
      {
        "strong": "برنامج مجاني غير مؤرخ",
        "text": "يتضمن برنامج سياحي غير مؤرخ للمحافظة ركوب المعدية ضمن أنشطة مجانية، لكنه ليس تعريفة حالية لكل راكب أو مركبة أو مسار. تأكد من أي رسوم لعبورك وفئة مركبتك لدى المشغّل؛ أجرة الحافلات العامة ليست تذكرة معدية.",
        "link": "https://e3rafportsaid.portsaid.gov.eg/Home/EventDetails?eventid=24",
        "linkText": "Port Said Governorate"
      },
      {
        "strong": "Google Maps",
        "text": "لقطة Google Maps · 29 أكتوبر 2026 · 4.6/5 من 10,502 تقييمًا. قد تتغير أرقام المصدر الخارجي؛ لا يجمع الموقع مراجعات ولا ينسخ نصوصها ولا يزامنها تلقائيًا.",
        "link": "https://maps.app.goo.gl/xFw4TbUvqWshTacN9",
        "linkText": "Google Maps"
      }
    ],
    "srcNote": "لم يُتحقق من جدول تشغيل حالي معتمد من المشغّل أو أول وآخر رحلة أو فاصل المغادرة. لم تعرض خرائط Google ساعات في 29 أكتوبر 2026. لا تفترض خدمة على مدار 24 ساعة أو ليلًا من تقارير قديمة؛ راجع الإعلانات الحالية وتعليمات الطاقم عند نقطة الصعود الفعلية.",
    "footerText": "هذا موقع إرشادي مستقل وغير رسمي، ولا يمثل هيئة قناة السويس أو محافظة بورسعيد أو مشغّل المعديات.",
    "privacyTitle": "سياسة الخصوصية",
    "privacyText": "يُحفظ اختيار Google Analytics في localStorage بهذا المتصفح، وليس في ملف ارتباط ضروري. عند السماح قد يُحمّل نص GA4 وتُستخدم ملفات قياس. يوقف الرفض الجمع اللاحق عبر أدوات هذه الصفحة ويمنع التحميل في الزيارات التالية عند حفظ الرفض؛ لكنه لا يزيل نصًا محمّلًا أو يحذف ملفات Google.",
    "termsTitle": "شروط الاستخدام",
    "termsText": "المحتوى لأغراض التخطيط السياحي العام. ساعات التشغيل والأسعار وحركة المركبات قد تتغير دون إشعار؛ اتبع التعليمات الرسمية في الموقع قبل اتخاذ قرار السفر.",
    "cookiesTitle": "إعدادات ملفات الارتباط",
    "cookiesText": "يتحكم هذا الإعداد في Google Analytics فقط. يُحفظ الاختيار محليًا. يطبق الرفض على الجمع اللاحق؛ لا تُزال النصوص المحملة أو ملفات الارتباط القائمة. معالجة الاستضافة منفصلة.",
    "cookieBannerTitle": "خصوصيتك أولاً",
    "cookieBannerText": "اختر السماح بـGoogle Analytics أو رفضه. المعالجة التقنية للاستضافة وتحليلاتها المهيأة بصورة مستقلة منفصلة عن هذا الاختيار.",
    "consentYes": "السماح بـGoogle Analytics",
    "consentNo": "رفض Google Analytics",
    "dialogClose": "إغلاق",
    "langSwitch": {
      "href": "/en/",
      "label": "EN"
    }
  },
  "en": {
    "title": "Port Said Ferry: Hours, Fare Checks & Two-bank Boarding Guide",
    "description": "Plan the Port Said–Port Fouad crossing with qualified ferry-hour and fare information, separate boarding-bank checks, vehicle/access questions and dated sources.",
    "nav": [
      {
        "href": "#experience",
        "label": "Experience"
      },
      {
        "href": "#reviews",
        "label": "Reviews"
      },
      {
        "href": "#plan",
        "label": "Plan"
      },
      {
        "href": "#schedule",
        "label": "Hours"
      },
      {
        "href": "#transport",
        "label": "Getting here"
      },
      {
        "href": "#nearby",
        "label": "Nearby"
      },
      {
        "href": "#history",
        "label": "History"
      },
      {
        "href": "#faq",
        "label": "FAQ"
      },
      {
        "href": "#map",
        "label": "Map"
      },
      {
        "href": "#sources",
        "label": "Sources"
      }
    ],
    "breadcrumb": [
      "Port Said Ferry",
      "Port Said",
      "Port Said Governorate",
      "Egypt"
    ],
    "heroKicker": "Suez Canal · Port Said ↔ Port Fouad",
    "h1": "Port Said Ferry (Port Said – Port Fouad)",
    "heroTagline": "Check before crossing the canal",
    "heroIntro": "An independent planning guide to the Port Said–Port Fouad canal crossing. Confirm the currently operating departure point, return arrangement and any charges before travelling; this page does not show live sailings.",
    "ctaDirections": "Open directions",
    "ctaPlan": "Plan your visit",
    "stats": [
      {
        "value": "Confirm current charge",
        "label": "Fare rules not independently current"
      },
      {
        "value": "Confirm today’s operation",
        "label": "No verified first/last sailing or interval"
      },
      {
        "value": "People and vehicles",
        "label": "Rules depend on actual vessel and lane"
      },
      {
        "value": "4.6 / 5",
        "label": "10,502 Google Maps reviews"
      }
    ],
    "ratingNote": {
      "text": "Google Maps snapshot · 29 October 2026 · 4.6/5 from 10,502 reviews. Third-party values may change; this guide does not collect reviews, copy their text or synchronize automatically.",
      "linkText": "View all reviews on Google Maps ↗"
    },
    "expKicker": "About Port Said Ferry",
    "expTitle": "About معدية بورسعيد Port Said Ferry: part of the city's memory, not just transport",
    "expP1": "The ferry has historically been tied to the founding of Port Fouad and to moving workers between the two banks of the canal. Today it remains a daily link between Port Said and Port Fouad, while the crossing itself has become a favourite scene for visitors: open water, giant ships, gulls, and a seascape unlike any in-city commute.",
    "expP2": "Plan separate visits to the Suez Canal Authority Building, Ferial Garden and Port Fouad villas, checking which bank each is on and its own entry rules. A ferry map pin does not establish a continuous walking route.",
    "expNotice": "Practical note: shipping traffic and weather may affect waiting time or visibility. Always follow the crew’s instructions on site.",
    "revKicker": "Visitor ratings",
    "revTitle": "Port Said Ferry rating on Google Maps",
    "revMeta": "This section presents only a summary of the rating figures published on Google Maps, and does not display review text; all user opinions are shown at their original source via the link below.",
    "revCta": "View all reviews on Google Maps ↗",
    "planKicker": "Plan with ease",
    "planTitle": "What you need to know before boarding",
    "planCards": [
      {
        "icon": "T",
        "title": "Ticket / cost",
        "text": "An undated governorate tourism itinerary includes the ferry among free activities. That is not a current tariff for every pedestrian, vehicle or route. Confirm the charge, if any, for your crossing and vehicle category with the operator; public bus fares are not ferry tickets."
      },
      {
        "icon": "☀",
        "title": "Best time",
        "text": "Choose a time only after confirming present operation, forecast and the route for your group. Attractive light or a historical photo does not establish night access, smooth boarding or open paths."
      },
      {
        "icon": "⏱",
        "title": "Suggested duration",
        "text": "No guaranteed crossing or waiting time is provided. Leave a flexible allowance for boarding, shipping movement, weather and your return connection; do not treat a suggested visit as a timed sailing."
      },
      {
        "icon": "P",
        "title": "Parking info",
        "text": "Check the currently permitted parking/drop-off area, charges and the actual passenger or vehicle lane. Do not obstruct operating gates or assume a reserved space."
      },
      {
        "icon": "≈",
        "title": "Weather & sea",
        "text": "Wind and fog affect shooting comfort. Wear a light wind-resistant layer in the colder months and protect your phone from spray."
      },
      {
        "icon": "◎",
        "title": "Best shot",
        "text": "Stand where the crew allows, with Port Fouad or the Suez Canal Authority building behind you. Do not cross barriers or stand in vehicle lanes."
      }
    ],
    "schKicker": "Hours & fares",
    "schTitle": "Port Said – Port Fouad ferry hours & fares",
    "schIntro": "Sources checked 29 October 2026. Official history, undated tourism suggestions and dated infrastructure announcements have different scopes; none establishes a current sailing timetable or category-specific tariff.",
    "schCards": [
      {
        "icon": "⏱",
        "title": "Operating hours",
        "text": "A current operator-confirmed timetable, first/last crossing and departure interval were not established. Maps showed no hours on 29 October 2026. Do not assume 24-hour or night service from older reports; check the current notices and crew instructions at the actual boarding point."
      },
      {
        "icon": "♻",
        "title": "Fares / tickets",
        "text": "An undated governorate tourism itinerary includes the ferry among free activities. That is not a current tariff for every pedestrian, vehicle or route. Confirm the charge, if any, for your crossing and vehicle category with the operator; public bus fares are not ferry tickets."
      },
      {
        "icon": "↔",
        "title": "Which bank and boarding gate should I use?",
        "text": "The Maps pin 7856+R8F identifies the Port Said/west-bank area at El-Gomhoreya and the customs district; it is not a pin for both terminals. The other side is Port Fouad/east bank. Official 2026 reports describe work at ferry squares/berths, but current boarding gates and any temporary diversions need on-site confirmation. No precise east-bank gate address is verified here."
      },
      {
        "icon": "◎",
        "title": "Is the complete crossing wheelchair accessible?",
        "text": "The Maps accessibility label concerns a listed entrance, not a verified end-to-end journey. Ask about both banks, the assigned vessel, boarding ramp/slope, gaps, steps, onboard space and available assistance. A step-free route or accessible toilet has not been confirmed."
      }
    ],
    "trKicker": "Getting here",
    "trTitle": "Location & how to visit Port Said Ferry: reaching the crossing point",
    "trSteps": [
      {
        "title": "From central Port Said",
        "text": "The Maps pin 7856+R8F identifies the Port Said/west-bank area at El-Gomhoreya and the customs district; it is not a pin for both terminals. The other side is Port Fouad/east bank. Official 2026 reports describe work at ferry squares/berths, but current boarding gates and any temporary diversions need on-site confirmation. No precise east-bank gate address is verified here."
      },
      {
        "title": "By car or taxi",
        "text": "Suez Canal Authority material dated February and April 2026 describes crossings for people and vehicles. This does not confirm every vessel, gate or vehicle class. Ask about the current vehicle lane, size/weight restrictions, queuing rules and return crossing before driving aboard."
      },
      {
        "title": "On foot",
        "text": "The Maps accessibility label concerns a listed entrance, not a verified end-to-end journey. Ask about both banks, the assigned vessel, boarding ramp/slope, gaps, steps, onboard space and available assistance. A step-free route or accessible toilet has not been confirmed."
      },
      {
        "title": "After arriving in Port Fouad",
        "text": "These are separate destinations on different banks. Check the actual route, entry rules and hours independently; no short continuous walk or single-day completion is promised."
      }
    ],
    "nbKicker": "After crossing",
    "nbTitle": "Landmarks & attractions around Port Said Ferry: food & nearby sights",
    "nbCards": [
      {
        "title": "Nearby seafood",
        "text": "The area is known for a fish and seafood experience. A well-known city option is the fish market, where visitors choose fish or shrimp and then ask for it grilled or fried. Try the bogue, cuttlefish, shrimp, and simple Egyptian salads."
      },
      {
        "title": "Nearby landmarks",
        "text": "These are separate destinations on different banks. Check the actual route, entry rules and hours independently; no short continuous walk or single-day completion is promised."
      }
    ],
    "histKicker": "History & significance",
    "histTitle": "History & significance of Port Said Ferry",
    "histP1": "The Port Said ferry has historically been tied to the founding of Port Fouad on the eastern bank of the canal and to moving workers between the two sides, and over time became part of the city’s daily life more than a standalone tourist attraction.",
    "histP2": "This service crosses the canal in a shipping environment; historical images do not establish today’s wait or facilities.",
    "factTitle": "Landmark facts",
    "facts": [
      {
        "label": "Name:",
        "value": "Port Said Ferry · معدية بورسعيد - بورفؤاد"
      },
      {
        "label": "City / Governorate:",
        "value": "Port Said · Port Said Governorate"
      },
      {
        "label": "Country:",
        "value": "Egypt (EG)"
      },
      {
        "label": "Postal code:",
        "value": "8576001"
      },
      {
        "label": "Rating:",
        "value": "4.6/5 · 10,502 reviews"
      }
    ],
    "govIntro": "For official tourism information, visit the",
    "govLink": "Official Tourism Portal of Egypt",
    "mapKicker": "Location",
    "mapTitle": "Map of Port Said Ferry in Port Said",
    "mapCreditAddress": "Address: 7856+R8F، الجمهورية، الدائرة الجمركية بورسعيد, Port Said Governorate 8576001, Egypt. ",
    "mapCreditPrefix1": "For official tourism information, visit",
    "mapCreditLink1": "Egypt / Port Said Official Tourism Portal",
    "mapCreditMid": " and for direct directions, open ",
    "mapCreditLink2": "Port Said Ferry on Google Maps ↗",
    "faqKicker": "Frequently asked questions",
    "faqTitle": "Frequently asked questions",
    "faq": [
      [
        "Where is the Port Said Ferry (معدية بورسعيد) located?",
        "The Maps pin 7856+R8F identifies the Port Said/west-bank area at El-Gomhoreya and the customs district; it is not a pin for both terminals. The other side is Port Fouad/east bank. Official 2026 reports describe work at ferry squares/berths, but current boarding gates and any temporary diversions need on-site confirmation. No precise east-bank gate address is verified here."
      ],
      [
        "Is the ferry crossing free?",
        "An undated governorate tourism itinerary includes the ferry among free activities. That is not a current tariff for every pedestrian, vehicle or route. Confirm the charge, if any, for your crossing and vehicle category with the operator; public bus fares are not ferry tickets."
      ],
      [
        "How long does the trip take?",
        "No guaranteed crossing or waiting time is provided. Leave a flexible allowance for boarding, shipping movement, weather and your return connection; do not treat a suggested visit as a timed sailing."
      ],
      [
        "Can cars cross?",
        "Suez Canal Authority material dated February and April 2026 describes crossings for people and vehicles. This does not confirm every vessel, gate or vehicle class. Ask about the current vehicle lane, size/weight restrictions, queuing rules and return crossing before driving aboard."
      ],
      [
        "What is the best time to experience it?",
        "Choose a time only after confirming present operation, forecast and the route for your group. Attractive light or a historical photo does not establish night access, smooth boarding or open paths."
      ],
      [
        "Is there parking?",
        "Check the currently permitted parking/drop-off area, charges and the actual passenger or vehicle lane. Do not obstruct operating gates or assume a reserved space."
      ],
      [
        "Is it suitable for families?",
        "Do not assume the crossing suits every group. Confirm both boarding routes, barriers and assistance with the crew; keep children away from vehicle lanes and waterfront edges, and plan a return alternative."
      ],
      [
        "What are the nearest sights after crossing?",
        "These are separate destinations on different banks. Check the actual route, entry rules and hours independently; no short continuous walk or single-day completion is promised."
      ],
      [
        "What are the ferry’s current hours and intervals?",
        "A current operator-confirmed timetable, first/last crossing and departure interval were not established. Maps showed no hours on 29 October 2026. Do not assume 24-hour or night service from older reports; check the current notices and crew instructions at the actual boarding point."
      ],
      [
        "Which bank and boarding gate should I use?",
        "The Maps pin 7856+R8F identifies the Port Said/west-bank area at El-Gomhoreya and the customs district; it is not a pin for both terminals. The other side is Port Fouad/east bank. Official 2026 reports describe work at ferry squares/berths, but current boarding gates and any temporary diversions need on-site confirmation. No precise east-bank gate address is verified here."
      ],
      [
        "Is the complete crossing wheelchair accessible?",
        "The Maps accessibility label concerns a listed entrance, not a verified end-to-end journey. Ask about both banks, the assigned vessel, boarding ramp/slope, gaps, steps, onboard space and available assistance. A step-free route or accessible toilet has not been confirmed."
      ]
    ],
    "srcKicker": "Sources",
    "srcTitle": "Image & information sources",
    "sources": [
      {
        "strong": "Source scope",
        "text": "Sources checked 29 October 2026. Official history, undated tourism suggestions and dated infrastructure announcements have different scopes; none establishes a current sailing timetable or category-specific tariff."
      },
      {
        "strong": "Suez Canal Authority · 4 February 2026",
        "text": "People/vehicle crossing and infrastructure works; not a current timetable.",
        "link": "https://www.suezcanal.gov.eg/Arabic/MediaCenter/News/Pages/Sca_4-2-2026-%281%29.aspx",
        "linkText": "SCA"
      },
      {
        "strong": "Suez Canal Authority · 8 April 2026",
        "text": "Berths, modernization and bridge plans; not proof a planned bridge has opened.",
        "link": "https://www.suezcanal.gov.eg/Arabic/MediaCenter/News/Pages/Sca_8-4-2026.aspx",
        "linkText": "SCA"
      },
      {
        "strong": "Ferry history",
        "text": "Port Said/Port Fouad history; no current schedule.",
        "link": "https://e3rafportsaid.portsaid.gov.eg/Home/EventDetails?eventid=65",
        "linkText": "Port Said Governorate"
      },
      {
        "strong": "Undated free tourism itinerary",
        "text": "An undated governorate tourism itinerary includes the ferry among free activities. That is not a current tariff for every pedestrian, vehicle or route. Confirm the charge, if any, for your crossing and vehicle category with the operator; public bus fares are not ferry tickets.",
        "link": "https://e3rafportsaid.portsaid.gov.eg/Home/EventDetails?eventid=24",
        "linkText": "Port Said Governorate"
      },
      {
        "strong": "Google Maps",
        "text": "Google Maps snapshot · 29 October 2026 · 4.6/5 from 10,502 reviews. Third-party values may change; this guide does not collect reviews, copy their text or synchronize automatically.",
        "link": "https://maps.app.goo.gl/xFw4TbUvqWshTacN9",
        "linkText": "Google Maps"
      }
    ],
    "srcNote": "A current operator-confirmed timetable, first/last crossing and departure interval were not established. Maps showed no hours on 29 October 2026. Do not assume 24-hour or night service from older reports; check the current notices and crew instructions at the actual boarding point.",
    "footerText": "This is an independent, unofficial guide site and does not represent the Suez Canal Authority, Port Said Governorate, or the ferry operator.",
    "privacyTitle": "Privacy Policy",
    "privacyText": "Your Google Analytics choice is stored in this browser’s localStorage, not a necessary cookie. If allowed, GA4 can load its browser script and use measurement cookies. Declining disables future GA collection through this page’s controls and prevents loading on later visits with a saved refusal; it does not unload an already loaded script or delete Google’s cookies.",
    "termsTitle": "Terms of Use",
    "termsText": "Content is for general travel planning purposes. Operating hours, fares and vehicle movement may change without notice; follow the official instructions on site before making travel decisions.",
    "cookiesTitle": "Cookie Settings",
    "cookiesText": "This setting controls Google Analytics only. The choice is stored locally. A refusal is applied to future GA collection; already loaded scripts and existing cookies are not removed. Hosting-side processing is separate.",
    "cookieBannerTitle": "Your privacy first",
    "cookieBannerText": "Choose whether to allow Google Analytics. Hosting-side technical processing and independently configured hosting analytics are separate from this choice.",
    "consentYes": "Allow Google Analytics",
    "consentNo": "Decline Google Analytics",
    "dialogClose": "Close",
    "langSwitch": {
      "href": "/",
      "label": "العربية"
    }
  }
};
