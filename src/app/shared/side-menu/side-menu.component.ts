import { Component } from '@angular/core';

interface MenuItem{
  nombre  : string,
  ruta    : string;
}

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styles: [`
    li{
      cursor: pointer;
    }
  `]
})
export class SideMenuComponent {

  menuTemplate: MenuItem[] = [
    {
      nombre: 'Basicos',
      ruta: 'template/basicos'
    },
    {
      nombre: 'Dinamicos',
      ruta: 'template/dinamicos'
    },
    {
      nombre: 'Switches',
      ruta: 'template/switches'
    },
  ]

  menuReactive: MenuItem[] = [
    {
      nombre: 'Basicos',
      ruta: 'reactive/basicos'
    },
    {
      nombre: 'Dinamicos',
      ruta: 'reactive/dinamicos'
    },
    {
      nombre: 'Switches',
      ruta: 'reactive/switches'
    },
  ]

}
