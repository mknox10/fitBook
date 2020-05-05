import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { WorkoutService } from '../workout.service';
import { Workout } from 'src/workout';
import { Record } from 'src/record';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {


  constructor(private workoutService: WorkoutService) { }

  ngOnInit(): void {
    this.getWorkouts();
    this.getCalendarWorkouts();
  }

  calendarPlugins = [dayGridPlugin];

  workoutsList: Workout[] = [];

  calendarWorkouts = [];

  workout: Workout;
  title: any;
  date: any;
  records: Record[];
  value: number;

  getWorkouts() {
    this.workoutsList = this.workoutService.getWorkouts();
  }

  getCalendarWorkouts() {
    for (let workout of this.workoutsList) {
      this.workout = workout;
      this.title = this.workout.name;
      this.date = this.workout.date;
      this.addWorkoutsToCalendar(this.title, this.date);
    }
  }

  addWorkoutsToCalendar(title: string, date: Date) {
    this.calendarWorkouts.push({title, date});
  }

  addPastWorkoutForm = new FormGroup({
    title: new FormControl(''),
    date: new FormControl(''),
    workout: new FormControl('')
  })

  addPastWorkout() {
    //this.workout = this.addPastWorkoutForm.get('workout').value;
    //this.records = this.workout.records;
    this.workoutService.createWorkout(this.addPastWorkoutForm.get('title').value, this.addPastWorkoutForm.get('date').value, this.addPastWorkoutForm.get('workout').value.records);
    this.addWorkoutsToCalendar(this.addPastWorkoutForm.get('title').value, this.addPastWorkoutForm.get('date').value);
    this.addPastWorkoutForm.reset();
  }

}