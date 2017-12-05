import { AbstractControl, ValidatorFn } from '@angular/forms';

export function minValueValidator(compareToThisValue: number): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } => {
    const lessThan = parseInt(control.value) < compareToThisValue;
    return lessThan ? { 'minValue': { value: control.value } } : null;
  };
}
