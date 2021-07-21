import { TestBed } from '@angular/core/testing';

import { NavigationSharedService } from './navigation-shared.service';

describe('NavigationSharedService', () => {
  let service: NavigationSharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavigationSharedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
