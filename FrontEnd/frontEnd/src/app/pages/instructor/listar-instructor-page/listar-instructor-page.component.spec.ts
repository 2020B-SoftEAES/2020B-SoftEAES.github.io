import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarInstructorPageComponent } from './listar-instructor-page.component';

describe('ListarInstructorPageComponent', () => {
  let component: ListarInstructorPageComponent;
  let fixture: ComponentFixture<ListarInstructorPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarInstructorPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarInstructorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
