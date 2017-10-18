import { Component, OnInit } from '@angular/core';
//引入动画模块
import {flyIn} from '../../animation/fly-in';
declare var jQuery:any;
@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css'],
  animations:[flyIn]
})
export class CommentComponent implements OnInit {
  private $:any;
  constructor() {
  	this.$=jQuery;
  }

  ngOnInit() {
  	var $=this.$;
  	var heing=$(document).height();
  	$('.comment').css('height',heing-60)
  }

}
