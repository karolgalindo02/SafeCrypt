import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './dashboard/container/container.component';
import { CryptComponent } from './dashboard/crypt/crypt.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { FormComponent } from './dashboard/form/form.component';
import { LoginComponent } from './dashboard/login/login.component';
import { TablesComponent } from './dashboard/tables/tables.component';



const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'form', component: FormComponent},
  { path: 'crypt', component: CryptComponent},
  { path: 'tables', component: TablesComponent},
  { path: 'login', component: LoginComponent},
  { path: 'content', component: ContainerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes), DashboardModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
