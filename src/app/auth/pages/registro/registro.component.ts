import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ValidatorService } from 'src/app/shared/Validator/validator.service';
import { EmailValidatorService } from '../../../shared/Validator/email-validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    nombre    : ['',[ Validators.required, Validators.pattern(this.vs.nombreApellidoPattern) ]],
    email     : ['',[ Validators.required, Validators.pattern(this.vs.emailPattern) ], [ this.ev ]],
    userName  : ['',[ Validators.required, this.vs.noPuedeSer ]],
    password  : ['',[ Validators.required, Validators.minLength(6) ] ],
    password2 : ['',[ Validators.required ] ]
  }, {
    validators: [this.vs.noIguales('password','password2')]
  })



  constructor(  private fb : FormBuilder,
                private ev : EmailValidatorService,
                private vs : ValidatorService) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre    :  'Fernando Rosales',
      email     :  'rosales@gmail.com',
      userName  :  'ferveg14'
    })
  }


  get errorEmailMsg( ): string{
    const error = this.miFormulario.get('email')?.errors;
    
    if(error?.required){
      return 'Este Campo Es Obligatorio';
    }else if( error?.pattern ){
      return 'El Formato Del Correo Electronico No Es Valido'
    }else if( error?.emailTomado ){ 
      return 'El Correo Electronico Ya Esta Registrado'
    }
    return '';
  }

  validar( control: string) {
    return this.miFormulario.get(control)?.invalid
            && this.miFormulario.get(control)?.touched;
  }

  formularioSubmit( ) {
    console.log(this.miFormulario.value);
    
    this.miFormulario.markAllAsTouched();
  }

}
