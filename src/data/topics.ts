import type { TopicContent, TopicDef, TopicGroup, TopicLocale, TopicUI } from './topic-types';
import { AR_P0 } from './topics.p0.ar';
import { EN_P0 } from './topics.p0.en';
import { AR_P1 } from './topics.p1.ar';
import { EN_P1 } from './topics.p1.en';
import { AR_P2 } from './topics.p2.ar';
import { EN_P2 } from './topics.p2.en';

export const TOPICS: TopicDef[] = [
  { slug: 'ferry-schedule', group: 'transport', priority: 'P0', related: ['ferry-today', 'ferry-fares', 'port-said-terminal', 'port-fouad-terminal', 'ferry-weather'] },
  { slug: 'ferry-today', group: 'transport', priority: 'P0', related: ['ferry-schedule', 'port-said-terminal', 'port-fouad-to-port-said', 'ferry-weather'] },
  { slug: 'ferry-fares', group: 'transport', priority: 'P0', related: ['ferry-schedule', 'car-ferry', 'pedestrian-ferry', 'port-said-to-port-fouad'] },
  { slug: 'port-said-terminal', group: 'transport', priority: 'P0', related: ['port-fouad-terminal', 'port-said-to-port-fouad', 'ferry-schedule', 'nearby/port-said-lighthouse'] },
  { slug: 'port-fouad-terminal', group: 'transport', priority: 'P0', related: ['port-said-terminal', 'port-fouad-to-port-said', 'ferry-today', 'nearby/port-fouad-waterfront'] },
  { slug: 'port-said-to-port-fouad', group: 'transport', priority: 'P0', related: ['port-fouad-to-port-said', 'port-said-terminal', 'crossing-time', 'nearby/port-fouad-heritage'] },
  { slug: 'port-fouad-to-port-said', group: 'transport', priority: 'P0', related: ['port-said-to-port-fouad', 'port-fouad-terminal', 'crossing-time', 'food/port-fouad-cafes'] },
  { slug: 'car-ferry', group: 'transport', priority: 'P0', related: ['ferry-fares', 'port-said-terminal', 'port-fouad-terminal', 'crossing-time'] },
  { slug: 'pedestrian-ferry', group: 'transport', priority: 'P0', related: ['ferry-fares', 'ferry-accessibility', 'port-said-terminal', 'crossing-time'] },
  { slug: 'crossing-time', group: 'transport', priority: 'P0', related: ['ferry-schedule', 'ferry-today', 'ferry-weather', 'itineraries/port-said-half-day'] },
  { slug: 'ferry-accessibility', group: 'transport', priority: 'P0', related: ['pedestrian-ferry', 'port-said-terminal', 'port-fouad-terminal', 'itineraries/family-trip'] },
  { slug: 'ferry-weather', group: 'transport', priority: 'P0', related: ['ferry-schedule', 'ferry-today', 'crossing-time', 'nearby/suez-canal-shipwatching'] },

  { slug: 'nearby/port-said-lighthouse', group: 'attractions', priority: 'P1', related: ['nearby/port-said-corniche', 'nearby/suez-canal-shipwatching', 'port-said-terminal', 'itineraries/port-said-half-day'] },
  { slug: 'nearby/suez-canal-authority-building', group: 'attractions', priority: 'P1', related: ['nearby/port-said-lighthouse', 'nearby/suez-canal-shipwatching', 'port-said-terminal', 'history/port-said-ferry'] },
  { slug: 'nearby/ferial-garden', group: 'attractions', priority: 'P1', related: ['nearby/port-said-corniche', 'port-said-terminal', 'itineraries/family-trip', 'things-to-do/waterfront'] },
  { slug: 'nearby/port-fouad-heritage', group: 'attractions', priority: 'P1', related: ['nearby/port-fouad-waterfront', 'port-fouad-terminal', 'itineraries/port-fouad-half-day', 'history/port-said-ferry'] },
  { slug: 'nearby/port-said-corniche', group: 'attractions', priority: 'P1', related: ['nearby/port-said-lighthouse', 'things-to-do/waterfront', 'nearby/suez-canal-shipwatching', 'itineraries/ferry-photo-route'] },
  { slug: 'nearby/port-said-museum', group: 'attractions', priority: 'P1', related: ['nearby/port-said-military-museum', 'nearby/port-said-corniche', 'itineraries/port-said-one-day'] },
  { slug: 'nearby/port-said-military-museum', group: 'attractions', priority: 'P1', related: ['nearby/port-said-museum', 'nearby/port-said-corniche', 'itineraries/port-said-one-day'] },
  { slug: 'nearby/port-fouad-waterfront', group: 'attractions', priority: 'P1', related: ['nearby/port-fouad-heritage', 'port-fouad-terminal', 'food/port-fouad-cafes', 'itineraries/port-fouad-half-day'] },
  { slug: 'nearby/suez-canal-shipwatching', group: 'attractions', priority: 'P1', related: ['nearby/port-said-lighthouse', 'nearby/port-said-corniche', 'itineraries/ferry-photo-route', 'ferry-weather'] },
  { slug: 'history/port-said-ferry', group: 'attractions', priority: 'P1', related: ['nearby/suez-canal-authority-building', 'nearby/port-fouad-heritage', 'port-said-to-port-fouad', 'itineraries/port-said-one-day'] },

  { slug: 'food/port-said-fish-market', group: 'food-stay', priority: 'P1', related: ['food/seafood-restaurants', 'food/local-food', 'port-said-terminal', 'itineraries/port-said-one-day'] },
  { slug: 'food/seafood-restaurants', group: 'food-stay', priority: 'P1', related: ['food/port-said-fish-market', 'food/local-food', 'food/port-fouad-cafes', 'things-to-do/waterfront'] },
  { slug: 'food/local-food', group: 'food-stay', priority: 'P1', related: ['food/port-said-fish-market', 'food/seafood-restaurants', 'itineraries/port-said-half-day'] },
  { slug: 'food/port-fouad-cafes', group: 'food-stay', priority: 'P1', related: ['nearby/port-fouad-waterfront', 'port-fouad-to-port-said', 'food/seafood-restaurants', 'itineraries/port-fouad-half-day'] },
  { slug: 'things-to-do/waterfront', group: 'food-stay', priority: 'P1', related: ['nearby/port-said-corniche', 'nearby/port-said-lighthouse', 'itineraries/ferry-photo-route', 'itineraries/family-trip'] },
  { slug: 'stay/port-said-hotels', group: 'food-stay', priority: 'P1', related: ['itineraries/port-said-one-day', 'port-said-terminal', 'things-to-do/waterfront', 'itineraries/cruise-day-trip'] },
  { slug: 'stay/port-fouad-hotels', group: 'food-stay', priority: 'P1', related: ['nearby/port-fouad-waterfront', 'port-fouad-terminal', 'itineraries/port-fouad-half-day', 'stay/port-said-hotels'] },

  { slug: 'itineraries/port-said-half-day', group: 'itineraries', priority: 'P2', related: ['itineraries/port-said-one-day', 'port-said-terminal', 'nearby/port-said-lighthouse', 'ferry-schedule'] },
  { slug: 'itineraries/port-said-one-day', group: 'itineraries', priority: 'P2', related: ['itineraries/port-said-half-day', 'nearby/port-said-museum', 'food/port-said-fish-market', 'crossing-time'] },
  { slug: 'itineraries/port-fouad-half-day', group: 'itineraries', priority: 'P2', related: ['nearby/port-fouad-heritage', 'port-fouad-terminal', 'food/port-fouad-cafes', 'port-fouad-to-port-said'] },
  { slug: 'itineraries/ferry-photo-route', group: 'itineraries', priority: 'P2', related: ['nearby/suez-canal-shipwatching', 'nearby/port-said-lighthouse', 'crossing-time', 'ferry-weather'] },
  { slug: 'itineraries/family-trip', group: 'itineraries', priority: 'P2', related: ['ferry-accessibility', 'nearby/ferial-garden', 'itineraries/port-said-half-day', 'pedestrian-ferry'] },
  { slug: 'itineraries/cruise-day-trip', group: 'itineraries', priority: 'P2', related: ['port-said-terminal', 'ferry-schedule', 'itineraries/port-said-half-day', 'stay/port-said-hotels'] }
];

