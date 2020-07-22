import { Component, OnInit } from '@angular/core';
import { TranslatesService } from '../../services/translates/translates.service';
import { LoggerService } from '../../services/logger/logger.service';
import { Translate } from '../../models/translate.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-translates-list',
  templateUrl: './translates-list.component.html',
  styleUrls: ['./translates-list.component.css'],
})
export class TranslatesListComponent implements OnInit {
  allTranslates: Translate[];

  constructor(
    private logger: LoggerService,
    public translatesService: TranslatesService
  ) {}

  ngOnInit(): void {}
}
