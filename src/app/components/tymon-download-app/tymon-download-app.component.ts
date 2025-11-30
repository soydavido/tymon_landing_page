import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { AppConfigService } from '../../services/app-config.service';

@Component({
  selector: 'app-tymon-download-app',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './tymon-download-app.component.html',
  styleUrls: [],
})
export class TymonDownloadAppComponent {
  constructor(protected configService: AppConfigService) {}
}
