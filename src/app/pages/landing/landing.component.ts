import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageButtonComponent } from '../../components/language-button/language-button.component';
import { HeaderComponent } from '../../components/header/header.component';
import { TitleSectionComponent } from '../../components/title-section/title-section.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    LanguageButtonComponent,
    HeaderComponent,
    TitleSectionComponent,
  ],
  templateUrl: './landing.component.html',
})
export class LandingComponent {}
