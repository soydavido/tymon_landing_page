import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-tymon-price-plans',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './tymon-price-plans.component.html',
  styleUrls: [],
})
export class TymonPricePlansComponent {
  freeFeatures = [
    'pricePlans.free.features.manual',
    'pricePlans.free.features.overview',
    'pricePlans.free.features.marketplace',
    'pricePlans.free.features.multibanking',
    'pricePlans.free.features.savings',
  ];

  premiumFeatures = [
    'pricePlans.premium.features.unlimited',
    'pricePlans.premium.features.reports',
    'pricePlans.premium.features.savings',
    'pricePlans.premium.features.alerts',
    'pricePlans.premium.features.education',
  ];

  annualFeatures = [
    'pricePlans.annual.features.allPremium',
    'pricePlans.annual.features.support',
    'pricePlans.annual.features.gift',
    'pricePlans.annual.features.earlyAccess',
    'pricePlans.annual.features.challenges',
  ];
}
