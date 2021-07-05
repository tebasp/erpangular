import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  students = [
    {
      name: {
        title: 'Mr',
        first: 'Johnny',
        last: 'Medina',
      },
      email: 'johnny.medina@example.com',
      picture: {
        large: 'https://randomuser.me/api/portraits/men/52.jpg',
        medium: 'https://randomuser.me/api/portraits/med/men/52.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/men/52.jpg',
      },
    },
    {
      name: {
        title: 'Mrs',
        first: 'Mercedes',
        last: 'Sanchez',
      },
      email: 'mercedes.sanchez@example.com',
      picture: {
        large: 'https://randomuser.me/api/portraits/women/89.jpg',
        medium: 'https://randomuser.me/api/portraits/med/women/89.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/women/89.jpg',
      },
    },
    {
      name: {
        title: 'Ms',
        first: 'Sieuwke',
        last: 'Alsemgeest',
      },
      email: 'sieuwke.alsemgeest@example.com',
      picture: {
        large: 'https://randomuser.me/api/portraits/women/94.jpg',
        medium: 'https://randomuser.me/api/portraits/med/women/94.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/women/94.jpg',
      },
    },
    {
      name: {
        title: 'Monsieur',
        first: 'Hans',
        last: 'Duval',
      },
      email: 'hans.duval@example.com',
      picture: {
        large: 'https://randomuser.me/api/portraits/men/85.jpg',
        medium: 'https://randomuser.me/api/portraits/med/men/85.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/men/85.jpg',
      },
    },
    {
      name: {
        title: 'Mr',
        first: 'Almiro',
        last: 'Freitas',
      },
      email: 'almiro.freitas@example.com',
      picture: {
        large: 'https://randomuser.me/api/portraits/men/21.jpg',
        medium: 'https://randomuser.me/api/portraits/med/men/21.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/men/21.jpg',
      },
    },
    {
      name: {
        title: 'Monsieur',
        first: 'Kai',
        last: 'Rousseau',
      },
      email: 'kai.rousseau@example.com',
      picture: {
        large: 'https://randomuser.me/api/portraits/men/91.jpg',
        medium: 'https://randomuser.me/api/portraits/med/men/91.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/men/91.jpg',
      },
    },
    {
      name: {
        title: 'Miss',
        first: 'Neea',
        last: 'Saari',
      },
      email: 'neea.saari@example.com',
      picture: {
        large: 'https://randomuser.me/api/portraits/women/76.jpg',
        medium: 'https://randomuser.me/api/portraits/med/women/76.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/women/76.jpg',
      },
    },
    {
      name: {
        title: 'Ms',
        first: 'Judith',
        last: 'Harvey',
      },
      email: 'judith.harvey@example.com',
      picture: {
        large: 'https://randomuser.me/api/portraits/women/22.jpg',
        medium: 'https://randomuser.me/api/portraits/med/women/22.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/women/22.jpg',
      },
    },
    {
      name: {
        title: 'Mrs',
        first: 'Leandra',
        last: 'Ferreira',
      },
      email: 'leandra.ferreira@example.com',
      picture: {
        large: 'https://randomuser.me/api/portraits/women/10.jpg',
        medium: 'https://randomuser.me/api/portraits/med/women/10.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/women/10.jpg',
      },
    },
    {
      name: {
        title: 'Ms',
        first: 'Begüm',
        last: 'Erbay',
      },
      email: 'begum.erbay@example.com',
      picture: {
        large: 'https://randomuser.me/api/portraits/women/64.jpg',
        medium: 'https://randomuser.me/api/portraits/med/women/64.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/women/64.jpg',
      },
    },
  ];

  getStudents() {
    return this.students;
  }
}
