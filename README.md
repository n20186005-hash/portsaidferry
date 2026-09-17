# معدية بورسعيد — Astro site

موقع عربي أحادي الصفحة عن Port Said Ferry، مبني بـ Astro + Tailwind CSS + TypeScript ومهيأ للنشر على Cloudflare Workers كأصول ثابتة.

## إعداد الدومين
المكان الوحيد للدومين هو `site` داخل `astro.config.mjs`، وقيمته الافتراضية `https://portsaidferry.com`، ويمكن تجاوزها بمتغير البيئة `SITE_URL`. بهذا يوجد دائماً `canonical` و`og:url` و`sitemap` حتى بدون ضبط أي متغير.

```bash
SITE_URL="https://portsaidferry.com" pnpm build
```

## بيانات التقييم
التقييم المعروض (4.6 من 5 و10,419 تقييمًا) مُزامَن من آراء مستخدمي Google Maps (سبتمبر 2026) ويظهر في الصفحة فقط مع ذكر المصدر وحقوق النشر، ولا يُدرج في JSON-LD. الرابط `https://maps.app.goo.gl/xFw4TbUvqWshTacN9` متاح في الهيدر وقسم التقييمات وقسم المصادر.

## دعم PWA
- `public/manifest.webmanifest` مع أيقونات `public/icons/icon-192.png` و`icon-512.png` و`maskable-512.png` و`favicon.svg`.
- `public/sw.js` يُسجَّل من الصفحة: cache-first للأصول المحلية، وnetwork-first لطلبات التنقل مع رجوع إلى النسخة المخزنة عند انقطاع الشبكة.
- `public/robots.txt` يعلن `https://portsaidferry.com/sitemap-index.xml`.

## التشغيل
```bash
corepack enable
CI=1 corepack pnpm install --frozen-lockfile
pnpm check
pnpm build
pnpm deploy
```

## ملاحظة الصور
الموقع يستخدم صوراً فوتوغرافية حقيقية من Wikimedia Commons مع نسب الترخيص في الصفحة. تعذر نسخ الصور إلى الحزمة محلياً في بيئة الإنشاء الحالية بسبب حظر DNS الخارجي؛ لذلك بقيت روابط الصور الأصلية المباشرة في CSS. يمكن تنزيلها لاحقاً إلى `public/images/` وتبديل المسارات دون تغيير التصميم.
