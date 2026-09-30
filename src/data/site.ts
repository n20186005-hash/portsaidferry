// Language-neutral facts about the Port Said Ferry (معدية بورسعيد - بورفؤاد).
// All visible copy lives in src/i18n.ts; this file only holds the entity itself.

export const entity = {
  domain: 'portsaidferry.com',
  fullName: 'Port Said Ferry',
  fullNameAr: 'معدية بورسعيد',
  shortNameAr: 'معدية بورسعيد - بورفؤاد',
  city: 'Port Said',
  cityAr: 'بورسعيد',
  province: 'Port Said Governorate',
  provinceAr: 'محافظة بورسعيد',
  country: 'Egypt',
  countryAr: 'مصر',
  countryCode: 'EG',
  postalCode: '8576001',
  latitude: 31.260117,
  longitude: 32.308510,
  streetAddress: '7856+R8F، الجمهورية، الدائرة الجمركية بورسعيد',
  telephone: '+20 10 22982228',
  telephoneHref: '+201022982228',
  mapsShareUrl: 'https://maps.app.goo.gl/xFw4TbUvqWshTacN9',
  govtTourismUrl: 'https://www.egypt.travel/',
  landmark1Ar: 'مبنى هيئة قناة السويس',
  landmark1: 'Suez Canal Authority Building',
  landmark2Ar: 'حديقة فريال وفيلات بورفؤاد',
  landmark2: 'Ferial Garden & Port Fouad Villas'
};

export const rating = {
  value: '4.6',
  best: '5',
  count: '10,444',
  syncedAtAr: 'سبتمبر 2026'
};

// Google Maps embed; hl is locale-aware and set by the page.
export const mapEmbed = (hl: string) =>
  `https://www.google.com/maps?q=7856%2BR8F%2C%20El-Gomhoreya%2C%20Port%20Said%2C%20Egypt&output=embed&hl=${hl}`;
