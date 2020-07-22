import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTranslateComponent } from './add-translate.component';

describe('AddTranslateComponent', () => {
  let component: AddTranslateComponent;
  let fixture: ComponentFixture<AddTranslateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTranslateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTranslateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
