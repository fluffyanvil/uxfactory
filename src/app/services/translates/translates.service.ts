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
    this.translates.push(item);
    localStorage.setItem(
      this.translateListItemName,
      JSON.stringify(this.translates)
    );
    this.logger.log(this.translates);
  }

  clear(): void {
    localStorage.setItem(this.translateListItemName, '');
    var translates = localStorage.getItem(this.translateListItemName);
    this.translates = translates != '' ? JSON.parse(translates) : [];
  }
}
