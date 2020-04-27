import { Component, OnInit, Input } from '@angular/core';

import { Workout } from 'src/workout';
import { Exercise } from 'src/exercise';
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

  constructor() { }

  ngOnInit(): void {
    this.workout.records.forEach((record) => {
      this.targetTotalSets += record.targetSets.length;
      this.actualTotalSets += record.actualSets.length;
      record.targetSets.forEach((set) => {
        this.targetTotalReps++;
      });
      record.actualSets.forEach((set) => {
        this.actualTotalReps++;
      });
    });
  }
}
