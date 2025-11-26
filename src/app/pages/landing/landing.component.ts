import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './landing.component.html',
})
export class LandingComponent {
  private translate = inject(TranslateService);

  changeLang(lang: string) {
    this.translate.use(lang);
  }
}
