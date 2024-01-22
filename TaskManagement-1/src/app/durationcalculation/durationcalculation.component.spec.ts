import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DurationcalculationComponent } from './durationcalculation.component';

describe('DurationcalculationComponent', () => {
  let component: DurationcalculationComponent;
  let fixture: ComponentFixture<DurationcalculationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DurationcalculationComponent]
    });
    fixture = TestBed.createComponent(DurationcalculationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
