import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit{

  miFormulario = this.fb.group({
    genero          : ['F', Validators.required],
    notificaciones  : [true, Validators.required],
    condiciones     : [false, Validators.requiredTrue]
  })

  persona = {
    genero         :  'M',
    notificaciones :  true
  }

  
  constructor( private fb: FormBuilder ) { }
  
  ngOnInit(){
    this.miFormulario.reset({
      ...this.persona,
      condiciones: true
    });

    this.miFormulario.valueChanges.subscribe( ({condiciones, ...rest}) => {
      // delete resp.condiciones;
      this.persona = rest;
    })
  }

  guardar( ) {
    const formValue = {...this.miFormulario.value};
    delete formValue.condiciones;

    this.persona = formValue;
  }

}
