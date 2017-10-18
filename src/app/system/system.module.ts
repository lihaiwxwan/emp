import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SystemComponent } from './system.component';
import { StateComponent } from './state/state.component';
import { MapComponent } from './map/map.component';

import {RouterModule} from '@angular/router';
import {systemRoutes} from './system.routes';


@NgModule({
  imports: [
    CommonModule,RouterModule,RouterModule.forChild(systemRoutes)
  ],
  declarations: [SystemComponent, StateComponent, MapComponent]
})
export class SystemModule { }
