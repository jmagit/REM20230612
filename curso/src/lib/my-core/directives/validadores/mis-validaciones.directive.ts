/* eslint-disable @angular-eslint/directive-selector */
import { Attribute, Directive, ElementRef, forwardRef } from '@angular/core';
import { ValidatorFn, AbstractControl, NG_VALIDATORS, Validator, ValidationErrors, FormGroup, FormControl } from '@angular/forms';

export function NIFValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    if (!control.value) { return null; }
    const err = { nif: { invalidFormat: true, invalidChar: false, message: 'NIF invalido' } };
    if (/^\d{1,8}\w$/.test(control.value)) {
      const letterValue = control.value.substr(control.value.length - 1);
      const numberValue = control.value.substr(0, control.value.length - 1);
      err.nif.invalidFormat = false;
      err.nif.invalidChar = true;
      return letterValue.toUpperCase() === 'TRWAGMYFPDXBNJZSQVHLCKE'.charAt(numberValue % 23) ? null : err;
    } else { return err; }
  };
}
@Directive({
  selector: '[nif][formControlName],[nif][formControl],[nif][ngModel]',
  providers: [{ provide: NG_VALIDATORS, useExisting: NIFValidatorDirective, multi: true }]
})
export class NIFValidatorDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    return NIFValidator()(control);
  }
}

export function UppercaseValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    if (!control.value) { return null; }
    return control.value === control.value.toUpperCase() ? null : { uppercase: 'Debe estar en mayúsculas' }
  };
}
@Directive({
  selector: '[uppercase][formControlName],[uppercase][formControl],[uppercase][ngModel]',
  providers: [{ provide: NG_VALIDATORS, useExisting: UppercaseValidatorDirective, multi: true }]
})
export class UppercaseValidatorDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    return UppercaseValidator()(control);
  }
}

export function LowercaseValidator(control: AbstractControl): { [key: string]: any } | null {
    if (!control.value) { return null; }
    return control.value === control.value.toLowerCase() ? null : { lowercase: 'Debe estar en mayúsculas' }
}
@Directive({
  selector: '[lowercase][formControlName],[lowercase][formControl],[lowercase][ngModel]',
  providers: [{ provide: NG_VALIDATORS, useExisting: LowercaseValidatorDirective, multi: true }]
})
export class LowercaseValidatorDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    return LowercaseValidator(control);
  }
}

@Directive({
  selector: '[type][formControlName],[type][formControl],[type][ngModel]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: TypeValidatorDirective, multi: true }
  ]
})
export class TypeValidatorDirective implements Validator {
  constructor(private elem: ElementRef) { }
  validate(control: AbstractControl): ValidationErrors | null {
    const valor = control.value;
    if (valor) {
      const dom = this.elem.nativeElement;
      if (dom.validity) { // dom.checkValidity();
        if(dom.validity.rangeUnderflow) return { 'xmin': dom.validationMessage }
        return dom.validity.typeMismatch ? { 'type': dom.validationMessage } : null;
      }
    }
    return null;
  }
}

export function EqualsValidator(options: Array<string>): ValidatorFn {
  if (!options || options.length < 2)
    new Error('Faltan opciones para comparar')
  return (control: AbstractControl): { [key: string]: any } | null => {
    const form = control as FormGroup;
    const valor1 = form.controls[options[0]] as FormControl;
    const valor2 = form.controls[options[1]] as FormControl;
    return valor1?.value === valor2?.value ? null : { equalTo: `${options[2] ?? 'No son iguales'}` };
  };
}
@Directive({
  selector: '[equalsTo]',
  providers: [{ provide: NG_VALIDATORS, useExisting: forwardRef(() => EqualsValidatorDirective), multi: true }]
})
export class EqualsValidatorDirective implements Validator {
  constructor(@Attribute('equalsTo') public options: string) { }
  validate(control: FormGroup): ValidationErrors | null {
    return EqualsValidator(eval(this.options))(control)
  }
}

export const MIS_VALIDADORES = [NIFValidatorDirective, UppercaseValidatorDirective, LowercaseValidatorDirective, TypeValidatorDirective, EqualsValidatorDirective,]
