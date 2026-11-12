import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './shared/components/header/header.component';
import { HeroComponent } from './features/hero/hero.component';
import { AboutComponent } from './features/about/about.component';
import { ServicesComponent } from './features/services/services.component';
import { ProcessComponent } from './features/process/process.component';
import { ClientsComponent } from './features/clients/clients.component';
import { IndustriesComponent } from './features/industries/industries.component';
import { GalleryComponent } from './features/gallery/gallery.component';
import { WhyChooseComponent } from './features/why-choose/why-choose.component';
import { DualCtaComponent } from './features/dual-cta/dual-cta.component';
import { FaqComponent } from './features/faq/faq.component';
import { ContactComponent } from './features/contact/contact.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { FloatingCtasComponent } from './shared/components/floating-ctas/floating-ctas.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    ServicesComponent,
    ProcessComponent,
    ClientsComponent,
    IndustriesComponent,
    GalleryComponent,
    WhyChooseComponent,
    DualCtaComponent,
    FaqComponent,
    ContactComponent,
    FooterComponent,
    FloatingCtasComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Alfa Cleaning Systems';
}
