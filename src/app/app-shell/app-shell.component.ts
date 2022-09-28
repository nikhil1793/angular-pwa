import { Component, OnInit } from '@angular/core';
import { MerchantServiceWorker } from '../core/services';

@Component({
  selector: 'app-shell',
  templateUrl: './app-shell.component.html',
  styleUrls: ['./app-shell.component.scss']
})
export class AppShellComponent implements OnInit {

  constructor(private serviceWorker: MerchantServiceWorker) {}
  ngOnInit(): void {
    this.serviceWorker.registerVersionUpdate();
  }

}
