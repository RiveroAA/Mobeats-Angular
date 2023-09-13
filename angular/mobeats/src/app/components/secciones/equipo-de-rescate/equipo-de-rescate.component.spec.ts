import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipoDeRescateComponent } from './equipo-de-rescate.component';

describe('EquipoDeRescateComponent', () => {
  let component: EquipoDeRescateComponent;
  let fixture: ComponentFixture<EquipoDeRescateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EquipoDeRescateComponent]
    });
    fixture = TestBed.createComponent(EquipoDeRescateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
