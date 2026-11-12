import { IndustryItem } from '../models/company.model';

export const INDUSTRIES_DATA: IndustryItem[] = [
  {
    id: 'residential-societies',
    title: 'Residential Societies & High-Rise Apartments',
    icon: 'building',
    description: 'Serving large Cooperative Housing Societies (CHS), standalone towers, and gated residential townships with scheduled overhead and underground tank sanitation.',
    applications: [
      'Twin-compartment underground water sumps',
      'Terrace RCC fire-fighting & domestic header tanks',
      'Periodic bi-annual society maintenance contracts',
      'Water meter chamber and pipeline flushing'
    ],
    image: 'assets/images/industries/residential.jpg'
  },
  {
    id: 'commercial-corporate',
    title: 'Commercial Complexes & IT Business Parks',
    icon: 'briefcase',
    description: 'Providing off-hours and weekend cleaning solutions to corporate towers, commercial tech parks, shopping malls, and multiplexes without water interruption.',
    applications: [
      'Continuous HVAC cooling tower sump cleaning',
      'Multi-floor basement raw & treated water sumps',
      'Rapid turnaround cleaning during low-occupancy windows',
      'Detailed water quality validation documentation'
    ],
    image: 'assets/images/industries/commercial.jpg'
  },
  {
    id: 'industrial-manufacturing',
    title: 'Manufacturing & Heavy Engineering Plants',
    icon: 'factory',
    description: 'Industrial-grade descaling, sediment removal, and machinery cleaning for manufacturing plants across MIDC zones, automotive hubs, and fabrication factories.',
    applications: [
      'Industrial process water storage reservoirs',
      'Quenching & machine cooling water circuits',
      'Heavy silt clarifier and settling pits',
      'Industrial floor grease and grime scrubbing'
    ],
    image: 'assets/images/industries/industrial.jpg'
  },
  {
    id: 'chemical-petrochemical',
    title: 'Chemical & Petrochemical Facilities',
    icon: 'flask',
    description: 'Strict protocol cleaning and heavy slurry evacuation with safety-certified crews and explosion-safe equipment for chemical storage and processing zones.',
    applications: [
      'Industrial washing sumps & neutralized liquor tanks',
      'Sedimentation basins and wastewater treatment holding tanks',
      'Chemical-resistant surface hydro-jetting',
      'Confined space entry with gas detection monitors'
    ],
    image: 'assets/images/industries/chemical.jpg'
  },
  {
    id: 'food-beverage-pharma',
    title: 'Food, Beverage & Pharmaceutical Units',
    icon: 'shield-check',
    description: 'Hygienic, zero-chemical-residue sanitization meeting stringent FDA, FSSAI, and GMP cleanliness standards for ingredient water and product washing lines.',
    applications: [
      'Purified water (PW) and raw water buffer storage tanks',
      'Food-grade organic de-scaling and UV terminal disinfection',
      'Beverage bottling water clarification reservoirs',
      'Non-toxic antibacterial certification'
    ],
    image: 'assets/images/industries/food-pharma.jpg'
  },
  {
    id: 'hospitality-healthcare',
    title: 'Hospitality, Hospitals & Educational Campuses',
    icon: 'heart-pulse',
    description: 'Crucial pathogen-free water tank maintenance for hospitals, hotels, luxury resorts, and universities where microbiological water safety is vital.',
    applications: [
      'Hospital central sterilization & dialysis water storage',
      'Hotel guest water supply and banquet facility sumps',
      'Swimming pool balance tanks and filtration reservoirs',
      'Hostel and institutional kitchen overhead water tanks'
    ],
    image: 'assets/images/industries/healthcare.jpg'
  }
];
