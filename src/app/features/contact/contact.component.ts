import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { COMPANY_CONFIG } from '../../core/config/company.config';
import { EnquiryFormData } from '../../core/models/company.model';
import { WhatsAppService } from '../../core/services/whatsapp.service';
import { IconComponent } from '../../shared/components/icon/icon.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, IconComponent],
  template: `
    <section id="contact" class="section section-contact">
      <div class="container">
        <!-- Section Header -->
        <div class="section-header">
          <div class="badge-tag badge-tag-primary">
            <app-icon name="phone" [size]="14"></app-icon>
            <span>GET IN TOUCH</span>
          </div>
          <h2>Contact Alfa Cleaning Systems</h2>
          <p>
            Request a free on-site tank inspection, obtain an estimate quotation for your society or facility, or connect directly with our operational partners.
          </p>
        </div>

        <div class="contact-grid">
          <!-- Left Column: Contact Cards & Office Coordinates -->
          <div class="contact-info-column">
            <!-- Direct Partner Helplines Card -->
            <div class="info-card">
              <h3>Direct Partner Contacts &amp; Offices</h3>
              <p class="info-lead">
                Reach out directly to our managing partners for society meetings, rate contracts, or emergency dewatering support.
              </p>

              <!-- Partners Direct Contacts -->
              <div class="partners-block">
                <div class="partner-item">
                  <div class="p-icon whatsapp-accent">
                    <app-icon name="whatsapp" [size]="18"></app-icon>
                  </div>
                  <div class="p-info">
                    <span class="p-role">Operations &amp; Managing Partner (Primary WhatsApp)</span>
                    <strong class="p-name">Mr. Dinesh Satavase</strong>
                    <div class="p-nums">
                      <a href="tel:+919821210247">+91 9821210247</a>
                      <span>/</span>
                      <a href="tel:+917506267666">+91 7506267666</a>
                    </div>
                  </div>
                </div>

                <div class="partner-item">
                  <div class="p-icon">
                    <app-icon name="phone" [size]="18"></app-icon>
                  </div>
                  <div class="p-info">
                    <span class="p-role">Founding Partner</span>
                    <strong class="p-name">Mr. Padmakar Nimbalkar</strong>
                    <div class="p-nums">
                      <a href="tel:+919821620247">+91 9821620247</a>
                      <span>/</span>
                      <a href="tel:+919833590247">+91 9833590247</a>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Office Addresses -->
              <div class="offices-details">
                <!-- Marketing Office (Mumbai) -->
                <div class="detail-item">
                  <div class="detail-icon">
                    <app-icon name="map-pin" [size]="20"></app-icon>
                  </div>
                  <div class="detail-text">
                    <span class="detail-label">{{ company.marketingOffice.title }} (Mumbai)</span>
                    <address class="detail-address">
                      <strong>Alfa Cleaning Systems</strong><br>
                      {{ company.marketingOffice.full }}
                    </address>
                  </div>
                </div>

                <!-- Head Office (Palghar) -->
                <div class="detail-item">
                  <div class="detail-icon head-office-icon">
                    <app-icon name="building" [size]="20"></app-icon>
                  </div>
                  <div class="detail-text">
                    <span class="detail-label">{{ company.headOffice.title }} (Palghar)</span>
                    <address class="detail-address">
                      {{ company.headOffice.full }}
                    </address>
                  </div>
                </div>

                <!-- Email & Hours -->
                <div class="detail-item">
                  <div class="detail-icon">
                    <app-icon name="mail" [size]="20"></app-icon>
                  </div>
                  <div class="detail-text">
                    <span class="detail-label">Email Communications</span>
                    <a [href]="'mailto:' + company.contact.email" class="detail-val">
                      {{ company.contact.email }}
                    </a>
                    <a [href]="'mailto:' + company.contact.supportEmail" class="detail-val secondary">
                      {{ company.contact.supportEmail }}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <!-- GST & Verification Stamp Card -->
            <div class="verification-card">
              <div class="v-header">
                <app-icon name="shield-check" [size]="20"></app-icon>
                <span>Registered Partnership Firm</span>
              </div>
              <div class="v-details">
                <span class="v-label">GSTIN:</span>
                <span class="v-number">{{ company.gstin }}</span>
              </div>
            </div>
          </div>

          <!-- Right Column: Interactive Quote & WhatsApp Form -->
          <div class="form-column">
            <div class="form-card">
              <div class="form-header">
                <h3>Request a Water Tank Cleaning Estimate</h3>
                <p>Fill out the details below to receive an instant pre-filled WhatsApp enquiry or request an on-site visit.</p>
              </div>

              <!-- Form Submitted Success Banner -->
              <div *ngIf="formSubmitted" class="success-banner">
                <div class="success-icon">
                  <app-icon name="check" [size]="24"></app-icon>
                </div>
                <div class="success-content">
                  <h4>Thank you, {{ formData.fullName }}!</h4>
                  <p>Your tank cleaning enquiry reference <strong>#ACS-{{ referenceId }}</strong> has been prepared and formatted for WhatsApp.</p>
                  <button type="button" class="btn btn-whatsapp btn-sm" (click)="reopenWhatsApp()">
                    <app-icon name="whatsapp" [size]="16"></app-icon>
                    <span>Re-open WhatsApp Chat</span>
                  </button>
                  <button type="button" class="btn btn-secondary btn-sm" (click)="resetForm()">
                    <span>Submit Another Enquiry</span>
                  </button>
                </div>
              </div>

              <!-- Contact Form -->
              <form *ngIf="!formSubmitted" (ngSubmit)="onSubmit()" #contactForm="ngForm" novalidate>
                <div class="form-grid">
                  <!-- Full Name -->
                  <div class="form-group">
                    <label for="fullName">Full Name / Society Name <span class="req">*</span></label>
                    <input 
                      type="text" 
                      id="fullName" 
                      name="fullName"
                      [(ngModel)]="formData.fullName" 
                      #fullName="ngModel"
                      required
                      placeholder="e.g. Rajesh Sharma / Ashoka Towers CHS"
                      class="form-control"
                      [class.is-invalid]="fullName.invalid && (fullName.dirty || fullName.touched || formAttempted)">
                    <span class="error-msg" *ngIf="fullName.invalid && (fullName.dirty || fullName.touched || formAttempted)">
                      Please enter your name or society name
                    </span>
                  </div>

                  <!-- Phone Number -->
                  <div class="form-group">
                    <label for="phoneNumber">Contact Mobile Number <span class="req">*</span></label>
                    <input 
                      type="tel" 
                      id="phoneNumber" 
                      name="phoneNumber"
                      [(ngModel)]="formData.phoneNumber" 
                      #phoneNumber="ngModel"
                      required
                      pattern="[0-9]{10,12}"
                      placeholder="e.g. 9821210247"
                      class="form-control"
                      [class.is-invalid]="phoneNumber.invalid && (phoneNumber.dirty || phoneNumber.touched || formAttempted)">
                    <span class="error-msg" *ngIf="phoneNumber.invalid && (phoneNumber.dirty || phoneNumber.touched || formAttempted)">
                      Please enter a valid 10-digit mobile number
                    </span>
                  </div>

                  <!-- Email Address -->
                  <div class="form-group">
                    <label for="email">Email Address (Optional)</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email"
                      [(ngModel)]="formData.email" 
                      placeholder="e.g. secretary@society.com"
                      class="form-control">
                  </div>

                  <!-- Customer Segment -->
                  <div class="form-group">
                    <label for="customerType">Property / Client Type <span class="req">*</span></label>
                    <select 
                      id="customerType" 
                      name="customerType"
                      [(ngModel)]="formData.customerType" 
                      #customerType="ngModel"
                      required
                      class="form-control"
                      [class.is-invalid]="customerType.invalid && (customerType.dirty || customerType.touched || formAttempted)">
                      <option value="" disabled selected>Select Property Type</option>
                      <option value="Residential Society">Residential Housing Society (CHS) / Tower</option>
                      <option value="Commercial Office">Commercial Complex / IT Tech Park / Mall</option>
                      <option value="Industrial Plant">Industrial Facility / Factory / PSU</option>
                      <option value="Individual Bungalow">Individual Bungalow / Villa / Rowhouse</option>
                    </select>
                    <span class="error-msg" *ngIf="customerType.invalid && (customerType.dirty || customerType.touched || formAttempted)">
                      Please select property type
                    </span>
                  </div>

                  <!-- Service Type -->
                  <div class="form-group">
                    <label for="serviceType">Service Required <span class="req">*</span></label>
                    <select 
                      id="serviceType" 
                      name="serviceType"
                      [(ngModel)]="formData.serviceType" 
                      #serviceType="ngModel"
                      required
                      class="form-control"
                      [class.is-invalid]="serviceType.invalid && (serviceType.dirty || serviceType.touched || formAttempted)">
                      <option value="" disabled selected>Select Cleaning Service</option>
                      <option value="Underground RCC Sump Cleaning">Underground RCC Water Tank Cleaning</option>
                      <option value="Overhead RCC Tank Cleaning">Overhead Rooftop RCC Tank Cleaning</option>
                      <option value="Both Overhead & Underground Tanks">Both Overhead &amp; Underground Tanks (Full Society Package)</option>
                      <option value="Settling Tank Cleaning">Settling Tank Cleaning &amp; Sludge Evacuation</option>
                      <option value="Municipal ESR / GSR Reservoir">Municipal / Large ESR &amp; GSR Reservoir</option>
                      <option value="Open Well Cleaning">Open Well Cleaning &amp; Silt Dredging</option>
                      <option value="Septic Tank Cleaning">Mechanized Septic Tank Cleaning</option>
                      <option value="Polymer Waterproofing">Structural Tank Polymer Waterproofing</option>
                      <option value="Building Terrace Cleaning">Building Terrace Cleaning &amp; Moss Removal</option>
                    </select>
                    <span class="error-msg" *ngIf="serviceType.invalid && (serviceType.dirty || serviceType.touched || formAttempted)">
                      Please select service required
                    </span>
                  </div>

                  <!-- Location / City -->
                  <div class="form-group">
                    <label for="locationCity">Location / Area</label>
                    <input 
                      type="text" 
                      id="locationCity" 
                      name="locationCity"
                      [(ngModel)]="formData.locationCity" 
                      placeholder="e.g. Bhandup, Borivali, Andheri, Thane, Virar"
                      class="form-control">
                  </div>
                </div>

                <!-- Tank Capacity / Details -->
                <div class="form-group full-width">
                  <label for="tankCapacity">Approximate Tank Capacity / Number of Tanks</label>
                  <input 
                    type="text" 
                    id="tankCapacity" 
                    name="tankCapacity"
                    [(ngModel)]="formData.tankCapacity" 
                    placeholder="e.g. 1 Underground (50,000L) + 2 Overhead (20,000L each)"
                    class="form-control">
                </div>

                <!-- Message -->
                <div class="form-group full-width">
                  <label for="message">Specific Site Requirements / Preferred Cleaning Date</label>
                  <textarea 
                    id="message" 
                    name="message"
                    [(ngModel)]="formData.message" 
                    rows="3"
                    placeholder="Mention preferred date (weekdays/weekend), water supply schedule, or any existing leakage/sediment issues..."
                    class="form-control"></textarea>
                </div>

                <div class="form-footer">
                  <button type="submit" class="btn btn-whatsapp btn-lg btn-full">
                    <app-icon name="whatsapp" [size]="20"></app-icon>
                    <span>Submit &amp; Open WhatsApp Enquiry</span>
                  </button>
                  <p class="form-disclaimer">
                    <app-icon name="shield-check" [size]="14"></app-icon>
                    We respond promptly to society secretaries, facility managers, and residents.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .section-contact {
      background-color: #FFFFFF;
      border-bottom: 1px solid var(--color-border);
    }

    .contact-grid {
      display: grid;
      grid-template-columns: minmax(0, 1fr);
      gap: 2rem;

      @media (min-width: 1024px) {
        grid-template-columns: minmax(0, 1fr) minmax(0, 1.35fr);
        align-items: flex-start;
        gap: 3rem;
      }
    }

    /* Left Info Column */
    .contact-info-column {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      min-width: 0;
    }

    .info-card {
      background-color: var(--color-bg-subtle);
      border: 1px solid var(--color-border);
      border-radius: var(--radius-xl);
      padding: 1.35rem 1.15rem;
      min-width: 0;

      @media (min-width: 600px) {
        padding: 2rem;
      }

      h3 {
        color: var(--color-primary);
        font-size: 1.35rem;
        margin-bottom: 0.5rem;
      }

      .info-lead {
        color: var(--color-text-body);
        font-size: 0.92rem;
        margin-bottom: 1.75rem;
        line-height: 1.5;
      }
    }

    /* Partners Direct Contacts */
    .partners-block {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      margin-bottom: 2rem;
      padding-bottom: 1.5rem;
      border-bottom: 1px solid var(--color-border);
    }

    .partner-item {
      display: flex;
      gap: 0.85rem;
      align-items: center;
      background: #FFFFFF;
      border: 1px solid var(--color-border);
      border-radius: var(--radius-md);
      padding: 0.85rem 1rem;
      transition: all var(--transition-fast);

      &:hover {
        border-color: var(--color-secondary);
        box-shadow: var(--shadow-sm);
      }

      .p-icon {
        width: 38px;
        height: 38px;
        border-radius: var(--radius-sm);
        background-color: rgba(2, 132, 199, 0.12);
        color: var(--color-secondary);
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;

        &.whatsapp-accent {
          background-color: rgba(37, 211, 102, 0.15);
          color: #16A34A;
        }
      }

      .p-info {
        display: flex;
        flex-direction: column;
        min-width: 0;

        .p-role {
          font-size: 0.72rem;
          font-weight: 700;
          color: var(--color-text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .p-name {
          font-size: 0.95rem;
          color: var(--color-primary);
          line-height: 1.3;
        }

        .p-nums {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 0.35rem 0.45rem;
          font-size: 0.85rem;
          font-weight: 600;

          a {
            color: var(--color-secondary);
            &:hover {
              text-decoration: underline;
            }
          }

          span {
            color: #CBD5E1;
          }
        }
      }
    }

    .offices-details {
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
    }

    .detail-item {
      display: flex;
      gap: 1rem;
      align-items: flex-start;

      .detail-icon {
        width: 40px;
        height: 40px;
        border-radius: var(--radius-md);
        background-color: rgba(2, 132, 199, 0.12);
        color: var(--color-secondary);
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;

        &.head-office-icon {
          background-color: rgba(16, 185, 129, 0.12);
          color: #10B981;
        }
      }

      .detail-text {
        display: flex;
        flex-direction: column;

        .detail-label {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--color-text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 0.2rem;
        }

        .detail-val {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--color-primary);
          line-height: 1.4;

          &.secondary {
            font-size: 0.85rem;
            color: var(--color-text-body);
            font-weight: 600;
          }

          &:hover {
            color: var(--color-secondary);
          }
        }

        .detail-address {
          font-style: normal;
          font-size: 0.88rem;
          color: var(--color-text-body);
          line-height: 1.5;
        }
      }
    }

    .verification-card {
      background-color: #FFFFFF;
      border: 1px solid var(--color-border);
      border-radius: var(--radius-lg);
      padding: 1.25rem 1.5rem;
      box-shadow: var(--shadow-sm);

      .v-header {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        color: var(--color-secondary);
        font-weight: 700;
        font-size: 0.9rem;
        margin-bottom: 0.5rem;
      }

      .v-details {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 0.5rem;
        font-size: 0.95rem;

        .v-label {
          color: var(--color-text-muted);
          font-weight: 600;
        }

        .v-number {
          font-family: monospace;
          font-weight: 800;
          color: var(--color-primary);
          font-size: 1rem;
          background: var(--color-bg-subtle);
          padding: 0.2rem 0.5rem;
          border-radius: var(--radius-sm);
          overflow-wrap: anywhere;
        }
      }
    }

    /* Form Column */
    .form-card {
      background-color: #FFFFFF;
      border: 1px solid var(--color-border);
      border-radius: var(--radius-xl);
      padding: 2.5rem 2rem;
      box-shadow: var(--shadow-lg);
      min-width: 0;

      @media (max-width: 600px) {
        padding: 1.4rem 1.05rem;
      }
    }

    .form-header {
      margin-bottom: 2rem;

      h3 {
        color: var(--color-primary);
        font-size: 1.4rem;
        margin-bottom: 0.35rem;
      }

      p {
        color: var(--color-text-muted);
        font-size: 0.9rem;
        margin-bottom: 0;
      }
    }

    .form-grid {
      display: grid;
      grid-template-columns: minmax(0, 1fr);
      gap: 1.15rem;
      margin-bottom: 1.25rem;

      @media (min-width: 600px) {
        grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
        gap: 1.25rem;
      }
    }

    .form-group {
      display: flex;
      flex-direction: column;
      gap: 0.35rem;
      min-width: 0;

      &.full-width {
        margin-bottom: 1.25rem;
      }

      label {
        font-size: 0.82rem;
        font-weight: 700;
        color: var(--color-primary);

        .req {
          color: #DC2626;
        }
      }

      .form-control {
        width: 100%;
        padding: 0.8rem 1rem;
        font-size: 0.92rem;
        border: 1px solid var(--color-border);
        border-radius: var(--radius-md);
        background-color: #FFFFFF;
        color: var(--color-text-main);
        transition: all var(--transition-fast);

        &:focus {
          outline: none;
          border-color: var(--color-secondary);
          box-shadow: 0 0 0 3px rgba(2, 132, 199, 0.15);
        }

        &.is-invalid {
          border-color: #DC2626;
          background-color: #FEF2F2;
        }
      }

      select.form-control {
        appearance: none;
        background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2364748B' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
        background-repeat: no-repeat;
        background-position: right 1rem center;
        background-size: 16px;
        padding-right: 2.5rem;
      }

      textarea.form-control {
        resize: vertical;
        min-height: 80px;
      }

      .error-msg {
        font-size: 0.75rem;
        color: #DC2626;
        font-weight: 600;
      }
    }

    .form-footer {
      margin-top: 1.5rem;
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
      align-items: center;

      .form-disclaimer {
        display: flex;
        align-items: center;
        gap: 0.35rem;
        font-size: 0.78rem;
        color: var(--color-text-muted);
        text-align: center;
        margin-bottom: 0;

        app-icon {
          color: var(--color-secondary);
          flex-shrink: 0;
        }
      }
    }

    /* Success Banner */
    .success-banner {
      background-color: #F0FDF4;
      border: 1px solid #BBF7D0;
      border-radius: var(--radius-lg);
      padding: 1.75rem;
      display: flex;
      gap: 1.25rem;
      align-items: flex-start;

      .success-icon {
        width: 48px;
        height: 48px;
        border-radius: 50%;
        background-color: #DCFCE7;
        color: #16A34A;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
      }

      .success-content {
        h4 {
          color: #166534;
          font-size: 1.2rem;
          margin-bottom: 0.5rem;
        }

        p {
          color: #15803D;
          font-size: 0.9rem;
          line-height: 1.5;
          margin-bottom: 1.25rem;
        }

        display: flex;
        flex-direction: column;
        gap: 0.5rem;
      }
    }
  `]
})
export class ContactComponent {
  company = COMPANY_CONFIG;

