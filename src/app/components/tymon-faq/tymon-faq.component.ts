import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

interface FaqItem {
  questionKey: string;
  answerKey: string;
}

interface FaqCategory {
  id: string;
  titleKey: string;
  items: FaqItem[];
}

@Component({
  selector: 'app-tymon-faq',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './tymon-faq.component.html',
  styleUrls: [],
})
export class TymonFaqComponent {
  activeCategory = 'security';

  faqData: FaqCategory[] = [
    {
      id: 'security',
      titleKey: 'faq.security.title',
      items: [
        {
          questionKey: 'faq.security.q1',
          answerKey: 'faq.security.a1',
        },
        {
          questionKey: 'faq.security.q2',
          answerKey: 'faq.security.a2',
        },
      ],
    },
    {
      id: 'multibanking',
      titleKey: 'faq.multibanking.title',
      items: [
        {
          questionKey: 'faq.multibanking.q1',
          answerKey: 'faq.multibanking.a1',
        },
        {
          questionKey: 'faq.multibanking.q2',
          answerKey: 'faq.multibanking.a2',
        },
      ],
    },
    {
      id: 'beginners',
      titleKey: 'faq.beginners.title',
      items: [
        {
          questionKey: 'faq.beginners.q1',
          answerKey: 'faq.beginners.a1',
        },
      ],
    },
    {
      id: 'plans',
      titleKey: 'faq.plans.title',
      items: [
        {
          questionKey: 'faq.plans.q1',
          answerKey: 'faq.plans.a1',
        },
      ],
    },
    {
      id: 'automation',
      titleKey: 'faq.automation.title',
      items: [
        {
          questionKey: 'faq.automation.q1',
          answerKey: 'faq.automation.a1',
        },
      ],
    },
  ];

  scrollToCategory(id: string) {
    this.activeCategory = id;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  @HostListener('window:scroll')
  onScroll() {
    // Simple scroll spy logic
    for (const category of this.faqData) {
      const element = document.getElementById(category.id);
      if (element) {
        const rect = element.getBoundingClientRect();
        // If the element is in the upper part of the viewport
        if (rect.top >= 0 && rect.top <= 300) {
          this.activeCategory = category.id;
          break;
        }
      }
    }
  }
}
