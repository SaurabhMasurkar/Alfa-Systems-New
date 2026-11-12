import { Injectable } from '@angular/core';
import { COMPANY_CONFIG } from '../config/company.config';
import { EnquiryFormData, ServiceItem } from '../models/company.model';

@Injectable({
  providedIn: 'root'
})
export class WhatsAppService {
  private readonly defaultNumber = COMPANY_CONFIG.contact.whatsappNumber;

  generateUrl(message: string, customNumber?: string): string {
    const number = customNumber || this.defaultNumber;
    const cleanNumber = number.replace(/[^0-9]/g, '');
    const encodedMessage = encodeURIComponent(message.trim());
    return `https://wa.me/${cleanNumber}?text=${encodedMessage}`;
  }

  openChat(message: string, customNumber?: string): void {
    const url = this.generateUrl(message, customNumber);
    if (typeof window !== 'undefined') {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  }

  formatFormEnquiry(formData: EnquiryFormData): string {
    const lines: string[] = [
      `*TANK CLEANING ENQUIRY — ALFA CLEANING SYSTEMS*`,
      `------------------------------------------`,
      `👤 *Name:* ${formData.fullName}`,
      `📞 *Phone:* ${formData.phoneNumber}`,
      formData.email ? `✉️ *Email:* ${formData.email}` : '',
      `🏢 *Client Type:* ${formData.customerType || 'Not specified'}`,
      `🚰 *Service Required:* ${formData.serviceType || 'Water Tank Cleaning'}`,
      formData.tankCapacity ? `📏 *Approx. Capacity:* ${formData.tankCapacity}` : '',
      formData.locationCity ? `📍 *Location:* ${formData.locationCity}` : '',
      formData.message ? `💬 *Notes:* ${formData.message}` : '',
      `------------------------------------------`,
      `Please provide an estimate quotation and site inspection schedule.`
    ];

    return lines.filter(Boolean).join('\n');
  }

  formatServiceQuote(service: ServiceItem): string {
    return [
      `*SERVICE ENQUIRY — ALFA CLEANING SYSTEMS*`,
      `------------------------------------------`,
      `Hello Alfa Cleaning Systems, I would like to enquire about:`,
      `🚰 *Service:* ${service.title}`,
      `🏢 *Customer Category:* ${service.targetAudience}`,
      `Please share availability for site inspection and estimate quotation.`,
      `------------------------------------------`,
      `Ref: ${service.id}`
    ].join('\n');
  }

  formatQuickQuote(type: 'society' | 'commercial' | 'emergency'): string {
    if (type === 'society') {
      return `Hello Alfa Cleaning Systems, I am looking for Water Tank Cleaning Services for our Residential Housing Society. Please share details and estimate.`;
    }
    if (type === 'commercial') {
      return `Hello Alfa Cleaning Systems, I would like to request an inspection and quotation for Commercial / Industrial Tank Cleaning.`;
    }
    return `EMERGENCY: Hello Alfa Cleaning Systems, we have an urgent tank cleaning / dewatering requirement. Please call us back immediately.`;
  }
}
