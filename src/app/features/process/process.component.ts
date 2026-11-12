import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PROCESS_STAGES_DATA } from '../../core/data/process-stages.data';
import { ProcessStageItem } from '../../core/models/company.model';
import { IconComponent } from '../../shared/components/icon/icon.component';

@Component({
  selector: 'app-process',
  standalone: true,
  imports: [CommonModule, IconComponent],
  template: `
    <section id="process" class="section section-dark section-process">
      <div class="container">
        <!-- Section Header -->
        <div class="section-header">
          <div class="badge-tag badge-tag-dark">
            <app-icon name="shield-check" [size]="14"></app-icon>
            <span>SCIENTIFIC METHODOLOGY</span>
          </div>
          <h2>Our 6-Stage Mechanized Tank Cleaning Process</h2>
          <p>
            Eliminating harmful bio-sludge and waterborne pathogens through calibrated physical pressure and UV-C radiation — zero manual scavenging, zero pipe blockages.
          </p>
        </div>

        <!-- Process Timeline Grid -->
        <div class="process-grid">
          <div *ngFor="let stage of processStages" class="card-dark process-card">
            <!-- Stage Number & Header -->
            <div class="stage-top">
              <span class="stage-num">0{{ stage.stageNumber }}</span>
              <div class="stage-status-pill">Stage {{ stage.stageNumber }}</div>
            </div>

            <!-- Stage Title -->
            <h3 class="stage-title">{{ stage.title }}</h3>
            
            <p class="stage-short">{{ stage.shortDesc }}</p>

            <div class="stage-body">
              <p>{{ stage.description }}</p>
            </div>

            <!-- Footer Badge -->
            <div class="stage-footer">
              <app-icon name="check" [size]="16"></app-icon>
              <span>Rigorous Quality Gate</span>
            </div>
          </div>
        </div>

        <!-- Scientific vs Traditional Comparison Box -->
        <div class="comparison-card">
          <div class="comp-header">
            <h3>Why Scientific Mechanization Outperforms Traditional Manual Cleaning</h3>
            <p>A direct comparison of standard manual practices versus Alfa Cleaning Systems' 6-stage engineering protocol.</p>
          </div>

          <div class="comp-table-wrapper">
            <table class="comp-table">
              <thead>
                <tr>
                  <th>Cleaning Parameter</th>
                  <th>Traditional Manual Cleaning</th>
                  <th class="alfa-col">Alfa Cleaning Systems (Mechanized)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="param-name">Dewatering Method</td>
                  <td class="manual-val">Manual buckets or slow gravity draining, wasting massive water volumes.</td>
                  <td class="alfa-val">High-volume submersible dewatering pumps save time and prevent backflow.</td>
                </tr>
                <tr>
                  <td class="param-name">Sludge &amp; Silt Removal</td>
                  <td class="manual-val">Manual cloth wiping; leaves 30-40% compacted dirt and microscopic biofilm behind.</td>
                  <td class="alfa-val">Industrial wet slurry vacuum extractors completely evacuate dense bottom mud.</td>
                </tr>
                <tr>
                  <td class="param-name">Wall &amp; Ceiling Cleaning</td>
                  <td class="manual-val">Wire or plastic hand brushes; scratches tank walls and cannot reach ceiling soffits.</td>
                  <td class="alfa-val">150 to 250 Bar rotary hydro-jets strip algae, calcium crust, and mold safely.</td>
                </tr>
                <tr>
                  <td class="param-name">Chemical Safety</td>
                  <td class="manual-val">Bleaching powder or crude chlorine leaving hazardous pungent chemical smells.</td>
                  <td class="alfa-val">Non-toxic, food-grade antimicrobial agents certified for potable drinking reservoirs.</td>
                </tr>
                <tr>
                  <td class="param-name">Final Pathogen Sterilization</td>
                  <td class="manual-val">None. Residual bacteria multiply within hours after tank refill.</td>
                  <td class="alfa-val">253.7nm UV-C germicidal irradiation destroys 99.9% of bacteria, viruses, and cysts.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .section-process {
      background: radial-gradient(circle at 50% 10%, #0F2B59 0%, #0A1E3F 70%);
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }

    .process-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 1.5rem;
      margin-bottom: 4rem;

      @media (min-width: 640px) {
        grid-template-columns: repeat(2, 1fr);
      }

      @media (min-width: 1024px) {
        grid-template-columns: repeat(3, 1fr);
      }
    }

    .process-card {
      border-radius: var(--radius-lg);
      padding: 1.75rem;
      display: flex;
      flex-direction: column;
      position: relative;
      transition: all var(--transition-base);

      &:hover {
        transform: translateY(-4px);
        border-color: #38BDF8;
      }

      .stage-top {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 1rem;
      }

      .stage-num {
        font-size: 2.2rem;
        font-weight: 900;
        color: #38BDF8;
        line-height: 1;
        letter-spacing: -0.03em;
      }

      .stage-status-pill {
        background: rgba(56, 189, 248, 0.15);
        color: #38BDF8;
        font-size: 0.75rem;
        font-weight: 700;
        text-transform: uppercase;
        padding: 0.25rem 0.65rem;
        border-radius: var(--radius-full);
        border: 1px solid rgba(56, 189, 248, 0.3);
      }

      .stage-title {
        font-size: 1.2rem;
        color: #FFFFFF;
        margin-bottom: 0.5rem;
        line-height: 1.3;
      }

      .stage-short {
        font-size: 0.88rem;
        font-weight: 600;
        color: #7DD3FC;
        margin-bottom: 1rem;
        line-height: 1.4;
      }

      .stage-body {
        font-size: 0.85rem;
        color: #CBD5E1;
        line-height: 1.6;
        margin-bottom: 1.25rem;
        flex-grow: 1;
      }

      .stage-footer {
        display: flex;
        align-items: center;
        gap: 0.4rem;
        font-size: 0.78rem;
        font-weight: 600;
        color: #10B981;
        padding-top: 0.85rem;
        border-top: 1px solid rgba(255, 255, 255, 0.08);

        app-icon {
          color: #10B981;
        }
      }
    }

    /* Comparison Box */
    .comparison-card {
      background: rgba(15, 43, 89, 0.6);
      border: 1px solid rgba(56, 189, 248, 0.25);
      border-radius: var(--radius-xl);
      padding: 2.5rem 2rem;
      box-shadow: var(--shadow-xl);
    }

    .comp-header {
      text-align: center;
      max-width: 700px;
      margin: 0 auto 2rem auto;

      h3 {
        color: #FFFFFF;
        font-size: 1.4rem;
        margin-bottom: 0.5rem;
      }

      p {
        color: #94A3B8;
        font-size: 0.9rem;
      }
    }

    .comp-table-wrapper {
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
    }

    .comp-table {
      width: 100%;
      border-collapse: collapse;
      text-align: left;
      font-size: 0.9rem;
      min-width: 600px;

      th {
        padding: 1rem;
        background-color: rgba(10, 30, 63, 0.8);
        color: #FFFFFF;
        font-weight: 700;
        border-bottom: 2px solid rgba(56, 189, 248, 0.3);
      }

      .alfa-col {
        background-color: rgba(2, 132, 199, 0.25);
        color: #38BDF8;
      }

      td {
        padding: 1rem;
        border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        vertical-align: top;
        line-height: 1.5;
      }

      .param-name {
        font-weight: 700;
        color: #FFFFFF;
        width: 22%;
      }

      .manual-val {
        color: #94A3B8;
        width: 38%;
      }

      .alfa-val {
        color: #E2E8F0;
        background-color: rgba(2, 132, 199, 0.1);
        font-weight: 500;
        width: 40%;
      }
    }
  `]
})
export class ProcessComponent {
  processStages: ProcessStageItem[] = PROCESS_STAGES_DATA;
}
