import { Component, OnInit, Optional } from '@angular/core';
import { ERROR_LEVEL, LoggerService } from '@my/core';
import { NotificationService, NotificationType } from '../../common-services';
import { NgSwitch, NgSwitchDefault, NgSwitchCase } from '@angular/common';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    standalone: true,
    imports: [NgSwitch, NgSwitchDefault, NgSwitchCase]
})
export class HomeComponent implements OnInit {
  title = 'Hola mundo';

  // constructor(@Optional() log?: LoggerService) {
  //   if(!log) return;
  //   log.error('Es un error')
  //   log.warn('Es un warn')
  //   log.info('Es un info')
  //   log.log('Es un log')
  // }
  constructor(private notify: NotificationService) {}

  ngOnInit(): void {
    // this.notify.add('Inicio la aplicación', NotificationType.info)
  }
}
