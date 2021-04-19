import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  // miFormulario: FormGroup = new FormGroup({
  //   'nombre' : new FormControl('RTX 4080TI')
  // })

  miFormulario = this._fb.group({
    'nombre'      : [null, [Validators.required, Validators.minLength(3)]],
    'precio'      : [null, [Validators.required, Validators.min(0)]],
    'existencias' : [null, [Validators.required, Validators.min(0)]]
  })
  
  constructor( private _fb: FormBuilder) { }

  esValido( control: string ): boolean | null {
    return this.miFormulario.controls[control].invalid 
            && this.miFormulario.controls[control].touched
  }

  guardar( ) {
    if(this.miFormulario.invalid){
      return this.miFormulario.markAllAsTouched();
    }

    console.log(this.miFormulario.controls.value);

    this.miFormulario.reset();
  }

} 
