import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountListComponent } from './feature/account-list/account-list.component';


const routes: Routes = [

  {path:'', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: AccountListComponent},

  {path: 'account/list', component: AccountListComponent},

  {path: '**', component: AccountListComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
