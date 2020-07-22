import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslatesListComponent } from './translates-list.component';

describe('TranslatesListComponent', () => {
  let component: TranslatesListComponent;
  let fixture: ComponentFixture<TranslatesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TranslatesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TranslatesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
