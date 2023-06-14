import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { LoggerService } from '@my/core';
import { Unsubscribable } from 'rxjs';
import { NotificationService } from 'src/app/common-services';

// @Component({
//   selector: 'app-notification',
//   templateUrl: './notification.component.html',
//   styleUrls: ['./notification.component.css'],
// })
// export class NotificationComponent {

//   constructor(private vm: NotificationService) { }

//   public get VM() { return this.vm; }

// }


@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotificationComponent implements OnInit, OnDestroy, DoCheck {
  private suscriptor?: Unsubscribable;
  constructor(private vm: NotificationService, private changeDetectorRef: ChangeDetectorRef, private log: LoggerService) { }

  public get VM() { return this.vm; }

  ngOnInit(): void {
    this.suscriptor = this.vm.Notificacion.subscribe(n => {
      this.changeDetectorRef.markForCheck();
      // this.changeDetectorRef.detectChanges();
    });
  }
  ngOnDestroy(): void {
    if (this.suscriptor) {
      this.suscriptor.unsubscribe();
    }
  }
  private count = 0;
  ngDoCheck(): void {
    this.log.log(`Do Check: ${++this.count}`)
  }

}
