import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SubjectsComponent } from './subjects/subjects.component';
import { StudentsComponent } from './students/students.component';
import { ForumComponent } from './forum/forum.component';
import { GradesComponent } from './grades/grades.component';

const routes: Routes = [
  { path: 'students', component: StudentsComponent },
  { path: 'forum', component: ForumComponent },
  { path: 'grades', component: GradesComponent },
  { path: '', component: SubjectsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
