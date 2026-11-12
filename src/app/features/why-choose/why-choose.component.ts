import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WHY_CHOOSE_DATA } from '../../core/data/why-choose.data';
import { WhyChooseItem } from '../../core/models/company.model';
import { IconComponent } from '../../shared/components/icon/icon.component';

@Component({
  selector: 'app-why-choose',
  standalone: true,
  imports: [CommonModule, IconComponent],
  template: `
    <section class="section section-why-choose">
      <div class="container">
        <!-- Section Header -->
        <div class="section-header">
          <div class="badge-tag badge-tag-primary">
            <app-icon name="award" [size]="14"></app-icon>
            <span>ENGINEERING &amp; TRUST</span>
          </div>
          <h2>Why Choose Alfa Cleaning Systems?</h2>
          <p>
            Combining two decades of operational experience with specialized high-pressure machinery to deliver unmatched drinking water hygiene and equipment reliability.
          </p>
        </div>

        <!-- Trust Pillars Grid -->
        <div class="pillars-grid">
          <div *ngFor="let item of pillars" class="card pillar-card">
            <div class="pillar-header">
              <div class="pillar-icon-box">
                <app-icon [name]="item.icon" [size]="24"></app-icon>
              </div>
              <span *ngIf="item.badge" class="pillar-badge">{{ item.badge }}</span>
            </div>

            <h3 class="pillar-title">{{ item.title }}</h3>
            <p class="pillar-desc">{{ item.description }}</p>
          </div>
        </div>

        <!-- Compliance & Certification Trust Strip -->
        <div class="trust-strip">
          <div class="trust-badge-item">
            <app-icon name="shield-check" [size]="22"></app-icon>
            <div class="badge-meta">
              <strong>100% Mechanized Protocol</strong>
              <span>Zero Manual Scavenging Compliant</span>
            </div>
          </div>
          <div class="trust-badge-item">
            <app-icon name="award" [size]="22"></app-icon>
            <div class="badge-meta">
              <strong>Registered Partnership Firm</strong>
              <span>GSTIN: 27AAOFA7537Q2ZK</span>
            </div>
          </div>
          <div class="trust-badge-item">
            <app-icon name="leaf" [size]="22"></app-icon>
            <div class="badge-meta">
              <strong>Potable Safe Sanitization</strong>
              <span>Food-Grade Disinfection &amp; UV-C</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .section-why-choose {
      background-color: #FFFFFF;
      border-bottom: 1px solid var(--color-border);
    }

    .pillars-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 1.75rem;
      margin-bottom: 3.5rem;

      @media (min-width: 640px) {
        grid-template-columns: repeat(2, 1fr);
      }

      @media (min-width: 1024px) {
        grid-template-columns: repeat(3, 1fr);
      }
    }

    .pillar-card {
      padding: 1.75rem;
      display: flex;
      flex-direction: column;
      border-radius: var(--radius-lg);
      transition: all var(--transition-base);

      &:hover {
        border-color: var(--color-secondary);
        box-shadow: var(--shadow-lg);
        transform: translateY(-4px);
      }

      .pillar-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 1.25rem;
      }

      .pillar-icon-box {
        width: 50px;
        height: 50px;
        border-radius: var(--radius-md);
        background-color: rgba(2, 132, 199, 0.1);
        color: var(--color-secondary);
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .pillar-badge {
        font-size: 0.72rem;
        font-weight: 700;
        background-color: var(--color-bg-subtle);
        color: var(--color-primary);
        padding: 0.25rem 0.65rem;
        border-radius: var(--radius-full);
        border: 1px solid var(--color-border);
      }

      .pillar-title {
        font-size: 1.18rem;
        color: var(--color-primary);
        margin-bottom: 0.65rem;
        line-height: 1.35;
      }

      .pillar-desc {
        font-size: 0.88rem;
        color: var(--color-text-body);
        line-height: 1.6;
        margin-bottom: 0;
      }
    }

    /* Trust Strip */
    .trust-strip {
      background-color: var(--color-bg-subtle);
      border: 1px solid var(--color-border);
      border-radius: var(--radius-xl);
      padding: 1.5rem 2rem;
      display: grid;
      grid-template-columns: 1fr;
      gap: 1.5rem;

      @media (min-width: 768px) {
        grid-template-columns: repeat(3, 1fr);
      }

      .trust-badge-item {
        display: flex;
        align-items: center;
        gap: 0.85rem;

        app-icon {
          color: var(--color-secondary);
          flex-shrink: 0;
        }

        .badge-meta {
          display: flex;
          flex-direction: column;

          strong {
            font-size: 0.9rem;
            color: var(--color-primary);
          }

          span {
            font-size: 0.78rem;
            color: var(--color-text-muted);
          }
        }
      }
    }
  `]
})
export class WhyChooseComponent {
  pillars: WhyChooseItem[] = WHY_CHOOSE_DATA;
}
