import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent, ScrollIntoViewDirective } from './chat/chat.component';
import { RemoteCanvasComponent } from './remote-canvas/remote-canvas.component';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import {ChartModule} from 'primeng/chart';
import {CardModule} from 'primeng/card';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [ ChatComponent, RemoteCanvasComponent, DashboardComponent, ScrollIntoViewDirective ],
  exports: [ ChatComponent, RemoteCanvasComponent, DashboardComponent, RouterModule ],
  imports: [
    CommonModule, FormsModule, ChartModule, CardModule, RouterModule.forChild([
      { path: 'chat', component: ChatComponent, data: { pageTitle: 'Chat' } },
      { path: 'canvas', component: RemoteCanvasComponent, title: 'Canvas' },
      { path: 'dashboard', component: DashboardComponent, title: 'Dashboard' },
    ])
  ]
})
export class WebSocketModule { }
