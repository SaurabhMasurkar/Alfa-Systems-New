import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { REAL_GALLERY_DATA, RealGalleryItem } from '../../core/data/gallery.data';
import { IconComponent } from '../../shared/components/icon/icon.component';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, IconComponent],
  template: `
    <section id="gallery" class="section section-gallery section-subtle">
      <div class="container">
        <!-- Section Header -->
        <div class="section-header">
          <div class="badge-tag badge-tag-primary">
            <app-icon name="award" [size]="14"></app-icon>
            <span>PHOTO &amp; VIDEO GALLERY</span>
          </div>
          <h2>Our Work in Action</h2>
          <p>
            Authentic on-site photographs and live operation videos from our tank cleaning, dewatering, and descaling projects across Mumbai.
          </p>
        </div>

        <!-- Filter Tabs -->
        <div class="filter-tabs">
          <button 
            type="button" 
            class="tab-btn" 
            [class.active]="activeCategory === 'all'"
            (click)="setCategory('all')">
            All ({{ allItems.length }})
          </button>
          <button 
            type="button" 
            class="tab-btn" 
            [class.active]="activeCategory === 'underground'"
            (click)="setCategory('underground')">
            Underground Sumps
          </button>
          <button 
            type="button" 
            class="tab-btn" 
            [class.active]="activeCategory === 'overhead'"
            (click)="setCategory('overhead')">
            Overhead Tanks
          </button>
          <button 
            type="button" 
            class="tab-btn" 
            [class.active]="activeCategory === 'plastic'"
            (click)="setCategory('plastic')">
            Plastic Tanks
          </button>
          <button 
            type="button" 
            class="tab-btn" 
            [class.active]="activeCategory === 'open-well'"
            (click)="setCategory('open-well')">
            Open Wells
          </button>
          <button 
            type="button" 
            class="tab-btn" 
            [class.active]="activeCategory === 'settling'"
            (click)="setCategory('settling')">
            Settling Tanks
          </button>
          <button 
            type="button" 
            class="tab-btn" 
            [class.active]="activeCategory === 'terrace'"
            (click)="setCategory('terrace')">
            Terrace &amp; Floors
          </button>
          <button 
            type="button" 
            class="tab-btn tab-video" 
            [class.active]="activeCategory === 'videos'"
            (click)="setCategory('videos')">
            <app-icon name="play" [size]="14"></app-icon>
            <span>On-Site Videos</span>
          </button>
        </div>

        <!-- Gallery Grid -->
        <div class="gallery-grid">
          <div 
            *ngFor="let item of filteredItems; let i = index" 
            class="gallery-item"
            [class.is-video-item]="item.isVideo"
            (click)="openLightbox(i)">
            <img 
              [src]="item.imageUrl" 
              [alt]="item.title" 
              class="gallery-img" 
              loading="lazy">
            
            <!-- Video Play Badge Indicator -->
            <div *ngIf="item.isVideo" class="video-play-indicator">
              <span class="play-circle">
                <app-icon name="play" [size]="20"></app-icon>
              </span>
              <span class="video-label">Watch Video</span>
            </div>

            <!-- Clean Overlay (Title only to avoid clutter) -->
            <div class="gallery-overlay">
              <span class="gallery-tag">{{ item.categoryLabel }}</span>
              <h4 class="gallery-title">{{ item.title }}</h4>
            </div>
          </div>
        </div>

        <!-- Subtle Note -->
        <div class="gallery-footer-note">
          <span>📷 Authentic field photographs from live society and industrial contracts across Mumbai &amp; MMR.</span>
        </div>
      </div>

      <!-- Full-Screen Lightbox Modal -->
      <div 
        *ngIf="selectedIndex !== null" 
        class="lightbox-backdrop" 
        (click)="closeLightbox()">
        <div class="lightbox-container" (click)="$event.stopPropagation()">
          <!-- Close Button -->
          <button type="button" class="lightbox-close" (click)="closeLightbox()" aria-label="Close Preview">
            <app-icon name="x" [size]="24"></app-icon>
          </button>

          <!-- Prev Button -->
          <button type="button" class="lightbox-nav lightbox-prev" (click)="prevImage()" aria-label="Previous Item">
            &#10094;
          </button>

          <!-- Media Display -->
          <div class="lightbox-media-wrapper">
            <!-- Video Player -->
            <video 
              *ngIf="activeItem.isVideo && activeItem.videoUrl" 
              [src]="activeItem.videoUrl" 
              controls 
              autoplay 
              playsinline
              class="lightbox-video">
              Your browser does not support HTML5 video.
            </video>

            <!-- Image Viewer -->
            <img 
              *ngIf="!activeItem.isVideo"
              [src]="activeItem.imageUrl" 
              [alt]="activeItem.title" 
              class="lightbox-img">

            <!-- Clean Lightbox Caption: Title Only -->
            <div class="lightbox-caption">
              <div class="caption-cat">{{ activeItem.categoryLabel }} — Item {{ selectedIndex + 1 }} of {{ filteredItems.length }}</div>
              <h4>{{ activeItem.title }}</h4>
            </div>
          </div>

          <!-- Next Button -->
          <button type="button" class="lightbox-nav lightbox-next" (click)="nextImage()" aria-label="Next Item">
            &#10095;
          </button>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .section-gallery {
      border-bottom: 1px solid var(--color-border);
    }

    /* Filters */
    .filter-tabs {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 0.65rem;
      margin-bottom: 2.75rem;
    }

    .tab-btn {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      background: #FFFFFF;
      border: 1px solid var(--color-border);
      color: var(--color-text-muted);
      font-size: 0.88rem;
      font-weight: 600;
      padding: 0.6rem 1.25rem;
      border-radius: 9999px;
      cursor: pointer;
      transition: all var(--transition-fast);

      &:hover {
        border-color: var(--color-secondary);
        color: var(--color-secondary);
        background: #F0F9FF;
      }

      &.active {
        background: var(--color-primary);
        border-color: var(--color-primary);
        color: #FFFFFF;
        box-shadow: 0 4px 12px rgba(10, 30, 63, 0.2);
      }

      &.tab-video {
        color: #0284C7;
        font-weight: 700;

        &.active {
          background: #0284C7;
          border-color: #0284C7;
          color: #FFFFFF;
        }
      }
    }

    /* Gallery Grid */
    .gallery-grid {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      gap: 1.25rem;

      @media (min-width: 540px) {
        grid-template-columns: repeat(2, 1fr);
      }

      @media (min-width: 900px) {
        grid-template-columns: repeat(3, 1fr);
      }

      @media (min-width: 1200px) {
        grid-template-columns: repeat(4, 1fr);
      }
    }

    .gallery-item {
      position: relative;
      border-radius: var(--radius-lg);
      overflow: hidden;
      aspect-ratio: 4/3;
      background: var(--color-surface);
      cursor: pointer;
      box-shadow: var(--shadow-sm);
      border: 1px solid var(--color-border);
      transition: all var(--transition-normal);

      &:hover {
        transform: translateY(-4px);
        box-shadow: var(--shadow-xl);
        border-color: var(--color-secondary);

        .gallery-img {
          transform: scale(1.06);
        }

        .gallery-overlay {
          opacity: 1;
        }

        .video-play-indicator .play-circle {
          transform: scale(1.15);
          background: #0284C7;
          color: #FFFFFF;
        }
      }

      .gallery-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
        transition: transform var(--transition-normal);
      }

      /* Video Indicator */
      .video-play-indicator {
        position: absolute;
        inset: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        background: rgba(10, 30, 63, 0.35);
        z-index: 2;
        pointer-events: none;

        .play-circle {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.95);
          color: #0A1E3F;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
          transition: transform var(--transition-fast), background var(--transition-fast);
        }

        .video-label {
          color: #FFFFFF;
          font-size: 0.82rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.6);
        }
      }

      /* Overlay */
      .gallery-overlay {
        position: absolute;
        inset: 0;
        background: linear-gradient(to top, rgba(10, 30, 63, 0.92) 0%, rgba(10, 30, 63, 0.45) 50%, transparent 100%);
        padding: 1.25rem;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        opacity: 0.9;
        transition: opacity var(--transition-fast);
        z-index: 3;

        .gallery-tag {
          font-size: 0.72rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: #38BDF8;
          margin-bottom: 0.3rem;
        }

        .gallery-title {
          font-size: 1rem;
          font-weight: 700;
          color: #FFFFFF;
          line-height: 1.3;
          margin-bottom: 0;
        }
      }
    }

    .gallery-footer-note {
      text-align: center;
      margin-top: 2.25rem;
      font-size: 0.88rem;
      color: var(--color-text-muted);
    }

    /* Full-Screen Lightbox Modal */
    .lightbox-backdrop {
      position: fixed;
      inset: 0;
      background: rgba(5, 15, 35, 0.94);
      backdrop-filter: blur(8px);
      z-index: 9999;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1.5rem;
    }

    .lightbox-container {
      position: relative;
      max-width: 1000px;
      width: 100%;
      background: #000000;
      border-radius: var(--radius-lg);
      overflow: hidden;
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
      border: 1px solid rgba(255, 255, 255, 0.15);
    }

    .lightbox-close {
      position: absolute;
      top: 1rem;
      right: 1rem;
      background: rgba(0, 0, 0, 0.6);
      border: 1px solid rgba(255, 255, 255, 0.3);
      color: #FFFFFF;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      z-index: 10;
      transition: background var(--transition-fast);

      &:hover {
        background: rgba(220, 38, 38, 0.8);
      }
    }

    .lightbox-nav {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      background: rgba(0, 0, 0, 0.5);
      border: 1px solid rgba(255, 255, 255, 0.25);
      color: #FFFFFF;
      width: 46px;
      height: 46px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
      cursor: pointer;
      z-index: 10;
      transition: all var(--transition-fast);

      &:hover {
        background: var(--color-secondary);
        border-color: var(--color-secondary);
      }

      &.lightbox-prev {
        left: 1rem;
      }

      &.lightbox-next {
        right: 1rem;
      }
    }

    .lightbox-media-wrapper {
      display: flex;
      flex-direction: column;

      .lightbox-img {
        max-height: 72vh;
        width: 100%;
        object-fit: contain;
        background-color: #000000;
        display: block;
      }

      .lightbox-video {
        max-height: 72vh;
        width: 100%;
        background-color: #000000;
        display: block;
      }

      .lightbox-caption {
        padding: 1.25rem 1.5rem;
        background-color: var(--color-primary);
        color: #FFFFFF;

        .caption-cat {
          font-size: 0.75rem;
          color: #38BDF8;
          font-weight: 700;
          text-transform: uppercase;
          margin-bottom: 0.25rem;
        }

        h4 {
          color: #FFFFFF;
          font-size: 1.15rem;
          margin-bottom: 0;
        }
      }
    }
  `]
})
export class GalleryComponent {
  allItems: RealGalleryItem[] = REAL_GALLERY_DATA;
  activeCategory: 'all' | 'underground' | 'overhead' | 'open-well' | 'plastic' | 'settling' | 'terrace' | 'videos' = 'all';
  selectedIndex: number | null = null;

