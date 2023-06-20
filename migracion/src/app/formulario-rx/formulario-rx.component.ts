import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

export function equalToValidator(origen: string, destino: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const pwdOrg = control.get(origen);
    const pwdCopy = control.get(destino);
    return pwdOrg && pwdCopy && pwdOrg.value === pwdCopy.value ? null : { equalTo: 'Son diferentes' };
  }
}


@Component({
  selector: 'app-formulario-rx',
  templateUrl: './formulario-rx.component.html',
  styleUrls: ['../formulario-t/formulario-t.component.css']
})
export class FormularioRxComponent {
  miForm: FormGroup
  model = { user: 'usuario', password: 'P@$$w0rd', roles: [{ role: 'Admin' }, { role: 'User' }] };
  modo: 'add' | 'edit' = 'add'

  constructor() {
    this.miForm = new FormGroup({
      user: new FormControl(this.model.user, [Validators.required, Validators.email]),
      password: new FormGroup({
        passwordValue: new FormControl('', Validators.minLength(2)),
        passwordConfirm: new FormControl('', Validators.minLength(2)),
      }, equalToValidator('passwordValue', 'passwordConfirm')),
      roles: new FormArray(this.model.roles.map(
        item => new FormGroup({ role: new FormControl(item.role, Validators.required) })))
    })
    this.miForm.get('user')?.valueChanges.subscribe(item =>{
      this.model.user = item
    })
  }
  addRole() {
    (this.miForm.get('roles') as FormArray).push(
      new FormGroup({ role: new FormControl('', Validators.required) })
    );
  }
  deleteRole(ind: number) {
    (this.miForm.get('roles') as FormArray).removeAt(ind);
  }
  add() {
    this.miForm.reset()
    this.modo = 'add'
  }
  edit() {
    const form = {
      user: 'pgrillo@example.com',
      password: { passwordValue: 'kkkk', passwordConfirm: 'kkkk'},
      roles: [{ role: 'User' }, { role: 'Emp' }]
    }
    this.miForm.setValue(form)
    this.miForm.setControl('roles', new FormArray(form.roles.map(
      item => new FormGroup({ role: new FormControl(item.role, Validators.required) }))))
    this.modo = 'edit'
  }

  send() {
    const form = this.miForm.value
    this.model = {
      user: form.user,
      password: form.password.passwordValue,
      roles: form.roles
    };

    switch (this.modo) {
      case 'add':
        alert(`ADD: ${JSON.stringify(this.model)}`)
        break
      case 'edit':
        alert(`EDIT: ${JSON.stringify(this.model)}`)
        break
    }
  }
  cancel() {

  }
}
