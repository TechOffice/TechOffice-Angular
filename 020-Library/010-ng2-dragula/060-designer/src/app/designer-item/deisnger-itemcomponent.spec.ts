import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignerItemComponent } from './designer-item.component';

describe('DesignerItemComponent', () => {
  let component: DesignerItemComponent;
  let fixture: ComponentFixture<DesignerItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignerItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignerItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
