import { Component } from '@angular/core';
import { LoggerService } from '@my/core';
import { NavigationService } from './common-services';
import { RouterOutlet } from '@angular/router';
import { NotificationModalComponent } from './main/notification-modal/notification-modal.component';
import { AjaxWaitComponent } from './main/ajax-wait';
import { HeaderComponent } from './main/header/header.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: true,
    imports: [HeaderComponent, AjaxWaitComponent, NotificationModalComponent, RouterOutlet]
})
export class AppComponent {
  title = 'curso';
  // constructor(log: LoggerService) {
  //   log.error('Es un error')
  // }
  constructor(private _nav: NavigationService) {}
}
