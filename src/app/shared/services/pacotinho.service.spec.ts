import { TestBed } from '@angular/core/testing';

import { PacotinhoService } from './pacotinho.service';

describe('PacotinhoService', () => {
  let service: PacotinhoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PacotinhoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
