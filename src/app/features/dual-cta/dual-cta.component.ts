import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { COMPANY_CONFIG } from '../../core/config/company.config';
import { WhatsAppService } from '../../core/services/whatsapp.service';
import { IconComponent } from '../../shared/components/icon/icon.component';

@Component({
  selector: 'app-dual-cta',
  standalone: true,
  imports: [CommonModule, IconComponent],
  template: `
    <section class="section section-dark section-dual-cta">
      <div class="container">
        <div class="section-header">
          <div class="badge-tag badge-tag-dark">
            <app-icon name="arrow-right" [size]="14"></app-icon>
            <span>START YOUR SERVICE ENQUIRY</span>
          </div>
          <h2>Ready to Restore Pure, Hygienic Water to Your Property?</h2>
          <p>
            Join 108+ leading organizations and premier housing societies across Mumbai, Thane, Navi Mumbai &amp; Palghar that trust Alfa Cleaning Systems.
          </p>
        </div>

        <!-- Dual Gateway Cards -->
        <div class="cta-cards-grid">
          <!-- Card A: Housing Societies -->
          <div class="card-dark cta-card">
            <div class="cta-card-header">
              <div class="cta-icon-box">
                <app-icon name="building" [size]="28"></app-icon>
              </div>
              <span class="cta-category-badge">HOUSING SOCIETIES</span>
            </div>
            
            <h3>1. Residential Housing Societies &amp; Towers</h3>
            <p>
              Underground RCC concrete sumps, rooftop domestic header tanks, and plastic storage tanks cleaned with zero supply disruption.
            </p>

            <ul class="cta-checklist">
              <li><app-icon name="check" [size]="16"></app-icon> Free pre-cleaning site inspection across Mumbai</li>
              <li><app-icon name="check" [size]="16"></app-icon> Prior scheduling &amp; notice format for residents</li>
              <li><app-icon name="check" [size]="16"></app-icon> Formal society hygiene completion certificate</li>
            </ul>

            <div class="cta-button-group">
              <button 
                type="button" 
                class="btn btn-whatsapp btn-full"
                (click)="enquireSocietyOnWhatsApp()">
                <app-icon name="whatsapp" [size]="18"></app-icon>
                <span>Book Society Inspection on WhatsApp</span>
              </button>
              <a href="#contact" class="btn btn-outline-white btn-full" (click)="scrollTo('#contact', $event)">
                <span>Fill Society Estimate Form</span>
              </a>
            </div>
          </div>

          <!-- Card B: Commercial & Industrial -->
          <div class="card-dark cta-card commercial-border">
            <div class="cta-card-header">
              <div class="cta-icon-box commercial-icon-box">
                <app-icon name="shield-check" [size]="28"></app-icon>
              </div>
              <span class="cta-category-badge commercial-badge">COMMERCIAL &amp; PSUS</span>
            </div>
            
            <h3>2. Commercial Towers, PSUs &amp; Hospitals</h3>
            <p>
              Turnkey contractor support for high-capacity sumps, hospital emergency tanks, municipal ESR/GSR reservoirs, and clarifier basins.
            </p>

            <ul class="cta-checklist">
              <li><app-icon name="check" [size]="16"></app-icon> Trained crews with multi-gas confined space safety</li>
              <li><app-icon name="check" [size]="16"></app-icon> Capability for 1 Lakh to 50+ Lakh Litre reservoirs</li>
              <li><app-icon name="check" [size]="16"></app-icon> Formal GST tax invoices &amp; compliance reports</li>
            </ul>

            <div class="cta-button-group">
              <button 
                type="button" 
                class="btn btn-whatsapp btn-full"
                (click)="enquireCommercialOnWhatsApp()">
                <app-icon name="whatsapp" [size]="18"></app-icon>
                <span>Request Commercial Proposal</span>
              </button>
              <a href="#contact" class="btn btn-outline-white btn-full" (click)="scrollTo('#contact', $event)">
                <span>Commercial Enquiry Form</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .section-dual-cta {
      background: linear-gradient(180deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }

    .cta-cards-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 2rem;
      max-width: 1040px;
      margin: 0 auto;

      @media (min-width: 768px) {
        grid-template-columns: 1fr 1fr;
      }
    }

    .cta-card {
      padding: 2.5rem 2rem;
      border-radius: var(--radius-xl);
      display: flex;
      flex-direction: column;
      transition: all var(--transition-base);

      &:hover {
        transform: translateY(-4px);
        border-color: #38BDF8;
      }

      &.commercial-border:hover {
        border-color: #FCD34D;
      }

      .cta-card-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 1.5rem;
      }

      .cta-icon-box {
        width: 56px;
        height: 56px;
        border-radius: var(--radius-md);
        background: rgba(2, 132, 199, 0.2);
        color: #38BDF8;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .commercial-icon-box {
        background: rgba(245, 158, 11, 0.2);
        color: #FCD34D;
      }

      .cta-category-badge {
        font-size: 0.72rem;
        font-weight: 800;
        letter-spacing: 0.08em;
        color: #38BDF8;
        background: rgba(56, 189, 248, 0.15);
        padding: 0.25rem 0.65rem;
        border-radius: var(--radius-full);
        border: 1px solid rgba(56, 189, 248, 0.3);
      }

      .commercial-badge {
        color: #FCD34D;
        background: rgba(245, 158, 11, 0.15);
        border-color: rgba(245, 158, 11, 0.3);
      }

      h3 {
        color: #FFFFFF;
        font-size: 1.35rem;
        margin-bottom: 0.75rem;
        line-height: 1.3;
      }

      p {
        color: #CBD5E1;
        font-size: 0.92rem;
        line-height: 1.6;
        margin-bottom: 1.5rem;
      }

      .cta-checklist {
        list-style: none;
        margin-bottom: 2rem;
        display: flex;
        flex-direction: column;
        gap: 0.6rem;
        flex-grow: 1;

        li {
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
          font-size: 0.85rem;
          color: #E2E8F0;

          app-icon {
            color: #10B981;
            margin-top: 2px;
            flex-shrink: 0;
          }
        }
      }

      .cta-button-group {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
        margin-top: auto;
      }
    }
  `]
})
export class DualCtaComponent {
  company = COMPANY_CONFIG;

  constructor(private whatsAppService: WhatsAppService) {}

  enquireSocietyOnWhatsApp(): void {
    const text = this.whatsAppService.formatQuickQuote('society');
    this.whatsAppService.openChat(text);
  }

  enquireCommercialOnWhatsApp(): void {
    const text = this.whatsAppService.formatQuickQuote('commercial');
    this.whatsAppService.openChat(text);
  }

  scrollTo(targetId: string, event: Event): void {
    event.preventDefault();
    const elem = document.querySelector(targetId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
