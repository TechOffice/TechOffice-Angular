import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleRenderInputComponent } from './example-render-input.component';

describe('ExampleRenderInputComponent', () => {
  let component: ExampleRenderInputComponent;
  let fixture: ComponentFixture<ExampleRenderInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleRenderInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleRenderInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
