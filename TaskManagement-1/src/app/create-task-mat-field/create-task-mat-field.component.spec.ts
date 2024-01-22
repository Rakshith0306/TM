import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTaskMatFieldComponent } from './create-task-mat-field.component';

describe('CreateTaskMatFieldComponent', () => {
  let component: CreateTaskMatFieldComponent;
  let fixture: ComponentFixture<CreateTaskMatFieldComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateTaskMatFieldComponent]
    });
    fixture = TestBed.createComponent(CreateTaskMatFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
