import { TestBed, inject } from '@angular/core/testing';

import { WorldInfoService } from './world-info.service';

describe('WorldInfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WorldInfoService]
    });
  });

  it('should be created', inject([WorldInfoService], (service: WorldInfoService) => {
    expect(service).toBeTruthy();
  }));
});
