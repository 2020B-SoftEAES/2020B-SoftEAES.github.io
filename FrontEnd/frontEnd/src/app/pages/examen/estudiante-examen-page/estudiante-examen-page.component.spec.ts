import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudianteExamenPageComponent } from './estudiante-examen-page.component';

describe('EstudianteExamenPageComponent', () => {
  let component: EstudianteExamenPageComponent;
  let fixture: ComponentFixture<EstudianteExamenPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstudianteExamenPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstudianteExamenPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
