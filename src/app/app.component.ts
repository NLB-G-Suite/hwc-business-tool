import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { SearchComponent } from './views/search/search.component';

import AppUpdater from './AppUpdater';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss', '../assets/scss/main.scss']
})
export class AppComponent implements AfterViewInit {

  @ViewChild(SearchComponent) search: SearchComponent;
  public appUpdater;
  public notif = {update: false};
  public notifActive = false;

  public data = {
    page: 'home',
    keywords: '',
    sort: ''
  };

  constructor() {
    this.appUpdater = new AppUpdater();
    setTimeout(() => {
      this.notifActive = true;
      this.notif.update = this.appUpdater.updateAvailable;
    }, 5000);

  }

  ngAfterViewInit() {
    console.log(this.search);
  }

  public updateSoftware() {
    this.notifActive = false;
    this.appUpdater.autoUpdater.downloadUpdate();
  }
}
