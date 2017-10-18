import { Component, OnInit } from '@angular/core';
// 引入观察者模式的插件
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {UserdataService} from '../../login/userdata.service';
//引入动画模块
import {flyIn} from '../../animation/fly-in';
declare var jQuery:any;
@Component({
  selector: 'app-framework',
  templateUrl: './framework.component.html',
  styleUrls: ['./framework.component.css'],
  viewProviders:[UserdataService],
  animations:[flyIn]
})
export class FrameworkComponent implements OnInit {
  private $:any;
  private framework:any;
  private frameworklist:any;
  private usermc:any;
  private cor:any;
  constructor(private framew:UserdataService) { 
   this.$=jQuery;
   this.framework=framew;
  }

  ngOnInit() {
  	var $=this.$;
  	this.framework.getUserData('mock-data/org-tree-mock.json').subscribe(
					res=>{
						this.frameworklist=res;
						console.log(res);
					},
					error=>{
						console.log(error);
					}
					
				);
  }
  nodeSelect(e){
  	console.log(e);
		this.usermc=e.node.label;
		this.cor=e.node.data;
  }
}
