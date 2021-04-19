import { Component } from '@angular/core';
import { FormArray, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent {

  miFormulario = this.fb.group({
    nombre    : [,[Validators.required, Validators.minLength(3)]],
    favoritos : this.fb.array([
                  ['Metal Gear'],
                  ['persona 5']
                ], Validators.required)
  });

  nuevoFavorito: FormControl = this.fb.control( '', Validators.required );

  get favoritosArr(){
    return this.miFormulario.get('favoritos') as FormArray;
  }
  constructor(
    private fb: FormBuilder
  ) { }

  esValido( control: string ) {
    return this.miFormulario.controls[control].invalid 
            && this.miFormulario.controls[control].touched
  } 

  agregar( ) {
    if(this.nuevoFavorito.invalid){ return; }

    this.favoritosArr.push( this.fb.control( this.nuevoFavorito.value, Validators.required ) );
    this.nuevoFavorito.reset();
  }

  borrar( index: number ) {
    this.favoritosArr.removeAt( index );
  }

  guardar( ) {
    if(this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched();
    }
  }
}
