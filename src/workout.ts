import {Record} from './record';

export class Workout {
  id: number;
  name: string;
  date: Date;
  records: Record[];
}
