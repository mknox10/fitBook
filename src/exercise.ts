import {MuscleGroup} from './muscle-group';

export class Exercise {
  id: number;
  name: string;
  description: string;
  muscleGroups: MuscleGroup[];
}
