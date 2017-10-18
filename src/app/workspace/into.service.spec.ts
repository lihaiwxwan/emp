import { TestBed, inject } from '@angular/core/testing';

import { IntoService } from './into.service';

describe('IntoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IntoService]
    });
  });

  it('should be created', inject([IntoService], (service: IntoService) => {
    expect(service).toBeTruthy();
  }));
});
