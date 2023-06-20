import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NIFValidator } from 'src/lib/my-core/directives/validadores/mis-validaciones.directive';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  elemento: any = { id: 0, nombre: '', apellidos: '', correo: '', nif: '', edad: 0, fecha: '', conflictivo: false }
  modo: 'add' | 'edit' = 'add'
  miForm: FormGroup

  constructor(protected fb: FormBuilder) {
    this.miForm = this.fb.group({
      id: [0, [Validators.required]],
      nombre: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
      apellidos: ['', [Validators.minLength(2), Validators.maxLength(10)]],
      correo: ['', Validators.email],
      nif: ['', [Validators.pattern(/^\d{1,8}[A-Za-z]$/), NIFValidator()]],
      edad: [0, [Validators.min(16), Validators.max(67)]],
      fecha: [''],
      conflictivo: [false]
    })
  }

  add() {
    this.elemento = {}
    this.miForm.reset()
    this.modo = 'add'
  }

  edit() {
    this.elemento = { id: 1, nombre: 'Pepito', apellidos: 'Grillo', correo: 'pgrillo@example.com', nif: '12345678z', edad: 99, fecha: '2021-01-02', conflictivo: true }
    this.miForm.setValue(this.elemento)
    this.modo = 'edit'
  }

  send() {
    this.elemento = this.miForm.value
    switch (this.modo) {
      case 'add':
        alert(`ADD: ${JSON.stringify(this.elemento)}`)
        break
      case 'edit':
        alert(`EDIT: ${JSON.stringify(this.elemento)}`)
        break
    }
  }
  cancel() {

  }

}
