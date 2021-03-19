import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearExamenPageComponent } from './crear-examen-page.component';

describe('CrearExamenPageComponent', () => {
  let component: CrearExamenPageComponent;
  let fixture: ComponentFixture<CrearExamenPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearExamenPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearExamenPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
