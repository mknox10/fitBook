import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ExerciseListComponent } from './exercise-list/exercise-list.component';
import { WorkoutComponent } from './workout/workout.component';
import { WorkoutExerciseComponent } from './workout-exercise/workout-exercise.component';
import { WorkoutAddExerciseComponent } from './workout-add-exercise/workout-add-exercise.component';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    ExerciseListComponent,
    WorkoutComponent,
    WorkoutExerciseComponent,
    WorkoutAddExerciseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
