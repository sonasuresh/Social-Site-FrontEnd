import { TestBed } from '@angular/core/testing';

import { CommentserviceService } from './commentservice.service';

describe('CommentserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CommentserviceService = TestBed.get(CommentserviceService);
    expect(service).toBeTruthy();
  });
});
