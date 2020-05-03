import { Component, OnInit, Input } from '@angular/core';

import { Workout } from 'src/workout';
import { Exercise } from 'src/exercise';
import { Record } from 'src/record';
import { ExerciseService } from '../exercise.service';
import { WorkoutService } from '../workout.service';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.css']
})
export class WorkoutComponent implements OnInit {

  @Input() workout: Workout;

  targetTotalSets: number = 0;
  targetTotalReps: number = 0;
  actualTotalSets: number = 0;
  actualTotalReps: number = 0;

  es: ExerciseService = new ExerciseService();
  ws: WorkoutService = new WorkoutService(this.es);

  constructor() { }

  ngOnInit(): void {
    this.workout = this.ws.getWorkout(0);

    this.SummaryStatistics();
  }

  beginWorkout(): void {

  }

  removeRecord(record : Record): void {
    this.ws.removeRecord(this.workout, record);
  }

  saveRecord(record: Record): void {
    this.ws.saveRecord(this.workout, record);
  }

  /*Calculate Workout Summary Statistics*/
  SummaryStatistics() {
    this.workout.records.forEach((record) => {
      this.targetTotalSets += 1;
      if (record.actualSets.length > 0) {
      this.actualTotalSets += 1;
      }
      this.targetTotalReps += record.targetSets.length;
      this.actualTotalReps += record.actualSets.length;
    });
  }
}
