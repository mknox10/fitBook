import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ExerciseListComponent } from './exercise-list/exercise-list.component';
import { WorkoutComponent } from './workout/workout.component';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    ExerciseListComponent,
    WorkoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
