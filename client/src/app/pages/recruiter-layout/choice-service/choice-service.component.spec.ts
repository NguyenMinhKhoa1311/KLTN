import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoiceServiceComponent } from './choice-service.component';

describe('ChoiceServiceComponent', () => {
  let component: ChoiceServiceComponent;
  let fixture: ComponentFixture<ChoiceServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChoiceServiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChoiceServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
