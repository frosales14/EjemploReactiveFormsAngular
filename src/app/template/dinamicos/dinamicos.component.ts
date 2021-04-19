import { Component } from '@angular/core';

interface Persona {
  nombre    : string,
  favorito  : Favorito[]
}

interface Favorito {
  id      : number,
  nombre  : string
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent {

  nuevoJuego: string = '';

  persona: Persona = {
      nombre: 'Fernando',
      favorito: [
        { id: 1, nombre: 'Persona 5' },
        { id: 2, nombre: 'LOL' }
      ]
  }

  eliminar(index: number){
    this.persona.favorito.splice(index,1);
  }
  
  agregar(){
    const nuevoFavorito: Favorito = {
      id: this.persona.favorito.length + 1,
      nombre: this.nuevoJuego
    }
    this.persona.favorito.push({... nuevoFavorito});
    this.nuevoJuego = '';
  }

  guardar() {

  }
}
