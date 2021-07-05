import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ForumService {
  forums = [
    {
      title: 'Comente sobre el framework Angular',
      messages: 2,
      date: '04/17/2021 20:30',
    },
    {
      title: 'Bootstrap vs. Tailwind',
      messages: 5,
      date: '03/10/2021 21:50',
    },
    {
      title: 'Estableza la diferencia entre framework librería',
      messages: 10,
      date: '01/17/2021 10:30',
    },
    {
      title: 'Comente sobre los beneficios de Angular',
      messages: 15,
      date: '07/10/2021 15:20',
    },
    {
      title: 'Conviene utilizar frameworks JS?',
      messages: 20,
      date: '07/01/2021 20:50',
    },
  ];

  getForums() {
    return this.forums;
  }
}
