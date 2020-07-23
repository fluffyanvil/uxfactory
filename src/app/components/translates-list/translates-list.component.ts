import { Component, OnInit } from '@angular/core';
import { TranslatesService } from '../../services/translates/translates.service';
import { LoggerService } from '../../services/logger/logger.service';
import { Translate } from '../../models/translate.model';
import { MatSelectionListChange } from '@angular/material/list';

@Component({
  selector: 'app-translates-list',
  templateUrl: './translates-list.component.html',
  styleUrls: ['./translates-list.component.css'],
})
export class TranslatesListComponent implements OnInit {
  selectedTranslate: Translate;
  constructor(
    private logger: LoggerService,
    public translatesService: TranslatesService
  ) {}

  ngOnInit(): void {}

  onChange(change: MatSelectionListChange) {
    this.selectedTranslate = change.option.value;
    this.logger.log(this.selectedTranslate);
  }

  removeTranslate() {
    this.translatesService.removeTranslate(this.selectedTranslate);
    this.selectedTranslate = null;
  }

  clear(): void {
    this.translatesService.clear();
  }
}
