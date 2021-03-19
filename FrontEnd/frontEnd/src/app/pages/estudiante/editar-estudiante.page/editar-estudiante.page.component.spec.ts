import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarEstudiantePageComponent } from './editar-estudiante.page.component';

describe('EditarEstudiante.PageComponent', () => {
  let component: EditarEstudiantePageComponent;
  let fixture: ComponentFixture<EditarEstudiantePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarEstudiantePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarEstudiantePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
