import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomTimezoneDatepickerComponent } from './custom-timezone-datepicker.component';

describe('UtcDatepickerComponent', () => {
  let component: CustomTimezoneDatepickerComponent;
  let fixture: ComponentFixture<CustomTimezoneDatepickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomTimezoneDatepickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomTimezoneDatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
