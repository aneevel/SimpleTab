import { TestBed } from '@angular/core/testing';

import { NavigationSharedServiceService } from './navigation-shared-service.service';

describe('NavigationSharedServiceService', () => {
  let service: NavigationSharedServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavigationSharedServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
