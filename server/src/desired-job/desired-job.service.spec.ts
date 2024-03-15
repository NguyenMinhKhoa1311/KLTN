import { Test, TestingModule } from '@nestjs/testing';
import { DesiredJobService } from './desired-job.service';

describe('DesiredJobService', () => {
  let service: DesiredJobService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DesiredJobService],
    }).compile();

    service = module.get<DesiredJobService>(DesiredJobService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
