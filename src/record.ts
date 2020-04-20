import {Set} from './set';
import {Exercise} from './exercise';

export class Record {
  id: number;
  exercise: Exercise;
  targetSets: Set[];
  actualSets: Set[];
}
