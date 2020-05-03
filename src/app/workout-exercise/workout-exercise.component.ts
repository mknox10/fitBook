import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Record } from 'src/record';
import { ExerciseService } from '../exercise.service';
import { WorkoutService } from '../workout.service';

@Component({
  selector: 'app-workout-exercise',
  templateUrl: './workout-exercise.component.html',
  styleUrls: ['./workout-exercise.component.css']
})
export class WorkoutExerciseComponent implements OnInit {

  @Input() record: Record;
  @Output() remove_exercise = new EventEmitter<Record>();
  @Output() save_exercise = new EventEmitter<Record>();

  show_edit: boolean = false;
  show_remove: boolean = false;

  es: ExerciseService = new ExerciseService();
  ws: WorkoutService = new WorkoutService(this.es);

  constructor() { }

  ngOnInit(): void {
    
  }

  editExercise(): void {
    
  }

  removeRecord(): void {
    this.remove_exercise.emit(this.record);
  }

  saveRecord(record : Record): void {
    this.save_exercise.emit(this.record);
  }
}