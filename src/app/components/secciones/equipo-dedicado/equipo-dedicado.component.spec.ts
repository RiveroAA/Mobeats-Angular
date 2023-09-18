import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipoDedicadoComponent } from './equipo-dedicado.component';

describe('EquipoDedicadoComponent', () => {
  let component: EquipoDedicadoComponent;
  let fixture: ComponentFixture<EquipoDedicadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EquipoDedicadoComponent]
    });
    fixture = TestBed.createComponent(EquipoDedicadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
