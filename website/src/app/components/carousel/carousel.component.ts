import { Component, Input, OnInit } from '@angular/core';
import { NgbCarouselConfig, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
  standalone: true,
  imports: [NgbCarouselModule, NgFor],
  providers: [NgbCarouselConfig], // add NgbCarouselConfig to the component providers
})
export class CarouselComponent implements OnInit {
  public images: any = []

  @Input() spectacle: any

  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 10000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = true;
  }

  ngOnInit() {
    this.images = this.spectacle.photos
  }
}


