import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruiterManagementComponent } from './recruiter-management.component';

describe('RecruiterManagementComponent', () => {
  let component: RecruiterManagementComponent;
  let fixture: ComponentFixture<RecruiterManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecruiterManagementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecruiterManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
