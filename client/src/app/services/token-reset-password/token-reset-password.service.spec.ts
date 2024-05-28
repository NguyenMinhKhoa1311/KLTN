import { TestBed } from '@angular/core/testing';

import { TokenResetPasswordService } from './token-reset-password.service';

describe('TokenResetPasswordService', () => {
  let service: TokenResetPasswordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TokenResetPasswordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
