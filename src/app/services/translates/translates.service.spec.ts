import { TestBed } from '@angular/core/testing';

import { TranslatesService } from './translates.service';

describe('TranslatesService', () => {
  let service: TranslatesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TranslatesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
