import { ProcessStageItem } from '../models/company.model';

export const PROCESS_STAGES_DATA: ProcessStageItem[] = [
  {
    stageNumber: 1,
    title: 'Stage I — Mechanized De-Watering',
    shortDesc: 'Controlled dewatering using high-capacity electrical pumps without wasting clean water.',
    description: 'The tank is safely isolated. High-volume electrical submersible pumps swiftly evacuate existing water without backflow into the building supply line, isolating heavy bottom sediments.',
    icon: 'water-pump'
  },
  {
    stageNumber: 2,
    title: 'Stage II — Access Lid & Surroundings Cleaning',
    shortDesc: 'High-pressure washer with potassium permanganate wash removes dirt, algae, and mold.',
    description: 'The access manhole lid and immediate tank exterior surroundings are thoroughly stripped of dirt, mud, and algae using a calibrated high-pressure washer with potassium permanganate to prevent surface contamination.',
    icon: 'pressure-spray'
  },
  {
    stageNumber: 3,
    title: 'Stage III — Sludge & Slurry Suction',
    shortDesc: 'Specialized sludge pump and industrial wet vacuum cleaner completely evacuate bottom mud.',
    description: 'Dense bottom mud, settled silt, and decomposing bio-film are extracted using high-suction sludge pumps and industrial wet vacuum cleaners with zero manual scavenging.',
    icon: 'vacuum'
  },
  {
    stageNumber: 4,
    title: 'Stage IV — High-Pressure Wall & Soffit Washing',
    shortDesc: 'Deep hydro-jet descaling removes stubborn calcium scale and fungal slime from concrete pores.',
    description: 'The internal tank ceiling, walls, and corners are blasted with high-pressure rotary water jets, stripping biological film without scratching or eroding structural plaster.',
    icon: 'pressure-spray'
  },
  {
    stageNumber: 5,
    title: 'Stage V — Anti-Bacterial Sanitization',
    shortDesc: 'Certified, non-toxic, bio-safe disinfection treatment applied across all internal surfaces.',
    description: 'Food-grade certified antimicrobial sanitizing mist is evenly sprayed across walls, floor, and plumbing inlets to neutralize lingering microbes and inhibit future bacterial colonization.',
    icon: 'spray-bottle'
  },
  {
    stageNumber: 6,
    title: 'Stage VI — Vacuum Mopping & Hygiene Clearance',
    shortDesc: 'Complete extraction of wash water, internal inspection, and society completion certificate.',
    description: 'All residual rinse water is vacuumed out leaving the tank floor clean and dry. A formal inspection report and hygiene completion certificate are handed over to the client.',
    icon: 'cleaning-mop'
  }
];
