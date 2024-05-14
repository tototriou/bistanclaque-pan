import { Component, inject, Input, TemplateRef, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgFor, NgStyle } from '@angular/common';

@Component({
  selector: 'app-modal-presentation-membres',
  standalone: true,
  templateUrl: './modal-presentation-membres.component.html',
  styleUrl: './modal-presentation-membres.component.scss',
  encapsulation: ViewEncapsulation.None,
  imports: [NgStyle, NgFor],

})
export class ModalPresentationMembresComponent {
  private modalService = inject(NgbModal);

  @Input() members: any[] = []
  @Input() index: number = 0

  public member: any
  public spectacles: any[] = []

  ngOnInit() {
    this.member = this.members[this.index]
    this.spectacles = this.member.spectacles
  }

  openVerticallyCentered(content: TemplateRef<any>) {
    this.modalService.open(content, { centered: true });
  }
}


