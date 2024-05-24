import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobConfirmComponent } from './job-confirm.component';

describe('JobConfirmComponent', () => {
  let component: JobConfirmComponent;
  let fixture: ComponentFixture<JobConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobConfirmComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JobConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
