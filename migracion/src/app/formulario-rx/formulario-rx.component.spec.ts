import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioRxComponent } from './formulario-rx.component';

describe('FormularioRxComponent', () => {
  let component: FormularioRxComponent;
  let fixture: ComponentFixture<FormularioRxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [FormularioRxComponent]
});
    fixture = TestBed.createComponent(FormularioRxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
