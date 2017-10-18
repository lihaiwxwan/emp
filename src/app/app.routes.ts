import {RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {WorkspaceModule} from './workspace/workspace.module';

	
//创建路由表
export const appRoutes = [
{
	path:'',
	redirectTo:'login',
	pathMatch:'full'
},
  {
  	path:'login',
  	component:LoginComponent
},
{
	path:'workspace',
	loadChildren:'./workspace/workspace.module#WorkspaceModule'
}
]
