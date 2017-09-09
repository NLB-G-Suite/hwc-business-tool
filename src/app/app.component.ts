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

  constructor() {
    this.appUpdater = new AppUpdater();
    setTimeout(() => {
      this.notif.update = this.appUpdater.updateAvailable;
    }, 5000);
  }

  ngOnInit() {
  }

  public updateSoftware() {
    this.appUpdater.autoUpdater.downloadUpdate();
  }
}
