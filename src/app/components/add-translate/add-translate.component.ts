import { Component, OnInit } from '@angular/core';
import { TranslatesService } from '../../services/translates/translates.service';
import { GoogleTranslateService } from '../../services/google/googletranslate.service';
import { LoggerService } from '../../services/logger/logger.service';
import { Translate } from '../../models/translate.model';

@Component({
  selector: 'app-add-translate',
  templateUrl: './add-translate.component.html',
  styleUrls: ['./add-translate.component.css'],
})
export class AddTranslateComponent implements OnInit {
  translate: Translate;
  languages: string[];
  constructor(
    private logger: LoggerService,
    private translatesService: TranslatesService,
    private google: GoogleTranslateService
  ) {
    this.logger.log('i am created');
    this.translate = new Translate();
  }

  ngOnInit(): void {
    this.google.getLanguages().subscribe((data) => {
      this.languages = data;
      this.translate.originalLanguage = this.languages[0];
      this.translate.targetLanguage = this.languages[0];
    });
  }

  addTranslate(): void {
    this.translatesService.saveTranslate(this.translate);
    this.translate = new Translate();
  }

  clear(): void {
    this.translatesService.clear();
  }

  public onOriginalTextChanged() {
    this.google
      .getTranslate(
        this.translate.originalText,
        this.translate.originalLanguage,
        this.translate.targetLanguage
      )
      .subscribe((data) => (this.translate.translatedText = data));
  }
}
