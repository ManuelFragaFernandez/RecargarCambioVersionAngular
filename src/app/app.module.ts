import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from 'src/environments/environment';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  // providers: [SwUpdate],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
    }),
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
