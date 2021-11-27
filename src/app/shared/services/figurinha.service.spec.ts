import { TestBed } from '@angular/core/testing';

import { FigurinhaService } from './figurinha.service';

describe('FigurinhaService', () => {
  let service: FigurinhaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FigurinhaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
