import { TestBed } from '@angular/core/testing';

import { CronJobService } from './cron-job.service';

describe('CronJobService', () => {
  let service: CronJobService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CronJobService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
