import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { AppConfigService } from '../../services/app-config.service';

@Component({
  selector: 'app-tymon-request-demo',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './tymon-request-demo.component.html',
  styleUrls: [],
})
export class TymonRequestDemoComponent {
  constructor(protected configService: AppConfigService) {}
}
