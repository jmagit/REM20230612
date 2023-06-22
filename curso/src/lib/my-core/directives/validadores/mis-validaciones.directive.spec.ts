import { FormControl, FormsModule } from '@angular/forms';
import { NIFValidator, NIFValidatorDirective, UppercaseValidator, UppercaseValidatorDirective } from './mis-validaciones.directive';
import { Component, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

describe('NIFValidator', () => {
  const esNIF = NIFValidator()
  const control = new FormControl('input');

  describe('NIF OK', () => {
    ['12345678z', '12345678Z', '1234S', '4g', null].forEach(caso => {
      it(`NIF: ${caso}`, () => {
        control.setValue(caso);
        expect(esNIF(control)).toBeNull()
      })
    })
  });

  describe('NIF KO', () => {
    ['1234J', '12345678', 'Z', 'Z12345678'].forEach(caso => {
      it(`NIF: ${caso}`, () => {
        control.setValue(caso);
        expect(esNIF(control)).not.toBeNull()
      })
    })
  });
  it('NIFValidatorDirective', () => {
    const directive = new NIFValidatorDirective();
    control.setValue(null);
    expect(directive.validate(control)).toBeNull();
  })
});
@Component({
  template: `<input type="text" [(ngModel)]="valor" #myInput="ngModel" nif >`
})
class NIFValidatorHostComponent {
  @ViewChild('myInput') control?: FormControl<string>
  valor = '';
}

describe('NIFValidatorDirective', () => {
  let component: NIFValidatorHostComponent;
  let fixture: ComponentFixture<NIFValidatorHostComponent>;
  const control = new FormControl('input');

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NIFValidatorHostComponent, NIFValidatorDirective],
      imports: [FormsModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NIFValidatorHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it(`OK`, waitForAsync(() => {
    const valor = '12345678z'
    component.valor = valor
    fixture.detectChanges()
    fixture.whenStable().then(() => {
      expect(component.control).withContext('control').toBeDefined()
      expect(component.control?.value).withContext('value').toBe(valor)
      expect(component.control?.valid).withContext('valid').toBeTrue()
      expect(component.control?.errors).withContext('errors').toBeNull()
    })
  }))

  it(`KO`, waitForAsync(async () => {
    const valor = '12345678'
    component.valor = valor
    fixture.detectChanges()
    await fixture.whenStable()
    expect(component.control).withContext('control').toBeDefined()
    expect(component.control?.value).withContext('value').toBe(valor)
    expect(component.control?.invalid).withContext('invalid').toBeTrue()
    expect(component.control?.errors).withContext('errors').toBeDefined()
    expect(component.control?.errors?.['nif']).withContext('nif').toBeDefined()
  }))
});


describe('UppercaseValidator', () => {
  const esUppercase = UppercaseValidator()
  const control = new FormControl('input');
  describe('Uppercase OK', () => {
    ['12345678', 'CASA', null].forEach(caso => {
      it(`Uppercase: ${caso}`, () => {
        control.setValue(caso);
        expect(esUppercase(control)).toBeNull()
      })
    })
  });

  describe('Uppercase KO', () => {
    ['Algo', '12345678z', 'casa'].forEach(caso => {
      it(`Uppercase: ${caso}`, () => {
        control.setValue(caso);
        expect(esUppercase(control)).not.toBeNull()
      })
    })
  });

  it('UppercaseValidatorDirective', () => {
    const directive = new UppercaseValidatorDirective();
    control.setValue(null);
    expect(directive.validate(control)).toBeNull();
  })
});

