import {RouterModule} from '@angular/router';
import {WorkspaceComponent} from './workspace.component';

import {IntoService} from './into.service'
//创建路由表
export const workspaceRoutes = [
  {
  	path:'',
  	component:WorkspaceComponent,
  	canActivate:[IntoService],//表示路由守卫的执行文件是哪一个

	children:[
	   {
	   	path:'',
	   	redirectTo:'user'
	   },
	   {
	   	  path:'user',
	   	  loadChildren:'../user/user.module#UserModule'
	   },
	   {
	   	  path:'content',
	   	  loadChildren:'../content/content.module#ContentModule'
	   },
	   {
	   	  path:'system',
	   	  loadChildren:'../system/system.module#SystemModule'
	   }
	]
  }
];
