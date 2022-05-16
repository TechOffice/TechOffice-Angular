import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignerItemPreviewComponent } from './designer-item-preview.component';

describe('DesignerItemPreviewComponent', () => {
  let component: DesignerItemPreviewComponent;
  let fixture: ComponentFixture<DesignerItemPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignerItemPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignerItemPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
