import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-title-section',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './title-section.component.html',
  styleUrls: [],
})
export class TitleSectionComponent {}
