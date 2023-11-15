import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SwUpdate } from '@angular/service-worker';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  providers: [SwUpdate],
  imports: [BrowserModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
