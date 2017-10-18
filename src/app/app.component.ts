import { Component } from '@angular/core';
declare var jQuery:any;
declare var layui:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	private $:any;
	constructor() {
  	this.$=jQuery;
  }
	ngOnInit() {
  	
  	var $=this.$;
  }
  title = 'app';
}
