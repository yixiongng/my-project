import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import 'hammerjs';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { MatInputModule } from '@angular/material';
import { MatButtonModule }from '@angular/material';


import { AppComponent } from './app.component';

import { MyFormComponent } from './my-form/my-form.component';
import { MyFilterComponent } from './my-filter/my-filter.component';
import { MatSelectModule } from '@angular/material';
import { MyBusrouteComponent } from './my-busroute/my-busroute.component';
@NgModule({
  declarations: [
    AppComponent,
    MyFormComponent,
    MyFilterComponent,
    MyBusrouteComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
   // MaterialModule,
    MatInputModule,
   MatButtonModule,
   MatSelectModule,
   ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
