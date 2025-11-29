import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';

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

  onSubmit() {
    console.log('Form submitted:', this.formData);
  }
}
