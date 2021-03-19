import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarInstructorPageComponent } from './editar-instructor-page.component';

describe('EditarInstructorPageComponent', () => {
  let component: EditarInstructorPageComponent;
  let fixture: ComponentFixture<EditarInstructorPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarInstructorPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarInstructorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
