import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FAQS_DATA, FaqItem } from '../../core/data/faqs.data';
import { IconComponent } from '../../shared/components/icon/icon.component';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule, IconComponent],
  template: `
    <section class="section section-faq">
      <div class="container">
        <!-- Section Header -->
        <div class="section-header">
          <div class="badge-tag badge-tag-primary">
            <app-icon name="shield-check" [size]="14"></app-icon>
            <span>QUESTIONS &amp; ANSWERS</span>
          </div>
          <h2>Frequently Asked Questions</h2>
          <p>
            Key details regarding our mechanized tank cleaning procedures, water outage mitigation, and machinery supply.
          </p>
        </div>

        <!-- Accordion Container -->
        <div class="faq-accordion">
          <div 
            *ngFor="let item of faqs" 
            class="faq-item"
            [class.is-expanded]="openId === item.id">
            <button 
              type="button" 
              class="faq-question-btn" 
              (click)="toggle(item.id)"
              [attr.aria-expanded]="openId === item.id">
              <span class="faq-cat-tag">{{ item.categoryLabel }}</span>
              <span class="faq-title">{{ item.question }}</span>
              <span class="faq-toggle-icon">
                <app-icon name="chevron-down" [size]="20"></app-icon>
              </span>
            </button>

            <div class="faq-answer-pane" *ngIf="openId === item.id">
              <p class="faq-answer">{{ item.answer }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .section-faq {
      background-color: #FFFFFF;
      border-bottom: 1px solid var(--color-border);
    }

    .faq-accordion {
      max-width: 860px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .faq-item {
      border: 1px solid var(--color-border);
      border-radius: var(--radius-lg);
      background-color: var(--color-bg-subtle);
      transition: all var(--transition-fast);
      overflow: hidden;

      &:hover {
        border-color: #CBD5E1;
      }

      &.is-expanded {
        border-color: var(--color-secondary);
        background-color: #FFFFFF;
        box-shadow: var(--shadow-sm);

        .faq-toggle-icon {
          transform: rotate(180deg);
          color: var(--color-secondary);
        }
      }
    }

    .faq-question-btn {
      width: 100%;
      text-align: left;
      padding: 1rem 1.15rem;
      background: none;
      border: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 0.75rem;
      min-width: 0;

      @media (min-width: 600px) {
        padding: 1.25rem 1.5rem;
        gap: 1rem;
      }
    }

    .faq-cat-tag {
      font-size: 0.72rem;
      font-weight: 700;
      color: var(--color-secondary);
      background: rgba(2, 132, 199, 0.1);
      padding: 0.2rem 0.5rem;
      border-radius: var(--radius-sm);
      white-space: nowrap;
      display: none;

      @media (min-width: 600px) {
        display: inline-block;
      }
    }

    .faq-title {
      font-size: 0.96rem;
      font-weight: 700;
      color: var(--color-primary);
      flex: 1 1 auto;
      min-width: 0;
      overflow-wrap: break-word;
      line-height: 1.35;

      @media (min-width: 600px) {
        font-size: 1.05rem;
      }
    }

    .faq-toggle-icon {
      color: var(--color-text-muted);
      transition: transform var(--transition-fast);
      flex-shrink: 0;
    }

    .faq-answer-pane {
      padding: 0 1.15rem 1.15rem 1.15rem;
      border-top: 1px solid var(--color-border-subtle);
      margin-top: 0.25rem;

      @media (min-width: 600px) {
        padding: 0 1.5rem 1.25rem 1.5rem;
      }
    }

    .faq-answer {
      font-size: 0.92rem;
      color: var(--color-text-body);
      line-height: 1.6;
      margin-top: 1rem;
      margin-bottom: 0;
    }
  `]
})
export class FaqComponent {
  faqs: FaqItem[] = FAQS_DATA;
  openId: string | null = 'faq-1';

  toggle(id: string): void {
    this.openId = this.openId === id ? null : id;
  }
}
