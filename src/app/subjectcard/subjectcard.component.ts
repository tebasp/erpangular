import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-subjectcard',
  templateUrl: './subjectcard.component.html',
  styleUrls: ['./subjectcard.component.scss'],
})
export class SubjectcardComponent implements OnInit {
  @Input() subject!: any;

  constructor() {}

  ngOnInit(): void {}
}
