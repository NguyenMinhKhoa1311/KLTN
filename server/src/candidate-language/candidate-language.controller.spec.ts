import { Test, TestingModule } from '@nestjs/testing';
import { CandidateLanguageController } from './candidate-language.controller';
import { CandidateLanguageService } from './candidate-language.service';

describe('CandidateLanguageController', () => {
  let controller: CandidateLanguageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CandidateLanguageController],
      providers: [CandidateLanguageService],
    }).compile();

    controller = module.get<CandidateLanguageController>(CandidateLanguageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
