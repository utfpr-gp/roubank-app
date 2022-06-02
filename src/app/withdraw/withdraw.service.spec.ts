import { TestBed } from '@angular/core/testing';

import { WithdrawService } from './withdraw.service';

describe('WithdrawService', () => {
  let service: WithdrawService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WithdrawService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
