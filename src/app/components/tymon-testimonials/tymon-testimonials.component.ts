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
    const baseClass = 'absolute top-1/2 -translate-y-1/2 transition-all duration-500 ease-in-out';
    const widthClass = 'w-[260px] md:w-[350px] h-[380px] md:h-[400px]';

    if (index === this.currentIndex) {
      return `${baseClass} ${widthClass} left-1/2 -translate-x-1/2 z-30 scale-100 md:scale-110 opacity-100 shadow-2xl`;
    }

    const prevIndex =
      this.currentIndex === 0 ? this.testimonials.length - 1 : this.currentIndex - 1;

    if (index === prevIndex) {
      return `${baseClass} ${widthClass} left-1/2 -translate-x-[165%] z-20 scale-90 opacity-100 cursor-pointer hover:scale-95`;
    }

    const nextIndex =
      this.currentIndex === this.testimonials.length - 1 ? 0 : this.currentIndex + 1;

    if (index === nextIndex) {
      return `${baseClass} ${widthClass} left-1/2 translate-x-[65%] z-20 scale-90 opacity-100 cursor-pointer hover:scale-95`;
    }

    return 'hidden';
  }
}
