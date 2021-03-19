import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimularExamenPageComponent } from './simular-examen-page.component';

describe('SimularExamenPageComponent', () => {
  let component: SimularExamenPageComponent;
  let fixture: ComponentFixture<SimularExamenPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimularExamenPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimularExamenPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
