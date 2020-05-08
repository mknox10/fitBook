import {Component, OnInit} from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import {WorkoutService} from '../workout.service';
import {Workout} from 'src/workout';
import {Record} from 'src/record';
import {FormControl, FormGroup, Validators} from '@angular/forms';

export type EditorType = 'showAllWorkouts' | 'showCalendarWorkouts';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  constructor(private workoutService: WorkoutService) {
  }

  ngOnInit(): void {
    this.refreshWorkouts();
  }

  calendarPlugins = [dayGridPlugin];

  workoutsList: Workout[] = [];

  calendarWorkouts = [];

  workout: Workout;
  records: Record[];
  value: number;
  removeButton: boolean;
  active: boolean;

  /** get workouts from workout service */
  getWorkouts() {
    this.workoutsList = this.workoutService.getWorkouts();
  }

  /** refresh calendar and workouts */
  refreshWorkouts() {
    this.getWorkouts();
    this.calendarWorkouts = this.workoutsList.filter(workout => { if(workout.onCalendar === true) { return workout }}).map(workout => ({title: workout.name, date: workout.date, allDay: true, stick: true}));
    if (this.addPastWorkoutForm.get('workout').value === '' ||
      !this.workoutsList.map(w => w.id).includes(this.addPastWorkoutForm.get('workout').value?.id)) {
      if (this.workoutsList.length > 0) {
        this.addPastWorkoutForm.patchValue({
          workout: this.workoutsList[0].id,
        });
      } else {
        this.addPastWorkoutForm.patchValue({
          workout: '',
        });
      }
    }
  }

  /** form used to add a new workout */
  addWorkoutForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    date: new FormControl('', [Validators.required]),
    workout: new FormControl('')
  });

  /** method creates a new workout blank workout that the user can edit and view */
  correctWorkoutDate: string;
  addWorkout() {
    this.records = [];
    this.correctWorkoutDate = this.getNewDay(this.addWorkoutForm.get('date').value);
    this.workoutService.createWorkout(this.addWorkoutForm.get('title').value, new Date(this.correctWorkoutDate), this.records);
    this.addWorkoutForm.reset();
    this.refreshWorkouts();
  }

  /** form used to add a past workout */
  addPastWorkoutForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    date: new FormControl('', [Validators.required]),
    workout: new FormControl('', [Validators.required])
  });

  /** method creates a new workout using the records from the past workout and adds the new workout to the calendar */
  correctPastWorkoutDate: string;
  addPastWorkout() {
    this.correctPastWorkoutDate = this.getNewDay(this.addPastWorkoutForm.get('date').value);
    const workout = this.workoutService.cloneWorkout(this.workoutService.getWorkout(+this.addPastWorkoutForm.get('workout').value));
    workout.name = this.addPastWorkoutForm.get('title').value;
    workout.date = new Date(this.correctPastWorkoutDate);
    this.workoutService.saveWorkout(workout);
    this.addPastWorkoutForm.reset();
    this.refreshWorkouts();
  }

  /** method to correct for a date bug in the fullcalendar */
  correctDate: string;
  day: string;
  newDay: number;

  getNewDay(date: string): string {
    this.correctDate = date.slice(0, 8);
    this.day = date.slice(8, 10);
    this.newDay = +this.day + 1;
    if (this.newDay < 10) {
      return this.correctDate + '0' + this.newDay;
    } else {
      return this.correctDate + this.newDay;
    }
  }

  /** deletes a workout */
  index: number;
  deleteWorkout(workout: Workout) {
    this.workoutService.removeWorkout(workout.id);
    this.refreshWorkouts();
  }

  /** removes a workout from the calendar but does not delete the workout from the WORKOUTS database */
  removeWorkoutFromCalendar(workout: Workout) {
    this.workoutService.removeWorkoutFromCalendar(workout);
    this.refreshWorkouts();
  }

  /** adds a workout from workouts list to the calendar if it is not already on there */
  addWorkoutToCalendar(workout: Workout) {
    this.workoutService.addWorkoutToCalendar(workout);
    this.refreshWorkouts();
  }

  /** Toggle views between all workouts list and current workouts on calendar */
  editor: EditorType = 'showAllWorkouts';

  get showAllEditor() {
    return this.editor === 'showAllWorkouts';
  }

  get showCalendarEditor() {
    return this.editor === 'showCalendarWorkouts';
  }

  toggleEditor(type: EditorType) {
    this.editor = type;
  }

}
