import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user-model';//引入user的模型文件
import {UserlistService} from '../userlist/userlist.service';
//import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Router,ActivatedRoute,Params} from '@angular/router';
@Component({
  selector: 'app-useradd',
  templateUrl: './useradd.component.html',
  styleUrls: ['./useradd.component.css'],
  viewProviders:[UserlistService]
})
export class UseraddComponent implements OnInit {
  private user: User=new User();//创建新的user对象
  private userdata:any;
  private userId:number;//接收url传过来的参数
  constructor(private router:Router,private usdata:UserlistService,private arouter:ActivatedRoute) { 
    this.userdata=usdata;
  }

  ngOnInit() {
  	//接收修改的id参数
  	this.userId=this.arouter.params['value']['id'];
  	console.log(this.userId);
  	//判断是添加还是修改
  	if (this.userId != 	undefined) {//修改
  		//获取该条需要修改的数据信息
  		this.userdata.getUserData('http://192.168.1.7/data/getNormalUserSingle.php?id='+this.userId).subscribe(//订阅
			  		res=>{
			  			console.log(res);
			  			this.user=res;
			  			this.user.password2=res.password;
			  		}
			);
  	} else{//添加
  		
  	}
  }
  //添加用户数据的函数
  adduser(){
  	
  	if (this.userId!=undefined) {//修改
  		this.userdata.updateNormalUserData('http://192.168.1.7/data/updateNormalUser.php',this.user).subscribe(
	  		res=>{
	  			console.log(res);
	  			if(res.result >0){
	  				//跳转 列表页
	  				alert('这条记录修改成功!');
	  				this.router.navigateByUrl('workspace/user/userlist');
	  			}
	  			},
	  		error=>{
	  			console.log(error);
	  		}
	  	)
  	} else{
  		this.userdata.postNormalUserData('http://192.168.1.7/data/addNormalUser.php',this.user).subscribe(
  		res=>{
  			console.log(res);
  			if(res.result>0){
  				//跳转列表页
  				alert('这条记录添加成功');
  				this.router.navigateByUrl('workspace/user/userlist');
  			}
  		},
  		error=>{
  			console.log(error);
  		}
  	)
  	}
  	
  }
}
