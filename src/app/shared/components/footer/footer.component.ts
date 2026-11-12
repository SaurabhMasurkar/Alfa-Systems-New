import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { COMPANY_CONFIG } from '../../../core/config/company.config';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, IconComponent],
  template: `
    <footer class="main-footer">
      <div class="container footer-top">
        <div class="footer-grid">
          <!-- Col 1: Brand Info -->
          <div class="footer-col brand-col">
            <a href="#hero" class="footer-logo" (click)="scrollTo('#hero', $event)">
              <img 
                [src]="company.logo.url" 
                alt="Alfa Cleaning Systems" 
                class="footer-logo-img"
                onerror="this.src='assets/images/logo/company-logo.png'">
            </a>
            <p class="brand-desc">
              Established in 2006, Alfa Cleaning Systems is Mumbai's premier specialized service provider for mechanized water storage tank cleaning, sludge evacuation, and structural waterproofing.
            </p>
            <div class="gst-tag">
              <app-icon name="shield-check" [size]="16"></app-icon>
              <span>GSTIN: {{ company.gstin }}</span>
            </div>
            <div class="footer-social-links">
              <a [href]="company.socialLinks?.indiamart" target="_blank" rel="noopener noreferrer" class="social-pill" title="IndiaMART Profile">
                <span>IndiaMART Verified</span>
              </a>
              <a [href]="'https://wa.me/' + company.contact.whatsappNumber" target="_blank" rel="noopener noreferrer" class="social-pill whatsapp" title="Chat on WhatsApp">
                <app-icon name="whatsapp" [size]="14"></app-icon>
                <span>WhatsApp Helpline</span>
              </a>
            </div>
          </div>

          <!-- Col 2: Cleaning Services Directory -->
          <div class="footer-col">
            <h4 class="col-title">Our Cleaning Services</h4>
            <ul class="footer-links">
              <li><a href="#services" (click)="scrollTo('#services', $event)">Underground RCC Water Sumps</a></li>
              <li><a href="#services" (click)="scrollTo('#services', $event)">Overhead Rooftop Concrete Tanks</a></li>
              <li><a href="#services" (click)="scrollTo('#services', $event)">ESR &amp; GSR Municipal Reservoirs</a></li>
              <li><a href="#services" (click)="scrollTo('#services', $event)">Plastic &amp; Sintex Water Tanks</a></li>
              <li><a href="#services" (click)="scrollTo('#services', $event)">Settling Tanks &amp; Sludge Evacuation</a></li>
              <li><a href="#services" (click)="scrollTo('#services', $event)">Open Well Cleaning &amp; Silt Dredging</a></li>
              <li><a href="#services" (click)="scrollTo('#services', $event)">Mechanized Septic Tank Cleaning</a></li>
              <li><a href="#services" (click)="scrollTo('#services', $event)">Polymer Structural Waterproofing</a></li>
              <li><a href="#services" (click)="scrollTo('#services', $event)">Building Terrace High-Pressure Wash</a></li>
            </ul>
          </div>

          <!-- Col 3: Valued Clients Directory -->
          <div class="footer-col">
            <h4 class="col-title">Valued Clients Served</h4>
            <ul class="footer-links">
              <li><a href="#clients" (click)="scrollTo('#clients', $event)">Reserve Bank of India (RBI)</a></li>
              <li><a href="#clients" (click)="scrollTo('#clients', $event)">Western Railway (Mumbai Div.)</a></li>
              <li><a href="#clients" (click)="scrollTo('#clients', $event)">Hindustan Petroleum (HPCL)</a></li>
              <li><a href="#clients" (click)="scrollTo('#clients', $event)">Bharat Petroleum (BPCL)</a></li>
              <li><a href="#clients" (click)="scrollTo('#clients', $event)">Vasai-Virar City Corporation</a></li>
              <li><a href="#clients" (click)="scrollTo('#clients', $event)">Siemens India Limited</a></li>
              <li><a href="#clients" (click)="scrollTo('#clients', $event)">Larsen &amp; Toubro (L&amp;T)</a></li>
              <li><a href="#clients" (click)="scrollTo('#clients', $event)">Jaslok Hospital (Grant Road)</a></li>
              <li><a href="#clients" (click)="scrollTo('#clients', $event)">Ashoka Towers &amp; Raheja CHS</a></li>
            </ul>
          </div>

          <!-- Col 4: Contact & Office Coordinates -->
          <div class="footer-col contact-col">
            <h4 class="col-title">Offices &amp; Contact</h4>
            <div class="footer-contact-items">
              <div class="f-contact-item">
                <app-icon name="map-pin" [size]="16"></app-icon>
                <span><strong>Operations:</strong> {{ company.marketingOffice.full }}</span>
              </div>
              <div class="f-contact-item">
                <app-icon name="building" [size]="16"></app-icon>
                <span><strong>Head Office:</strong> {{ company.headOffice.full }}</span>
              </div>
              <div class="f-contact-item">
                <app-icon name="phone" [size]="16"></app-icon>
                <div class="f-phones">
                  <a href="tel:+919821210247">+91 9821210247 (D. Satavase)</a>
                  <a href="tel:+919821620247">+91 9821620247 (P. Nimbalkar)</a>
                </div>
              </div>
              <div class="f-contact-item">
                <app-icon name="mail" [size]="16"></app-icon>
                <a [href]="'mailto:' + company.contact.email">{{ company.contact.email }}</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Footer Bottom Bar -->
      <div class="footer-bottom">
        <div class="container footer-bottom-container">
          <div class="copyright">
            &copy; 2006 – 2026 <strong>Alfa Cleaning Systems</strong>. All rights reserved. Registered Partnership Firm | GST: {{ company.gstin }}
          </div>
          <div class="footer-bottom-actions">
            <button type="button" class="back-to-top" (click)="scrollTo('#hero', $event)">
              <span>Back to Top</span>
              <app-icon name="arrow-right" [size]="14"></app-icon>
            </button>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .main-footer {
      background-color: var(--color-primary-dark);
      color: #94A3B8;
      font-size: 0.9rem;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      padding-top: 4.5rem;
    }

    .footer-grid {
      display: grid;
      grid-template-columns: minmax(0, 1fr);
      gap: 2.25rem;
      padding-bottom: 3rem;

      @media (min-width: 640px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 3rem;
        padding-bottom: 3.5rem;
      }

      @media (min-width: 1024px) {
        grid-template-columns: minmax(0, 1.3fr) repeat(2, minmax(0, 1fr)) minmax(0, 1.15fr);
        gap: 2.5rem;
      }
    }

    .footer-col {
      display: flex;
      flex-direction: column;
      min-width: 0;
      overflow-wrap: break-word;

      .col-title {
        color: #FFFFFF;
        font-size: 1.05rem;
        font-weight: 700;
        margin-bottom: 1.25rem;
        position: relative;
        padding-bottom: 0.5rem;

        &::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 28px;
          height: 2px;
          background-color: var(--color-secondary);
        }
      }
    }

    /* Brand Col */
    .brand-col {
      .footer-logo {
        display: inline-flex;
        align-items: center;
        background: #FFFFFF;
        padding: 6px 14px;
        border-radius: var(--radius-md);
        margin-bottom: 1.25rem;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);

        .footer-logo-img {
          height: 44px;
          max-width: 200px;
          width: auto;
          margin-bottom: 0;
          object-fit: contain;
        }
      }

      .brand-desc {
        color: #94A3B8;
        line-height: 1.6;
        margin-bottom: 1.25rem;
        font-size: 0.88rem;
      }

      .gst-tag {
        display: inline-flex;
        align-items: center;
        gap: 0.4rem;
        font-size: 0.8rem;
        color: #38BDF8;
        background: rgba(56, 189, 248, 0.12);
        padding: 0.35rem 0.75rem;
        border-radius: var(--radius-sm);
        margin-bottom: 1.25rem;
        width: fit-content;
      }

      .footer-social-links {
        display: flex;
        flex-wrap: wrap;
        gap: 0.65rem;

        .social-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          background: rgba(255, 255, 255, 0.08);
          color: #E2E8F0;
          padding: 0.35rem 0.75rem;
          border-radius: var(--radius-full);
          font-size: 0.8rem;
          font-weight: 600;
          transition: all var(--transition-fast);

          &:hover {
            background: var(--color-secondary);
            color: #FFFFFF;
          }

          &.whatsapp {
            background: rgba(37, 211, 102, 0.2);
            color: #86EFAC;

            &:hover {
              background: #25D366;
              color: #FFFFFF;
            }
          }
        }
      }
    }

    /* Links */
    .footer-links {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 0.65rem;

      li a {
        color: #94A3B8;
        font-size: 0.88rem;
        transition: color var(--transition-fast);

        &:hover {
          color: #38BDF8;
          padding-left: 4px;
        }
      }
    }

    /* Contact Col */
    .footer-contact-items {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      .f-contact-item {
        display: flex;
        gap: 0.75rem;
        align-items: flex-start;
        font-size: 0.86rem;
        line-height: 1.45;

        app-icon {
          color: var(--color-secondary-light);
          margin-top: 2px;
          flex-shrink: 0;
        }

        a {
          color: #E2E8F0;
          &:hover {
            color: #38BDF8;
          }
        }

        .f-phones {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }
      }
    }

    /* Bottom Bar */
    .footer-bottom {
      border-top: 1px solid rgba(255, 255, 255, 0.08);
      padding: 1.5rem 0;
      font-size: 0.82rem;
    }

    .footer-bottom-container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 1rem;
    }

    .back-to-top {
      background: none;
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: var(--radius-full);
      padding: 0.35rem 0.85rem;
      color: #E2E8F0;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 0.35rem;
      font-size: 0.8rem;
      transition: all var(--transition-fast);

      app-icon {
        transform: rotate(-90deg);
      }

      &:hover {
        border-color: #38BDF8;
        color: #38BDF8;
      }
    }
  `]
})
export class FooterComponent {
  company = COMPANY_CONFIG;

  scrollTo(targetId: string, event: Event): void {
    event.preventDefault();
    const elem = document.querySelector(targetId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
