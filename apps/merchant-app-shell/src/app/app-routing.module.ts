import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppShellComponent } from './app-shell/app-shell.component';

const APP_SHELL_ROUTES: Routes = [
  {
    path: '',
    component: AppShellComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'merchant',
      },
      {
        path: `merchant`,
        loadChildren: () =>
          import('@merchant-workspace/merchant-features').then(
            (m) => m.MerchantShellModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(APP_SHELL_ROUTES)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
