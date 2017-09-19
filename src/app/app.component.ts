import { Component } from '@angular/core';

import AppUpdater from './AppUpdater';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss', '../assets/scss/main.scss']
})
export class AppComponent {
  public appUpdater;
  public notif = {update: false};
  public notifActive = false;

  constructor() {
    this.appUpdater = new AppUpdater();
    setTimeout(() => {
      this.notifActive = true;
      this.notif.update = this.appUpdater.updateAvailable;
    }, 5000);
  }

  public updateSoftware() {
    this.notifActive = false;
    this.appUpdater.autoUpdater.downloadUpdate();
  }
}
