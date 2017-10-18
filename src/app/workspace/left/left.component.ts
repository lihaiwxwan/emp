import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions,URLSearchParams } from '@angular/http';
// 引入观察者模式的插件
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {UserdataService} from '../../login/userdata.service';
declare var jQuery:any;
@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.css']
})
export class LeftComponent implements OnInit {
  private $:any;
  private navs:any;
  private navlist:any;
  private navlist2:any;
  constructor(private nav:UserdataService) {
  	this.$=jQuery;
  	this.navs=nav;
  	
  }

  ngOnInit() {
  	var $=this.$;
	  this.navs.getUserData('mock-data/left-nav-mock.json').subscribe(
					res=>{
						this.navlist=res;
						console.log(this.navlist);
					},
					error=>{
						console.log(error);
					}
				);
  }
  	
  
}
