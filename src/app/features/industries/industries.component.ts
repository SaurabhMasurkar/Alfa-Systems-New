import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndustryItem } from '../../core/models/company.model';
import { INDUSTRIES_DATA } from '../../core/data/industries.data';
import { IconComponent } from '../../shared/components/icon/icon.component';

@Component({
  selector: 'app-industries',
  standalone: true,
  imports: [CommonModule, IconComponent],
  template: `
    <section id="industries" class="section section-industries section-subtle">
      <div class="container">
        <!-- Section Header -->
        <div class="section-header">
          <div class="badge-tag badge-tag-primary">
            <app-icon name="building" [size]="14"></app-icon>
            <span>SECTORS WE SUPPORT</span>
          </div>
          <h2>Industries We Serve</h2>
          <p>
            Tailored tank sanitation protocols and industrial cleaning equipment engineered to satisfy sector-specific hygiene, compliance, and shutdown constraints.
          </p>
        </div>

        <!-- Industries Grid -->
        <div class="industries-grid">
          <div *ngFor="let ind of industries" class="card industry-card">
            <div class="card-media">
              <img [src]="ind.image" [alt]="ind.title" class="ind-img" loading="lazy">
              <div class="ind-icon-badge">
                <app-icon [name]="ind.icon" [size]="24"></app-icon>
              </div>
            </div>

            <div class="card-body">
              <h3 class="ind-title">{{ ind.title }}</h3>
              <p class="ind-desc">{{ ind.description }}</p>

              <div class="app-section">
                <div class="app-heading">Key Storage &amp; Cleaning Areas:</div>
                <ul class="ind-app-list">
                  <li *ngFor="let item of ind.applications">
                    <app-icon name="check" [size]="15"></app-icon>
                    <span>{{ item }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .section-industries {
      border-bottom: 1px solid var(--color-border);
    }

    .industries-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 2rem;

      @media (min-width: 680px) {
        grid-template-columns: repeat(2, 1fr);
      }

      @media (min-width: 1080px) {
        grid-template-columns: repeat(3, 1fr);
      }
    }

    .industry-card {
      display: flex;
      flex-direction: column;
      height: 100%;

      .card-media {
        position: relative;
        height: 200px;
        overflow: hidden;

        .ind-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .ind-icon-badge {
          position: absolute;
          bottom: 1rem;
          right: 1rem;
          width: 48px;
          height: 48px;
          border-radius: var(--radius-md);
          background-color: var(--color-primary);
          color: var(--color-secondary-light);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: var(--shadow-md);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
      }

      &:hover .ind-img {
        transform: scale(1.05);
      }

      .card-body {
        padding: 1.5rem;
        display: flex;
        flex-direction: column;
        flex-grow: 1;
      }

      .ind-title {
        font-size: 1.2rem;
        color: var(--color-primary);
        margin-bottom: 0.65rem;
        line-height: 1.3;
      }

      .ind-desc {
        font-size: 0.88rem;
        color: var(--color-text-body);
        line-height: 1.55;
        margin-bottom: 1.25rem;
      }

      .app-section {
        margin-top: auto;
        padding-top: 1rem;
        border-top: 1px solid var(--color-border-subtle);

        .app-heading {
          font-size: 0.78rem;
          font-weight: 700;
          color: var(--color-secondary-dark);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 0.5rem;
        }

        .ind-app-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.35rem;

          li {
            display: flex;
            align-items: flex-start;
            gap: 0.45rem;
            font-size: 0.82rem;
            color: var(--color-text-body);

            app-icon {
              color: var(--color-secondary);
              margin-top: 2px;
              flex-shrink: 0;
            }
          }
        }
      }
    }
  `]
})
export class IndustriesComponent {
  industries: IndustryItem[] = INDUSTRIES_DATA;
}
