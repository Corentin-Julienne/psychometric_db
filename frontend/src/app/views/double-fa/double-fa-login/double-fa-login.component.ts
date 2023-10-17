import { Component, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-double-fa-login',
  templateUrl: './double-fa-login.component.html',
  styleUrls: ['./double-fa-login.component.css']
})
export class DoubleFaLoginComponent implements OnDestroy {
	
	verifyForm!: FormGroup;
	verificationFailed = false;
	
	private subscription: Subscription = new Subscription();
	private apiUrl: string = ''; // update this

	constructor(private formBuilder: FormBuilder, private http: HttpClient) {
		this.verifyForm = this.formBuilder.group({
			token: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(6)]]
		});
	};

	onSubmit() : void {
		const token = this.verifyForm.get('token')?.value;

		const sub = this.http.post(`${this.apiUrl}`, { token }).subscribe((data: any) => {
			if (data.success) {
				// implement goto main page
			} else {
				this.verificationFailed = true;
			}
		});
		this.subscription.add(sub);
	}

	private handleAuthSuccess() : void {
		// to implement
	}

	ngOnDestroy(): void {
		if (this.subscription) {
			this.subscription.unsubscribe();
		}
	}
}
