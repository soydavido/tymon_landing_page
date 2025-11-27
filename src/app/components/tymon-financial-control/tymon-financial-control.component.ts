import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-tymon-financial-control',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './tymon-financial-control.component.html',
})
export class TymonFinancialControlComponent {}
