import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioRxComponent } from './formulario-rx.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('FormularioRxComponent', () => {
  let component: FormularioRxComponent;
  let fixture: ComponentFixture<FormularioRxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioRxComponent],
      imports: [ReactiveFormsModule]
    });
    fixture = TestBed.createComponent(FormularioRxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    spyOn(window, 'alert').and.stub()
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('artificial', () => {
    component.add()
    component.send()
    component.edit()
    component.send()
    expect(component).toBeTruthy();
  });

});
