import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamenesSimularPageComponent } from './examenes-simular-page.component';

describe('ExamenesSimularPageComponent', () => {
  let component: ExamenesSimularPageComponent;
  let fixture: ComponentFixture<ExamenesSimularPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamenesSimularPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamenesSimularPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
