import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  public nombreApellidoPattern : string = '([a-zA-Z]+) ([a-zA-Z]+)';
  public emailPattern          : string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

  
  constructor() { }
  
  noPuedeSer( control: FormControl ): ValidationErrors | null {
      const valor: string = control.value?.trim().toLowerCase();
      if( valor === 'ferveg' ){
          return {
              userValid: false
          }
      }
      return null;
  }

  noIguales(control1: string, control2: string) {

    return (formGroup: AbstractControl): ValidationErrors | null => {

      const pass1 = formGroup.get(control1)?.value;
      const pass2 = formGroup.get(control2)?.value;

      if( pass1 !== pass2 ){
        formGroup.get(control2)?.setErrors({ noIguales: true });
        return { noIguales: true }
      }
      
      formGroup.get(control2)?.setErrors(null);
      return null;
    }
  }

}
