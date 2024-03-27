import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestjobComponent } from './bestjob.component';

describe('BestjobComponent', () => {
  let component: BestjobComponent;
  let fixture: ComponentFixture<BestjobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BestjobComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BestjobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
