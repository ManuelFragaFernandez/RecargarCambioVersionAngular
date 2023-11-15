import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  public appVersion: string | number = 0;

  constructor(private swUpdate: SwUpdate) {
    //#region Check for updates
    if (this.swUpdate.isEnabled) {
      debugger;
      console.log('Updates enabled');
      this.swUpdate.activated.subscribe((upd) => {
        console.log('Update activated');
        window.location.reload();
      });
      this.swUpdate.available.subscribe(
        (upd) => {
          console.log('Update available');
          if (confirm('Do you want to install the new version of the app?')) {
            console.log('Activating update');
            this.swUpdate.activateUpdate();
          }
        },
        (error) => {
          console.log(error);
        }
      );
      this.swUpdate
        .checkForUpdate()
        .then(() => {
          console.log('Checking for updates');
        })
        .catch((error) => {
          console.log('Could not check for app updates', error);
        });
    }
    //#endregion
  }
}
