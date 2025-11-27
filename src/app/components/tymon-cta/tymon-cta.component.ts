import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-tymon-cta',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './tymon-cta.component.html',
})
export class TymonCtaComponent {}
