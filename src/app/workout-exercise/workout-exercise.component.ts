import { Component, OnInit, Input } from '@angular/core';

import { Record } from 'src/record';

@Component({
  selector: 'app-workout-exercise',
  templateUrl: './workout-exercise.component.html',
  styleUrls: ['./workout-exercise.component.css']
})
export class WorkoutExerciseComponent implements OnInit {

  @Input() record: Record;

  constructor() { }

  ngOnInit(): void {
    
  }
}