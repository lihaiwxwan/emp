import { Component, OnInit } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { Http, Response, Headers, RequestOptions,URLSearchParams } from '@angular/http';
// 引入观察者模式的插件
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {UserdataService} from '../../login/userdata.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  viewProviders:[UserdataService]
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router,private user:UserdataService) { 
    
  }

  ngOnInit() {
  }
  //退出登录
  logout(){
  	alert('你已成功退出');
  	 sessionStorage.removeItem('userName');
  	 sessionStorage.removeItem('passwd');
  	 //将路由跳转到  workspace页
		this.router.navigateByUrl('login');
  }
}
