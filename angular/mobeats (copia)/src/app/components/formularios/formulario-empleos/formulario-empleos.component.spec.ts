import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioEmpleosComponent } from './formulario-empleos.component';

describe('FormularioEmpleosComponent', () => {
  let component: FormularioEmpleosComponent;
  let fixture: ComponentFixture<FormularioEmpleosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioEmpleosComponent]
    });
    fixture = TestBed.createComponent(FormularioEmpleosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
