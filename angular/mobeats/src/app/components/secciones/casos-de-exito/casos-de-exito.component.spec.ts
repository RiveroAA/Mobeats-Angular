import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasosDeExitoComponent } from './casos-de-exito.component';

describe('CasosDeExitoComponent', () => {
  let component: CasosDeExitoComponent;
  let fixture: ComponentFixture<CasosDeExitoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CasosDeExitoComponent]
    });
    fixture = TestBed.createComponent(CasosDeExitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
