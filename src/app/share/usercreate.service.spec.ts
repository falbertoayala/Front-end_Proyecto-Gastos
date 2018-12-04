import { TestBed } from '@angular/core/testing';

import { UsercreateService } from './usercreate.service';

describe('UsercreateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsercreateService = TestBed.get(UsercreateService);
    expect(service).toBeTruthy();
  });
});
