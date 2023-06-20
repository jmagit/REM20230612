import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioTComponent } from './formulario-t.component';

describe('FormularioTComponent', () => {
  let component: FormularioTComponent;
  let fixture: ComponentFixture<FormularioTComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [FormularioTComponent]
});
    fixture = TestBed.createComponent(FormularioTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
