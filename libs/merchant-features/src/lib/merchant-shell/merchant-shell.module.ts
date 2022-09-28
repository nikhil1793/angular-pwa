import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MerchantShellComponent } from './merchant-shell.component';
import { MerchantShellRoutingModule } from './merchant-shell-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [MerchantShellComponent],
  imports: [CommonModule, ReactiveFormsModule, MerchantShellRoutingModule],
})
export class MerchantShellModule {}
