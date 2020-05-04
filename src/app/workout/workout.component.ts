import { Component, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';

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

  /** Details for workout summary **/
  targetTotalExercises: number = 0;
  actualTotalExercises: number = 0;
  targetTotalSets: number = 0;
  targetTotalReps: number = 0;
  actualTotalSets: number = 0;
  actualTotalReps: number = 0;

  in_progress: boolean;

  es: ExerciseService;
  ws: WorkoutService;

  constructor() { }

  ngOnInit(): void {
    this.in_progress = false;
    this.es = new ExerciseService();
    this.ws = new WorkoutService(this.es);

    if (this.workout === undefined) {
      this.workout = this.ws.loadWorkout();
    } else {
      
    }
    this.SummaryStatistics();
  }

  beginWorkout(): void {
    //TODO: Do not allow workout to begin if it has previously been completed
    this.in_progress = true;
    console.log("Beginning Workout");
  }

  finishWorkout(): void {
    this.in_progress = false;
    console.log("Finishing Workout");
  }

  addExercise(): void {
    this.ws.addRecord(this.workout);
    this.SummaryStatistics();
  }

  removeRecord(record : Record): void {
    this.ws.removeRecord(this.workout, record);
    this.targetTotalSets -= record.targetSets.length;
    this.SummaryStatistics();
  }

  /** Calculate Workout Summary Statistics **/
  SummaryStatistics() {
    //TODO: math isn't right after edits
    this.workout.records.forEach((record) => {
      this.targetTotalExercises++;
      this.actualTotalExercises += record.actualSets.length !== 0 ? 1 : 0;
      this.targetTotalSets += record.targetSets.length;
      this.actualTotalSets += record.actualSets.length;
      record.targetSets.forEach((set) => {
        this.targetTotalReps += set.reps;
      });
      record.actualSets.forEach((set) => {
        this.actualTotalReps += set.reps;
      });
    });
  }
}
