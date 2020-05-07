import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { Record } from 'src/record';
import { ExerciseService } from '../exercise.service';
import { WorkoutService } from '../workout.service';

@Component({
  selector: 'app-workout-exercise',
  templateUrl: './workout-exercise.component.html',
  styleUrls: ['./workout-exercise.component.scss']
})
export class WorkoutExerciseComponent implements OnInit {

  @Input() record: Record;
  @Output() remove_exercise = new EventEmitter<Record>();
  @Output() save_exercise = new EventEmitter<Record>();

  addExerciseSubscription: Subscription;
  show_edit: boolean = false;
  show_remove: boolean = false;
  use_weight: boolean = false; //marks if any weight is used for the set
  targetNumSets: number;
  actualNumSets: number;

  constructor(private es: ExerciseService, private ws: WorkoutService) {
    es = new ExerciseService();
    ws = new WorkoutService(es);
  }

  ngOnInit(): void {
    this.checkWeight();
  }

  removeRecord(): void {
    this.remove_exercise.emit(this.record);
  }

  saveRecord(record : Record): void {
    this.show_edit = !this.show_edit;
    this.checkWeight();
    this.save_exercise.emit(this.record);
  }

  checkWeight(): void {
    this.targetNumSets = this.record.targetSets.length;
    this.actualNumSets = this.record.actualSets.length;
    this.record.targetSets.forEach(set => {
      if (!(set.weight === null || set.weight === 0)) {
        this.use_weight = true;
      }
    });
  }
}
