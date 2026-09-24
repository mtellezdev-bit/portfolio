import { Component } from '@angular/core';
import { Hero } from './components/hero/hero';
import { Proyectos } from './components/proyectos/proyectos';
import { Tecnologias } from './components/tecnologias/tecnologias';
import { Contacto } from './components/contacto/contacto';

@Component({
  selector: 'app-root',
  imports: [Hero, Proyectos, Tecnologias, Contacto],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
}