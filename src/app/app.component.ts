import { Component } from '@angular/core';

import AppUpdater from './AppUpdater';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // Set our default values
  public notif = {update: false};
  public appUpdater;

  constructor() {
    this.appUpdater = new AppUpdater();
    setTimeout(() => {
      this.notif.update = this.appUpdater.updateAvailable;
    }, 5000);
  }

  public openUpdate(): void {
    this.updateSoftware();
  }

  public updateSoftware(): void {
    console.log(this.appUpdater, this.appUpdater.autoUpdater);
    this.appUpdater.autoUpdater.downloadUpdate();
  }
}
