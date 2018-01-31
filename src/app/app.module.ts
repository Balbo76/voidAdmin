import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { BsDropdownModule } from 'ngx-bootstrap';
import { CollapseModule } from 'ngx-bootstrap';
import { TooltipModule } from 'ngx-bootstrap';
import { ModalModule } from 'ngx-bootstrap';
import { PopoverModule } from 'ngx-bootstrap';
import { ToastrModule } from 'ngx-toastr';
//import { UiSwitchModule } from 'ngx-toggle-switch/src';
//import {CalendarComponent as myCalendar} from "angular2-fullcalendar/src/calendar/calendar";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './public/login/login.component';
import { HomeComponent } from './public/home/home.component';
import { PageNotFoundComponent } from './public/page-not-found/page-not-found.component';
import { AdminModule } from './admin/admin.module';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    //BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    AdminModule,
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    TooltipModule.forRoot(),
    PopoverModule.forRoot(),
    ToastrModule.forRoot(),
    CollapseModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


