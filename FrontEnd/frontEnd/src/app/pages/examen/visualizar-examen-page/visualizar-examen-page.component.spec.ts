import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarExamenPageComponent } from './visualizar-examen-page.component';

describe('VisualizarExamenPageComponent', () => {
  let component: VisualizarExamenPageComponent;
  let fixture: ComponentFixture<VisualizarExamenPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualizarExamenPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizarExamenPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
