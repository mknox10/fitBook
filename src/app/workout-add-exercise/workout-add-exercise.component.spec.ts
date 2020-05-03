import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutAddExerciseComponent } from './workout-add-exercise.component';

describe('WorkoutAddExerciseComponent', () => {
  let component: WorkoutAddExerciseComponent;
  let fixture: ComponentFixture<WorkoutAddExerciseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkoutAddExerciseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkoutAddExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
