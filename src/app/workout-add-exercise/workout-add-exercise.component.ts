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

    let sets = this.record.targetSets;
    this.exerciseForm = this.fb.group({
      exerciseControl: this.record.exercise.id,
      /** couldn't find a way to use a dynamic number of form controls,
          so I ended up hardcoding the form controls like so **/
      repsFormGroup: new FormGroup({
        "reps1": new FormControl(sets.length > 0 ? sets[0].reps : 0),
        "reps2": new FormControl(sets.length > 1 ? sets[1].reps : 0),
        "reps3": new FormControl(sets.length > 2 ? sets[2].reps : 0),
        "reps4": new FormControl(sets.length > 3 ? sets[3].reps : 0),
        "reps5": new FormControl(sets.length > 4 ? sets[4].reps : 0),
        "reps6": new FormControl(sets.length > 5 ? sets[5].reps : 0),
        "reps7": new FormControl(sets.length > 6 ? sets[6].reps : 0),
        "reps8": new FormControl(sets.length > 7 ? sets[7].reps : 0),
        "reps9": new FormControl(sets.length > 8 ? sets[8].reps : 0),
        "reps10": new FormControl(sets.length > 9 ? sets[9].reps : 0),
      }),
      weightFormGroup: new FormGroup({
        "weight1": new FormControl(sets.length > 0 ? sets[0].weight : 0),
        "weight2": new FormControl(sets.length > 1 ? sets[1].weight : 0),
        "weight3": new FormControl(sets.length > 2 ? sets[2].weight : 0),
        "weight4": new FormControl(sets.length > 3 ? sets[3].weight : 0),
        "weight5": new FormControl(sets.length > 4 ? sets[4].weight : 0),
        "weight6": new FormControl(sets.length > 5 ? sets[5].weight : 0),
        "weight7": new FormControl(sets.length > 6 ? sets[6].weight : 0),
        "weight8": new FormControl(sets.length > 7 ? sets[7].weight : 0),
        "weight9": new FormControl(sets.length > 8 ? sets[8].weight : 0),
        "weight10": new FormControl(sets.length > 9 ? sets[9].weight : 0),
      }),
    });

    this.numSets = sets.length;
  }

  save(): void {
    let targetSets: Set[] = [];
    this.record.exercise = this.exerciseList.find(x => x.id == this.exerciseForm.get('exerciseControl').value);
    /** I really wish I knew of a way to create a dynamic number of form controls.
        This is not ideal **/
    if (this.exerciseForm.get('repsFormGroup').get('reps1').value !== 0 ) {
      let set: Set = {
        reps: this.exerciseForm.get('repsFormGroup').get('reps1').value,
        weight: this.exerciseForm.get('weightFormGroup').get('weight1').value
      }
      targetSets.push(set);
    }
    if (this.exerciseForm.get('repsFormGroup').get('reps2').value !== 0 ) {
      let set: Set = {
        reps: this.exerciseForm.get('repsFormGroup').get('reps2').value,
        weight: this.exerciseForm.get('weightFormGroup').get('weight2').value
      }
      targetSets.push(set);
    }
    if (this.exerciseForm.get('repsFormGroup').get('reps3').value !== 0 ) {
      let set: Set = {
        reps: this.exerciseForm.get('repsFormGroup').get('reps3').value,
        weight: this.exerciseForm.get('weightFormGroup').get('weight3').value
      }
      targetSets.push(set);
    }
    if (this.exerciseForm.get('repsFormGroup').get('reps4').value !== 0 ) {
      let set: Set = {
        reps: this.exerciseForm.get('repsFormGroup').get('reps4').value,
        weight: this.exerciseForm.get('weightFormGroup').get('weight4').value
      }
      targetSets.push(set);
    }
    if (this.exerciseForm.get('repsFormGroup').get('reps5').value !== 0 ) {
      let set: Set = {
        reps: this.exerciseForm.get('repsFormGroup').get('reps5').value,
        weight: this.exerciseForm.get('weightFormGroup').get('weight5').value
      }
      targetSets.push(set);
    }
    if (this.exerciseForm.get('repsFormGroup').get('reps6').value !== 0 ) {
      let set: Set = {
        reps: this.exerciseForm.get('repsFormGroup').get('reps6').value,
        weight: this.exerciseForm.get('weightFormGroup').get('weight6').value
      }
      targetSets.push(set);
    }
    if (this.exerciseForm.get('repsFormGroup').get('reps7').value !== 0 ) {
      let set: Set = {
        reps: this.exerciseForm.get('repsFormGroup').get('reps7').value,
        weight: this.exerciseForm.get('weightFormGroup').get('weight7').value
      }
      targetSets.push(set);
    }
    if (this.exerciseForm.get('repsFormGroup').get('reps8').value !== 0 ) {
      let set: Set = {
        reps: this.exerciseForm.get('repsFormGroup').get('reps8').value,
        weight: this.exerciseForm.get('weightFormGroup').get('weight8').value
      }
      targetSets.push(set);
    }
    if (this.exerciseForm.get('repsFormGroup').get('reps9').value !== 0 ) {
      let set: Set = {
        reps: this.exerciseForm.get('repsFormGroup').get('reps9').value,
        weight: this.exerciseForm.get('weightFormGroup').get('weight9').value
      }
      targetSets.push(set);
    }
    if (this.exerciseForm.get('repsFormGroup').get('reps10').value !== 0 ) {
      let set: Set = {
        reps: this.exerciseForm.get('repsFormGroup').get('reps10').value,
        weight: this.exerciseForm.get('weightFormGroup').get('weight10').value
      }
      targetSets.push(set);
    }
    this.record.targetSets = targetSets;

    this.save_add_exercise.emit(this.record);
  }

  addSet(): void {
    this.numSets++;
  }

  removeSet(): void {
    /** Ughhhh Hardcoding is awful! **/
    if (this.numSets === 1) {
      this.exerciseForm.get('repsFormGroup').get('reps1').setValue(0);
      this.exerciseForm.get('weightFormGroup').get('weight1').setValue(0);
    }
    if (this.numSets === 2) {
      this.exerciseForm.get('repsFormGroup').get('reps2').setValue(0);
      this.exerciseForm.get('weightFormGroup').get('weight2').setValue(0);
    }
    if (this.numSets === 3) {
      this.exerciseForm.get('repsFormGroup').get('reps3').setValue(0);
      this.exerciseForm.get('weightFormGroup').get('weight3').setValue(0);
    }
    if (this.numSets === 4) {
      this.exerciseForm.get('repsFormGroup').get('reps4').setValue(0);
      this.exerciseForm.get('weightFormGroup').get('weight4').setValue(0);
    }
    if (this.numSets === 5) {
      this.exerciseForm.get('repsFormGroup').get('reps5').setValue(0);
      this.exerciseForm.get('weightFormGroup').get('weight5').setValue(0);
    }
    if (this.numSets === 6) {
      this.exerciseForm.get('repsFormGroup').get('reps6').setValue(0);
      this.exerciseForm.get('weightFormGroup').get('weight6').setValue(0);
    }
    if (this.numSets === 7) {
      this.exerciseForm.get('repsFormGroup').get('reps7').setValue(0);
      this.exerciseForm.get('weightFormGroup').get('weight7').setValue(0);
    }
    if (this.numSets === 8) {
      this.exerciseForm.get('repsFormGroup').get('reps8').setValue(0);
      this.exerciseForm.get('weightFormGroup').get('weight8').setValue(0);
    }
    if (this.numSets === 9) {
      this.exerciseForm.get('repsFormGroup').get('reps9').setValue(0);
      this.exerciseForm.get('weightFormGroup').get('weight9').setValue(0);
    }
    if (this.numSets === 10) {
      this.exerciseForm.get('repsFormGroup').get('reps10').setValue(0);
      this.exerciseForm.get('weightFormGroup').get('weight10').setValue(0);
    }
    this.numSets--;
  }
}
