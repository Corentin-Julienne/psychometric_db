import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from "../models/user.model";

@Injectable({
	providedIn: 'root'
})
export class UserService {

	private apiUrl: string = ''; // update this
	
	constructor(private http: HttpClient) {};

	getActiveUser() : Observable<User> {
		return this.http.get<User>(`${this.apiUrl}`); // update this
	}

	checkIfUsernameExists(username: string): Observable<boolean> {
		return this.http.get<boolean>(`${this.apiUrl}`); // update this
	}
}
