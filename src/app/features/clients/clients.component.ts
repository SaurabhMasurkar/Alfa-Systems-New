import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CLIENTS_DATA, ClientItem } from '../../core/data/clients.data';
import { IconComponent } from '../../shared/components/icon/icon.component';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [CommonModule, FormsModule, IconComponent],
  template: `
    <section id="clients" class="section section-clients">
      <div class="container">
        <!-- Section Header -->
        <div class="section-header">
          <div class="badge-tag badge-tag-primary">
            <app-icon name="shield-check" [size]="14"></app-icon>
            <span>PROVEN TRACK RECORD</span>
          </div>
          <h2>Trusted by Prestigious Organizations Across Mumbai &amp; MMR</h2>
          <p>
            From central government institutions, railways, and oil PSUs to iconic corporate towers and prominent housing societies, Alfa Cleaning Systems is Mumbai's trusted partner for safe drinking water.
          </p>
        </div>

        <!-- Marquee / Featured Clients Ribbon -->
        <div class="marquee-wrapper">
          <div class="marquee-title">KEY INSTITUTIONAL CLIENTS</div>
          <div class="featured-clients-grid">
            <div *ngFor="let client of featuredClients" class="featured-client-card">
              <div class="client-badge">{{ client.logoText }}</div>
              <div class="client-details">
                <span class="client-name">{{ client.name }}</span>
                <span class="client-loc">{{ client.location }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Filter Controls & Search Box -->
        <div class="client-controls">
          <!-- Category Tabs -->
          <div class="filter-tabs">
            <button 
              type="button" 
              class="tab-btn" 
              [class.active]="activeCategory === 'all'"
              (click)="setCategory('all')">
              All Clients ({{ allClients.length }})
            </button>
            <button 
              type="button" 
              class="tab-btn" 
              [class.active]="activeCategory === 'government'"
              (click)="setCategory('government')">
              Govt. &amp; PSUs
            </button>
            <button 
              type="button" 
              class="tab-btn" 
              [class.active]="activeCategory === 'corporate'"
              (click)="setCategory('corporate')">
              Corporate &amp; Engineering
            </button>
            <button 
              type="button" 
              class="tab-btn" 
              [class.active]="activeCategory === 'banking'"
              (click)="setCategory('banking')">
              Banking &amp; Finance
            </button>
            <button 
              type="button" 
              class="tab-btn" 
              [class.active]="activeCategory === 'healthcare'"
              (click)="setCategory('healthcare')">
              Hospitals &amp; Healthcare
            </button>
            <button 
              type="button" 
              class="tab-btn" 
              [class.active]="activeCategory === 'societies'"
              (click)="setCategory('societies')">
              Residential Societies &amp; Towers
            </button>
            <button 
              type="button" 
              class="tab-btn" 
              [class.active]="activeCategory === 'hospitality'"
              (click)="setCategory('hospitality')">
              Malls &amp; Hospitality
            </button>
          </div>

          <!-- Live Search Filter -->
          <div class="search-wrap">
            <input 
              type="text" 
              [(ngModel)]="searchQuery" 
              placeholder="Search by client name or area (e.g. Bandra, Worli, RBI, L&T)..."
              class="search-input">
            <span class="search-count" *ngIf="filteredClients.length !== allClients.length">
              Showing {{ filteredClients.length }} of {{ allClients.length }}
            </span>
          </div>
        </div>

        <!-- Clients Directory Grid -->
        <div class="clients-directory-grid">
          <div *ngFor="let item of filteredClients" class="client-directory-card">
            <div class="c-card-top">
              <span class="c-cat-pill">{{ item.categoryLabel }}</span>
              <span class="c-icon-badge">
                <app-icon name="check" [size]="14"></app-icon>
              </span>
            </div>
            <h4 class="c-title">{{ item.name }}</h4>
            <div class="c-loc">
              <app-icon name="map-pin" [size]="14"></app-icon>
              <span>{{ item.location }}</span>
            </div>
          </div>
        </div>

        <!-- Bottom Society AMC Invite Banner -->
        <div class="society-invite-banner">
          <div class="invite-content">
            <h3>Is Your Housing Society or Facility Scheduled for Water Tank Cleaning?</h3>
            <p>We provide structured pre-cleaning notices, twin-compartment non-disruption execution, and formal municipal/audit clearance certificates.</p>
          </div>
          <div class="invite-action">
            <a href="#contact" class="btn btn-primary btn-lg" (click)="scrollTo('#contact', $event)">
              <span>Get Society Quotation</span>
              <app-icon name="arrow-right" [size]="16"></app-icon>
            </a>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .section-clients {
      background-color: #FFFFFF;
      border-bottom: 1px solid var(--color-border);
    }

    /* Featured Clients Ribbon */
    .marquee-wrapper {
      background: linear-gradient(135deg, var(--color-primary-dark) 0%, var(--color-primary) 100%);
      border-radius: var(--radius-xl);
      padding: 1.35rem 1rem;
      margin-bottom: 3rem;
      box-shadow: var(--shadow-xl);
      border: 1px solid rgba(255, 255, 255, 0.1);
      min-width: 0;

      @media (min-width: 640px) {
        padding: 2rem;
        margin-bottom: 3.5rem;
      }

      .marquee-title {
        color: #38BDF8;
        font-size: 0.8rem;
        font-weight: 800;
        letter-spacing: 0.12em;
        text-transform: uppercase;
        margin-bottom: 1.5rem;
        text-align: center;
      }
    }

    .featured-clients-grid {
      display: grid;
      grid-template-columns: minmax(0, 1fr);
      gap: 1rem;

      @media (min-width: 600px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }

      @media (min-width: 1024px) {
        grid-template-columns: repeat(4, minmax(0, 1fr));
      }
    }

    .featured-client-card {
      background: rgba(255, 255, 255, 0.07);
      border: 1px solid rgba(255, 255, 255, 0.12);
      border-radius: var(--radius-md);
      padding: 1rem 1.15rem;
      display: flex;
      align-items: center;
      gap: 0.85rem;
      transition: all var(--transition-fast);
      min-width: 0;

      &:hover {
        background: rgba(2, 132, 199, 0.2);
        border-color: #38BDF8;
        transform: translateY(-2px);
      }

      .client-badge {
        width: 44px;
        height: 44px;
        border-radius: var(--radius-sm);
        background: var(--color-secondary);
        color: #FFFFFF;
        font-weight: 900;
        font-size: 0.82rem;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        box-shadow: 0 4px 10px rgba(2, 132, 199, 0.3);
      }

      .client-details {
        display: flex;
        flex-direction: column;
        min-width: 0;

        .client-name {
          color: #FFFFFF;
          font-weight: 700;
          font-size: 0.9rem;
          line-height: 1.3;
          overflow-wrap: break-word;
        }

        .client-loc {
          color: #94A3B8;
          font-size: 0.78rem;
        }
      }
    }

    /* Filters & Search */
    .client-controls {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      margin-bottom: 2.5rem;
    }

    .filter-tabs {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 0.6rem;
    }

    .tab-btn {
      padding: 0.55rem 1.2rem;
      font-size: 0.85rem;
      font-weight: 600;
      color: var(--color-primary);
      background-color: var(--color-bg-subtle);
      border: 1px solid var(--color-border);
      border-radius: var(--radius-full);
      cursor: pointer;
      transition: all var(--transition-fast);

      &:hover {
        border-color: var(--color-secondary);
        background-color: #FFFFFF;
      }

      &.active {
        background-color: var(--color-primary);
        color: #FFFFFF;
        border-color: var(--color-primary);
      }
    }

    .search-wrap {
      max-width: 580px;
      margin: 0 auto;
      width: 100%;
      position: relative;
    }

    .search-input {
      width: 100%;
      padding: 0.85rem 1.25rem;
      border: 1px solid var(--color-border);
      border-radius: var(--radius-full);
      font-size: 0.92rem;
      background-color: var(--color-bg-subtle);
      transition: all var(--transition-fast);

      &:focus {
        outline: none;
        border-color: var(--color-secondary);
        background-color: #FFFFFF;
        box-shadow: 0 0 0 3px rgba(2, 132, 199, 0.15);
      }
    }

    .search-count {
      display: block;
      text-align: center;
      font-size: 0.8rem;
      color: var(--color-text-muted);
      margin-top: 0.4rem;
    }

    /* Directory Grid */
    .clients-directory-grid {
      display: grid;
      grid-template-columns: minmax(0, 1fr);
      gap: 1rem;
      margin-bottom: 3.5rem;

      @media (min-width: 560px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }

      @media (min-width: 900px) {
        grid-template-columns: repeat(3, minmax(0, 1fr));
      }

      @media (min-width: 1150px) {
        grid-template-columns: repeat(4, minmax(0, 1fr));
      }
    }

    .client-directory-card {
      background-color: var(--color-bg-subtle);
      border: 1px solid var(--color-border);
      border-radius: var(--radius-md);
      padding: 1.15rem 1.25rem;
      display: flex;
      flex-direction: column;
      transition: all var(--transition-fast);
      min-width: 0;
      overflow-wrap: break-word;

      &:hover {
        background-color: #FFFFFF;
        border-color: var(--color-secondary);
        box-shadow: var(--shadow-sm);
        transform: translateY(-2px);
      }

      .c-card-top {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 0.65rem;
      }

      .c-cat-pill {
        font-size: 0.72rem;
        font-weight: 700;
        color: var(--color-secondary-dark);
        background: rgba(2, 132, 199, 0.1);
        padding: 0.2rem 0.55rem;
        border-radius: var(--radius-sm);
      }

      .c-icon-badge {
        color: #10B981;
      }

      .c-title {
        font-size: 0.95rem;
        font-weight: 700;
        color: var(--color-primary);
        line-height: 1.35;
        margin-bottom: 0.5rem;
        flex-grow: 1;
      }

      .c-loc {
        display: flex;
        align-items: center;
        gap: 0.4rem;
        font-size: 0.8rem;
        color: var(--color-text-muted);

        app-icon {
          color: var(--color-secondary);
          flex-shrink: 0;
        }
      }
    }

    /* Society Invite Banner */
    .society-invite-banner {
      background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-light) 100%);
      color: #FFFFFF;
      border-radius: var(--radius-xl);
      padding: 1.5rem 1.15rem;
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
      align-items: center;
      text-align: center;
      min-width: 0;

      @media (min-width: 640px) {
        padding: 2.25rem 2rem;
        gap: 1.5rem;
      }

      @media (min-width: 860px) {
        flex-direction: row;
        justify-content: space-between;
        text-align: left;
        padding: 2.5rem 3rem;
      }

      .invite-content {
        min-width: 0;

        h3 {
          color: #FFFFFF;
          font-size: 1.35rem;
          margin-bottom: 0.5rem;
        }

        p {
          color: #CBD5E1;
          font-size: 0.92rem;
          margin-bottom: 0;
          max-width: 620px;
        }
      }

      .invite-action {
        width: 100%;

        .btn {
          width: 100%;
        }

        @media (min-width: 540px) {
          width: auto;
          flex-shrink: 0;

          .btn {
            width: auto;
          }
        }
      }
    }
  `]
})
export class ClientsComponent {
  allClients: ClientItem[] = CLIENTS_DATA;
  activeCategory: string = 'all';
  searchQuery: string = '';

  get featuredClients(): ClientItem[] {
    return this.allClients.filter(c => c.highlight).slice(0, 8);
  }

  get filteredClients(): ClientItem[] {
    let list = this.allClients;
    if (this.activeCategory !== 'all') {
      list = list.filter(c => c.category === this.activeCategory);
    }
    if (this.searchQuery.trim()) {
      const q = this.searchQuery.toLowerCase().trim();
      list = list.filter(c => 
        c.name.toLowerCase().includes(q) || 
        c.location.toLowerCase().includes(q) ||
        c.categoryLabel.toLowerCase().includes(q)
      );
    }
    return list;
  }

  setCategory(cat: string): void {
    this.activeCategory = cat;
  }

  scrollTo(targetId: string, event: Event): void {
    event.preventDefault();
    const elem = document.querySelector(targetId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
