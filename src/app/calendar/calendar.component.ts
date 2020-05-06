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

  /** get workouts from workout service */
  getWorkouts() {
    this.workoutsList = this.workoutService.getWorkouts();
  }

  /** from each workout in the list, grab correct information for calendar event and add to calendar workouts array */
  getCalendarWorkouts() {
    for (let workout of this.workoutsList) {
      this.workout = workout;
      this.title = this.workout.name;
      this.date = this.workout.date;
      this.addWorkoutsToCalendar(this.title, this.date);
    }
  }

  /** method called to push new event onto calendar array */
  addWorkoutsToCalendar(title: string, date: Date) {
    this.calendarWorkouts.push({title: title, date: date, allDay: true, stick: true});
  }

  /** form used to add a new workout */
  addWorkoutForm = new FormGroup({
    title: new FormControl(''),
    date: new FormControl(''),
    workout: new FormControl('')
  })

  correctWorkoutDate: string;
  addWorkout(event: Event) {
    event.preventDefault();
    this.records = [];
    this.correctWorkoutDate = this.getNewDay(this.addWorkoutForm.get('date').value);
    this.workoutService.createWorkout(this.addWorkoutForm.get('title').value, new Date(this.correctWorkoutDate), this.records)
    this.addWorkoutsToCalendar(this.addWorkoutForm.get('title').value, new Date(this.correctWorkoutDate));
    this.addWorkoutForm.reset();
  }

  /** form used to add a past workout */
  addPastWorkoutForm = new FormGroup({
    title: new FormControl(''),
    date: new FormControl(''),
    workout: new FormControl('')
  })

  /** method to correct for a date bug in the fullcalendar */
  correctDate: string;
  day: string;
  newDay: number;
  getNewDay(date: string): string {
    this.correctDate = date.slice(0, 8);
    this.day = date.slice(8, 10);
    this.newDay = +this.day + 1;
    if(this.newDay < 10) {
      return this.correctDate + '0' + this.newDay;
    }
    else {
      return this.correctDate + this.newDay;
    }
  }

  /** method creates a new workout using the records from the past workout and adds the new workout to the calendar */
  correctPastWorkoutDate: string;
  addPastWorkout() {
    this.correctPastWorkoutDate = this.getNewDay(this.addPastWorkoutForm.get('date').value);
    this.workoutService.createWorkout(this.addPastWorkoutForm.get('title').value, new Date(this.correctPastWorkoutDate), this.addPastWorkoutForm.get('workout').value.records);
    this.addWorkoutsToCalendar(this.addPastWorkoutForm.get('title').value, new Date(this.correctPastWorkoutDate));
    this.addPastWorkoutForm.reset();
  }

  /** removes a workout from the calendar but does not delete the workout from the WORKOUTS database */
  index: number;
  deleteWorkout(workout: any) {
    this.index = this.calendarWorkouts.indexOf(workout);
    this.calendarWorkouts.splice(this.index, 1);
  }


}
