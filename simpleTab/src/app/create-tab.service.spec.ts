import { TestBed } from '@angular/core/testing';

import { CreateTabService } from './create-tab.service';

describe('CreateTabService', () => {
  let service: CreateTabService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateTabService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
