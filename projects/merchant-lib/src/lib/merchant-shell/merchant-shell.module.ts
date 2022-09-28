import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MerchantShellComponent } from './merchant-shell.component';
import { MerchantShellRoutingModule } from './merchant-shell-routing.module';

@NgModule({
  declarations: [MerchantShellComponent],
  imports: [CommonModule, MerchantShellRoutingModule],
})
export class MerchantShellModule {}
