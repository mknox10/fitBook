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
      id: this.workouts.map(w => w.id).sort((a, b) => b - a)[0] + 1,
      name,
      date,
      records,
      onCalendar: true
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

  cloneWorkout(workout: Workout): Workout {
    let records: Record[] = JSON.parse(JSON.stringify(workout.records));
    records.forEach(set => {
      set.actualSets = [];
    });
    return this.createWorkout(workout.name, new Date(), records);
  }

  removeWorkoutFromCalendar(workout: Workout) {
    workout.onCalendar = false;
    this.saveWorkout(workout);
  }

  addWorkoutToCalendar(workout: Workout) {
    workout.onCalendar = true;
    this.saveWorkout(workout);
  }
}
