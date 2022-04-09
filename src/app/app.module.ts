import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { meshComponent } from './kiip/kiip.component';
import { MoringaComponent } from './moringa/moringa.component';

@NgModule({
  declarations: [
    AppComponent,
    meshComponent,
    MoringaComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
