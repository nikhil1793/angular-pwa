import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MerchantShellComponent } from './merchant-shell.component';

const MERCHANT_SHELL_ROUTES: Routes = [
  {
    path: '',
    component: MerchantShellComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(MERCHANT_SHELL_ROUTES)],
  exports: [RouterModule],
})
export class MerchantShellRoutingModule {}
