import { Test, TestingModule } from '@nestjs/testing';
import { DesiredJobController } from './desired-job.controller';
import { DesiredJobService } from './desired-job.service';

describe('DesiredJobController', () => {
  let controller: DesiredJobController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DesiredJobController],
      providers: [DesiredJobService],
    }).compile();

    controller = module.get<DesiredJobController>(DesiredJobController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
