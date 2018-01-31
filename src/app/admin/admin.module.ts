import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SharedModule} from '../shared/shared.module';

import {AuthGuard} from './auth-guard.service';

import { BsDropdownModule } from 'ngx-bootstrap';
import { CollapseModule } from 'ngx-bootstrap';
import { ModalModule } from 'ngx-bootstrap';
import { TooltipModule } from 'ngx-bootstrap';
import { PopoverModule } from 'ngx-bootstrap';
import { ToastrModule } from 'ngx-toastr';



import { ChartsModule } from 'ng2-charts';
import { MomentModule } from 'angular2-moment';
import { AgmCoreModule } from '@agm/core';

import {UiElementsMenuModule} from './ui-elements-menu/ui-elements-menu.module';
import {SamplePagesModule} from './sample-pages/sample-page.module';


import {NavbarComponent} from './_ui/navbar/navbar.component';
import { ToggleButtonComponent} from './_ui/toggle-button/toggle-button.component';
import {SidebarComponent} from './_ui/sidebar/sidebar.component';
import { FloatOptionsComponent } from './_ui/float-options/float-options.component';
import { BackToTopComponent } from './_ui/back-to-top/back-to-top.component';
import { BreadcrumbsComponent } from './_ui/breadcrumbs/breadcrumbs.component';



import {AdminComponent} from './admin.component';

import {DashBoardComponent} from './dash-board/dash-board1/dash-board.component';
import {DashBoard2Component} from './dash-board/dash-board2/dash-board2.component';
import {TablesComponent} from './tables/tables.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { Ng2ChartsComponent} from './angular-charts/ng2-charts.component';


import {AdminRoutingModule} from './admin-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    TooltipModule.forRoot(),
    PopoverModule.forRoot(),
    ToastrModule.forRoot(),
    CollapseModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDlpf6c7KsGDBePZ8kq0MoXZxfYHBVKbsA'
    }),
    ChartsModule,
    MomentModule,
    AdminRoutingModule,
    UiElementsMenuModule,
    SamplePagesModule
  ],
  declarations: [
    AdminComponent,
    DashBoardComponent,
    DashBoard2Component,
    TablesComponent,
    SidebarComponent,
    NavbarComponent,
    ToggleButtonComponent,
    ProfileComponent,
    SettingsComponent,
    BreadcrumbsComponent,
    FloatOptionsComponent,
    Ng2ChartsComponent,
    BackToTopComponent
  ],
  providers: [
    AuthGuard
  ]
})
export class AdminModule {}
