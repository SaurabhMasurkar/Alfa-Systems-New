import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { COMPANY_CONFIG } from '../../../core/config/company.config';
import { WhatsAppService } from '../../../core/services/whatsapp.service';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-floating-ctas',
  standalone: true,
  imports: [CommonModule, IconComponent],
  template: `
    <!-- Desktop & Tablet Floating WhatsApp Button -->
    <aside class="floating-whatsapp-wrap" aria-label="Quick WhatsApp Contact">
      <button 
        type="button" 
        class="floating-whatsapp-btn"
        (click)="openWhatsApp()"
        aria-label="Chat with Alfa Cleaning Systems on WhatsApp">
        <app-icon name="whatsapp" [size]="30"></app-icon>
        <span class="pulse-ring"></span>
        <span class="hover-label">Chat with Us</span>
      </button>
    </aside>

    <!-- Mobile-First Sticky Bottom Action Bar (<= 768px) -->
    <nav class="mobile-sticky-bar" aria-label="Quick Actions Mobile">
      <a [href]="'tel:' + company.contact.primaryPhone" class="bar-action call-action">
        <app-icon name="phone" [size]="18"></app-icon>
        <span>Call Now</span>
      </a>

      <button type="button" class="bar-action whatsapp-action" (click)="openWhatsApp()">
        <app-icon name="whatsapp" [size]="20"></app-icon>
        <span>WhatsApp</span>
      </button>

      <a href="#contact" class="bar-action quote-action" (click)="scrollTo('#contact', $event)">
        <app-icon name="arrow-right" [size]="18"></app-icon>
        <span>Get Quote</span>
      </a>
    </nav>
  `,
  styles: [`
    /* Floating Desktop WhatsApp Button */
    .floating-whatsapp-wrap {
      position: fixed;
      bottom: 2rem;
      right: 2rem;
      z-index: 1500;
      display: none;

      @media (min-width: 769px) {
        display: block;
      }
    }

    .floating-whatsapp-btn {
      position: relative;
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background-color: #25D366;
      color: #FFFFFF;
      border: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 8px 24px rgba(37, 211, 102, 0.45);
      transition: all var(--transition-base);

      &:hover {
        transform: scale(1.08);
        background-color: #20BD5C;
        box-shadow: 0 12px 28px rgba(37, 211, 102, 0.55);

        .hover-label {
          opacity: 1;
          transform: translateX(-10px);
          pointer-events: auto;
        }
      }

      .pulse-ring {
        position: absolute;
        inset: -4px;
        border-radius: 50%;
        border: 2px solid #25D366;
        animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        pointer-events: none;
      }

      .hover-label {
        position: absolute;
        right: 70px;
        background-color: #0F172A;
        color: #FFFFFF;
        font-size: 0.85rem;
        font-weight: 600;
        padding: 0.45rem 0.85rem;
        border-radius: var(--radius-sm);
        white-space: nowrap;
        box-shadow: var(--shadow-md);
        opacity: 0;
        transform: translateX(0);
        transition: all var(--transition-fast);
        pointer-events: none;

        &::after {
          content: '';
          position: absolute;
          top: 50%;
          right: -6px;
          transform: translateY(-50%);
          border-width: 6px 0 6px 6px;
          border-style: solid;
          border-color: transparent transparent transparent #0F172A;
        }
      }
    }

    @keyframes pulse {
      0%, 100% {
        transform: scale(1);
        opacity: 0.8;
      }
      50% {
        transform: scale(1.25);
        opacity: 0;
      }
    }

    /* Mobile Sticky Bottom CTA Bar */
    .mobile-sticky-bar {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 1500;
      display: grid;
      grid-template-columns: 1fr 1.25fr 1fr;
      background-color: #FFFFFF;
      border-top: 1px solid var(--color-border);
      box-shadow: 0 -4px 16px rgba(10, 30, 63, 0.12);
      padding: 0.5rem 0.75rem;
      gap: 0.5rem;

      @media (min-width: 769px) {
        display: none !important;
      }
    }

    .bar-action {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.4rem;
      padding: 0.7rem 0.5rem;
      border-radius: var(--radius-md);
      font-size: 0.82rem;
      font-weight: 700;
      text-decoration: none;
      border: none;
      cursor: pointer;
      line-height: 1;

      &.call-action {
        background-color: var(--color-bg-subtle);
        color: var(--color-primary);
        border: 1px solid var(--color-border);

        &:hover {
          background-color: #E2E8F0;
        }
      }

      &.whatsapp-action {
        background-color: #25D366;
        color: #FFFFFF;
        box-shadow: 0 2px 8px rgba(37, 211, 102, 0.3);

        &:hover {
          background-color: #20BD5C;
        }
      }

      &.quote-action {
        background-color: var(--color-secondary);
        color: #FFFFFF;
        box-shadow: 0 2px 8px rgba(2, 132, 199, 0.3);

        &:hover {
          background-color: var(--color-secondary-dark);
        }
      }
    }
  `]
})
export class FloatingCtasComponent {
  company = COMPANY_CONFIG;

  constructor(private whatsAppService: WhatsAppService) {}

  openWhatsApp(): void {
    const defaultMsg = `Hello Alfa Cleaning Systems, I am visiting your website and would like to enquire about your services and machinery solutions.`;
    this.whatsAppService.openChat(defaultMsg);
  }

  scrollTo(targetId: string, event: Event): void {
    event.preventDefault();
    const elem = document.querySelector(targetId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
