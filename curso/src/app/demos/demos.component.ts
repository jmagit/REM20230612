import { Component } from '@angular/core';
import { NotificationService } from '../common-services';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-demos',
  templateUrl: './demos.component.html',
  styleUrls: ['./demos.component.css'],
  providers: [ NotificationService ]
})
export class DemosComponent {
  listado: Observable<any>;

  constructor(public vm: NotificationService, http: HttpClient) {
    this.listado = http.get('http://localhost:4321/api/peliculas')
   }
}
