import { Test, TestingModule } from '@nestjs/testing';
import { TokenResetPasswordController } from './token-reset-password.controller';
import { TokenResetPasswordService } from './token-reset-password.service';

describe('TokenResetPasswordController', () => {
  let controller: TokenResetPasswordController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TokenResetPasswordController],
      providers: [TokenResetPasswordService],
    }).compile();

    controller = module.get<TokenResetPasswordController>(TokenResetPasswordController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
