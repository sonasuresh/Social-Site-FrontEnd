import { TestBed } from '@angular/core/testing';

import { CreatepostsserviceService } from './createpostsservice.service';

describe('CreatepostsserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreatepostsserviceService = TestBed.get(CreatepostsserviceService);
    expect(service).toBeTruthy();
  });
});
