import { TestBed } from '@angular/core/testing';

import { EmployedataService } from './employedata.service';

describe('EmployedataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmployedataService = TestBed.get(EmployedataService);
    expect(service).toBeTruthy();
  });
});
