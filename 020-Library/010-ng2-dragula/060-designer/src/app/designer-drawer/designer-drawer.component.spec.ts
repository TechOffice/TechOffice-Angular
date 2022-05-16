import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignerDrawerComponent } from './designer-drawer.component';

describe('DesignerDrawerComponent', () => {
  let component: DesignerDrawerComponent;
  let fixture: ComponentFixture<DesignerDrawerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignerDrawerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignerDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
