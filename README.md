# معدية بورسعيد — Astro site

موقع عربي أحادي الصفحة عن Port Said Ferry، مبني بـ Astro + Tailwind CSS + TypeScript ومهيأ للنشر على Cloudflare Workers كأصول ثابتة.

## إعداد الدومين
المكان الوحيد للدومين هو `site` داخل `astro.config.mjs`، ويُغذّى من متغير البيئة `SITE_URL`. إذا لم يُضبط المتغير يستمر البناء بدون canonical مطلق وبدون sitemap، ولا يستخدم أي نطاق وهمي.

```bash
SITE_URL="$YOUR_REAL_SITE_URL" pnpm build
```

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
