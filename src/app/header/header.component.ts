import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  logo = 'assets/structure.svg';
  logoAlt = 'Erp System';
  title = 'Erp Dashboard';

  links = [
    { name: 'Home', href: '/' },
    { name: 'Estudiantes', href: 'students' },
    { name: 'Foro', href: 'forum' },
    { name: 'Notas', href: 'grades' },
  ];
}
