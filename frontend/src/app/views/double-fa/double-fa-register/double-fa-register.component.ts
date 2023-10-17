import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';

@Component({
  	selector: 'app-double-fa-register',
  	templateUrl: './double-fa-register.component.html',
  	styleUrls: ['./double-fa-register.component.css']
})
export class DoubleFaRegisterComponent implements OnInit, OnDestroy {

	qrCodeUrl!: string;
	private subscription: Subscription = new Subscription();

	private apiUrl: string = ''; // update this
	
	constructor(private http: HttpClient) {}

	ngOnInit(): void {
		const sub = this.http.get(`${this.apiUrl}`).subscribe((data: any) => {
			this.qrCodeUrl = data; // test this and debug
		});
		this.subscription.add(sub);
	}

	ngOnDestroy(): void {
		if (this.subscription) {
			this.subscription.unsubscribe();
		}
	}
}
