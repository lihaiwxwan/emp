import { Component, OnInit } from '@angular/core';
//import { Http, Response, Headers, RequestOptions,URLSearchParams } from '@angular/http';
// 引入观察者模式的插件
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {UserdataService} from '../../login/userdata.service';
//引入动画模块
import {flyIn} from '../../animation/fly-in';
declare var jQuery:any;
@Component({
  selector: 'app-jurisdiction',
  templateUrl: './jurisdiction.component.html',
  styleUrls: ['./jurisdiction.component.css'],
  viewProviders:[UserdataService],
  animations:[flyIn]
})
export class JurisdictionComponent implements OnInit {
  private $:any;
  private jurisds:any;
  private jurisdlist:any;
  constructor(private jurisd:UserdataService) {
  	this.$=jQuery;
  	this.jurisds=jurisd;
  }

  ngOnInit() {
  	var $=this.$;
  	this.jurisds.getUserData('mock-data/postlist-mock.json').subscribe(
					res=>{
						this.jurisdlist=res.items;
						console.log(this.jurisdlist);
					},
					error=>{
						console.log(error);
					}
				);
  }
  datalist(index){
  	this.jurisdlist.splice(index,1);
  }
}
