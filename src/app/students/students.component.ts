import { Component, OnInit } from '@angular/core';

import { StudentsService } from '../students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss'],
})
export class StudentsComponent implements OnInit {
  title = 'Listado de estudiantes';
  students = this.studentsService.getStudents();

  constructor(private studentsService: StudentsService) {}

  ngOnInit(): void {}
}
