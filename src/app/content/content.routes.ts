import {RouterModule} from '@angular/router';
import { ContentComponent } from './content.component';
import {ArticleComponent} from './article/article.component';
import {CommentComponent} from './comment/comment.component';
//创建路由表
//创建路由表
export const contentRoutes = [
	{
		path:'',
		children:[
		  {
		  	path:'',
		  	component:ArticleComponent
		  },
		  {
		  	path:'article',
		  	component:ArticleComponent
		  },
		  {
		  	path:'comment',
		  	component:CommentComponent
		  }
		]
	}
	
];
