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
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css'],
  viewProviders:[UserdataService],
  animations:[flyIn]
})
export class RoleComponent implements OnInit {
  private $:any;
  private roles:any;
  private rolelist:any;
  constructor(private role:UserdataService) { 
   this.$=jQuery;
   this.roles=role;
  }

  ngOnInit() {
    		this.roles.getUserData('mock-data/postlist-mock.json').subscribe(
					res=>{
						
						this.rolelist=res.items;
						console.log(this.rolelist);
					},
					error=>{
						console.log(error);
					}
					
				);
  	var $=this.$;
  }

}
