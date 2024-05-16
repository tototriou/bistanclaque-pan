import { Component, inject, Input, TemplateRef, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgFor, NgStyle } from '@angular/common';

@Component({
  selector: 'app-modal-presentation-spectacles',
  templateUrl: './modal-presentation-spectacles.component.html',
  styleUrl: './modal-presentation-spectacles.component.scss',
  encapsulation: ViewEncapsulation.None,
  imports: [NgStyle, NgFor],
  standalone: true,

})
export class ModalPresentationSpectaclesComponent {
  private modalService = inject(NgbModal);

  @Input() spectacles: any[] = []
  @Input() index: number = 0

  public spectacle: any
  public photos: any[] = []
  public creation: any[] = []


  ngOnInit() {
    this.spectacle = this.spectacles[this.index]
    for (let p of this.spectacles[this.index].photos) {
      this.photos.push(p)
    }
    for (let c of this.spectacles[this.index].creation) {
      this.creation.push(c)
    }
  }

  openVerticallyCentered(content: TemplateRef<any>) {
    this.modalService.open(content, { centered: true, });
  }
}








