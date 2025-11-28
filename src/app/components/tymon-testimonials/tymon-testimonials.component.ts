import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

interface Testimonial {
  name: string;
  title: string;
  quoteKey: string;
}

@Component({
  selector: 'app-tymon-testimonials',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './tymon-testimonials.component.html',
  styleUrls: [],
})
export class TymonTestimonialsComponent {
  testimonials: Testimonial[] = [
    {
      name: 'Jorge Luciani',
      title: 'CEO',
      quoteKey: 'testimonials.quote',
    },
    {
      name: 'Anonimo',
      title: 'Usuario',
      quoteKey: 'testimonials.quote2',
    },
    {
      name: 'Anonimo',
      title: 'Usuario',
      quoteKey: 'testimonials.quote3',
    },
  ];

  currentIndex = 0;

  get currentTestimonial() {
    return this.testimonials[this.currentIndex];
  }

  get prevTestimonial() {
    const index = this.currentIndex === 0 ? this.testimonials.length - 1 : this.currentIndex - 1;
    return this.testimonials[index];
  }

  get nextTestimonial() {
    const index = this.currentIndex === this.testimonials.length - 1 ? 0 : this.currentIndex + 1;
    return this.testimonials[index];
  }

  next() {
    this.currentIndex =
      this.currentIndex === this.testimonials.length - 1 ? 0 : this.currentIndex + 1;
  }

  prev() {
    this.currentIndex =
      this.currentIndex === 0 ? this.testimonials.length - 1 : this.currentIndex - 1;
  }

  getPositionClass(index: number): string {
    if (index === this.currentIndex) {
      return 'left-1/2 -translate-x-1/2 w-full md:w-1/2 z-20 opacity-100 scale-100';
    }

    const prevIndex =
      this.currentIndex === 0 ? this.testimonials.length - 1 : this.currentIndex - 1;

    if (index === prevIndex) {
      return 'left-0 w-1/4 z-10 opacity-100 scale-90 cursor-pointer hover:opacity-100';
    }

    const nextIndex =
      this.currentIndex === this.testimonials.length - 1 ? 0 : this.currentIndex + 1;

    if (index === nextIndex) {
      return 'right-0 w-1/4 z-10 opacity-100 scale-90 cursor-pointer hover:opacity-100';
    }

    return 'hidden';
  }
}
