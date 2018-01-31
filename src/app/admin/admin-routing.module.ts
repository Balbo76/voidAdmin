import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminComponent} from './admin.component';
import {DashBoardComponent} from './dash-board/dash-board1/dash-board.component';
import {TablesComponent} from './tables/tables.component';
import {PageNotFoundComponent} from '../public/page-not-found/page-not-found.component';
import {ProfileComponent} from './profile/profile.component';
import {SettingsComponent} from './settings/settings.component';
import {Ng2ChartsComponent} from './angular-charts/ng2-charts.component';

import {AuthGuard} from './auth-guard.service';

import {PanelsComponent} from './ui-elements-menu/panels/panels.component';
import {ButtonsComponent} from './ui-elements-menu/buttons/buttons.component';
import {NotificationsComponent} from './ui-elements-menu/notifications/notifications.component';
import {TypographyComponent} from './ui-elements-menu/typography/typography.component';
import {IconsComponent} from './ui-elements-menu/icons/icons.component';
import {GridComponent} from './ui-elements-menu/grid/grid.component';
import {BlankPageComponent} from "./sample-pages/blank-page/blank-page.component";
import {CalendarComponent as CalendarComponentPage} from "./sample-pages/calendar/calendar.component";
import {DashBoard2Component} from "./dash-board/dash-board2/dash-board2.component";

const adminRoutes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        children: [
          { path: '', component: DashBoardComponent, data: {
            breadcrumb: [{text: 'Admin', link: '#'}, {text: 'Dashboard', link: '#'}]}},
          { path: 'dashboard2', component: DashBoard2Component, data: {
            breadcrumb: [{text: 'Admin', link: '#'}, {text: 'Dashboard 2', link: '#'}]}},

          { path: 'tables', component: TablesComponent, data: {
            breadcrumb: [{text: 'Admin', link: '#'}, {text: 'Tables', link: '#'}]}},
          { path: 'profile', component: ProfileComponent, data: {
            breadcrumb: [{text: 'Admin', link: '#'}, {text: 'User Profile', link: '#'}]}},
          { path: 'settings', component: SettingsComponent, data: {
            breadcrumb: [{text: 'Admin', link: '#'}, {text: 'Settings', link: '#'}]}},
          { path: 'ng2-charts', component: Ng2ChartsComponent, data: {
            breadcrumb: [{text: 'Admin', link: '#'}, {text: 'Angular Chart', link: '#'}]}},

          { path: 'panels', component: PanelsComponent, data: {
            breadcrumb: [{text: 'Admin', link: '#'}, {text: 'UI Elements', link: '#'}, {text: 'Panels & Wells', link: '#'}]}},
          { path: 'buttons', component: ButtonsComponent, data: {
            breadcrumb: [{text: 'Admin', link: '#'}, {text: 'UI Elements', link: '#'}, {text: 'Button', link: '#'}]}},
          { path: 'notifications', component: NotificationsComponent, data: {
            breadcrumb: [{text: 'Admin', link: '#'}, {text: 'UI Elements', link: '#'}, {text: 'Notifications', link: '#'}]}},
          { path: 'typography', component: TypographyComponent, data: {
            breadcrumb: [{text: 'Admin', link: '#'}, {text: 'UI Elements', link: '#'}, {text: 'Typography', link: '#'}]}},
          { path: 'icons', component: IconsComponent, data: {
            breadcrumb: [{text: 'Admin', link: '#'}, {text: 'UI Elements', link: '#'}, {text: 'Icons', link: '#'}]}},
          { path: 'grid', component: GridComponent, data: {
            breadcrumb: [{text: 'Admin', link: '#'}, {text: 'UI Elements', link: '#'}, {text: 'Grid', link: '#'}]}},

          { path: 'blank', component: BlankPageComponent, data: {
            breadcrumb: [{text: 'Admin', link: '#'}, {text: 'Sample Pages', link: '#'}, {text: 'Blank Page', link: '#'}]}},
          { path: 'calendar', component: CalendarComponentPage, data: {
            breadcrumb: [{text: 'Admin', link: '#'}, {text: 'Sample Pages', link: '#'}, {text: 'Calendar', link: '#'}]}},


          { path: '**', component: PageNotFoundComponent, data: {
            breadcrumb: [{text: 'Admin', link: '#'}, {text: 'Page not Found', link: '#'}]} }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class AdminRoutingModule {}
