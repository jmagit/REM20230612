import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';

@Component({
  selector: 'app-geolocalizacion',
  templateUrl: './geolocalizacion.component.html',
  styleUrls: ['./geolocalizacion.component.css']
})
export class GeolocalizacionComponent implements OnInit, OnDestroy {
  publisher$ = new Observable(observer => {
    if(!window.navigator.geolocation) {
      observer.error('Geolocalización no disponible en el navegador')
    }
    let watchId = window.navigator.geolocation.watchPosition(pos => {
      observer.next({ latitud: pos.coords.latitude, longitud: pos.coords.longitude })
    }, error => {
      switch (error.code) {
        case error.PERMISSION_DENIED: observer.error('Permiso denegado por el usuario'); break;
        case error.POSITION_UNAVAILABLE: observer.error('Posición no disponible'); break;
        case error.TIMEOUT: observer.error('Tiempo de espera agotado'); break;
        default: observer.error(`Error desconocido de Geolocalización: ${error.code}`); break;
      }
    });
    return function unsubscribe() {
      window.navigator.geolocation.clearWatch(watchId)
    };
  });
  posicion: any = { latitud: 0, longitud: 0 }
  suscriptor!: Subscriber<any>

  ngOnInit(): void {
    this.publisher$.subscribe({
      next: pos => this.posicion = pos
    })
  }
  ngOnDestroy(): void {
    if(this.suscriptor) this.suscriptor.unsubscribe()
  }

}
