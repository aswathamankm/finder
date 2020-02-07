import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
//shared moudule used for resusable modules,componentand services
import { SharedModule } from './shared/shared.module';
import { Routes,RouterModule } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// import { UserDetailsComponent } from './user-details/user-details.component';

const route:Routes=[
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'landing',
    loadChildren:'./landing/landing.module#LandingModule'
  },
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  }

]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    // UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(route)
  ],
  providers: [HomeComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
