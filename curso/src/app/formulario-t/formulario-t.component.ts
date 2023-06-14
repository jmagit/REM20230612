import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario-t',
  templateUrl: './formulario-t.component.html',
  styleUrls: ['./formulario-t.component.css']
})
export class FormularioTComponent {
  elemento: any = { id: 0, nombre: '', apellidos: '', correo: '', nif: '', edad: 0, fecha: '', conflictivo: false }
  modo: 'add' | 'edit' = 'add'

  add() {
    this.elemento = {}
    this.modo = 'add'
  }
  edit() {
    this.elemento = { id: 1, nombre: 'Pepito', apellidos: 'Grillo', correo: 'pgrillo@example.com', nif: '12345678z', edad: 99, fecha: '2021-01-02', conflictivo: true }
    this.modo = 'edit'
  }

  send() {
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
