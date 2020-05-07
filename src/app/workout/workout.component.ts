import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';

import {Workout} from 'src/workout';
import {Record} from 'src/record';
import {ExerciseService} from '../exercise.service';
import {WorkoutService} from '../workout.service';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.scss']
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
  previous_workout: boolean;
  change_name: boolean;
  date: String;
  newName: string;

  constructor(private es: ExerciseService, private ws: WorkoutService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });

    this.in_progress = false;
    const id = +this.route.snapshot.paramMap.get('id');

    this.workout = this.ws.getWorkout(id);
    if (this.workout === undefined) {
      try {
        this.workout = this.ws.getWorkouts()[0];
      } catch (Exception) {
        this.workout = this.ws.createWorkout('New Workout', new Date(), []);
      }
    }
    this.date = this.workout.date.toLocaleString();
    this.change_name = false;
    this.newName = '';
    this.previousWorkoutCheck();
    this.SummaryStatistics();
  }

  previousWorkoutCheck(): void {
    this.previous_workout = false;
    this.workout.records.forEach(set => {
      if (set.actualSets.length !== 0) {
        this.previous_workout = true;
      }
    });
  }

  changeName(): void {
    this.change_name = false;
    this.workout.name = this.newName;
    this.newName = '';
  }

  beginWorkout(): void {
    this.in_progress = true;
    console.log('Beginning Workout');
  }

  finishWorkout(): void {
    this.in_progress = false;
    this.previousWorkoutCheck();
    this.SummaryStatistics();
    console.log('Finishing Workout');
  }

  checkIfShouldFinish(): void {
    if (this.workout.records.every(set => set.actualSets.length !== 0)) {
      this.finishWorkout();
    }
  }

  addExercise(): void {
    this.addRecord(this.workout);
  }

  removeRecord(record: Record): void {
    const index: number = this.workout.records.indexOf(record);
    if (index !== -1) {
      this.workout.records.splice(index, 1);
    }
    this.targetTotalSets -= record.targetSets.length;
    this.SummaryStatistics();
    this.ws.saveWorkout(this.workout);
    console.log('Exercise Removed Successfully');
  }

  saveRecord(): void {
    this.ws.saveWorkout(this.workout);
    this.SummaryStatistics();
  }

  /** Calculate Workout Summary Statistics **/
  SummaryStatistics(): void {
    this.targetTotalExercises = 0;
    this.targetTotalReps = 0;
    this.targetTotalSets = 0;
    this.actualTotalExercises = 0;
    this.actualTotalReps = 0;
    this.actualTotalSets = 0;
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

  addRecord(workout: Workout): Record {
    let record: Record = new Record();
    record.exercise = this.es.getExercises()[0];
    record.targetSets = [{
      reps: 0,
      weight: 0
    },
      {
        reps: 0,
        weight: 0
      },
      {
        reps: 0,
        weight: 0
      }];
    record.actualSets = [];
    workout.records.push(record);
    this.ws.saveWorkout(this.workout);
    console.log('Exercise Added Successfully');
    return record;
  }

  cloneWorkout(): void {
    this.previous_workout = !this.previous_workout;
    this.workout = this.ws.cloneWorkout(this.workout);
  }
}
