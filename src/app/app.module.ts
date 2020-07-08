import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NavigationComponent } from './navigation/navigation.component';
import { AccordionComponent } from './accordion/accordion.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ModalComponent } from './modal/modal.component';
import { TypeAheadComponent } from './type-ahead/type-ahead.component';
import { PopOverComponent } from './pop-over/pop-over.component';

//@NgModule({
  //imports: [NgbModule],
//})

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    AccordionComponent,
    CarouselComponent,
    ModalComponent,
    TypeAheadComponent,
    PopOverComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
