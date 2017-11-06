import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-education',
  templateUrl: 'education.html'
})
export class EducationPage {
	
	content1: any;
	content2: any;
	content3: any;

  constructor(public navCtrl: NavController) {

  }

  buttonClick1(){
  	this.content1 = "Diabetes help. Free program provides personal support to MESSA members MESSA members and their dependents with dia... Read more... MESSA rolling out ...";
  }

  buttonClick2(){
  	this.content2 = "That program evolved through the years and the Michigan Education Special Services Association (MESSA) was formed in 1960. We are a not-for-profit";
  }

  buttonClick3(){
  	this.content3 = "MESSA provides a number of group insurance options for our members and local bargaining teams. Please find below links to basic information about many o";
  }

}
