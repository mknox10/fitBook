import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseListingComponent } from './exercise-listing.component';

describe('ExerciseListingComponent', () => {
  let component: ExerciseListingComponent;
  let fixture: ComponentFixture<ExerciseListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExerciseListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciseListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
