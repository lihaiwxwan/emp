import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkspaceComponent } from './workspace.component';
import { HeaderComponent } from './header/header.component';
import { LeftComponent } from './left/left.component';
import {IntoService} from './into.service';
import {RouterModule} from '@angular/router';

//workspaceRoutes
import {workspaceRoutes} from './workspace.routes';
@NgModule({
  imports: [
    CommonModule,RouterModule,RouterModule.forChild(workspaceRoutes)
  ],
  declarations: [WorkspaceComponent, HeaderComponent, LeftComponent],
  providers:[IntoService]
})
export class WorkspaceModule { }
