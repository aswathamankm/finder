import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import { Routes,RouterModule } from '@angular/router';
import { UserService } from '../shared/services/user.service';
import { SharedModule } from '../shared/shared.module';
import { UserDetailsComponent } from '../user-details/user-details.component';

const route:Routes=[
  {
    path:'user',
    component:LandingComponent
  },
  {
    path:'user-details/:name',
    component:UserDetailsComponent
  },
  {
        path: '**',
        redirectTo: 'user'
    }
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    SharedModule
  ],
  declarations: [LandingComponent,UserDetailsComponent],
  providers:[UserService]
})
export class LandingModule { }
