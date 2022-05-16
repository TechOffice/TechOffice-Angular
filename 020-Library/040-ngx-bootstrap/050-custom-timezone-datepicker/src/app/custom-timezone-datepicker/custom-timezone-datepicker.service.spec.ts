import { TestBed } from '@angular/core/testing';

import { CustomTimezoneDatepickerService } from './custom-timezone-datepicker.service';

describe('LocalTimezoneDatepickerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomTimezoneDatepickerService = TestBed.get(CustomTimezoneDatepickerService);
    expect(service).toBeTruthy();
  });
});
