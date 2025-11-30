import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { AppConfigService } from '../../services/app-config.service';

@Component({
  selector: 'app-tymon-contact-us',
  standalone: true,
  imports: [CommonModule, TranslateModule, FormsModule],
  templateUrl: './tymon-contact-us.component.html',
  styleUrls: [],
})
export class TymonContactUsComponent {
  formData = {
    name: '',
    email: '',
    phone: '',
    message: '',
  };

  constructor(protected configService: AppConfigService) {}

  onSubmit() {
    console.log('Form submitted:', this.formData);
  }
}
