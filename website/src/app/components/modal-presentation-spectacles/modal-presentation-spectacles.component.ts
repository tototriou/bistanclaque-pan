import { Component, inject, Input, OnInit, TemplateRef, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgFor, NgIf, NgStyle } from '@angular/common';
import { CarouselComponent } from '../carousel/carousel.component';

@Component({
  selector: 'app-modal-presentation-spectacles',
  templateUrl: './modal-presentation-spectacles.component.html',
  styleUrl: './modal-presentation-spectacles.component.scss',
  encapsulation: ViewEncapsulation.None,
  imports: [NgStyle, NgFor, NgIf, CarouselComponent],
  standalone: true,

})
export class ModalPresentationSpectaclesComponent implements OnInit {
  private modalService = inject(NgbModal);

  @Input() spectacles: any[] = []
  @Input() index: number = 0

  public spectacle: any
  public photos: any[] = []
  public creation: any[] = []
  public cadre: any[] = []
  public imgCarousel: any
  public indexPhotos: number = 0


  ngOnInit() {
    this.spectacle = this.spectacles[this.index]
    for (let p of this.spectacles[this.index].photos) {
      this.photos.push(p)
    }
    for (let c of this.spectacles[this.index].creation) {
      this.creation.push(c)
    }
    for (let ca of this.spectacles[this.index].cadre) {
      this.cadre.push(ca)
    }
    this.indexPhotos = 0
    this.imgCarousel = this.photos[this.indexPhotos]

  }

  openVerticallyCentered(content: TemplateRef<any>) {
    this.modalService.open(content, { centered: true, keyboard: true, size: 'xl' });
  }

  nextImage() {
    if (this.indexPhotos < this.photos.length - 1) {
      this.imgCarousel = this.photos[this.indexPhotos + 1]
      this.indexPhotos += 1
    }
  }
  previousImage() {
    if (this.indexPhotos > 0) {
      this.imgCarousel = this.photos[this.indexPhotos - 1]
      this.indexPhotos -= 1
    }
  }

  estDernier() {
    if (this.indexPhotos === (this.photos.length - 1)) {
      return { 'opacity': 0 }
    }
    return {}
  }

  estPremier() {
    if (this.indexPhotos === 0) {
      return { 'opacity': 0 }
    }
    return {}
  }
}








