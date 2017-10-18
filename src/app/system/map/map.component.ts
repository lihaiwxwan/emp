import { Component, OnInit } from '@angular/core';
//引入动画模块
import {flyIn} from '../../animation/fly-in';
declare var jQuery:any;
declare var BMap:any;
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  animations:[flyIn]
})
export class MapComponent implements OnInit {
  private $:any;
  constructor() {
  	this.$=jQuery;
  }

  ngOnInit() {
  	var $=this.$;
			// 百度地图API功能
//			var map = new BMap.Map("allmap");
//			var point = new BMap.Point(116.331398,39.897445);
//			map.centerAndZoom(point,12);
//		
//			function myFun(result){
//				var cityName = result.name;
//				map.setCenter(cityName);
//				alert("当前定位城市:"+cityName);
//			}
//			var myCity = new BMap.LocalCity();
//			myCity.get(myFun);
//			map.enableScrollWheelZoom(true);
			
			
			var sContent =
	"<h4 style='margin:0 0 5px 0;padding:0.2em 0'>资信达大厦</h4>" +  
	"<p style='margin:0;line-height:1.5;font-size:13px;text-indent:2em'>深圳市宝安区宝源路1053号</p>" + 
	"</div>";
	var map = new BMap.Map("allmap");
	var point = new BMap.Point(113.874793,22.570959);
	var marker = new BMap.Marker(point);
	var infoWindow = new BMap.InfoWindow(sContent);  // 创建信息窗口对象
	map.centerAndZoom(point, 15);
	map.addOverlay(marker);
	marker.addEventListener("click", function(){          
	   this.openInfoWindow(infoWindow);
	   //图片加载完毕重绘infowindow
	   document.getElementById('imgDemo').onload = function (){
		   infoWindow.redraw();   //防止在网速较慢，图片未加载时，生成的信息框高度比图片的总高度小，导致图片部分被隐藏
	   }
	});
  }

}
