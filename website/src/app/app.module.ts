import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './components/footer/footer.component';
import { CompagnieComponent } from './components/compagnie/compagnie.component';
import { SpectaclesComponent } from './components/spectacles/spectacles.component';
import { AgendaComponent } from './components/agenda/agenda.component';
import { ContactComponent } from './components/contact/contact.component';
import { ModalPresentationMembresComponent } from './components/modal-presentation-membres/modal-presentation-membres.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ModalPresentationSpectaclesComponent } from './components/modal-presentation-spectacles/modal-presentation-spectacles.component';
import { ContactThomasComponent } from './components/contact-thomas/contact-thomas.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    FooterComponent,
    CompagnieComponent,
    SpectaclesComponent,
    AgendaComponent,
    ContactComponent,
    ContactThomasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ModalPresentationMembresComponent,
    CarouselComponent,
    ModalPresentationSpectaclesComponent,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
