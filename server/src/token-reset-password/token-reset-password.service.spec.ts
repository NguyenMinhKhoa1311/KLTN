import { Test, TestingModule } from '@nestjs/testing';
import { TokenResetPasswordService } from './token-reset-password.service';

describe('TokenResetPasswordService', () => {
  let service: TokenResetPasswordService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TokenResetPasswordService],
    }).compile();

    service = module.get<TokenResetPasswordService>(TokenResetPasswordService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
