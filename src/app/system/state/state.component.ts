import { Component, OnInit } from '@angular/core';
//引入动画模块
import {flyIn} from '../../animation/fly-in';
declare var jQuery:any;
declare var echarts:any;
//declare var option:any;
//declare var setOption:any;
@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css'],
  animations:[flyIn]
})
export class StateComponent implements OnInit {
  private $:any;
  constructor() { 
    this.$=jQuery;
  }

  ngOnInit() {
  	
  	var $=this.$;
  	
  	// 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('main'));
        // 指定图表的配置项和数据
        var option = {
			    title : {
			        text: 'Emp访问用户地区分布',
			        subtext: '纯属虚构',
			        x:'center'
			    },
			    tooltip : {
			        trigger: 'item',
			        formatter: "{a} <br/>{b} : {c} ({d}%)"
			    },
			    legend: {
			        orient: 'vertical',
			        left: 'left',
			        data: ['深圳','北京','广州','上海','长沙']
			    },
			    series : [
			        {
			            name: '访问来源',
			            type: 'pie',
			            radius : '55%',
			            center: ['50%', '60%'],
			            data:[
			                {value:335, name:'深圳'},
			                {value:310, name:'北京'},
			                {value:234, name:'广州'},
			                {value:135, name:'上海'},
			                {value:1548, name:'长沙'}
			            ],
			            itemStyle: {
			                emphasis: {
			                    shadowBlur: 10,
			                    shadowOffsetX: 0,
			                    shadowColor: 'rgba(0, 0, 0, 0.5)'
			                }
			            }
			        }
			    ]
		};
		    // 使用刚指定的配置项和数据显示图表。
		    myChart.setOption(option);
		    
		    
		    var myChart2 = echarts.init(document.getElementById('main2'));
				var option2 = {
				    color: ['#3398DB'],
				    tooltip : {
				        trigger: 'axis',
				        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
				            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
				        }
				    },
				    grid: {
				        left: '3%',
				        right: '4%',
				        bottom: '3%',
				        containLabel: true
				    },
				    xAxis : [
				        {
				            type : 'category',
				            data : ['1', '2', '3', '4', '5', '6', '7','8','9','10','11','12'],
				            axisTick: {
				                alignWithLabel: true
				            }
				        }
				    ],
				    yAxis : [
				        {
				            type : 'value'
				        }
				    ],
				    series : [
				        {
				            name:'直接访问',
				            type:'bar',
				            barWidth: '60%',
				            data:[10, 52, 200, 334, 390, 330, 220,444,563,124,412,11]
				        }
				    ]
				};
        // 使用刚指定的配置项和数据显示图表。
	    myChart2.setOption(option2);
	    
	    var myChart3 = echarts.init(document.getElementById('main3'));
			 var option3 = {
		    title: {
		        text: ''
		    },
		    tooltip: {
		        trigger: 'axis'
		    },
		    legend: {
		        data:[]
		    },
		    grid: {
		        left: '3%',
		        right: '4%',
		        bottom: '3%',
		        containLabel: true
		    },
		    toolbox: {
		        feature: {
		            saveAsImage: {}
		        }
		    },
		    xAxis: {
		        type: 'category',
		        boundaryGap: false,
		        data: ['1','2','3','4','5','6','7','8','9','10','11','12']
		    },
		    yAxis: {
		        type: 'value'
		    },
		    series: [
		        {
		            name:'查看次数',
		            type:'line',
		            stack: '总量',
		            data:[120, 132, 101, 134, 90, 230, 210,325,325,32,325,6]
		        }
		    ]
		};
       // 使用刚指定的配置项和数据显示图表。
	    myChart3.setOption(option3);
  }
}
