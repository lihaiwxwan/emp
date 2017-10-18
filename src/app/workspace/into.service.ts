
import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';

@Injectable()
export class IntoService implements CanActivate{
  private username:string;
  private password:string;
  constructor(private router:Router) { }
  //定义守卫的内容
  canActivate():boolean{
	console.log('路由守卫到这里');
  	this.username=sessionStorage.getItem('userName');
  	this.password=sessionStorage.getItem('passwd');
  	if (this.username == 'admin' && this.password == '12345678') {
  		return true;
  	}else{
//		alert('登录失败');
  		this.router.navigateByUrl('login');
  		return false;
  	}
  }
}