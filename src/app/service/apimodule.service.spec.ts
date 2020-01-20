import { TestBed } from '@angular/core/testing';

import { ApimoduleService } from './apimodule.service';

describe('ApimoduleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApimoduleService = TestBed.get(ApimoduleService);
    expect(service).toBeTruthy();
  });
});
