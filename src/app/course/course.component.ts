import { Component } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
})
export class CourseComponent {
  links = [
    { name: 'Estudiantes', href: 'students' },
    { name: 'Foro', href: 'forum' },
    { name: 'Notas', href: 'grades' },
  ];
}
