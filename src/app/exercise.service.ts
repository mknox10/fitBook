import {Injectable} from '@angular/core';
import {Exercise} from '../exercise';
import {MuscleGroup} from '../muscle-group';
import {EXERCISES} from './dbexercise-list';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {

  exercises: Exercise[] = EXERCISES;
  id: number = 0;

  getExercises(): Exercise[] {
    return this.exercises;
  }

  getExercise(id: number): Exercise | null {
    return this.exercises.find(e => e.id === id);
  }

  createExercise(name: string, description: string, muscleGroups: MuscleGroup[]): Exercise {
    const exercise: Exercise = {
      id: this.id++,
      name,
      description,
      muscleGroups
    };
    this.exercises.push(exercise);
    return exercise;
  }

  removeExercise(id: number) {
    this.exercises = this.exercises.filter(w => w.id !== id);
  }

  saveExercise(exercise: Exercise) {
    this.exercises = this.exercises.map(w => w.id === exercise.id ? exercise : w);
  }
}
