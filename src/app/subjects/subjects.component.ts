import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss'],
})
export class SubjectsComponent implements OnInit {
  subjects = [
    {
      name: 'Vue',
      image: 'assets/logoVue.svg',
      description:
        'Vue (pronunciado / vjuː /, como vista ) es un marco progresivo para construir interfaces de usuario. A diferencia de otros marcos monolíticos, Vue está diseñado desde cero para ser adoptable de forma incremental. La biblioteca principal se centra solo en la capa de vista y es fácil de recoger e integrar con otras bibliotecas o proyectos existentes.',
      videos: [
        {
          name: 'Introducción a vue',
          description:
            'Bienvenidos a un nuevo curso, ahora comenzaremos con Vue.js, un Framework de Javascript que está tomando mucha fuerza. Es ideal para principiantes ya que iremos paso a paso!',
          url: 'GAQB7Y4X5fM',
        },
        {
          name: 'Vue methods',
          description:
            'Veamos de una manera fácil como crear métodos (methods), v-model y eventos click (v-on:click) en Vue.js, un Framework de Javascript.',
          url: 'vK7JT3nUmFg',
        },
        {
          name: 'Vue computed props',
          description:
            'Hoy veremos un poquito de eventos keyup, una nueva propiedad de v-model y las propiedades computed en Vue.js',
          url: '4sF1Kifpaqs',
        },
      ],
    },
    {
      name: 'React',
      image: 'assets/logoReact.svg',
      description:
        'React te ayuda a crear interfaces de usuario interactivas de forma sencilla. Diseña vistas simples para cada estado en tu aplicación, y React se encargará de actualizar y renderizar de manera eficiente los componentes correctos cuando los datos cambien.',
      videos: [
        {
          name: 'Introducción a React',
          description:
            'Aprende React.js en poco tiempo con una introducción a los fundamentos de la librería para empezar a trabajar con ella.',
          url: 'EMk6nom1aS4',
        },
        {
          name: 'React hooks',
          description:
            'En este tutorial veremos una introducción a nuestro curso de React JS Hooks y como trabajar.',
          url: 'mOz5eNcEHu4',
        },
        {
          name: 'React useContext',
          description:
            'Este es un tutorial práctico del Hook de React llamada useContext, en este ejemplo práctico aprenderás como usarlo en una aplicación sencilla que hace uso de una REST API.',
          url: 'lSMBhUEVK8k',
        },
      ],
    },
    {
      name: 'Angular',
      image: 'assets/angularLogo.png',
      description:
        'React te ayuda a crear interfaces de usuario interactivas de forma sencilla. Diseña vistas simples para cada estado en tu aplicación, y React se encargará de actualizar y renderizar de manera eficiente los componentes correctos cuando los datos cambien.',
      videos: [
        {
          name: 'Introducción a Angular',
          description:
            'In this angular 12 version video we learn what is angular and we learn basic thngs about angular courses. this video is made by anil Sidhu in English langauge.',
          url: 'oMj95u2zK4Y',
        },
        {
          name: 'Angular sacaffold',
          description:
            'In this angular 12 version video we learn what about angular project file and folder structure and code flow also. This video is made by anil Sidhu in the English language.',
          url: 'kkddIQ97j08',
        },
        {
          name: 'Angular interpolation',
          description:
            'In this angular 12 version video, we learn what is interpolation and how to use it in angular 12. This video is made by anil Sidhu in the English language.',
          url: 'G6ZX7ivQhzI',
        },
      ],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
