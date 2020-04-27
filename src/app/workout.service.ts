import {Injectable} from '@angular/core';
import {Workout} from '../workout';
import {Record} from '../record';
import {ExerciseService} from './exercise.service';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {

  workouts: Workout[] = [];
  id: number = 0;

  constructor(private exerciseService: ExerciseService) {
    this.createWorkout(
      'Monday Workout',
      new Date(2020, 6, 1),
      [
        {
          exercise: exerciseService.getExercise(0),
          targetSets: [
            {
              reps: 10,
              weight: 160,
            },
            {
              reps: 10,
              weight: 160,
            },
            {
              reps: 10,
              weight: 160,
            },
          ],
          actualSets: []
        },
        {
          exercise: exerciseService.getExercise(1),
          targetSets: [
            {
              reps: 15,
              weight: null,
            },
            {
              reps: 15,
              weight: null,
            },
            {
              reps: 15,
              weight: null,
            },
          ],
          actualSets: []
        },
        {
          exercise: exerciseService.getExercise(2),
          targetSets: [
            {
              reps: 10,
              weight: 200,
            },
            {
              reps: 10,
              weight: 200,
            },
            {
              reps: 10,
              weight: 200,
            },
          ],
          actualSets: []
        },
      ]
    );
  }

  getWorkouts(): Workout[] {
    return this.workouts;
  }

  getWorkout(id: number): Workout | null {
    return this.workouts.find(w => w.id === id);
  }

  createWorkout(name: string, date: Date, records: Record[]): Workout {
    const workout: Workout = {
      id: this.id++,
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
}
