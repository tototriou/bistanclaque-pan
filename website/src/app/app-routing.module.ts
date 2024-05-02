import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { CompagnieComponent } from './components/compagnie/compagnie.component';
import { SpectaclesComponent } from './components/spectacles/spectacles.component';
import { ContactComponent } from './components/contact/contact.component';
import { AgendaComponent } from './components/agenda/agenda.component';

const routes: Routes = [
  {
    path: 'compagnie',
    component: CompagnieComponent,
  },
  {
    path: 'spectacles',
    component: SpectaclesComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'agenda',
    component: AgendaComponent,
  },
  {
    path: '',
    component: HomePageComponent,
    pathMatch: 'full'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
