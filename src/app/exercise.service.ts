import {Injectable} from '@angular/core';
import {Exercise} from '../exercise';
import {MuscleGroup} from '../muscle-group';
import {MuscleGroups} from './muscle-groups';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {

  exercises: Exercise[] = [];
  id: number = 0;

  constructor() {
    this.createExercise(
      'Bench Press',
      'The person performing the exercise lies on their back on a bench with a barbell grasped in both hands. They lower the barbell to chest level, then press the barbell upwards, extending the arms until the elbows are locked out.',
      [MuscleGroups.chest, MuscleGroups.shoulders]
    );
    this.createExercise(
      'Sit-Up',
      'Lie on your back on the floor or a bench. Put your hands on the sides of or behind your neck. Bend your hips and waist to raise your body off the ground or bench. Lower your body back to the starting position.',
      [MuscleGroups.abdomen]
    );
    this.createExercise(
      'Leg Press',
      'The individual pushes a weight or resistance away from them using their legs.',
      [MuscleGroups.legs]
    );
  }

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
