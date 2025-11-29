import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageButtonComponent } from '../components/language-button/language-button.component';
import { HeaderComponent } from '../components/header/header.component';
import { TitleSectionComponent } from '../components/title-section/title-section.component';
import { IaProyectionChartComponent } from '../components/ia-proyection-chart/ia-proyection-chart.component';
import { TymonStepsFunctionalityComponent } from '../components/tymon-steps-functionality/tymon-steps-functionality.component';
import { TymonDifferentiatorsComponent } from '../components/tymon-differentiators/tymon-differentiators.component';
import { TymonCtaComponent } from '../components/tymon-cta/tymon-cta.component';
import { TymonFinancialControlComponent } from '../components/tymon-financial-control/tymon-financial-control.component';
import { TymonMultiDeviceComponent } from '../components/tymon-multi-device/tymon-multi-device.component';
import { TymonManageFinancesComponent } from '../components/tymon-manage-finances/tymon-manage-finances.component';
import { TymonKeyModulesComponent } from '../components/tymon-key-modules/tymon-key-modules.component';
import { TymonExpenseIncomeEvolutionComponent } from '../components/tymon-expense-income-evolution/tymon-expense-income-evolution.component';
import { TymonTestimonialsComponent } from '../components/tymon-testimonials/tymon-testimonials.component';
import { TymonPricePlansComponent } from '../components/tymon-price-plans/tymon-price-plans.component';
import { TymonFaqComponent } from '../components/tymon-faq/tymon-faq.component';
import { TymonRequestDemoComponent } from '../components/tymon-request-demo/tymon-request-demo.component';
import { TymonContactUsComponent } from '../components/tymon-contact-us/tymon-contact-us.component';
import { TymonDownloadAppComponent } from '../components/tymon-download-app/tymon-download-app.component';
import { FooterComponent } from '../components/footer/footer.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    LanguageButtonComponent,
    HeaderComponent,
    TitleSectionComponent,
    IaProyectionChartComponent,
    TymonStepsFunctionalityComponent,
    TymonDifferentiatorsComponent,
    TymonCtaComponent,
    TymonFinancialControlComponent,
    TymonMultiDeviceComponent,
    TymonManageFinancesComponent,
    TymonKeyModulesComponent,
    TymonExpenseIncomeEvolutionComponent,
    TymonTestimonialsComponent,
    TymonPricePlansComponent,
    TymonFaqComponent,
    TymonRequestDemoComponent,
    TymonContactUsComponent,
    TymonDownloadAppComponent,
    FooterComponent,
  ],
  templateUrl: './landing.component.html',
})
export class LandingComponent {}
