import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarExamenPageComponent } from './editar-examen-page.component';

describe('EditarExamenPageComponent', () => {
  let component: EditarExamenPageComponent;
  let fixture: ComponentFixture<EditarExamenPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarExamenPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarExamenPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
