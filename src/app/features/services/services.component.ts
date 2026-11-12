import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerCategory, ServiceItem } from '../../core/models/company.model';
import { SERVICES_DATA } from '../../core/data/services.data';
import { WhatsAppService } from '../../core/services/whatsapp.service';
import { IconComponent } from '../../shared/components/icon/icon.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, IconComponent],
  template: `
    <section id="services" class="section section-services section-subtle">
      <div class="container">
        <!-- Section Header -->
        <div class="section-header">
          <div class="badge-tag badge-tag-primary">
            <app-icon name="droplet" [size]="14"></app-icon>
            <span>MECHANIZED CLEANING SERVICES</span>
          </div>
          <h2>Professional Water Storage Tank Cleaning</h2>
          <p>
            Certified, 100% mechanized sanitization solutions for housing societies, commercial towers, municipal reservoirs, and industrial plants across Mumbai and MMR.
          </p>
        </div>

        <!-- Category Filters -->
        <div class="filter-tabs">
          <button 
            type="button" 
            class="tab-btn" 
            [class.active]="activeCategory === 'all'"
            (click)="setCategory('all')">
            All Services ({{ allServices.length }})
          </button>
          <button 
            type="button" 
            class="tab-btn" 
            [class.active]="activeCategory === 'residential'"
            (click)="setCategory('residential')">
            Residential &amp; Societies
          </button>
          <button 
            type="button" 
            class="tab-btn" 
            [class.active]="activeCategory === 'commercial'"
            (click)="setCategory('commercial')">
            Commercial &amp; Institutions
          </button>
          <button 
            type="button" 
            class="tab-btn" 
            [class.active]="activeCategory === 'industrial'"
            (click)="setCategory('industrial')">
            Industrial &amp; Reservoirs
          </button>
        </div>

        <!-- Services Grid -->
        <div class="services-grid">
          <div *ngFor="let service of filteredServices" class="card service-card">
            <!-- Card Image -->
            <div class="card-media">
              <img 
                [src]="service.image" 
                [alt]="service.title" 
                class="service-img" 
                loading="lazy">
              <span *ngIf="service.badge" class="service-badge">{{ service.badge }}</span>
              <div class="service-category-tag">{{ service.shortTitle }}</div>
            </div>

            <!-- Card Content -->
            <div class="card-body">
              <div class="audience-label">
                <app-icon name="building" [size]="14"></app-icon>
                <span>{{ service.targetAudience }}</span>
              </div>

              <h3 class="service-title">{{ service.title }}</h3>
              <p class="service-desc">{{ service.shortDescription }}</p>

              <!-- Feature Highlights -->
              <ul class="feature-bullets">
                <li *ngFor="let feat of service.keyFeatures.slice(0, 3)">
                  <app-icon name="check" [size]="15"></app-icon>
                  <span>{{ feat }}</span>
                </li>
              </ul>

              <!-- Card Actions -->
              <div class="card-actions">
                <button 
                  type="button" 
                  class="btn btn-whatsapp btn-sm"
                  (click)="enquireOnWhatsApp(service)">
                  <app-icon name="whatsapp" [size]="16"></app-icon>
                  <span>Enquire on WhatsApp</span>
                </button>
                <a href="#contact" class="btn btn-secondary btn-sm" (click)="bookSiteVisit(service, $event)">
                  <span>Get Quote</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Prominent Conversion Banner -->
        <div class="service-cta-banner">
          <div class="banner-content">
            <div class="banner-badge">HYGIENE &amp; SAFETY GUARANTEED</div>
            <h3>Need Professional Tank Cleaning for Your Society or Facility?</h3>
            <p>Our team conducts comprehensive pre-cleaning water inspection, structured scheduling, and issues formal hygiene completion certificates.</p>
          </div>
          <div class="banner-actions">
            <a href="#contact" class="btn btn-primary btn-lg" (click)="scrollTo('#contact', $event)">
              <span>Schedule Site Inspection</span>
              <app-icon name="arrow-right" [size]="18"></app-icon>
            </a>
            <a href="tel:+918048205820" class="btn btn-outline-white btn-lg">
              <app-icon name="phone" [size]="18"></app-icon>
              <span>Call +91 8048205820</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .section-services {
      border-bottom: 1px solid var(--color-border);
    }

    /* Filter Tabs */
    .filter-tabs {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 0.75rem;
      margin-bottom: 3rem;
    }

    .tab-btn {
      padding: 0.65rem 1.4rem;
      font-size: 0.9rem;
      font-weight: 600;
      color: var(--color-primary);
      background-color: #FFFFFF;
      border: 1px solid var(--color-border);
      border-radius: var(--radius-full);
      cursor: pointer;
      transition: all var(--transition-fast);

      &:hover {
        border-color: var(--color-secondary);
        background-color: var(--color-bg-subtle);
      }

      &.active {
        background-color: var(--color-primary);
        color: #FFFFFF;
        border-color: var(--color-primary);
        box-shadow: 0 4px 12px rgba(10, 30, 63, 0.15);
      }
    }

    /* Services Grid */
    .services-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 2rem;
      margin-bottom: 4rem;

      @media (min-width: 680px) {
        grid-template-columns: repeat(2, 1fr);
      }

      @media (min-width: 1080px) {
        grid-template-columns: repeat(3, 1fr);
      }
    }

    .service-card {
      display: flex;
      flex-direction: column;
      height: 100%;

      .card-media {
        position: relative;
        height: 220px;
        overflow: hidden;
        background-color: var(--color-primary);

        .service-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .service-badge {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: rgba(10, 30, 63, 0.9);
          color: #38BDF8;
          font-size: 0.72rem;
          font-weight: 700;
          padding: 0.3rem 0.75rem;
          border-radius: var(--radius-full);
          border: 1px solid rgba(56, 189, 248, 0.4);
          letter-spacing: 0.05em;
        }

        .service-category-tag {
          position: absolute;
          bottom: 0.75rem;
          left: 1rem;
          background: rgba(2, 132, 199, 0.9);
          color: #FFFFFF;
          font-size: 0.75rem;
          font-weight: 700;
          padding: 0.25rem 0.65rem;
          border-radius: var(--radius-sm);
        }
      }

      &:hover .service-img {
        transform: scale(1.05);
      }

      .card-body {
        padding: 1.5rem;
        display: flex;
        flex-direction: column;
        flex-grow: 1;
      }

      .audience-label {
        display: flex;
        align-items: center;
        gap: 0.4rem;
        font-size: 0.78rem;
        font-weight: 600;
        color: var(--color-secondary);
        margin-bottom: 0.65rem;
      }

      .service-title {
        font-size: 1.25rem;
        color: var(--color-primary);
        margin-bottom: 0.75rem;
        line-height: 1.3;
      }

      .service-desc {
        font-size: 0.9rem;
        color: var(--color-text-body);
        line-height: 1.55;
        margin-bottom: 1.25rem;
        flex-grow: 1;
      }

      .feature-bullets {
        list-style: none;
        margin-bottom: 1.5rem;
        display: flex;
        flex-direction: column;
        gap: 0.45rem;
        padding-top: 1rem;
        border-top: 1px solid var(--color-border-subtle);

        li {
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
          font-size: 0.82rem;
          color: var(--color-text-body);

          app-icon {
            color: var(--color-secondary);
            margin-top: 2px;
            flex-shrink: 0;
          }
        }
      }

      .card-actions {
        display: flex;
        gap: 0.75rem;
        margin-top: auto;

        .btn {
          flex: 1;
        }
      }
    }

    /* Service CTA Banner */
    .service-cta-banner {
      background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-light) 100%);
      color: #FFFFFF;
      border-radius: var(--radius-xl);
      padding: 2.5rem 2rem;
      display: flex;
      flex-direction: column;
      gap: 2rem;
      box-shadow: var(--shadow-xl);
      border: 1px solid rgba(255, 255, 255, 0.12);

      @media (min-width: 900px) {
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding: 3rem;
      }

      .banner-badge {
        font-size: 0.75rem;
        font-weight: 800;
        letter-spacing: 0.1em;
        color: #38BDF8;
        margin-bottom: 0.5rem;
      }

      h3 {
        color: #FFFFFF;
        font-size: clamp(1.4rem, 2.2vw, 1.85rem);
        margin-bottom: 0.5rem;
      }

      p {
        color: #CBD5E1;
        font-size: 0.95rem;
        max-width: 580px;
        margin-bottom: 0;
      }

      .banner-actions {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        flex-shrink: 0;
      }
    }
  `]
})
export class ServicesComponent {
  allServices: ServiceItem[] = SERVICES_DATA;
  activeCategory: CustomerCategory = 'all';

  constructor(private whatsAppService: WhatsAppService) {}

  get filteredServices(): ServiceItem[] {
    if (this.activeCategory === 'all') {
      return this.allServices;
    }
    return this.allServices.filter(s => s.category === this.activeCategory || s.category === 'all');
  }

  setCategory(cat: CustomerCategory): void {
    this.activeCategory = cat;
  }

  enquireOnWhatsApp(service: ServiceItem): void {
    const text = this.whatsAppService.formatServiceQuote(service);
    this.whatsAppService.openChat(text);
  }

  bookSiteVisit(service: ServiceItem, event: Event): void {
    this.scrollTo('#contact', event);
  }

  scrollTo(targetId: string, event: Event): void {
    event.preventDefault();
    const elem = document.querySelector(targetId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