  get filteredItems(): RealGalleryItem[] {
    if (this.activeCategory === 'all') {
      return this.allItems;
    }
    return this.allItems.filter(item => item.category === this.activeCategory);
  }

  get activeItem(): RealGalleryItem {
    if (this.selectedIndex !== null && this.filteredItems[this.selectedIndex]) {
      return this.filteredItems[this.selectedIndex];
    }
    return this.filteredItems[0];
  }

  setCategory(cat: 'all' | 'underground' | 'overhead' | 'open-well' | 'plastic' | 'settling' | 'terrace' | 'videos'): void {
    this.activeCategory = cat;
    this.selectedIndex = null;
  }

  openLightbox(index: number): void {
    this.selectedIndex = index;
  }

  closeLightbox(): void {
    this.selectedIndex = null;
  }

  nextImage(): void {
    if (this.selectedIndex !== null) {
      this.selectedIndex = (this.selectedIndex + 1) % this.filteredItems.length;
    }
  }

  prevImage(): void {
    if (this.selectedIndex !== null) {
      this.selectedIndex = (this.selectedIndex - 1 + this.filteredItems.length) % this.filteredItems.length;
    }
  }

  @HostListener('window:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent): void {
    if (this.selectedIndex !== null) {
      if (event.key === 'Escape') {
        this.closeLightbox();
      } else if (event.key === 'ArrowRight') {
        this.nextImage();
      } else if (event.key === 'ArrowLeft') {
        this.prevImage();
      }
    }
  }
}
