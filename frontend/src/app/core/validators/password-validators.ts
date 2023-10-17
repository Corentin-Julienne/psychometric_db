import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { FormGroup } from '@angular/forms';

export function strongPasswordValidator() : ValidatorFn {
	return (control: AbstractControl): ValidationErrors | null => {
		
		const value = control.value;

		if (!value) {
			return null;
		}

		const errors: ValidationErrors = {};

		if (!/[a-z]/.test(value)) {
			errors['lowercaseRequired'] = true;
		}
	  
		if (!/[0-9]/.test(value)) {
			errors['numberRequired'] = true;
		}
	  
		if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(value)) {
			errors['specialCharRequired'] = true;
		}
	  
		if (value.length < 8) {
			errors['minLengthRequired'] = true;
		}

        return Object.keys(errors).length ? errors : null;
	}
}

export function passwordsMustMatch(controlName: string, matchingControlName: string) {
	return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];

        if (matchingControl.errors && !matchingControl.errors['passwordsMustMatch']) {
            return;
        }

        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ passwordsMustMatch: true });
        } else {
            matchingControl.setErrors(null);
        }
    };
}
