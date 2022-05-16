import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleRenderComponent } from './example-render-dropdown.component';

describe('ExampleRenderComponent', () => {
  let component: ExampleRenderComponent;
  let fixture: ComponentFixture<ExampleRenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleRenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleRenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
