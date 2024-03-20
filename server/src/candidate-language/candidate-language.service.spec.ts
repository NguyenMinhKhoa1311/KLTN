import { Test, TestingModule } from '@nestjs/testing';
import { CandidateLanguageService } from './candidate-language.service';

describe('CandidateLanguageService', () => {
  let service: CandidateLanguageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CandidateLanguageService],
    }).compile();

    service = module.get<CandidateLanguageService>(CandidateLanguageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
