import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

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

  addExerciseSubscription: Subscription;
  show_edit: boolean = false;
  show_remove: boolean = false;
  use_weight: boolean = false; //marks if any weight is used for the set

  es: ExerciseService = new ExerciseService();
  ws: WorkoutService = new WorkoutService(this.es);

  constructor() { }

  ngOnInit(): void {
    if (this.record.exercise.id === undefined) {
      this.show_edit = true;
    }
    this.checkWeight();
  }

  removeRecord(): void {
    this.remove_exercise.emit(this.record);
  }

  saveRecord(record : Record): void {
    this.show_edit = !this.show_edit;
    this.checkWeight();
  }

  checkWeight(): void {
    this.record.targetSets.forEach(set => {
      if (!(set.weight === null || set.weight === 0)) {
        this.use_weight = true;
      }
    });
  }
}