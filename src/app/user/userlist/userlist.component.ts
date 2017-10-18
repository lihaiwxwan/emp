import { Component, OnInit } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { Http, Response, Headers, RequestOptions,URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {UserlistService} from './userlist.service';
//引入动画模块
import {flyIn} from '../../animation/fly-in';
import 'rxjs/add/operator/map';
declare var jQuery:any;
declare var layui:any;
@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css'],
  viewProviders:[UserlistService],
  animations:[flyIn]
})
export class UserlistComponent implements OnInit {
  private $:any;
  private userlist:any;
  private list:any;
  constructor(private router:Router,private uslist:UserlistService) {
  	this.$=jQuery;
  	this.userlist = uslist;
  }

  ngOnInit() {
  	this.getDataList();
  	
  	var $=this.$;
  }
  ngDoCheck(){
  	window.onload=function(){
  		layui.use('table', function(){
			  var table = layui.table;
			});
  	}
  	
  }
  //删除
  deleteUser(id){
  	this.uslist.getUserData('http://192.168.1.7/data/delNormalUser.php?id='+id).subscribe(//订阅
  		res=>{
  			console.log(res);
  			if (res.result ==1) {
  				alert('这条记录删除成功')
  				//重新获取数据
  				this.getDataList();
  			}
  		},
  		error=>{
  			console.log('这条记录删除失败');
  		}
  	);
  }
  //修改
///**
// *
// 1.点击修改按钮,会传参数,跳转修改页面
// 2.通过参数,获取该条需要修改的数据信息
// 3.将获取的数据写入表单
// 4.修改表单内容
// 5.提交修改信息
// 6.跳转到列表页
// */
  updataUser(id){
  	console.log(id)
  	//1.点击修改按钮,会传参数,跳转修改页面
  	this.router.navigateByUrl('workspace/user/edituser/'+id)
  }
  //添加用户
  touseradd(){
  	this.router.navigateByUrl('workspace/user/useradd')
  }
  //获取用户数据
  getDataList(){
  	this.uslist.getUserData('http://192.168.1.7/data/getNormalUser.php').subscribe(//订阅
			  		res=>{
			  			console.log(res);
			  			this.list=res;
			  		}
			  	);
  }
}
