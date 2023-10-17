import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { strongPasswordValidator, passwordsMustMatch } from '../../../core/validators/password-validators';
import { uniqueUsernameValidator } from '../../../core/validators/username-validators';
import { UserService } from '../../../core/services/user.service';

@Component({
  	selector: 'app-header-lp',
  	templateUrl: './header-lp.component.html',
  	styleUrls: ['./header-lp.component.css']
})
export class HeaderLpComponent implements OnInit {

	modalIsOpen: boolean = false;
	signUpForm!: FormGroup;

	constructor(private router: Router,
				private formBuilder: FormBuilder,
				private userService: UserService) {};

	ngOnInit(): void {
		this.signUpForm = this.formBuilder.group({
			username: ['', Validators.required, uniqueUsernameValidator(this.userService)],
			password: ['', Validators.required, strongPasswordValidator()],
			passwordVerif: ['', Validators.required],
			profileImageUrl: ['', Validators.required, 
				Validators.pattern('https?://.+'), ]
		}), {
			validator: passwordsMustMatch('password', 'passwordVerif')
		};
	}

	// modals 

	public openModal() : void {
		this.modalIsOpen = true;
	}

	public closeModal() : void {
		this.modalIsOpen = false;
	}

	// routing
	
	private goToMain() : void {
		this.router.navigate(['main']);
	}
}
