import { Component } from '@angular/core';
import { LoggerService } from '@my/core';
import { NavigationService } from './common-services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'curso';
  // constructor(log: LoggerService) {
  //   log.error('Es un error')
  // }
  constructor(private _nav: NavigationService) {}
}
