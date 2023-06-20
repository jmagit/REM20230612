import { Component, OnDestroy } from '@angular/core';
import { NotificationService, NotificationType } from '../common-services';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { messages } from 'src/locale/messages';
import { FormButtonsComponent } from '../common-component/form-buttons/form-buttons.component';
import { CardComponent } from '../common-component/card.component';
import { NgFor, DecimalPipe, CurrencyPipe } from '@angular/common';
import { TypeValidatorDirective } from '../../lib/my-core/directives/validadores/mis-validaciones.directive';
import { FormsModule } from '@angular/forms';
import { CalculadoraComponent } from '../calculadora/calculadora.component';
import { SizerComponent } from '../../lib/my-core/components/my-sizer.component';
import { NotificationComponent } from '../main/notification/notification.component';

@Component({
    selector: 'app-demos',
    templateUrl: './demos.component.html',
    styleUrls: ['./demos.component.css'],
    providers: [NotificationService],
    standalone: true,
    imports: [NotificationComponent, SizerComponent, CalculadoraComponent, FormsModule, TypeValidatorDirective, NgFor, CardComponent, FormButtonsComponent, DecimalPipe, CurrencyPipe]
})
export class DemosComponent implements OnDestroy {
  listado: Observable<any>;
  valor = 1666.43
  suscriptor: Subscription
  fontSize = 24;

  constructor(public vm: NotificationService, http: HttpClient) {
    this.listado = http.get('http://localhost:4321/api/peliculas')
    this.suscriptor = vm.Notificacion.subscribe({
      next: msg => {
        if(msg.Type === NotificationType.warn) {
          alert(msg.Message)
          vm.remove(vm.Listado.length - 1)
        }
      }
    })
   }
  ngOnDestroy(): void {
    if(this.suscriptor)
      this.suscriptor.unsubscribe()
  }

   send() {this.vm.add(messages.AppComponent.title, NotificationType.warn)}
   remove(id: number) { this.vm.add(`Borrado ${id}`, NotificationType.warn)}
   cancel() {}

   idiomas = [
    { codigo: 'en-US', region: 'USA' },
    { codigo: 'es', region: 'España' },
    { codigo: 'pt', region: 'Portugal' },
  ];
  idioma = this.idiomas[0].codigo;
}
