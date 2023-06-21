import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioRxComponent } from './formulario-rx.component';

xdescribe('FormularioRxComponent', () => {
  let component: FormularioRxComponent;
  let fixture: ComponentFixture<FormularioRxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioRxComponent]
    });
    fixture = TestBed.createComponent(FormularioRxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
