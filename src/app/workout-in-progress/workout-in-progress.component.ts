import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

import { Record } from 'src/record';
import { Set } from 'src/set';

@Component({
  selector: 'app-workout-in-progress',
  templateUrl: './workout-in-progress.component.html',
  styleUrls: ['./workout-in-progress.component.scss']
})
export class WorkoutInProgressComponent implements OnInit {

  @Input() record: Record;
  @Output() exerciseComplete = new EventEmitter<boolean>();

  exerciseForm: FormGroup;
  numSets: number = 0;
  exercise_complete: boolean;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.exercise_complete = false;

    const repsGroup = {};
    const weightsGroup = {};
    let sets = this.record.targetSets;
    for (let i = 0; i < 10; i++) {
      repsGroup[`reps${i + 1}`] = new FormControl(
        sets.length > i ? sets[i].reps : 0
      );
      weightsGroup[`weight${i + 1}`] = new FormControl(
        sets.length > i ? sets[i].weight : 0
      );
    }
    this.exerciseForm = this.fb.group({
      exerciseControl: new FormControl(this.record.exercise),
      repsFormGroup: new FormGroup(repsGroup),
      weightFormGroup: new FormGroup(weightsGroup),
    });
    this.numSets = sets.length;
  }

  addSet(): void {
    this.numSets++;
  }

  removeSet(): void {
    for (let i = 1; i <= 10; i++) {
      if (this.numSets === i) {
        this.exerciseForm.get('repsFormGroup').get(`reps${i}`).setValue(0);
        this.exerciseForm.get('weightFormGroup').get(`weight${i}`).setValue(0);
      }
    }
    this.numSets--;
  }

  finishSet(): void {
    this.exercise_complete = true;
    let actualSets: Set[] = [];
    for (let i = 1; i <= 10; i++) {
      if (this.exerciseForm.get("repsFormGroup").get(`reps${i}`).value !== 0) {
        let set: Set = {
          reps: this.exerciseForm.get("repsFormGroup").get(`reps${i}`).value,
          weight: this.exerciseForm.get("weightFormGroup").get(`weight${i}`).value,
        };
        actualSets.push(set);
      }
    }
    this.record.actualSets = actualSets;
    this.exerciseComplete.emit(true);
  }
}
