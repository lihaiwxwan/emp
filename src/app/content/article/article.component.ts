import { Component, OnInit } from '@angular/core';
//引入动画模块
import {flyIn} from '../../animation/fly-in';
declare var jQuery:any;
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  animations:[flyIn]
})
export class ArticleComponent implements OnInit {
  private $:any;
  constructor() { 
    this.$=jQuery;
  }

  ngOnInit() {
  	var $=this.$;
  }

}
