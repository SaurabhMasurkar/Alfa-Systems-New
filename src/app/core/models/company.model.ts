export interface CompanyInfo {
  name: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  yearEstablished: number;
  experienceYears: number;
  partners: {
    name: string;
    role: string;
    phones: string[];
  }[];
  gstin: string;
  headOffice: {
    title: string;
    building: string;
    street: string;
    area: string;
    city: string;
    district: string;
    pincode: string;
    full: string;
  };
  marketingOffice: {
    title: string;
    building: string;
    floor: string;
    landmark: string;
    street: string;
    area: string;
    city: string;
    pincode: string;
    full: string;
    mapEmbedUrl?: string;
  };
  contact: {
    primaryPhone: string;
    secondaryPhone: string;
    displayPhone: string;
    whatsappNumber: string;
    whatsappDisplay: string;
    email: string;
    supportEmail: string;
    workingHours: string;
    emergencySupport: string;
  };
  logo: {
    url: string;
    whiteUrl: string;
    referenceUrl: string;
  };
  socialLinks?: {
    indiamart?: string;
    whatsapp?: string;
  };
}

export type CustomerCategory = 'all' | 'residential' | 'commercial' | 'industrial';

export interface ServiceItem {
  id: string;
  title: string;
  shortTitle: string;
  category: 'residential' | 'commercial' | 'industrial' | 'all';
  targetAudience: string;
  shortDescription: string;
  fullDescription: string;
  keyFeatures: string[];
  processSteps?: string[];
  image: string;
  badge?: string;
  iconName: string;
}

export interface IndustryItem {
  id: string;
  title: string;
  icon: string;
  description: string;
  applications: string[];
  image: string;
}

export interface ClientItem {
  id: string;
  name: string;
  location: string;
  category: 'government' | 'banking' | 'corporate' | 'healthcare' | 'societies' | 'hospitality';
  categoryLabel: string;
  highlight?: boolean;
  logoText?: string;
}

export interface WhyChooseItem {
  title: string;
  description: string;
  icon: string;
  badge?: string;
}

export interface ProcessStageItem {
  stageNumber: number;
  title: string;
  shortDesc: string;
  description: string;
  icon: string;
}

export interface EnquiryFormData {
  fullName: string;
  phoneNumber: string;
  email: string;
  customerType: 'Residential Society' | 'Commercial Office' | 'Industrial Plant' | 'Individual Bungalow' | '';
  serviceType: string;
  tankCapacity: string;
  locationCity: string;
  message: string;
}
