import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { BlankPageComponent } from './blank-page/blank-page.component';
import { CalendarComponent } from './calendar/calendar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BlankPageComponent, CalendarComponent]
})
export class SamplePagesModule { }