export const GROUP_ORDER: TopicGroup[] = ['transport', 'attractions', 'food-stay', 'itineraries'];

export const TOPIC_UI: Record<TopicLocale, TopicUI> = {
  ar: {
    home: 'الرئيسية', guides: 'أدلة الموضوعات', breadcrumb: 'مسار التنقل',
    verifyTitle: 'حالة التحقق',
    verifyNote: 'هذه صفحة تخطيط مستقلة. لم يُتحقق من جدول تشغيل أو تعريفة أو مدخل بعينه لدى المشغّل؛ راجع الإعلانات الرسمية وتعليمات الطاقم عند ضفتي العبور قبل السفر.',
    faqTitle: 'أسئلة شائعة', relatedTitle: 'أدلة ذات صلة',
    reviewed: 'رُوجعت المصادر في 9 نوفمبر 2026',
    backHome: 'العودة إلى الدليل الرئيسي', allGuides: 'تصفّح كل الأدلة',
    guidesIntro: 'دليل مستقل لكل سؤال على حدة: المواعيد والرسوم وضفتي الصعود، ثم المعالم والأكل وبرامج الزيارة.',
    readMore: 'افتح الدليل', languageLabel: 'EN',
    groupLabels: {
      transport: 'العبور والمواصلات',
      attractions: 'المعالم والتاريخ',
      'food-stay': 'الأكل والراحة والإقامة',
      itineraries: 'مسارات وبرامج الزيارة'
    },
    heroKicker: 'دليل مستقل · بورسعيد ↔ بورفؤاد'
  },
  en: {
    home: 'Home', guides: 'Topic guides', breadcrumb: 'Breadcrumb',
    verifyTitle: 'Verification status',
    verifyNote: 'This is an independent planning page. No current timetable, fare or specific boarding gate has been confirmed by the operator; check official notices and crew instructions at both banks before travelling.',
    faqTitle: 'Frequently asked questions', relatedTitle: 'Related guides',
    reviewed: 'Sources reviewed 9 November 2026',
    backHome: 'Back to the main guide', allGuides: 'Browse all guides',
    guidesIntro: 'One focused guide per question: schedules, fares and both boarding banks, then landmarks, food and visit plans.',
    readMore: 'Open guide', languageLabel: 'ع',
    groupLabels: {
      transport: 'Crossing & transport',
      attractions: 'Landmarks & history',
      'food-stay': 'Food, leisure & stays',
      itineraries: 'Itineraries & themed routes'
    },
    heroKicker: 'Independent guide · Port Said ↔ Port Fouad'
  }
};

export const TOPIC_CONTENT: Record<TopicLocale, Record<string, TopicContent>> = {
  ar: { ...AR_P0, ...AR_P1, ...AR_P2 },
  en: { ...EN_P0, ...EN_P1, ...EN_P2 }
};

export const TOPIC_SLUGS = TOPICS.map((t) => t.slug);

export function getTopic(slug: string): TopicDef | undefined {
  return TOPICS.find((t) => t.slug === slug);
}

export function getTopicContent(slug: string, locale: TopicLocale): TopicContent | undefined {
  return TOPIC_CONTENT[locale][slug];
}

export function topicsByGroup(group: TopicGroup): TopicDef[] {
  return TOPICS.filter((t) => t.group === group);
}

export function topicPath(slug: string, locale: TopicLocale): string {
  return locale === 'ar' ? `/${slug}/` : `/en/${slug}/`;
}

export function relatedTopics(def: TopicDef): TopicDef[] {
  return def.related.map(getTopic).filter((t): t is TopicDef => Boolean(t));
}
