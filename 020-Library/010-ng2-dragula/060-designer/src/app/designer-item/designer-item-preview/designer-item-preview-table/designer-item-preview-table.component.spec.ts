import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignerItemPreviewTableComponent } from './designer-item-preview-table.component';

describe('DesignerItemPreviewTableComponent', () => {
  let component: DesignerItemPreviewTableComponent;
  let fixture: ComponentFixture<DesignerItemPreviewTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignerItemPreviewTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignerItemPreviewTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
