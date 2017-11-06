import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { EducationPage } from '../education/education';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  color = "sblue";

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = EducationPage;

  constructor() {

  }

  changeColor(){
  	if(this.color == "sblue"){
  		this.color = "light";
  	}
}

	colorMain(){
		this.color = "sblue";
	}


}
