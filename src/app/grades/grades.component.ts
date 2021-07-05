import { Component, OnInit } from '@angular/core';

import { StudentsService } from '../students.service';

@Component({
  selector: 'app-grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.scss'],
})
export class GradesComponent implements OnInit {
  students = this.studentsService.getStudents();

  headings = ['Estudiante', 'Actividad 1', 'Actividad 2', 'Actividad 3'];

  constructor(private studentsService: StudentsService) {}

  ngOnInit(): void {}

  getRandomGrade() {
    return (Math.random() * 10).toFixed(2);
  }
}
