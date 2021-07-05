import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-studentcard',
  templateUrl: './studentcard.component.html',
  styleUrls: ['./studentcard.component.scss'],
})
export class StudentcardComponent implements OnInit {
  @Input() student!: any;

  constructor() {}

  ngOnInit(): void {}
}
