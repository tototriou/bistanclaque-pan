import { Component } from '@angular/core';
import spectacles from '../../../assets/content/spectacles.json';

@Component({
  selector: 'app-spectacles',
  templateUrl: './spectacles.component.html',
  styleUrl: './spectacles.component.scss'
})
export class SpectaclesComponent {
  public spectacles: any = [];

  constructor() {
    for (let e of spectacles.spectacles) {
      this.spectacles.push(e)
    }
  }
}
