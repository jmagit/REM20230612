import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioTComponent } from './formulario-t.component';

xdescribe('FormularioTComponent', () => {
  let component: FormularioTComponent;
  let fixture: ComponentFixture<FormularioTComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioTComponent]
    });
    fixture = TestBed.createComponent(FormularioTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
