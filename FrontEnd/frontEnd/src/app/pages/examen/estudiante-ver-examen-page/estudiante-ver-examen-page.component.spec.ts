import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudianteVerExamenPageComponent } from './estudiante-ver-examen-page.component';

describe('EstudianteVerExamenPageComponent', () => {
  let component: EstudianteVerExamenPageComponent;
  let fixture: ComponentFixture<EstudianteVerExamenPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstudianteVerExamenPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstudianteVerExamenPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
