/**
 * ============================================================================
 * ALFA CLEANING SYSTEMS — PHOTO & VIDEO GALLERY DATA
 * ============================================================================
 * 
 * DEVELOPER INSTRUCTIONS:
 * - To ADD a new photo or video: 
 *     1. Drop your image into public/assets/images/real-photos/
 *     2. Add an entry to REAL_GALLERY_DATA with title, category, and imageUrl.
 * - To DELETE:
 *     Simply remove or comment out the entry below.
 * - Concise titles only — no long paragraphs or clutter.
 * ============================================================================
 */

export interface RealGalleryItem {
  id: string;
  title: string;
  category: 'underground' | 'overhead' | 'open-well' | 'plastic' | 'settling' | 'terrace' | 'videos';
  categoryLabel: string;
  imageUrl: string;
  isVideo?: boolean;
  videoUrl?: string;
}

export const REAL_GALLERY_DATA: RealGalleryItem[] = [
  {
    "id": "vid-1",
    "title": "Tank Sludge Extraction Operation",
    "category": "videos",
    "categoryLabel": "Video",
    "imageUrl": "assets/images/services/underground-real.jpg",
    "isVideo": true,
    "videoUrl": "assets/videos/whatsapp-video-2023-03-02-at-23.45.45.mp4"
  },
  {
    "id": "vid-2",
    "title": "High-Pressure Rotary Jetting in Action",
    "category": "videos",
    "categoryLabel": "Video",
    "imageUrl": "assets/images/services/overhead-real.jpg",
    "isVideo": true,
    "videoUrl": "assets/videos/whatsapp-video-2023-03-02-at-23.45.49.mp4"
  },
  {
    "id": "vid-3",
    "title": "Mechanized Commercial Floor Scrubbing",
    "category": "videos",
    "categoryLabel": "Video",
    "imageUrl": "assets/images/services/floor-scrubbing-real.jpg",
    "isVideo": true,
    "videoUrl": "assets/videos/floor.mp4"
  },
  {
    "id": "ug-01",
    "title": "Underground Sump Cleaning",
    "category": "underground",
    "categoryLabel": "Underground Tank",
    "imageUrl": "assets/images/real-photos/underground-10.jpeg"
  },
  {
    "id": "ug-02",
    "title": "Underground Sump Cleaning",
    "category": "underground",
    "categoryLabel": "Underground Tank",
    "imageUrl": "assets/images/real-photos/underground-11.jpeg"
  },
  {
    "id": "ug-03",
    "title": "Underground Sump Cleaning",
    "category": "underground",
    "categoryLabel": "Underground Tank",
    "imageUrl": "assets/images/real-photos/underground-12.jpeg"
  },
  {
    "id": "ug-04",
    "title": "Underground Sump Cleaning",
    "category": "underground",
    "categoryLabel": "Underground Tank",
    "imageUrl": "assets/images/real-photos/underground-13.jpeg"
  },
  {
    "id": "ug-05",
    "title": "Underground Sump Cleaning",
    "category": "underground",
    "categoryLabel": "Underground Tank",
    "imageUrl": "assets/images/real-photos/underground-2.jpeg"
  },
  {
    "id": "ug-06",
    "title": "Underground Sump Cleaning",
    "category": "underground",
    "categoryLabel": "Underground Tank",
    "imageUrl": "assets/images/real-photos/underground-2.jpg"
  },
  {
    "id": "ug-07",
    "title": "Underground Sump Cleaning",
    "category": "underground",
    "categoryLabel": "Underground Tank",
    "imageUrl": "assets/images/real-photos/underground-3.jpeg"
  },
  {
    "id": "ug-08",
    "title": "Underground Sump Cleaning",
    "category": "underground",
    "categoryLabel": "Underground Tank",
    "imageUrl": "assets/images/real-photos/underground-3.jpg"
  },
  {
    "id": "ug-09",
    "title": "Underground Sump Cleaning",
    "category": "underground",
    "categoryLabel": "Underground Tank",
    "imageUrl": "assets/images/real-photos/underground-4.jpeg"
  },
  {
    "id": "ug-10",
    "title": "Underground Sump Cleaning",
    "category": "underground",
    "categoryLabel": "Underground Tank",
    "imageUrl": "assets/images/real-photos/underground-5.jpeg"
  },
  {
    "id": "oh-01",
    "title": "Overhead Tank Cleaning",
    "category": "overhead",
    "categoryLabel": "Overhead Tank",
    "imageUrl": "assets/images/real-photos/overhead-1.jpg"
  },
  {
    "id": "oh-02",
    "title": "Overhead Tank Cleaning",
    "category": "overhead",
    "categoryLabel": "Overhead Tank",
    "imageUrl": "assets/images/real-photos/overhead-2.jpeg"
  },
  {
    "id": "oh-03",
    "title": "Overhead Tank Cleaning",
    "category": "overhead",
    "categoryLabel": "Overhead Tank",
    "imageUrl": "assets/images/real-photos/overhead-2.jpg"
  },
  {
    "id": "oh-04",
    "title": "Overhead Tank Cleaning",
    "category": "overhead",
    "categoryLabel": "Overhead Tank",
    "imageUrl": "assets/images/real-photos/overhead-3.jpeg"
  },
  {
    "id": "oh-05",
    "title": "Overhead Tank Cleaning",
    "category": "overhead",
    "categoryLabel": "Overhead Tank",
    "imageUrl": "assets/images/real-photos/overhead-4.jpeg"
  },
  {
    "id": "oh-06",
    "title": "Overhead Tank Cleaning",
    "category": "overhead",
    "categoryLabel": "Overhead Tank",
    "imageUrl": "assets/images/real-photos/overhead-5.jpeg"
  },
  {
    "id": "oh-07",
    "title": "Overhead Tank Cleaning",
    "category": "overhead",
    "categoryLabel": "Overhead Tank",
    "imageUrl": "assets/images/real-photos/overhead-6.jpeg"
  },
  {
    "id": "oh-08",
    "title": "Overhead Tank Cleaning",
    "category": "overhead",
    "categoryLabel": "Overhead Tank",
    "imageUrl": "assets/images/real-photos/overhead-7.jpeg"
  },
  {
    "id": "ow-01",
    "title": "Open Well Cleaning",
    "category": "open-well",
    "categoryLabel": "Open Well",
    "imageUrl": "assets/images/real-photos/open-well-1.jpeg"
  },
  {
    "id": "ow-02",
    "title": "Open Well Cleaning",
    "category": "open-well",
    "categoryLabel": "Open Well",
    "imageUrl": "assets/images/real-photos/open-well-10.jpeg"
  },
  {
    "id": "ow-03",
    "title": "Open Well Cleaning",
    "category": "open-well",
    "categoryLabel": "Open Well",
    "imageUrl": "assets/images/real-photos/open-well-11.jpeg"
  },
  {
    "id": "ow-04",
    "title": "Open Well Cleaning",
    "category": "open-well",
    "categoryLabel": "Open Well",
    "imageUrl": "assets/images/real-photos/open-well-12.jpeg"
  },
  {
    "id": "ow-05",
    "title": "Open Well Cleaning",
    "category": "open-well",
    "categoryLabel": "Open Well",
    "imageUrl": "assets/images/real-photos/open-well-13.jpeg"
  },
  {
    "id": "ow-06",
    "title": "Open Well Cleaning",
    "category": "open-well",
    "categoryLabel": "Open Well",
    "imageUrl": "assets/images/real-photos/open-well-2.jpeg"
  },
  {
    "id": "ow-07",
    "title": "Open Well Cleaning",
    "category": "open-well",
    "categoryLabel": "Open Well",
    "imageUrl": "assets/images/real-photos/open-well-3.jpeg"
  },
  {
    "id": "ow-08",
    "title": "Open Well Cleaning",
    "category": "open-well",
    "categoryLabel": "Open Well",
    "imageUrl": "assets/images/real-photos/open-well-4.jpeg"
  },
  {
    "id": "pl-01",
    "title": "Plastic / Sintex Tank Cleaning",
    "category": "plastic",
    "categoryLabel": "Plastic Tank",
    "imageUrl": "assets/images/real-photos/plastic-2.jpeg"
  },
  {
    "id": "pl-02",
    "title": "Plastic / Sintex Tank Cleaning",
    "category": "plastic",
    "categoryLabel": "Plastic Tank",
    "imageUrl": "assets/images/real-photos/plastic-2.jpg"
  },
  {
    "id": "pl-03",
    "title": "Plastic / Sintex Tank Cleaning",
    "category": "plastic",
    "categoryLabel": "Plastic Tank",
    "imageUrl": "assets/images/real-photos/plastic-3.jpeg"
  },
  {
    "id": "pl-04",
    "title": "Plastic / Sintex Tank Cleaning",
    "category": "plastic",
    "categoryLabel": "Plastic Tank",
    "imageUrl": "assets/images/real-photos/plastic-4.jpeg"
  },
  {
    "id": "pl-05",
    "title": "Plastic / Sintex Tank Cleaning",
    "category": "plastic",
    "categoryLabel": "Plastic Tank",
    "imageUrl": "assets/images/real-photos/plastic-5.jpeg"
  },
  {
    "id": "pl-06",
    "title": "Plastic / Sintex Tank Cleaning",
    "category": "plastic",
    "categoryLabel": "Plastic Tank",
    "imageUrl": "assets/images/real-photos/plastic-6.jpeg"
  },
  {
    "id": "pl-07",
    "title": "Plastic / Sintex Tank Cleaning",
    "category": "plastic",
    "categoryLabel": "Plastic Tank",
    "imageUrl": "assets/images/real-photos/plastic-7.jpeg"
  },
  {
    "id": "pl-08",
    "title": "Plastic / Sintex Tank Cleaning",
    "category": "plastic",
    "categoryLabel": "Plastic Tank",
    "imageUrl": "assets/images/real-photos/plastic-8.jpeg"
  },
  {
    "id": "st-01",
    "title": "Industrial Settling Tank",
    "category": "settling",
    "categoryLabel": "Settling Tank",
    "imageUrl": "assets/images/real-photos/settling-tank-01.jpg"
  },
  {
    "id": "st-02",
    "title": "Industrial Settling Tank",
    "category": "settling",
    "categoryLabel": "Settling Tank",
    "imageUrl": "assets/images/real-photos/settling-tank-02.jpg"
  },
  {
    "id": "st-03",
    "title": "Industrial Settling Tank",
    "category": "settling",
    "categoryLabel": "Settling Tank",
    "imageUrl": "assets/images/real-photos/settling-tank-1.jpg"
  },
  {
    "id": "st-04",
    "title": "Industrial Settling Tank",
    "category": "settling",
    "categoryLabel": "Settling Tank",
    "imageUrl": "assets/images/real-photos/settling-tank-2.jpeg"
  },
  {
    "id": "st-05",
    "title": "Industrial Settling Tank",
    "category": "settling",
    "categoryLabel": "Settling Tank",
    "imageUrl": "assets/images/real-photos/settling-tank-3.jpeg"
  },
  {
    "id": "st-06",
    "title": "Industrial Settling Tank",
    "category": "settling",
    "categoryLabel": "Settling Tank",
    "imageUrl": "assets/images/real-photos/settling-tank-4.jpeg"
  },
  {
    "id": "tr-01",
    "title": "Floor Scrubbing",
    "category": "terrace",
    "categoryLabel": "Floor",
    "imageUrl": "assets/images/real-photos/floor-2.jpg"
  },
  {
    "id": "tr-02",
    "title": "RCC Tank Waterproofing",
    "category": "terrace",
    "categoryLabel": "RCC Tank",
    "imageUrl": "assets/images/real-photos/rcc-2.jpeg"
  },
  {
    "id": "tr-03",
    "title": "RCC Tank Waterproofing",
    "category": "terrace",
    "categoryLabel": "RCC Tank",
    "imageUrl": "assets/images/real-photos/rcc.jpeg"
  },
  {
    "id": "tr-04",
    "title": "Building Terrace Washing",
    "category": "terrace",
    "categoryLabel": "Terrace",
    "imageUrl": "assets/images/real-photos/terrace-1.jpeg"
  },
  {
    "id": "tr-05",
    "title": "Building Terrace Washing",
    "category": "terrace",
    "categoryLabel": "Terrace",
    "imageUrl": "assets/images/real-photos/terrace-2.jpeg"
  },
  {
    "id": "tr-06",
    "title": "Building Terrace Washing",
    "category": "terrace",
    "categoryLabel": "Terrace",
    "imageUrl": "assets/images/real-photos/terrace-3.jpeg"
  },
  {
    "id": "tr-07",
    "title": "Building Terrace Washing",
    "category": "terrace",
    "categoryLabel": "Terrace",
    "imageUrl": "assets/images/real-photos/terrace-4.jpeg"
  },
  {
    "id": "tr-08",
    "title": "Building Terrace Washing",
    "category": "terrace",
    "categoryLabel": "Terrace",
    "imageUrl": "assets/images/real-photos/terrace-5.jpeg"
  }
];

export const GALLERY_DATA = REAL_GALLERY_DATA;
