import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { AccordionComponent } from './accordion/accordion.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ModalComponent } from './modal/modal.component';
import { TypeAheadComponent } from './type-ahead/type-ahead.component';
import { PopOverComponent } from './pop-over/pop-over.component';


const routes: Routes = [
 /* {
    path:"",
    component:NavigationComponent
  },*/
  {
    path:"accordion",
    component:AccordionComponent
  },
  {
    path:"carousel",
    component:CarouselComponent
  },
  {
    path:"modal",
    component:ModalComponent
  },
  {
    path:"type-ahead",
    component:TypeAheadComponent
  },
  {
    path:"pop-over",
    component:PopOverComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
