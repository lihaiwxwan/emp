import { Component, OnInit } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { Http, Response, Headers, RequestOptions,URLSearchParams } from '@angular/http';
// 引入观察者模式的插件
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {UserdataService} from './userdata.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  viewProviders:[UserdataService]
})
export class LoginComponent implements OnInit {
	private userApi:any;
	private student:any;
	private studentposs:any;
  constructor(private router:Router,private user:UserdataService) {
  	this.userApi = user;
  }

  ngOnInit() {
  	
  }
  login(){
//	this.userApi.getUserData('mock-data/user-login-mock.json').subscribe(
//		res=>{
//			
//			console.log(res.username);
//			console.log(res.paword);
//			if(res.username == this.student && res.paword == this.studentposs){
//				alert('登录成功');
//				//将登录信息保存在sessionStorage中
//				sessionStorage.setItem('userName',res.username);
//				sessionStorage.setItem('passwd',res.paword);
//				//将路由跳转到  workspace页
//				this.router.navigateByUrl('workspace');
//			}else{
//				alert('用户名或密码错误,请重新输入!');
//			}
//		},
//		error=>{
//			console.log(error);
//		}
//		
//	);
  	//以post方式获取登录是否成功的信息
  	this.userApi.postUserData('http://192.168.1.7/data/getUser.php',this.student,this.studentposs).subscribe(
  		res=>{
  			console.log(res);
  			if(res == null){
  				alert('用户名或密码错误,请重新输入');
  			}else{
		  				if(res.username == this.student && res.password == this.studentposs){
								alert('登录成功');
								//将登录信息保存在sessionStorage中
								sessionStorage.setItem('userName',res.username);
								sessionStorage.setItem('passwd',res.password);
								//将路由跳转到  workspace页
								this.router.navigateByUrl('workspace');
							}
  			    }
  		}
  	);
};
}