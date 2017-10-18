import {RouterModule} from '@angular/router';
import {SystemComponent} from './system.component';

import {MapComponent} from './map/map.component';
import {StateComponent} from './state/state.component';
//创建路由表
//创建路由表
export const systemRoutes = [
	{
		path:'',
		children:[
		  {
		  	path:'',
		  	component:StateComponent
		  },
		  {
		  	path:'state',
		  	component:StateComponent
		  },
		  {
		  	path:'map',
		  	component:MapComponent
		  }
		]
	}
	
];
