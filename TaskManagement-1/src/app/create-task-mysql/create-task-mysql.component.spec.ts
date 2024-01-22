import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTaskMysqlComponent } from './create-task-mysql.component';

describe('CreateTaskMysqlComponent', () => {
  let component: CreateTaskMysqlComponent;
  let fixture: ComponentFixture<CreateTaskMysqlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateTaskMysqlComponent]
    });
    fixture = TestBed.createComponent(CreateTaskMysqlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
