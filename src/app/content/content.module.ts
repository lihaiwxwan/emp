import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from './article/article.component';
import { CommentComponent } from './comment/comment.component';
import { ContentComponent } from './content.component';
import {RouterModule} from '@angular/router';
import {contentRoutes} from './content.routes';

@NgModule({
  imports: [
    CommonModule,RouterModule,RouterModule.forChild(contentRoutes)
  ],
  declarations: [ArticleComponent, CommentComponent, ContentComponent]
})
export class ContentModule { }
