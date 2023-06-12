import { TestBed } from '@angular/core/testing';

import { MyCoreService } from './my-core.service';

describe('MyCoreService', () => {
  let service: MyCoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyCoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
