import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
})
export class EventsComponent {
  title = 'Próximos eventos';

  events = [
    { name: 'Tarea angular+bootstrap', date: '04/07/2021' },
    { name: 'Tarea ionic basics', date: '05/01/2021' },
    { name: 'Tarea ionic mobile app', date: '06/07/2021' },
  ];
}
