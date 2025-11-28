import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-tymon-manage-finances',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './tymon-manage-finances.component.html',
})
export class TymonManageFinancesComponent {}
