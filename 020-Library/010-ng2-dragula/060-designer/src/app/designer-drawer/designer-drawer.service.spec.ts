import { TestBed } from '@angular/core/testing';

import { DesignerDrawerService } from './designer-drawer.service';

describe('DesignerDrawerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DesignerDrawerService = TestBed.get(DesignerDrawerService);
    expect(service).toBeTruthy();
  });
});
