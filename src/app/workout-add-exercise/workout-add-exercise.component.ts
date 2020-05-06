import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

import { Record } from 'src/record';
import { Exercise } from 'src/exercise';
import { Set } from 'src/set';
import { ExerciseService } from '../exercise.service';

@Component({
  selector: 'app-workout-add-exercise',
  templateUrl: './workout-add-exercise.component.html',
  styleUrls: ['./workout-add-exercise.component.css']
})
export class WorkoutAddExerciseComponent implements OnInit {

  @Input() record: Record;
  @Output() save_add_exercise = new EventEmitter<Record>();

  es: ExerciseService = new ExerciseService();
  exerciseList: Exercise[];
  exerciseForm: FormGroup;
  numSets: number = 0; //specifies the number of sets, max is 10

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.exerciseList = this.es.getExercises();

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

  getNumSetsArray(): Array<number> {
    return Array(this.numSets).fill(0).map((x, i) => i);
  }

  save(): void {
    let targetSets: Set[] = [];
    for (let i = 1; i <= 10; i++) {
      if (this.exerciseForm.get("repsFormGroup").get(`reps${i}`).value !== 0) {
        let set: Set = {
          reps: this.exerciseForm.get("repsFormGroup").get(`reps${i}`).value,
          weight: this.exerciseForm.get("weightFormGroup").get(`weight${i}`).value,
        };
        targetSets.push(set);
      }
    }
    this.record.targetSets = targetSets;
    this.save_add_exercise.emit(this.record);
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
}
