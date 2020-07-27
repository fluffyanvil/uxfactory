import { TestBed } from '@angular/core/testing';

import { GoogleTranslateService } from './googletranslate.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('GoogletranslateService', () => {
  let service: GoogleTranslateService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(GoogleTranslateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
