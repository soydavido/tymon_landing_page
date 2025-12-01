import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { AppConfigService } from '../../services/app-config.service';
import { scrollToSection } from '../../utils/scroll.utils';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './header.component.html',
  styleUrls: [],
})
export class HeaderComponent {
  isMobileMenuOpen = false;

  constructor(protected configService: AppConfigService) {}

  scrollToSection(sectionId: string) {
    this.isMobileMenuOpen = false;
    scrollToSection(sectionId);
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
}
