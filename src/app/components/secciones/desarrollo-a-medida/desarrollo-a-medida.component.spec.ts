import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesarrolloAMedidaComponent } from './desarrollo-a-medida.component';

describe('DesarrolloAMedidaComponent', () => {
  let component: DesarrolloAMedidaComponent;
  let fixture: ComponentFixture<DesarrolloAMedidaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DesarrolloAMedidaComponent]
    });
    fixture = TestBed.createComponent(DesarrolloAMedidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
