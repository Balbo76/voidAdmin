import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TooltipModule } from 'ngx-bootstrap';
import { PopoverModule } from 'ngx-bootstrap';

import {ButtonsComponent} from './buttons/buttons.component';
import {GridComponent} from './grid/grid.component';
import {IconsComponent} from './icons/icons.component';
import {NotificationsComponent} from './notifications/notifications.component';
import {PanelsComponent} from './panels/panels.component';
import {TypographyComponent} from './typography/typography.component';

@NgModule({
  imports: [
    CommonModule,
    TooltipModule.forRoot(),
    PopoverModule.forRoot()
  ],
  declarations: [
    ButtonsComponent,
    GridComponent,
    IconsComponent,
    NotificationsComponent,
    PanelsComponent,
    TypographyComponent
  ]
})
export class UiElementsMenuModule { }
