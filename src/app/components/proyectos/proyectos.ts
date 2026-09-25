import {
  Component,
  HostListener
} from '@angular/core';

interface ProyectoProfesional {
  titulo: string;
  descripcion: string;
  tecnologias: string[];
  participacion: string[];
  experiencia: string;
}

@Component({

  selector: 'app-proyectos',

  imports: [],

  templateUrl: './proyectos.html',

  styleUrl: './proyectos.scss'

})

export class Proyectos {

  proyectoSeleccionado:
    ProyectoProfesional | null = null;


  proyectosProfesionales:
    ProyectoProfesional[] = [

      {
        titulo:
          'Plataforma de creación de chatbots',

        descripcion:
          'Desarrollo de interfaces para una plataforma orientada a la creación y gestión de chatbots.',

        tecnologias: [
          'Angular',
          'TypeScript',
          'REST APIs'
        ],

        participacion: [
          'Desarrollo y modificación de interfaces web.',
          'Creación y modificación de componentes Angular.',
          'Implementación de métodos en servicios.',
          'Integración y consumo de APIs REST.',
          'Corrección y mantenimiento de funcionalidades.'
        ],

        experiencia:
          'Experiencia trabajando en una aplicación web basada en Angular, participando tanto en el desarrollo de interfaces como en la integración con servicios backend.'
      },


      {
        titulo:
          'Agenda y calendario',

        descripcion:
          'Desarrollo y mantenimiento de interfaces para la gestión de agendas, citas y eventos.',

        tecnologias: [
          'Angular',
          'TypeScript',
          'REST APIs'
        ],

        participacion: [
          'Desarrollo de interfaces para agendas y calendarios.',
          'Implementación y modificación de componentes.',
          'Integración con servicios REST.',
          'Manejo de información de citas y eventos.',
          'Corrección y mantenimiento de funcionalidades.'
        ],

        experiencia:
          'Participación en el desarrollo y mantenimiento de funcionalidades relacionadas con la gestión de agendas, citas y eventos dentro de una aplicación web.'
      },


      {
        titulo:
          'Plataforma de documentación',

        descripcion:
          'Desarrollo de interfaces y componentes para una plataforma orientada a la documentación.',

        tecnologias: [
          'Angular',
          'TypeScript',
          'SCSS'
        ],

        participacion: [
          'Desarrollo de interfaces web.',
          'Creación y modificación de componentes.',
          'Implementación de estilos con SCSS.',
          'Adaptación de interfaces existentes.',
          'Corrección y mantenimiento visual.'
        ],

        experiencia:
          'Participación en el desarrollo de interfaces y componentes para una plataforma web, trabajando principalmente en la construcción y adaptación de la interfaz frontend.'
      },


      {
        titulo:
          'Mantenimiento y rediseño',

        descripcion:
          'Corrección, mantenimiento y actualización de aplicaciones existentes para mejorar su funcionamiento y presentación.',

        tecnologias: [
          'Angular',
          'TypeScript',
          'SCSS'
        ],

        participacion: [
          'Corrección de errores en interfaces existentes.',
          'Actualización de estilos y colores.',
          'Modificación y adaptación de componentes.',
          'Actualización de imágenes y elementos visuales.',
          'Mantenimiento y mejora de aplicaciones existentes.'
        ],

        experiencia:
          'Trabajo sobre aplicaciones existentes, realizando correcciones, ajustes visuales y modificaciones de componentes para mantener y mejorar su funcionamiento y presentación.'
      }

    ];


  abrirInformacion(
    proyecto: ProyectoProfesional
  ): void {

    this.proyectoSeleccionado =
      proyecto;

    document.body.style.overflow =
      'hidden';
  }


  cerrarInformacion(): void {

    this.proyectoSeleccionado =
      null;

    document.body.style.overflow =
      '';
  }

  @HostListener(
    'document:keydown.escape'
  )
  cerrarConEscape(): void {

    if (
      this.proyectoSeleccionado
    ) {

      this.cerrarInformacion();

    }

  }

}