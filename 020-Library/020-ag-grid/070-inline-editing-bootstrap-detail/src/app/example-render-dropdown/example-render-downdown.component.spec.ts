import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleRenderDropdownComponent } from './example-render-dropdown.component';

describe('ExampleRenderComponent', () => {
  let component: ExampleRenderDropdownComponent;
  let fixture: ComponentFixture<ExampleRenderDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleRenderDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleRenderDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
