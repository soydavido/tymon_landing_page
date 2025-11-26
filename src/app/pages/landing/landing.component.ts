import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageButtonComponent } from '../../components/language-button/language-button.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, TranslateModule, LanguageButtonComponent],
  templateUrl: './landing.component.html',
})
export class LandingComponent {}
