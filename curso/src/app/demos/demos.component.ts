import { Component, OnDestroy } from '@angular/core';
import { NotificationService, NotificationType } from '../common-services';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscriber, Subscription } from 'rxjs';

@Component({
  selector: 'app-demos',
  templateUrl: './demos.component.html',
  styleUrls: ['./demos.component.css'],
  providers: [ NotificationService ]
})
export class DemosComponent implements OnDestroy {
  listado: Observable<any>;
  valor = 666
  suscriptor: Subscription

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

   send() {}
   remove() {}
   cancel() {}
}
