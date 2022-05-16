import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignerItemPreviewButtonComponent } from './designer-item-preview-button.component';

describe('DesignerItemPreviewButtonComponent', () => {
  let component: DesignerItemPreviewButtonComponent;
  let fixture: ComponentFixture<DesignerItemPreviewButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignerItemPreviewButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignerItemPreviewButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
