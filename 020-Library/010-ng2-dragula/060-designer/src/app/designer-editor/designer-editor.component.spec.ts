import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignerEditorComponent } from './designer-editor.component';

describe('DesignerEditorComponent', () => {
  let component: DesignerEditorComponent;
  let fixture: ComponentFixture<DesignerEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignerEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignerEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
