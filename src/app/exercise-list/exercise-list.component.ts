import { Component, OnInit, Input } from '@angular/core';
import { ExerciseService } from 'src/app/exercise.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Exercise } from 'src/exercise';

@Component({
  selector: 'app-exercise-list',
  templateUrl: './exercise-list.component.html',
  styleUrls: ['./exercise-list.component.css']
})
export class ExerciseListComponent implements OnInit {

  exerciseService: ExerciseService;
  constructor() { }

  ngOnInit(): void {
  }

  addExerciseFormGroup = new FormGroup({
    name: new FormControl (""),
    description: new FormControl(""),
    muscleGroups: new FormControl("")
  })

  AddExercise() {
    console.log("TEST addExerciseFormGroup=" + this.addExerciseFormGroup);
    console.log("TEST addExerciseFormGroup.name=" + this.addExerciseFormGroup.controls.name.value);
    let newExercise: Exercise = this.addExerciseFormGroup.value;
    alert("TEST:Jake - "+newExercise.name + newExercise.description + newExercise.muscleGroups);
    
  }

}
