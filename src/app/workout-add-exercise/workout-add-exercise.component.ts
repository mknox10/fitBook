import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

import { Record } from 'src/record';
import { Exercise } from 'src/exercise';
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
      exerciseControl: this.record.exercise,
      /*couldn't find a way to use a dynamic number of form controls,
      so I ended up hardcoding the form controls like so*/
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

    //TODO: save the record

    this.save_add_exercise.emit(this.record);
  }

  addSet(): void {
    this.numSets++;
  }

  removeSet(): void {
    this.numSets--;
  }
}
