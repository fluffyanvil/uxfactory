import { Translate } from '../../models/translate.model';
import { Injectable } from '@angular/core';
import { LoggerService } from '../logger/logger.service';

@Injectable({
  providedIn: 'root',
})
export class TranslatesService {
  private translates: Translate[];
  private translateListItemName: string = 'translates';

  constructor(private logger: LoggerService) {
    var translates = localStorage.getItem(this.translateListItemName);
    this.translates = translates != '' ? JSON.parse(translates) : [];
  }

  getTranslates(): Translate[] {
    return this.translates;
  }

  saveTranslate(item: Translate) {
    item.created = new Date().toISOString();
    this.translates.push(item);
    this.saveTranslates();
  }

  removeTranslate(item: Translate) {
    const index: number = this.translates.indexOf(item);
    if (index !== -1) {
      this.translates.splice(index, 1);
    }
    this.saveTranslates();
  }

  clear(): void {
    localStorage.setItem(this.translateListItemName, '');
    var translates = localStorage.getItem(this.translateListItemName);
    this.translates = translates != '' ? JSON.parse(translates) : [];
  }

  private saveTranslates(): void {
    localStorage.setItem(
      this.translateListItemName,
      JSON.stringify(this.translates)
    );
  }
}
