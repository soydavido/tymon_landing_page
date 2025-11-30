import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-language-button',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './language-button.component.html',
})
export class LanguageButtonComponent {
  private translate = inject(TranslateService);

  isDropdownOpen = signal(false);
  currentLang = signal(this.translate.currentLang || 'es');

  languages = [{ code: 'es' }, { code: 'en' }];

  toggleDropdown() {
    this.isDropdownOpen.update((v) => !v);
  }

  changeLang(lang: string) {
    this.translate.use(lang);
    this.currentLang.set(lang);
    this.isDropdownOpen.set(false);
  }
}
