import { Component, OnInit, Input } from '@angular/core';
import { ExerciseService } from 'src/app/exercise.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Exercise } from 'src/exercise';
import { MuscleGroup } from 'src/muscle-group';
import {MuscleGroups} from 'src/app/muscle-groups';


@Component({
  selector: 'app-exercise-list',
  templateUrl: './exercise-list.component.html',
  styleUrls: ['./exercise-list.component.css']
})
export class ExerciseListComponent implements OnInit {

  myES: ExerciseService;
  myExercise: Exercise;
  constructor() { }

  ngOnInit(): void {
  }

  addExerciseFormGroup = new FormGroup({
    name: new FormControl (""),
    description: new FormControl(""),
    muscleGroups: new FormControl("")
  })

  AddExercise() {
    let newExercise: Exercise = this.addExerciseFormGroup.value;
    this.myES.createExercise(newExercise.name, newExercise.description, [MuscleGroups.legs]);
    alert("Test point reached");
  }

}
