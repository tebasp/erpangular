import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { YouTubePlayerModule } from '@angular/youtube-player';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { EventsComponent } from './events/events.component';
import { CourseComponent } from './course/course.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { StudentsComponent } from './students/students.component';
import { ForumComponent } from './forum/forum.component';
import { GradesComponent } from './grades/grades.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { SubjectcardComponent } from './subjectcard/subjectcard.component';
import { VideocardComponent } from './videocard/videocard.component';
import { StudentcardComponent } from './studentcard/studentcard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    EventsComponent,
    CourseComponent,
    SubjectsComponent,
    StudentsComponent,
    ForumComponent,
    GradesComponent,
    SubjectcardComponent,
    VideocardComponent,
    StudentcardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    YouTubePlayerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
