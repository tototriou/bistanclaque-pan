import { Component } from '@angular/core';
import compagnie from '../../../assets/content/compagnie.json';


@Component({
  selector: 'app-compagnie',
  templateUrl: './compagnie.component.html',
  styleUrl: './compagnie.component.scss'
})
export class CompagnieComponent {
  public compagnie: any = [];
  public photo_url: string[] = [];

  constructor() {
    for (let e of compagnie.membre) {
      this.compagnie.push(e)
      this.photo_url.push(e.photo_url)
    }
  }
}
