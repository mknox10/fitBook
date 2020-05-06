import {Injectable} from '@angular/core';
import {Workout} from '../workout';
import {Record} from 'src/record';
import {ExerciseService} from './exercise.service';
import { WORKOUTS } from './dbworkout-list';
import { Exercise } from 'src/exercise';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {

  workouts: Workout[] = WORKOUTS;
  //id: number = 0;

  constructor(private exerciseService: ExerciseService) { }

  getWorkouts(): Workout[] {
    return this.workouts;
  }

  getWorkout(id: number): Workout | null {
    return this.workouts.find(w => w.id === id);
  }

  loadWorkout(): Workout {
    if (this.workouts.length === 0) {
      return this.createWorkout("New Workout", new Date(), []);
    }
    return this.workouts[0];
  }

  createWorkout(name: string, date: Date, records: Record[]): Workout {
    const workout: Workout = {
      //id: this.id++,
      id: WORKOUTS[WORKOUTS.length-1].id++,
      name,
      date,
      records,
    };
    this.workouts.push(workout);
    return workout;
  }

  removeWorkout(id: number) {
    this.workouts = this.workouts.filter(w => w.id !== id);
  }

  saveWorkout(workout: Workout) {
    this.workouts = this.workouts.map(w => w.id === workout.id ? workout : w);
  }

  cloneWorkout(workout: Workout) {
    let records: Record[] = workout.records;
    records.forEach(set => {
      set.actualSets = [];
    })
    return this.createWorkout(workout.name.concat(" - Clone"), new Date(), records);
  }
}
