import {RouterModule} from '@angular/router';
import {UserComponent} from './user.component';

import {FrameworkComponent} from './framework/framework.component';
import {JurisdictionComponent} from './jurisdiction/jurisdiction.component';
import {RoleComponent} from './role/role.component';
import {UserlistComponent} from './userlist/userlist.component';
import {UseraddComponent} from './useradd/useradd.component'
//创建路由表
//创建路由表
export const userRoutes = [
	{
		path:'',
		component:UserComponent,
		children:[
		  {
		  	path:'',
		  	component:UserlistComponent
		  },
		  {
		  	path:'userlist',
		  	component:UserlistComponent
		  },
		  {
		  	path:'edituser/:id',//修改的路由
		  	component:UseraddComponent
		  },
		  {
		  	path:'framework',
		  	component:FrameworkComponent
		  }
		  ,
		  {
		  	path:'role',
		  	component:RoleComponent
		  }
		  ,
		  {
		  	path:'jurisdiction',
		  	component:JurisdictionComponent
		  }
		  ,
		  {
		  	path:'useradd',
		  	component:UseraddComponent
		  }
		]
	}
	
];
