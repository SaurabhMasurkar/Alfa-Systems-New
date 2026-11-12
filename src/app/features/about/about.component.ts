import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { COMPANY_CONFIG } from '../../core/config/company.config';
import { IconComponent } from '../../shared/components/icon/icon.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, IconComponent],
  template: `
    <section id="about" class="section section-about">
      <div class="container">
        <div class="about-grid">
          <!-- Left Column: Visual Media & Credentials Card -->
          <div class="about-visual">
            <div class="image-wrapper">
              <img 
                src="assets/images/about/about-operations.jpg" 
                alt="Alfa Cleaning Systems Real Service Team & Mechanized Setup" 
                class="about-img"
                loading="lazy">
              <div class="experience-badge">
                <span class="exp-number">18+</span>
                <span class="exp-text">Years of Trusted Water Tank Sanitation &amp; Hygiene</span>
              </div>
            </div>

            <!-- Verified Credentials Card -->
            <div class="credentials-card">
              <div class="cred-header">
                <app-icon name="shield-check" [size]="20"></app-icon>
                <h4>Verified Business Registration</h4>
              </div>
              <div class="cred-grid">
                <div class="cred-item">
                  <span class="cred-label">Year of Establishment</span>
                  <span class="cred-val">{{ company.yearEstablished }}</span>
                </div>
                <div class="cred-item">
                  <span class="cred-label">GST Number</span>
                  <span class="cred-val">{{ company.gstin }}</span>
                </div>
                <div class="cred-item">
                  <span class="cred-label">Business Structure</span>
                  <span class="cred-val">Registered Partnership Firm</span>
                </div>
                <div class="cred-item">
                  <span class="cred-label">Key Leadership</span>
                  <span class="cred-val">Padmakar Nimbalkar &amp; Dinesh Satavase</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Column: Narrative & Service Scope -->
          <div class="about-content">
            <div class="badge-tag badge-tag-primary">
              <app-icon name="award" [size]="14"></app-icon>
              <span>ABOUT ALFA CLEANING SYSTEMS</span>
            </div>

            <h2>Mumbai's Trusted Specialist in Mechanized Water Storage Tank Sanitation</h2>

            <p class="lead-text">
              Established in 2006, <strong>Alfa Cleaning Systems</strong> is a premier specialized service provider dedicated exclusively to mechanized water storage tank cleaning, sludge evacuation, well dredging, and structural waterproofing.
            </p>

            <p>
              We believe pure drinking water is fundamental to human health. Conventional manual scrubbing leaves up to 40% of bacterial biofilm, harmful algae spores, and heavy sediments untouched at the tank bottom. Alfa Cleaning Systems deploys scientific mechanization using high-pressure jet washers with potassium permanganate, heavy-duty sludge pumps, and industrial wet-slurry vacuum extractors.
            </p>

            <!-- Dual Offices Overview -->
            <div class="offices-container">
              <div class="office-box">
                <div class="office-icon">
                  <app-icon name="building" [size]="20"></app-icon>
                </div>
                <div class="office-text">
                  <h4>Marketing &amp; Operations Office (Mumbai)</h4>
                  <p>{{ company.marketingOffice.full }}</p>
                </div>
              </div>

              <div class="office-box">
                <div class="office-icon head-office-icon">
                  <app-icon name="map-pin" [size]="20"></app-icon>
                </div>
                <div class="office-text">
                  <h4>Head Office (Vasai / Palghar)</h4>
                  <p>{{ company.headOffice.full }}</p>
                </div>
              </div>
            </div>

            <!-- Core Commitments Checklist -->
            <div class="commitments-list">
              <div class="commit-item">
                <app-icon name="check" [size]="18"></app-icon>
                <span>100% Mechanized — Zero manual scavenging</span>
              </div>
              <div class="commit-item">
                <app-icon name="check" [size]="18"></app-icon>
                <span>Potable drinking water hygiene certified</span>
              </div>
              <div class="commit-item">
                <app-icon name="check" [size]="18"></app-icon>
                <span>Trained &amp; safety-insured technical workforce</span>
              </div>
              <div class="commit-item">
                <app-icon name="check" [size]="18"></app-icon>
                <span>Formal inspection reports &amp; GST tax compliance</span>
              </div>
            </div>

            <div class="about-actions">
              <a href="#services" class="btn btn-navy" (click)="scrollTo('#services', $event)">
                <span>View Cleaning Services</span>
                <app-icon name="arrow-right" [size]="16"></app-icon>
              </a>
              <a href="#clients" class="btn btn-secondary" (click)="scrollTo('#clients', $event)">
                <span>View 108+ Valued Clients</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .section-about {
      background-color: #FFFFFF;
      border-bottom: 1px solid var(--color-border);
    }

    .about-grid {
      display: grid;
      grid-template-columns: minmax(0, 1fr);
      gap: 2.5rem;
      align-items: center;

      @media (min-width: 1024px) {
        grid-template-columns: minmax(0, 1fr) minmax(0, 1.15fr);
        gap: 4rem;
      }
    }

    /* Left Column */
    .about-visual {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      min-width: 0;
    }

    .image-wrapper {
      position: relative;
      border-radius: var(--radius-xl);
      overflow: hidden;
      box-shadow: var(--shadow-xl);

      .about-img {
        width: 100%;
        height: 260px;
        object-fit: cover;
        display: block;
        transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);

        @media (min-width: 600px) {
          height: 400px;
        }

        &:hover {
          transform: scale(1.03);
        }
      }
    }

    .experience-badge {
      position: absolute;
      bottom: 1.5rem;
      left: 1.5rem;
      background: var(--color-primary);
      color: #FFFFFF;
      padding: 1rem 1.5rem;
      border-radius: var(--radius-lg);
      box-shadow: var(--shadow-lg);
      border-left: 4px solid var(--color-secondary);
      display: flex;
      align-items: center;
      gap: 1rem;
      max-width: 320px;

      @media (max-width: 500px) {
        bottom: 0.75rem;
        left: 0.75rem;
        right: 0.75rem;
        max-width: none;
        padding: 0.75rem 1rem;
        gap: 0.75rem;
      }

      .exp-number {
        font-size: 2.2rem;
        font-weight: 800;
        color: var(--color-secondary-light);
        line-height: 1;

        @media (max-width: 500px) {
          font-size: 1.65rem;
        }
      }

      .exp-text {
        font-size: 0.85rem;
        font-weight: 600;
        line-height: 1.3;
        color: #E2E8F0;

        @media (max-width: 500px) {
          font-size: 0.78rem;
        }
      }
    }

    .credentials-card {
      background-color: var(--color-bg-subtle);
      border: 1px solid var(--color-border);
      border-radius: var(--radius-lg);
      padding: 1.25rem;

      @media (min-width: 600px) {
        padding: 1.25rem 1.5rem;
      }

      .cred-header {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        margin-bottom: 1rem;
        color: var(--color-secondary);

        h4 {
          color: var(--color-primary);
          font-size: 0.95rem;
        }
      }

      .cred-grid {
        display: grid;
        grid-template-columns: minmax(0, 1fr);
        gap: 0.75rem;

        @media (min-width: 500px) {
          grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
        }
      }

      .cred-item {
        display: flex;
        flex-direction: column;
        min-width: 0;

        .cred-label {
          font-size: 0.75rem;
          color: var(--color-text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-weight: 600;
        }

        .cred-val {
          font-size: 0.88rem;
          color: var(--color-text-main);
          font-weight: 700;
          overflow-wrap: break-word;
        }
      }
    }

    /* Right Column */
    .about-content {
      min-width: 0;

      h2 {
        margin-bottom: 1.25rem;
        color: var(--color-primary);
      }

      .lead-text {
        font-size: 1.1rem;
        line-height: 1.6;
        color: var(--color-text-main);
        font-weight: 500;
        margin-bottom: 1rem;
      }

      p {
        color: var(--color-text-body);
        margin-bottom: 1.5rem;
      }
    }

    .offices-container {
      display: flex;
      flex-direction: column;
      gap: 0.85rem;
      margin-bottom: 1.75rem;
    }

    .office-box {
      display: flex;
      gap: 0.85rem;
      padding: 1rem 1.2rem;
      background-color: var(--color-bg-subtle);
      border-radius: var(--radius-md);
      border: 1px solid var(--color-border);

      .office-icon {
        width: 38px;
        height: 38px;
        border-radius: var(--radius-sm);
        background-color: rgba(2, 132, 199, 0.12);
        color: var(--color-secondary);
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
      }

      .head-office-icon {
        background-color: rgba(16, 185, 129, 0.12);
        color: #10B981;
      }

      .office-text {
        h4 {
          font-size: 0.92rem;
          color: var(--color-primary);
          margin-bottom: 0.2rem;
        }

        p {
          font-size: 0.82rem;
          color: var(--color-text-body);
          margin-bottom: 0;
          line-height: 1.45;
        }
      }
    }

    .commitments-list {
      display: grid;
      grid-template-columns: minmax(0, 1fr);
      gap: 0.65rem;
      margin-bottom: 2rem;

      @media (min-width: 600px) {
        grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
      }

      .commit-item {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-size: 0.88rem;
        font-weight: 600;
        color: var(--color-text-main);
        min-width: 0;

        app-icon {
          color: var(--color-accent-green);
          flex-shrink: 0;
        }
      }
    }

    .about-actions {
      display: flex;
      flex-direction: column;
      gap: 0.85rem;

      @media (min-width: 480px) {
        flex-direction: row;
        flex-wrap: wrap;
        gap: 1rem;
      }

      .btn {
        width: 100%;
        @media (min-width: 480px) {
          width: auto;
        }
      }
    }
  `]
})
export class AboutComponent {
  company = COMPANY_CONFIG;

  scrollTo(targetId: string, event: Event): void {
    event.preventDefault();
    const elem = document.querySelector(targetId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
