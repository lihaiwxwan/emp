import { Component, OnInit } from '@angular/core';
import {IntoService} from './into.service';
declare var layui:any;
@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.css']
})
export class WorkspaceComponent implements OnInit {

  constructor(into:IntoService) {
  	
  	
  }

  ngOnInit() {
  	layui.use('element', function(){
			  var element = layui.element; //导航的hover效果、二级菜单等功能，需要依赖element模块
		  });
  }
  ngDoCheck(){
  		
  		
   }
}
