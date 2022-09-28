import { Component, OnInit } from '@angular/core';
import {
  MerchantServiceWorker,
  PushNotificationService,
} from '../core/services';
import { DummyService } from '../core/services/dummy.service';

@Component({
  selector: 'app-shell',
  templateUrl: './app-shell.component.html',
  styleUrls: ['./app-shell.component.scss'],
})
export class AppShellComponent implements OnInit {
  constructor(
    private serviceWorker: MerchantServiceWorker,
    public pushNotificationService: PushNotificationService,
    private dummyService: DummyService
  ) {}

  ngOnInit(): void {
    this.serviceWorker.registerVersionUpdate();
  }
  
  subscribeToNotifications(){
    this.pushNotificationService.subscribeToNotifications();
  }

  notify(){
   this.dummyService.notify().subscribe({
    next: (response)=> {
      console.log(response);
    },
    error: (err)=> console.log(err)
   })
  }
}
