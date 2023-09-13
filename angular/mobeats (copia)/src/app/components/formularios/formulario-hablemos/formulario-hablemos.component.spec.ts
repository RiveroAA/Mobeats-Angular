import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioHablemosComponent } from './formulario-hablemos.component';

describe('FormularioHablemosComponent', () => {
  let component: FormularioHablemosComponent;
  let fixture: ComponentFixture<FormularioHablemosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioHablemosComponent]
    });
    fixture = TestBed.createComponent(FormularioHablemosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
