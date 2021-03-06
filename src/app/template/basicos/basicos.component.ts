import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent  {

  @ViewChild( 'miFormulario' ) miFormulario!: NgForm;

  constructor( ){ }

  productoValido(): boolean{
    return this.miFormulario?.controls.producto?.invalid 
            && this.miFormulario?.controls.producto?.touched;
  }

  precioValido(): boolean{
    return this.miFormulario?.controls.precio?.touched
            && this.miFormulario?.controls.precio?.value < 0;
  }

  guardar(){
    console.log( this.miFormulario.value );
  }


}
