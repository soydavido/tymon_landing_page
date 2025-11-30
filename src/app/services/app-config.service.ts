import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppConfigService {
  private config: Record<string, string> = {};

  constructor(private http: HttpClient) {}

  loadConfig(): Promise<void> {
    return lastValueFrom(this.http.get<Record<string, string>>('environments.json'))
      .then((config) => {
        this.config = config;
      })
      .catch((err) => {
        console.error('Could not load configuration', err);
      });
  }

  get(key: string): string {
    return this.config[key] || '';
  }
}
