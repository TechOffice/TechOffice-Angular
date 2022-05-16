import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignerItemPreviewInputComponent } from './designer-item-preview-input.component';

describe('DesignerItemPreviewInputComponent', () => {
  let component: DesignerItemPreviewInputComponent;
  let fixture: ComponentFixture<DesignerItemPreviewInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignerItemPreviewInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignerItemPreviewInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
