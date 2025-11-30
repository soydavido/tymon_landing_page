import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  APP_INITIALIZER,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideTranslateService, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { provideTranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppConfigService } from './services/app-config.service';

import { routes } from './app.routes';

export function initializeApp(translate: TranslateService, appConfig: AppConfigService) {
  return () => {
    translate.addLangs(['en', 'es']);
    translate.setDefaultLang('es');
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang?.match(/en|es/) ? browserLang : 'es');
    return appConfig.loadConfig();
  };
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(),
    provideTranslateService({
      defaultLanguage: 'es',
    }),
    provideTranslateHttpLoader({
      prefix: '/i18n/',
      suffix: '.json',
    }),
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [TranslateService, AppConfigService],
      multi: true,
    },
  ],
};
