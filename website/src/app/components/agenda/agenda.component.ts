import { Component } from '@angular/core';
import spectacles from '../../../assets/content/agenda.json'

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrl: './agenda.component.scss'
})
export class AgendaComponent {
  public agenda: any[] = []

  constructor() {
    for (let e of spectacles) {
      this.agenda.push(e)
    }
  }
}
