import { TestBed } from '@angular/core/testing';

import { MusteriService } from './musteri.service';

describe('MusteriService', () => {
  let service: MusteriService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MusteriService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
