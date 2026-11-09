export type TopicGroup = 'transport' | 'attractions' | 'food-stay' | 'itineraries';
export type Priority = 'P0' | 'P1' | 'P2';
export type TopicLocale = 'ar' | 'en';

export interface TopicSection {
  title: string;
  body: string[];
  bullets?: string[];
}

export interface TopicContent {
  title: string;
  description: string;
  h1: string;
  card: string;
  lead: string;
  facts: [string, string][];
  sections: TopicSection[];
  faq: [string, string][];
}

export interface TopicDef {
  slug: string;
  group: TopicGroup;
  priority: Priority;
  related: string[];
}

export interface TopicUI {
  home: string;
  guides: string;
  breadcrumb: string;
  verifyTitle: string;
  verifyNote: string;
  faqTitle: string;
  relatedTitle: string;
  reviewed: string;
  backHome: string;
  allGuides: string;
  guidesIntro: string;
  readMore: string;
  languageLabel: string;
  groupLabels: Record<TopicGroup, string>;
  heroKicker: string;
}
