import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-videocard',
  templateUrl: './videocard.component.html',
  styleUrls: ['./videocard.component.scss'],
})
export class VideocardComponent implements OnInit {
  @Input() video!: any;

  ngOnInit(): void {}
}
