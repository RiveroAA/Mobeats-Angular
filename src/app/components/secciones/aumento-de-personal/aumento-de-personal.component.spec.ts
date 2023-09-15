import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AumentoDePersonalComponent } from './aumento-de-personal.component';

describe('AumentoDePersonalComponent', () => {
  let component: AumentoDePersonalComponent;
  let fixture: ComponentFixture<AumentoDePersonalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AumentoDePersonalComponent]
    });
    fixture = TestBed.createComponent(AumentoDePersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
