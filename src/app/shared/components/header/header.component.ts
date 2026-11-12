import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { COMPANY_CONFIG } from '../../../core/config/company.config';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, IconComponent],
  template: `
    <!-- Top Announcement & Quick Contact Bar -->
    <div class="top-bar">
      <div class="container top-bar-content">
        <div class="top-bar-left">
          <span class="est-badge">Estd. 2006</span>
          <span class="top-info">
            <app-icon name="map-pin" [size]="14"></app-icon>
            Bhandup (W) &amp; Nallasopara (W), Mumbai
          </span>
          <span class="top-info d-none-mobile">
            <app-icon name="shield-check" [size]="14"></app-icon>
            GST: {{ company.gstin }}
          </span>
        </div>
        <div class="top-bar-right">
          <a [href]="'tel:' + company.contact.primaryPhone" class="top-phone">
            <app-icon name="phone" [size]="14"></app-icon>
            <span>Call: {{ company.contact.displayPhone }}</span>
          </a>
          <a [href]="'https://wa.me/' + company.contact.whatsappNumber" target="_blank" rel="noopener noreferrer" class="top-whatsapp d-none-mobile">
            <app-icon name="whatsapp" [size]="14"></app-icon>
            <span>WhatsApp Quick Support</span>
          </a>
        </div>
      </div>
    </div>

    <!-- Main Navigation Header -->
    <header class="main-header" [class.is-scrolled]="isScrolled">
      <div class="container header-container">
        <!-- Logo (Easily replaceable via public/assets/images/logo/) -->
        <a href="#hero" class="brand-logo" (click)="closeMobileMenu()">
          <img 
            [src]="company.logo.url" 
            alt="Alfa Cleaning Systems Logo" 
            class="logo-img"
            onerror="this.src='assets/images/logo/company-logo.png'">
        </a>

        <!-- Desktop Navigation -->
        <nav class="desktop-nav" aria-label="Main Navigation">
          <ul class="nav-list">
            <li><a href="#about" class="nav-link" (click)="scrollTo('#about', $event)">About Us</a></li>
            <li><a href="#services" class="nav-link" (click)="scrollTo('#services', $event)">Services</a></li>
            <li><a href="#process" class="nav-link" (click)="scrollTo('#process', $event)">Process</a></li>
            <li><a href="#clients" class="nav-link" (click)="scrollTo('#clients', $event)">Our Clients</a></li>
            <li><a href="#industries" class="nav-link" (click)="scrollTo('#industries', $event)">Industries</a></li>
            <li><a href="#gallery" class="nav-link" (click)="scrollTo('#gallery', $event)">Photo Gallery</a></li>
            <li><a href="#contact" class="nav-link" (click)="scrollTo('#contact', $event)">Contact</a></li>
          </ul>
        </nav>

        <!-- Header CTA Actions -->
        <div class="header-actions">
          <a href="#contact" class="btn btn-primary header-cta-btn" (click)="scrollTo('#contact', $event)">
            <span>Get a Quote</span>
            <app-icon name="arrow-right" [size]="16"></app-icon>
          </a>

          <!-- Mobile Menu Trigger -->
          <button 
            type="button" 
            class="mobile-menu-btn" 
            [attr.aria-expanded]="mobileMenuOpen"
            aria-label="Toggle navigation menu"
            (click)="toggleMobileMenu()">
            <app-icon [name]="mobileMenuOpen ? 'x' : 'menu'" [size]="24"></app-icon>
          </button>
        </div>
      </div>

      <!-- Mobile Navigation Drawer -->
      <div class="mobile-drawer" [class.is-open]="mobileMenuOpen">
        <div class="mobile-drawer-inner">
          <div class="mobile-nav-links">
            <a href="#about" class="mobile-nav-link" (click)="onMobileNavClick('#about', $event)">
              <span>About Us</span>
              <app-icon name="arrow-right" [size]="16"></app-icon>
            </a>
            <a href="#services" class="mobile-nav-link highlight" (click)="onMobileNavClick('#services', $event)">
              <span>Water Tank Cleaning Services</span>
              <app-icon name="arrow-right" [size]="16"></app-icon>
            </a>
            <a href="#process" class="mobile-nav-link" (click)="onMobileNavClick('#process', $event)">
              <span>Process</span>
              <app-icon name="arrow-right" [size]="16"></app-icon>
            </a>
            <a href="#clients" class="mobile-nav-link highlight" (click)="onMobileNavClick('#clients', $event)">
              <span>Our Valued Clients (108+)</span>
              <app-icon name="arrow-right" [size]="16"></app-icon>
            </a>
            <a href="#industries" class="mobile-nav-link" (click)="onMobileNavClick('#industries', $event)">
              <span>Industries &amp; Societies</span>
              <app-icon name="arrow-right" [size]="16"></app-icon>
            </a>
            <a href="#gallery" class="mobile-nav-link" (click)="onMobileNavClick('#gallery', $event)">
              <span>Photo Gallery</span>
              <app-icon name="arrow-right" [size]="16"></app-icon>
            </a>
            <a href="#contact" class="mobile-nav-link" (click)="onMobileNavClick('#contact', $event)">
              <span>Contact &amp; Site Visit</span>
              <app-icon name="arrow-right" [size]="16"></app-icon>
            </a>
          </div>

          <div class="mobile-drawer-contact">
            <a [href]="'tel:' + company.contact.primaryPhone" class="btn btn-navy btn-full">
              <app-icon name="phone" [size]="18"></app-icon>
              <span>Call {{ company.contact.primaryPhone }}</span>
            </a>
            <a [href]="'https://wa.me/' + company.contact.whatsappNumber" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp btn-full">
              <app-icon name="whatsapp" [size]="18"></app-icon>
              <span>WhatsApp Instant Quote</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  `,
  styles: [`
    :host {
      display: block;
      position: sticky;
      top: 0;
      z-index: 1000;
    }

    /* Top Announcement Bar */
    .top-bar {
      background-color: var(--color-primary-dark);
      color: #94A3B8;
      font-size: 0.8rem;
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
      padding: 0.35rem 0;
    }

    .top-bar-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 0.5rem;
    }

    .top-bar-left, .top-bar-right {
      display: flex;
      align-items: center;
      gap: 1.25rem;
    }

    .est-badge {
      background-color: rgba(2, 132, 199, 0.2);
      color: var(--color-secondary-light);
      padding: 0.15rem 0.5rem;
      border-radius: var(--radius-sm);
      font-weight: 700;
      letter-spacing: 0.05em;
    }

    .top-info {
      display: inline-flex;
      align-items: center;
      gap: 0.35rem;
    }

    .top-phone, .top-whatsapp {
      display: inline-flex;
      align-items: center;
      gap: 0.35rem;
      color: #E2E8F0;
      font-weight: 600;
      &:hover {
        color: var(--color-secondary-light);
      }
    }

    .top-whatsapp {
      color: #86EFAC;
      &:hover {
        color: #4ADE80;
      }
    }

    @media (max-width: 768px) {
      .d-none-mobile {
        display: none !important;
      }
      .top-bar-content {
        justify-content: center;
      }
    }

    /* Main Navigation Bar */
    .main-header {
      background-color: rgba(255, 255, 255, 0.98);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border-bottom: 1px solid var(--color-border);
      transition: all var(--transition-base);
      box-shadow: var(--shadow-sm);

      &.is-scrolled {
        background-color: #FFFFFF;
        box-shadow: var(--shadow-md);
      }
    }

    .header-container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 76px;
    }

    /* Logo Container */
    .brand-logo {
      display: flex;
      align-items: center;
      text-decoration: none;
      flex-shrink: 0;

      .logo-img {
        height: 52px;
        max-width: 240px;
        width: auto;
        object-fit: contain;
      }
    }

    @media (max-width: 480px) {
      .brand-logo .logo-img {
        height: 42px;
        max-width: 180px;
      }
    }

    /* Desktop Navigation */
    .desktop-nav {
      display: none;

      @media (min-width: 1024px) {
        display: block;
      }
    }

    .nav-list {
      display: flex;
      align-items: center;
      gap: 1.35rem;
      list-style: none;
    }

    .nav-link {
      font-size: 0.92rem;
      font-weight: 600;
      color: var(--color-primary);
      padding: 0.5rem 0.2rem;
      position: relative;
      transition: color var(--transition-fast);

      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0;
        height: 2px;
        background-color: var(--color-secondary);
        transition: width var(--transition-fast);
        border-radius: 2px;
      }

      &:hover {
        color: var(--color-secondary);
        &::after {
          width: 100%;
        }
      }
    }

    /* Header Actions */
    .header-actions {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .header-cta-btn {
      display: none;
      @media (min-width: 768px) {
        display: inline-flex;
      }
    }

    .mobile-menu-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      background: none;
      border: 1px solid var(--color-border);
      border-radius: var(--radius-sm);
      width: 42px;
      height: 42px;
      color: var(--color-primary);
      cursor: pointer;
      transition: all var(--transition-fast);

      &:hover {
        background-color: var(--color-bg-subtle);
      }

      @media (min-width: 1024px) {
        display: none;
      }
    }

    /* Mobile Drawer */
    .mobile-drawer {
      display: block;
      max-height: 0;
      overflow: hidden;
      background-color: #FFFFFF;
      border-top: 1px solid var(--color-border);
      transition: max-height 350ms cubic-bezier(0.16, 1, 0.3, 1);

      &.is-open {
        max-height: 520px;
        box-shadow: var(--shadow-lg);
      }

      @media (min-width: 1024px) {
        display: none !important;
      }
    }

    .mobile-drawer-inner {
      padding: 1.25rem;
    }

    .mobile-nav-links {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
      margin-bottom: 1.25rem;
    }

    .mobile-nav-link {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0.75rem 0.5rem;
      font-weight: 600;
      font-size: 0.95rem;
      color: var(--color-primary);
      border-radius: var(--radius-sm);
      transition: background-color var(--transition-fast);

      &:hover {
        background-color: var(--color-bg-subtle);
        color: var(--color-secondary);
      }

      &.highlight {
        color: var(--color-secondary);
        background-color: rgba(2, 132, 199, 0.05);
      }
    }

    .mobile-drawer-contact {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
      padding-top: 1rem;
      border-top: 1px solid var(--color-border);
    }
  `]
})
export class HeaderComponent {
  company = COMPANY_CONFIG;
  isScrolled = false;
  mobileMenuOpen = false;

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.isScrolled = window.scrollY > 20;
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen = false;
  }

  scrollTo(targetId: string, event: Event): void {
    event.preventDefault();
    const elem = document.querySelector(targetId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  }

  onMobileNavClick(targetId: string, event: Event): void {
    this.scrollTo(targetId, event);
    this.closeMobileMenu();
  }
}
