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
  ],
  templateUrl: './landing.component.html',
})
export class LandingComponent {}
