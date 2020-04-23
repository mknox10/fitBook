import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalendarComponent } from './calendar/calendar.component';
import { ExerciseListComponent } from './exercise-list/exercise-list.component';
import { WorkoutComponent } from './workout/workout.component';


const routes: Routes = [
  { path: 'calendar', component: CalendarComponent },
  { path: 'exercise-list', component: ExerciseListComponent },
  { path: 'workout', component: WorkoutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
