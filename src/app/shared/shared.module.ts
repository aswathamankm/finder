import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { HttpModule } from '@angular/http';
import {
  MatIconModule,
  MatMenuModule,
  MatButtonModule,
  MatCardModule,
  MatTooltipModule,
  MatInputModule
} from '@angular/material';
import { FormsModule } from '@angular/forms'
@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    HttpModule,
  ],
  declarations: [],
  exports:[
    //HttpModule
    HttpClientModule,
    HttpModule,
    //module
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    MatTooltipModule,
    MatInputModule,
    FormsModule
  ]
})
export class SharedModule { }
