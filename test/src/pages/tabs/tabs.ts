import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  color = "sblue";

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;

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
