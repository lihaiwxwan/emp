import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import {RouterModule} from '@angular/router';
import {userRoutes} from './user.routes';
import { UserlistComponent } from './userlist/userlist.component';
import { FrameworkComponent } from './framework/framework.component';
import { RoleComponent } from './role/role.component';
import { UserlistService } from './userlist/userlist.service';
import { JurisdictionComponent } from './jurisdiction/jurisdiction.component';
import { UseraddComponent } from './useradd/useradd.component';
import {DataTableModule,SharedModule} from 'primeng/primeng';
import {FormsModule} from '@angular/forms';
import {TreeModule,TreeNode} from 'primeng/primeng';
@NgModule({
  imports: [
    CommonModule,RouterModule,RouterModule.forChild(userRoutes),DataTableModule,SharedModule,FormsModule,TreeModule
  ],
  declarations: [UserComponent, UserlistComponent, FrameworkComponent, RoleComponent, JurisdictionComponent, UseraddComponent],
  providers:[UserlistService]
})
export class UserModule { }
