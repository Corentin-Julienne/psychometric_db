import { AbstractControl, ValidationErrors, AsyncValidatorFn } from "@angular/forms";
import { Observable, of, map, catchError } from "rxjs";
import { UserService } from '../services/user.service';

export function uniqueUsernameValidator(userService: UserService): AsyncValidatorFn {
	return (control: AbstractControl): Observable<ValidationErrors | null> => {
		return userService.checkIfUsernameExists(control.value).pipe(
			map(isTaken => (isTaken ? { uniqueUsername: true } : null)),
      		catchError(() => of(null))
		);
	}; 
}