  formData: EnquiryFormData = {
    fullName: '',
    phoneNumber: '',
    email: '',
    customerType: '',
    serviceType: '',
    tankCapacity: '',
    locationCity: '',
    message: ''
  };

  formAttempted = false;
  formSubmitted = false;
  referenceId = Math.floor(1000 + Math.random() * 9000);

  constructor(private whatsAppService: WhatsAppService) {}

  onSubmit(): void {
    this.formAttempted = true;

    if (!this.formData.fullName || !this.formData.phoneNumber || !this.formData.customerType || !this.formData.serviceType) {
      return;
    }

    const formattedMessage = this.whatsAppService.formatFormEnquiry(this.formData);
    this.whatsAppService.openChat(formattedMessage);
    this.formSubmitted = true;
  }

  reopenWhatsApp(): void {
    const formattedMessage = this.whatsAppService.formatFormEnquiry(this.formData);
    this.whatsAppService.openChat(formattedMessage);
  }

  resetForm(): void {
    this.formData = {
      fullName: '',
      phoneNumber: '',
      email: '',
      customerType: '',
      serviceType: '',
      tankCapacity: '',
      locationCity: '',
      message: ''
    };
    this.formAttempted = false;
    this.formSubmitted = false;
    this.referenceId = Math.floor(1000 + Math.random() * 9000);
  }
}
