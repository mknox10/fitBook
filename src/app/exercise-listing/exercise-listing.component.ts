import { Component, OnInit, Input } from '@angular/core';
import { Exercise } from 'src/exercise';
import { ExerciseService } from 'src/app/exercise.service';
import { MuscleGroup } from 'src/muscle-group';

@Component({
  selector: 'app-exercise-listing',
  templateUrl: './exercise-listing.component.html',
  styleUrls: ['./exercise-listing.component.css']
})
export class ExerciseListingComponent implements OnInit {

  @Input()
    myExercise: Exercise;

  constructor(private myES: ExerciseService) { }

  ngOnInit(): void {
  }

}
