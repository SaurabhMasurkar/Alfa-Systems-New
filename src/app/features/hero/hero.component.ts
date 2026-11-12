import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { COMPANY_CONFIG } from '../../core/config/company.config';
import { IconComponent } from '../../shared/components/icon/icon.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, IconComponent],
  template: `
    <section id="hero" class="hero-section">
      <!-- Dark Industrial Backdrop Overlay -->
      <div class="hero-backdrop">
        <img 
          src="assets/images/services/underground-real.jpg" 
          alt="Alfa Cleaning Systems Real On-Site Tank Dewatering Operations" 
          class="hero-bg-img"
          loading="eager"
          fetchpriority="high">
        <div class="hero-overlay"></div>
        <div class="hero-grid-pattern"></div>
      </div>

      <div class="container hero-container">
        <!-- Main Hero Content -->
        <div class="hero-content">
          <div class="hero-badge">
            <span class="badge-dot"></span>
            <span>Serving Mumbai, Thane, Navi Mumbai &amp; Palghar Since 2006</span>
          </div>

          <h1 class="hero-title">
            Professional <span class="highlight">Mechanized</span> Water Tank Cleaning &amp; <span class="highlight-cyan">Sanitation</span>
          </h1>

          <p class="hero-subtitle">
            Alfa Cleaning Systems is Mumbai's trusted service provider for scientific water storage tank cleaning. Trusted by Reserve Bank of India, Western Railway, HPCL, BPCL, Siemens, Jaslok Hospital, and 108+ leading institutions and residential societies.
          </p>

          <div class="hero-actions">
            <a href="#contact" class="btn btn-primary btn-lg" (click)="scrollTo('#contact', $event)">
              <span>Request Site Inspection</span>
              <app-icon name="arrow-right" [size]="18"></app-icon>
            </a>
            <a href="#clients" class="btn btn-outline-white btn-lg" (click)="scrollTo('#clients', $event)">
              <span>View 108+ Valued Clients</span>
              <app-icon name="shield-check" [size]="18"></app-icon>
            </a>
          </div>

          <div class="hero-quick-trust">
            <div class="trust-item">
              <app-icon name="award" [size]="18"></app-icon>
              <span>18+ Years Field Expertise</span>
            </div>
            <div class="trust-item">
              <app-icon name="shield-check" [size]="18"></app-icon>
              <span>Zero Manual Scavenging</span>
            </div>
            <div class="trust-item">
              <app-icon name="leaf" [size]="18"></app-icon>
              <span>Potassium Permanganate Wash</span>
            </div>
          </div>
        </div>

        <!-- Service Gateways: Societies vs Commercial/Industrial -->
        <div class="dual-gateway">
          <div class="gateway-header">
            <h3>Specialized Cleaning Solutions</h3>
            <p>Select your property type for custom service execution</p>
          </div>

          <div class="gateway-grid">
            <!-- Gateway 1: Residential Societies -->
            <div class="gateway-card card-services">
              <div class="gateway-tag">FOR CO-OP HOUSING SOCIETIES</div>
              <div class="gateway-icon">
                <app-icon name="building" [size]="28"></app-icon>
              </div>
              <h4>Housing Societies &amp; Towers</h4>
              <p>Underground concrete sumps, rooftop overhead tanks, and Sintex tanks cleaned within scheduled water hours.</p>
              <ul class="gateway-features">
                <li><app-icon name="check" [size]="16"></app-icon> Twin-Compartment Non-Disruption</li>
                <li><app-icon name="check" [size]="16"></app-icon> Fast High-Power Dewatering Pumps</li>
                <li><app-icon name="check" [size]="16"></app-icon> Formal Society Audit Certificate</li>
              </ul>
              <a href="#services" class="btn btn-primary btn-full" (click)="scrollTo('#services', $event)">
                <span>Explore Society Packages</span>
                <app-icon name="arrow-right" [size]="16"></app-icon>
              </a>
            </div>

            <!-- Gateway 2: Commercial & Govt Bodies -->
            <div class="gateway-card card-commercial">
              <div class="gateway-tag commercial-tag">FOR PSUS, CORPORATES &amp; HOSPITALS</div>
              <div class="gateway-icon commercial-icon">
                <app-icon name="shield-check" [size]="28"></app-icon>
              </div>
              <h4>Commercial &amp; Municipal Reservoirs</h4>
              <p>Industrial clarifiers, municipal ESR/GSR reservoirs, hospital emergency sumps, and open well de-silting.</p>
              <ul class="gateway-features">
                <li><app-icon name="check" [size]="16"></app-icon> Up to 5+ Million Litre Reservoirs</li>
                <li><app-icon name="check" [size]="16"></app-icon> Multi-Gas Confined Space Safety</li>
                <li><app-icon name="check" [size]="16"></app-icon> GST Tax Invoicing &amp; Compliance</li>
              </ul>
              <a href="#contact" class="btn btn-outline-white btn-full" (click)="scrollTo('#contact', $event)">
                <span>Request Commercial Estimate</span>
                <app-icon name="arrow-right" [size]="16"></app-icon>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Verified Stats Metric Bar -->
      <div class="stats-bar">
        <div class="container stats-container">
          <div class="stat-box">
            <span class="stat-number">2006</span>
            <span class="stat-label">Year Established</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-box">
            <span class="stat-number">18+</span>
            <span class="stat-label">Years of Experience</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-box">
            <span class="stat-number">108+</span>
            <span class="stat-label">Major Institutional Clients</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-box">
            <span class="stat-number">100%</span>
            <span class="stat-label">Mechanized Sanitation</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-box">
            <span class="stat-number">24/7</span>
            <span class="stat-label">Emergency Outage Support</span>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero-section {
      position: relative;
      background-color: var(--color-primary-dark);
      color: #FFFFFF;
      padding-top: 4rem;
      padding-bottom: 0;
      width: 100%;
      max-width: 100%;
      overflow: hidden;
    }

    @media (max-width: 768px) {
      .hero-section {
        padding-top: 2rem;
      }
    }

    /* Backdrop Imagery & Overlay */
    .hero-backdrop {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 1;
      overflow: hidden;

      .hero-bg-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        opacity: 0.32;
        transform: scale(1.02);
      }

      .hero-overlay {
        position: absolute;
        inset: 0;
        background: linear-gradient(
          135deg, 
          rgba(6, 19, 41, 0.94) 0%, 
          rgba(10, 30, 63, 0.88) 50%, 
          rgba(13, 42, 84, 0.92) 100%
        );
      }

      .hero-grid-pattern {
        position: absolute;
        inset: 0;
        background-image: radial-gradient(rgba(56, 189, 248, 0.12) 1px, transparent 1px);
        background-size: 32px 32px;
        opacity: 0.6;
      }
    }

    .hero-container {
      position: relative;
      z-index: 2;
      display: grid;
      grid-template-columns: minmax(0, 1fr);
      gap: 2.5rem;
      padding-bottom: 3.5rem;

      @media (min-width: 1024px) {
        grid-template-columns: minmax(0, 1.15fr) minmax(0, 0.85fr);
        align-items: center;
        gap: 3rem;
        padding-bottom: 4rem;
      }
    }

    /* Hero Left Content */
    .hero-content {
      width: 100%;
      max-width: 680px;
      min-width: 0;
    }

    .hero-badge {
      display: inline-flex;
      align-items: center;
      gap: 0.55rem;
      padding: 0.4rem 0.9rem;
      background: rgba(2, 132, 199, 0.18);
      border: 1px solid rgba(56, 189, 248, 0.35);
      border-radius: var(--radius-full);
      font-size: 0.82rem;
      font-weight: 600;
      color: #7DD3FC;
      margin-bottom: 1.25rem;
      max-width: 100%;

      @media (max-width: 480px) {
        font-size: 0.76rem;
        padding: 0.35rem 0.75rem;
        border-radius: var(--radius-md);
      }

      .badge-dot {
        width: 8px;
        height: 8px;
        background-color: #38BDF8;
        border-radius: 50%;
        box-shadow: 0 0 10px #38BDF8;
        flex-shrink: 0;
      }
    }

    .hero-title {
      font-size: clamp(1.75rem, 5vw, 3.4rem);
      font-weight: 900;
      line-height: 1.15;
      color: #FFFFFF;
      margin-bottom: 1.15rem;
      overflow-wrap: break-word;

      .highlight {
        color: #38BDF8;
      }

      .highlight-cyan {
        color: #22D3EE;
      }
    }

    .hero-subtitle {
      font-size: clamp(0.95rem, 2vw, 1.15rem);
      line-height: 1.6;
      color: #CBD5E1;
      margin-bottom: 1.75rem;
      max-width: 620px;
    }

    .hero-actions {
      display: flex;
      flex-direction: column;
      gap: 0.85rem;
      margin-bottom: 2rem;
      width: 100%;

      @media (min-width: 540px) {
        flex-direction: row;
        flex-wrap: wrap;
        gap: 1rem;
      }

      .btn {
        width: 100%;
        min-width: 0;

        @media (min-width: 540px) {
          width: auto;
        }
      }
    }

    .hero-quick-trust {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 0.9rem 1.5rem;
      padding-top: 1.25rem;
      border-top: 1px solid rgba(255, 255, 255, 0.12);

      .trust-item {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        font-size: 0.85rem;
        font-weight: 600;
        color: #E2E8F0;

        app-icon {
          color: #38BDF8;
          flex-shrink: 0;
        }
      }
    }

    /* Dual Gateway Component */
    .dual-gateway {
      background: rgba(15, 35, 71, 0.85);
      border: 1px solid rgba(56, 189, 248, 0.2);
      border-radius: var(--radius-xl);
      padding: 1.75rem;
      box-shadow: var(--shadow-xl);
      backdrop-filter: blur(8px);
      width: 100%;
      min-width: 0;

      @media (max-width: 600px) {
        padding: 1.25rem 1rem;
        border-radius: var(--radius-lg);
      }
    }

    .gateway-header {
      margin-bottom: 1.25rem;
      text-align: center;

      h3 {
        color: #FFFFFF;
        font-size: 1.25rem;
        margin-bottom: 0.25rem;
      }

      p {
        color: #94A3B8;
        font-size: 0.85rem;
      }
    }

    .gateway-grid {
      display: grid;
      grid-template-columns: minmax(0, 1fr);
      gap: 1rem;

      @media (min-width: 640px) and (max-width: 1023px) {
        grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
        gap: 1.25rem;
      }
    }

    .gateway-card {
      background: rgba(10, 30, 63, 0.75);
      border-radius: var(--radius-lg);
      padding: 1.4rem;
      border: 1px solid rgba(255, 255, 255, 0.1);
      display: flex;
      flex-direction: column;
      min-width: 0;
      width: 100%;
      transition: all var(--transition-base);

      @media (max-width: 480px) {
        padding: 1.15rem 1rem;
      }

      &:hover {
        transform: translateY(-3px);
        border-color: rgba(56, 189, 248, 0.4);
        box-shadow: 0 10px 25px rgba(2, 132, 199, 0.2);
      }

      .gateway-tag {
        font-size: 0.7rem;
        font-weight: 800;
        letter-spacing: 0.08em;
        color: #38BDF8;
        margin-bottom: 0.75rem;
      }

      .commercial-tag {
        color: #FCD34D;
      }

      .gateway-icon {
        width: 52px;
        height: 52px;
        border-radius: var(--radius-md);
        background: rgba(2, 132, 199, 0.2);
        color: #38BDF8;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 1rem;
      }

      .commercial-icon {
        background: rgba(245, 158, 11, 0.2);
        color: #FCD34D;
      }

      h4 {
        color: #FFFFFF;
        font-size: 1.15rem;
        margin-bottom: 0.5rem;
      }

      p {
        color: #CBD5E1;
        font-size: 0.86rem;
        margin-bottom: 1rem;
        line-height: 1.5;
        flex-grow: 1;
      }

      .gateway-features {
        list-style: none;
        margin-bottom: 1.25rem;
        display: flex;
        flex-direction: column;
        gap: 0.45rem;

        li {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          font-size: 0.8rem;
          color: #E2E8F0;

          app-icon {
            color: #10B981;
          }
        }
      }
    }

    /* Verified Stats Bar */
    .stats-bar {
      position: relative;
      z-index: 2;
      background-color: var(--color-primary);
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      padding: 1.75rem 0;
    }

    .stats-container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 1.5rem;
    }

    .stat-box {
      flex: 1 1 140px;
      text-align: center;

      .stat-number {
        display: block;
        font-size: clamp(1.5rem, 2.5vw, 2.1rem);
        font-weight: 800;
        color: #38BDF8;
        line-height: 1.1;
        margin-bottom: 0.25rem;
      }

      .stat-label {
        font-size: 0.82rem;
        font-weight: 600;
        color: #94A3B8;
        text-transform: uppercase;
        letter-spacing: 0.05em;
      }
    }

    .stat-divider {
      width: 1px;
      height: 40px;
      background-color: rgba(255, 255, 255, 0.12);
      display: none;

      @media (min-width: 768px) {
        display: block;
      }
    }
  `]
})
export class HeroComponent {
  company = COMPANY_CONFIG;

  scrollTo(targetId: string, event: Event): void {
    event.preventDefault();
    const elem = document.querySelector(targetId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
