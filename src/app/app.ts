import {
  Component,
  HostListener
} from '@angular/core';

import { Hero } from './components/hero/hero';
import { Proyectos } from './components/proyectos/proyectos';
import { Tecnologias } from './components/tecnologias/tecnologias';
import { Contacto } from './components/contacto/contacto';

@Component({
  selector: 'app-root',

  imports: [
    Hero,
    Proyectos,
    Tecnologias,
    Contacto
  ],

  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

  glowX = 0;
  glowY = 0;

  @HostListener('window:scroll')
  onScroll(): void {

    const scroll = window.scrollY;

    this.glowX =
      Math.sin(scroll * 0.002) * 250;

    this.glowY =
      scroll * 0.25;
  }
}