import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GoogleObject } from '../../models/googleObject.model';
import { LoggerService } from '../../services/logger/logger.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class GoogleTranslateService {
  constructor(private logger: LoggerService, private httpClient: HttpClient) {}
  private translateRequestUrl =
    'https://translation.googleapis.com/language/translate/v2?key=';
  private languagesRequestUrl =
    'https://translation.googleapis.com/language/translate/v2/languages?key=';
  private key = 'AIzaSyDLL_IxdCMXzhnZO1oBXHk6rRDCCro11tA';

  getTranslate(
    sourceText: string,
    sourceLang: string,
    targetLang: string
  ): Observable<string> {
    const googleObj = new GoogleObject(sourceText, sourceLang, targetLang);
    this.logger.log(googleObj);
    return this.httpClient
      .post(this.translateRequestUrl + this.key, googleObj)
      .pipe(
        map((res) => {
          var translatedText = res['data'].translations[0].translatedText;
          return translatedText;
        })
      );
  }

  getLanguages(): Observable<string[]> {
    return this.httpClient.get(this.languagesRequestUrl + this.key).pipe(
      map((res) => {
        var data = res['data'];
        var languages = data.languages;
        return languages.map(function (language: any) {
          return language['language'];
        });
      })
    );
  }
}
