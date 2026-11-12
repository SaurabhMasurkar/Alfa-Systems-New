import { ServiceItem } from '../models/company.model';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'underground-rcc-tank-cleaning',
    title: 'Underground RCC Water Tank Cleaning',
    shortTitle: 'Underground Sumps',
    category: 'all',
    targetAudience: 'Residential Societies, Commercial Malls & Industrial Plants',
    shortDescription: 'Comprehensive mechanized dewatering, sludge extraction, and high-pressure jet washing for subterranean concrete water storage sumps.',
    fullDescription: 'Underground concrete sumps accumulate dense sedimentation, surface runoff dirt, and microbial biofilm over time. Our mechanized service utilizes high-power dewatering submersible pumps, high-pressure rotary water jets, potassium permanganate wash, and industrial slurry extraction to restore pure water hygiene without damaging tank structural plaster.',
    keyFeatures: [
      'Heavy-duty dewatering without wasting serviceable clean water',
      'Industrial wet-slurry vacuum evacuation of dense bottom sludge',
      'High-pressure jet washing of ceiling, walls, and corners',
      'Potassium permanganate antibacterial sanitization',
      'Twin-compartment non-disruption execution for societies',
      'Certified post-cleaning inspection report'
    ],
    processSteps: [
      'Deep dewatering and residual sediment evacuation',
      'High-pressure rotary wall and floor jetting',
      'Industrial slurry extraction & wet vacuuming',
      'Potassium permanganate anti-bacterial treatment',
      'Final hygiene clearance inspection'
    ],
    image: 'assets/images/services/underground-real.jpg',
    badge: 'Society Preferred',
    iconName: 'tank-underground'
  },
  {
    id: 'overhead-rcc-tank-cleaning',
    title: 'Overhead RCC Water Tank Cleaning',
    shortTitle: 'Overhead Tanks',
    category: 'residential',
    targetAudience: 'High-Rise Housing Societies, Hospitals & Institutions',
    shortDescription: 'Systematic hygienic cleaning of rooftop concrete tanks with rigorous safety protocols, zero piping blockage, and thorough descaling.',
    fullDescription: 'Rooftop tanks are exposed to extreme temperature variations, atmospheric dust infiltration, and rapid algal growth. Alfa Cleaning Systems deploys trained personnel equipped with full safety harnesses and sanitized machinery to meticulously scrub concrete walls, disinfect internal surfaces, and flush delivery lines to ensure clean, clear tap water across all connected plumbing lines.',
    keyFeatures: [
      'Strict rooftop and confined-space safety compliance',
      'Zero sediment entry into domestic distribution risers',
      'Rotary mechanical scrubbing eliminates stubborn calcium scale',
      'Sterilization using government-approved bio-safe disinfectants',
      'Zero downtime to ongoing residential water supply schedules'
    ],
    image: 'assets/images/services/overhead-real.jpg',
    badge: 'High-Rise Specialist',
    iconName: 'tank-overhead'
  },
  {
    id: 'settling-tank-cleaning',
    title: 'Industrial Settling Tank & Sludge Evacuation',
    shortTitle: 'Settling Tanks',
    category: 'industrial',
    targetAudience: 'Municipalities, Manufacturing Units & Clarifier Plants',
    shortDescription: 'Heavy-duty removal of coagulated sediment, chemical precipitants, and compacted silt from sedimentation sumps and clarifiers.',
    fullDescription: 'Settling tanks and industrial clarifiers suffer from heavy compacted silt, coagulant residues, and dense sediment layers that reduce retention efficiency. Our specialized industrial team deploys high-solids submersible sludge pumps, high-pressure lances, and vacuum equipment to clear dense sludge beds safely and restore optimal settling velocity.',
    keyFeatures: [
      'Capability to pump and evacuate high-viscosity sludge and heavy slurries',
      'Experienced team equipped with multi-gas detectors and breathing gear',
      'Restores design settling capacity and prevents carryover into filters',
      'Compliant with industrial waste handling protocols'
    ],
    image: 'assets/images/real-photos/settling-tank-4.jpeg',
    badge: 'Heavy Industrial',
    iconName: 'tank-settling'
  },
  {
    id: 'esr-gsr-municipal-tank-cleaning',
    title: 'ESR & GSR Water Reservoir Cleaning',
    shortTitle: 'ESR & GSR Reservoirs',
    category: 'industrial',
    targetAudience: 'Municipalities, Townships (Vasai-Virar, MMRDA) & Large Complexes',
    shortDescription: 'Industrial-scale cleaning for Elevated Storage Reservoirs (ESR) and Ground Storage Reservoirs (GSR) with capacities from 1 Lakh to 50+ Lakh Litres.',
    fullDescription: 'Elevated Storage Reservoirs (ESR) and Ground Storage Reservoirs (GSR) present unique challenges due to immense volume, staging heights, and rapid turnover requirements. Alfa Cleaning Systems has proven experience with municipal corporations such as Vasai-Virar City Corporation and MMRDA projects, deploying high-flow dewatering pumps and synchronized cleaning teams.',
    keyFeatures: [
      'High-volume handling (up to 5+ Million Litres reservoir capacity)',
      'High-capacity engine-driven pressure washers & extraction units',
      'Comprehensive safety documentation and trained work-at-height operators',
      'Proven track record with municipal bodies & infrastructure projects',
      'Minimal shutdown duration for continuous township water supply'
    ],
    image: 'assets/images/real-photos/overhead-8.jpg',
    badge: 'Municipal Scale',
    iconName: 'tank-reservoir'
  },
  {
    id: 'plastic-sintex-tank-cleaning',
    title: 'Plastic & Sintex Tank Cleaning',
    shortTitle: 'Plastic / PVC Tanks',
    category: 'residential',
    targetAudience: 'Individual Bungalows, Villas, Commercial Offices & Restaurants',
    shortDescription: 'Gentle yet rigorous non-abrasive pressure cleaning for commercial PVC, HDPE, and Sintex multi-layer tanks to prevent wall degradation.',
    fullDescription: 'Plastic storage tanks are susceptible to internal microbial film and sunlight-induced algae colonization. Using abrasive brushes can scratch the polymeric interior lining, creating microscopic crevices for bacteria. Alfa Cleaning Systems applies specialized non-scratch rotary jet nozzles and non-corrosive antibacterial agents to sanitize plastic tanks while preserving their structural integrity.',
    keyFeatures: [
      'Non-abrasive jetting prevents micro-scratches in poly-ethylene layers',
      'Elimination of persistent foul odors and yellowing algae deposits',
      'Fast turnaround time (typically under 60-90 minutes per tank)',
      'Inspection of tank lid seals, ball-valves, and overflow strainers'
    ],
    image: 'assets/images/services/plastic-tank-real.jpg',
    badge: 'Rapid Turnaround',
    iconName: 'tank-plastic'
  },
  {
    id: 'open-well-cleaning',
    title: 'Open Well Cleaning & Silt Dredging',
    shortTitle: 'Open Wells',
    category: 'commercial',
    targetAudience: 'Agricultural Estates, Farmhouses, Heritage Sites & Townships',
    shortDescription: 'Deep silt removal, vegetation clearance, water table rejuvenating dewatering, and disinfection for traditional open community wells.',
    fullDescription: 'Open wells accumulate fallen organic debris, decomposing leaves, surface mud runoff, and deep bottom silt that choke natural underwater recharge aquifers. Alfa Cleaning Systems performs bottom silt dredging, internal sidewall power washing, debris clearance, and controlled chlorination/potassium permanganate water treatment to revitalize natural groundwater inflow and purity.',
    keyFeatures: [
      'Specialized winch and tripod suspension rigging for deep well descent',
      'Bottom silt dredging to reopen natural water-spring recharge veins',
      'Sidewall biological growth removal without damaging stone masonry',
      'Natural spring sanitization for potable and irrigation safety'
    ],
    image: 'assets/images/real-photos/open-well-6.jpeg',
    badge: 'Deep Specialized',
    iconName: 'well-cleaning'
  },
  {
    id: 'septic-tank-cleaning',
    title: 'Mechanized Septic Tank Cleaning',
    shortTitle: 'Septic Tanks',
    category: 'commercial',
    targetAudience: 'Commercial Buildings, Industrial Estates, Hotels & Residential Complexes',
    shortDescription: 'Odorless vacuum suction, mechanized slurry extraction, and high-pressure jetting to unclog drainage lines and restore septic balance.',
    fullDescription: 'Our mechanized septic tank cleaning operations utilize high-vacuum suction tankers and high-thrust jetting nozzles to evacuate compacted sludge, break down hardened scum blankets, and clear blocked inlet/outlet baffle pipes with zero open manual handling and total sanitary compliance.',
    keyFeatures: [
      '100% mechanized suction and sealed transfer — zero manual scavenging',
      'High-pressure water jetting clears connecting sewer and drain laterals',
      'Deodorizing agents reduce post-cleaning foul gas emissions',
      'Rapid emergency availability for overflow prevention'
    ],
    image: 'assets/images/real-photos/underground-11.jpeg',
    badge: '100% Mechanized',
    iconName: 'septic-tank'
  },
  {
    id: 'floor-cleaning-scrubbing',
    title: 'Commercial & Industrial Floor Scrubbing',
    shortTitle: 'Floor Scrubbing',
    category: 'commercial',
    targetAudience: 'Warehouses, Factories, Basements, Commercial Malls & Showrooms',
    shortDescription: 'Ride-on and walk-behind automatic rotary scrubbing for epoxy, concrete, and tiled industrial floors, removing oils, tire marks, and grime.',
    fullDescription: 'Industrial floors undergo severe traffic, grease accumulation, rubber tire markings, and chemical spillage. Alfa Cleaning Systems deploys high-torque rotary scrubbing machines, heavy-duty degreasers, and squeegee vacuum dryers that instantly restore slip-resistant, hygienic, and pristine flooring without halting facility operations.',
    keyFeatures: [
      'High-productivity automatic rotary scrubbers for large square-footage',
      'Eco-friendly industrial degreasers safe for epoxy and polished concrete',
      'Simultaneous wet scrubbing and instant vacuum drying',
      'Removal of stubborn grease, chemical stains, and tire friction tracks'
    ],
    image: 'assets/images/services/floor-scrubbing-real.jpg',
    badge: 'High Productivity',
    iconName: 'floor-scrubbing'
  },
  {
    id: 'building-terrace-cleaning',
    title: 'Building Terrace Cleaning & Algae Stripping',
    shortTitle: 'Terrace Cleaning',
    category: 'residential',
    targetAudience: 'Housing Societies, Corporate Buildings & Commercial Towers',
    shortDescription: 'High-pressure surface washing of rooftop slabs, parapets, and rainwater drains to eradicate black algae, moss, and moisture-trapping dirt.',
    fullDescription: 'Accumulated moss, lichen, and dirt on building terraces block water flow, accelerate concrete carbonation, and cause chronic water seepage into upper-floor apartments. Our high-pressure washing strips away stubborn organic growths and unclogs rainwater drain channels, preparing the roof for waterproofing or lasting monsoon protection.',
    keyFeatures: [
      'High-pressure jetting dislodges embedded lichen and black mold',
      'Complete clearing of rainwater collection gullies and down-pipes',
      'Prevents water stagnation and terrace slab seepage',
      'Ideal preparatory service prior to structural waterproofing'
    ],
    image: 'assets/images/real-photos/terrace-2.jpeg',
    badge: 'Monsoon Ready',
    iconName: 'terrace-cleaning'
  },
  {
    id: 'waterproofing-services',
    title: 'Polymer Structural Waterproofing for Reservoirs',
    shortTitle: 'Tank Waterproofing',
    category: 'all',
    targetAudience: 'RCC Water Tanks, Basements, Retaining Walls & Wet Areas',
    shortDescription: 'Food-grade polymer and crystalline waterproofing treatments that eliminate tank seepage, joint cracks, and rebar corrosion from within.',
    fullDescription: 'Seeping water tanks lead to structural concrete spalling, foundation dampness, and costly water wastage. Alfa Cleaning Systems provides turnkey waterproofing solutions using potable-water certified polymer coatings, crystalline crack injections, and flexible elastomeric membranes that withstand hydrostatic water pressure permanently.',
    keyFeatures: [
      'Certified non-toxic, food-grade safe for potable drinking water reservoirs',
      'Withstands positive and negative hydrostatic pressure heads',
      'Micro-crack injection sealing and honeycomb concrete rehabilitation',
      'Multi-year leak-free performance guarantee'
    ],
    image: 'assets/images/real-photos/rcc.jpeg',
    badge: 'Potable Safe',
    iconName: 'waterproofing'
  }
];
