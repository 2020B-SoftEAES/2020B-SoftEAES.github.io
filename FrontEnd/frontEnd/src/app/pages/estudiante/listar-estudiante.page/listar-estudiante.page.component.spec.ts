import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarEstudiantePageComponent } from './listar-estudiante.page.component';

describe('ListarEstudiante.PageComponent', () => {
  let component: ListarEstudiantePageComponent;
  let fixture: ComponentFixture<ListarEstudiantePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarEstudiantePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarEstudiantePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
