import { Component, OnInit } from '@angular/core';

import { ForumService } from '../forum.service';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.scss'],
})
export class ForumComponent implements OnInit {
  forums = this.forumService.getForums();

  constructor(private forumService: ForumService) {}

  ngOnInit(): void {}
}
