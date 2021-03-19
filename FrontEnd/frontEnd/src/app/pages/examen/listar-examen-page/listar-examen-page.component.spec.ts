import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarExamenPageComponent } from './listar-examen-page.component';

describe('ListarExamenPageComponent', () => {
  let component: ListarExamenPageComponent;
  let fixture: ComponentFixture<ListarExamenPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarExamenPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarExamenPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
