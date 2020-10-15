import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SaludoComponent } from './saludo/saludo.component';
import { PageinicialComponent } from './pageinicial/pageinicial.component';

@NgModule({
  declarations: [
    AppComponent,
    SaludoComponent,
    PageinicialComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
