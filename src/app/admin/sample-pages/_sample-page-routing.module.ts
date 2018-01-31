import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AuthGuard} from "../auth-guard.service";
import {AdminComponent} from "../admin.component";
import {BlankPageComponent} from './blank-page/blank-page.component';

const samplePagesRoutes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        children: [
          {path: 'blank', component: BlankPageComponent}
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(samplePagesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class SamplePagesRoutingModule { }
