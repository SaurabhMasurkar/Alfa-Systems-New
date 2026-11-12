export interface FaqItem {
  id: string;
  category: 'services' | 'societies' | 'general';
  categoryLabel: string;
  question: string;
  answer: string;
}

export const FAQS_DATA: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'societies',
    categoryLabel: 'Housing Societies',
    question: 'How often should residential societies and commercial water tanks be cleaned?',
    answer: 'According to health standards and municipal guidelines, potable water storage tanks (both underground sumps and overhead tanks) should be thoroughly cleaned and sanitized at least once every six months (twice a year) to prevent harmful bacterial colonies, algae formation, and heavy sediment buildup.'
  },
  {
    id: 'faq-2',
    category: 'societies',
    categoryLabel: 'Housing Societies',
    question: 'Will our building\'s water supply be shut down for the whole day during cleaning?',
    answer: 'No. For twin-compartment or compartmentalized tanks, we isolate and clean one section at a time while the other maintains uninterrupted water supply. Even for single tanks, our high-capacity dewatering pumps and rapid mechanized 3-to-6 stage process typically complete the work within 2 to 4 hours depending on tank volume.'
  },
  {
    id: 'faq-3',
    category: 'services',
    categoryLabel: 'Hygiene & Safety',
    question: 'Is your cleaning process chemical-free and safe for potable drinking water?',
    answer: 'Yes. We do not use crude bleaching powder or hazardous chemicals that corrode pipes and leave toxic residual tastes. We utilize high-pressure water jets, potassium permanganate wash, and certified bio-safe antibacterial sanitizers that eliminate 99.9% of pathogens with zero toxic chemical trace.'
  },
  {
    id: 'faq-4',
    category: 'services',
    categoryLabel: 'Cleaning Process',
    question: 'What is the difference between manual scrubbing and your mechanized process?',
    answer: 'Traditional manual cleaning relies on laborers with wire brushes and cloths who cannot reach ceilings or deep corners and often leave up to 40% of sludge and bio-film at the bottom. Alfa Cleaning Systems uses electrical submersible dewatering pumps, high-pressure rotary jet washers, and wet slurry vacuum extractors for complete, hygienic evacuation.'
  },
  {
    id: 'faq-5',
    category: 'societies',
    categoryLabel: 'Housing Societies',
    question: 'Do you offer Annual Maintenance Contracts (AMC) for housing societies?',
    answer: 'Yes! Alfa Cleaning Systems offers periodic Annual Maintenance Contracts (bi-annual and quarterly cleaning schedules) for housing societies, commercial IT parks, and institutions with scheduled reminders, priority festival bookings, and discounted AMC rates.'
  },
  {
    id: 'faq-6',
    category: 'general',
    categoryLabel: 'Compliance & Audit',
    question: 'Do you provide formal cleaning completion certificates and GST tax invoices?',
    answer: 'Yes. Alfa Cleaning Systems is a fully GST-registered partnership firm (GSTIN: 27AAOFA7537Q2ZK). We issue formal GST tax invoices, detailed cleaning completion certificates, and pre/post inspection reports required for society audits, ISO compliance, and municipal inspections.'
  }
];
