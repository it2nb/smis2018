import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SystemComponent } from './system/system.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'system', component: SystemComponent, children: [
    { path: '', component: PagenotfoundComponent },
    ] 
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }