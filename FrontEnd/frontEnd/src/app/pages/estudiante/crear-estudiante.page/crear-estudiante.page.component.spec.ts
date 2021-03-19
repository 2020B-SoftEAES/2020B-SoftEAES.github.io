import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearEstudiantePageComponent } from './crear-estudiante.page.component';

describe('CrearEstudiante.PageComponent', () => {
  let component: CrearEstudiantePageComponent;
  let fixture: ComponentFixture<CrearEstudiantePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearEstudiantePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearEstudiantePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
