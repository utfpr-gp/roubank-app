import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
  ValidatorFn,
} from '@angular/forms';
import { Directive, Input } from '@angular/core';

export function repasswordValidator(pwd: string): ValidatorFn {
  return (c: AbstractControl): ValidationErrors | null => {
    if (pwd.valueOf() == c.value.valueOf()) {
      return null;
    } else {
      return {
        validateRepassword: {
          valid: false,
        },
      };
    }
  };
}

@Directive({
  selector: '[validateRepassword]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: ValidateRepasswordDirective,
      multi: true,
    },
  ],
})
export class ValidateRepasswordDirective implements Validator {
  @Input('validateRepassword') password!: string;

  constructor() {}

  validate(control: AbstractControl): ValidationErrors | null {
    console.log(repasswordValidator(this.password));
    return this.password ? repasswordValidator(this.password)(control) : null;
  }
}
