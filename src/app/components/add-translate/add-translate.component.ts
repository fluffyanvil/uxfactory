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
  selectedSourceLanguage: string;
  selectedTargetLanguage: string;
  languages: string[];
  constructor(
    private logger: LoggerService,
    private translatesService: TranslatesService,
    private google: GoogleTranslateService
  ) {
    this.translate = new Translate();
  }

  ngOnInit(): void {
    this.google.getLanguages().subscribe((data) => {
      this.languages = data;
      this.translate.sourceLanguage = this.languages[0];
      this.translate.targetLanguage = this.languages[this.languages.length - 1];
    });
  }

  addTranslate(): void {
    this.logger.log(`add translate: ${this.translate}`);
    this.translatesService.saveTranslate(this.translate);
    this.translate = new Translate();
  }

  public onTranslateParametersChanged() {
    if (
      this.translate.sourceText == undefined ||
      this.translate.sourceText.length == 0
    )
      return;

    this.google
      .getTranslate(
        this.translate.sourceText,
        this.translate.sourceLanguage,
        this.translate.targetLanguage
      )
      .subscribe((data) => (this.translate.translatedText = data));
  }
}
