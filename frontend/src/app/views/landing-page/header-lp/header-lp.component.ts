import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  	selector: 'app-header-lp',
  	templateUrl: './header-lp.component.html',
  	styleUrls: ['./header-lp.component.css']
})
export class HeaderLpComponent {

	constructor(private router: Router) {};

	public goToMain() : void {
		this.router.navigate(['main']);
	}
}
