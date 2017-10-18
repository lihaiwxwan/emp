import { Component, OnInit } from '@angular/core';
declare var jQuery:any;
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  private $:any;
  constructor() { 
    this.$=jQuery;
  }

  ngOnInit() {
  	var $=this.$;
  	var heing=$(document).height();
  	$('.min').css('height',heing-60)
  }

}
