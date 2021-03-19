import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearInstructorPageComponent } from './crear-instructor-page.component';

describe('CrearInstructorPageComponent', () => {
  let component: CrearInstructorPageComponent;
  let fixture: ComponentFixture<CrearInstructorPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearInstructorPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearInstructorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
