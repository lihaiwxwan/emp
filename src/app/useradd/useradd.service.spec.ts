import { TestBed, inject } from '@angular/core/testing';

import { UseraddService } from './useradd.service';

describe('UseraddService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UseraddService]
    });
  });

  it('should be created', inject([UseraddService], (service: UseraddService) => {
    expect(service).toBeTruthy();
  }));
});
