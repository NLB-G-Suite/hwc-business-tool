import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { SearchComponent } from './views/search/search.component';
import { HomeComponent } from './views/home/home.component';
import { NavigationComponent } from './views/navigation/navigation.component';

import AppUpdater from './AppUpdater';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss', '../assets/scss/main.scss']
})
export class AppComponent implements AfterViewInit {

  @ViewChild(HomeComponent) home: HomeComponent;
  @ViewChild(NavigationComponent) navigation: NavigationComponent;

  public appUpdater;
  public notif = {update: false};
  public notifActive = false;

  public data = {
    page: 'home',
    keywords: '',
    sort: 'popularity',
    allResults: []
  };

  constructor() {
    this.appUpdater = new AppUpdater();
    setTimeout(() => {
      this.notifActive = true;
      this.notif.update = this.appUpdater.updateAvailable;
    }, 5000);

  }

  public searchFunction(data) {
    console.log(data);
    this.navigation.search(data.keywords, data.sort);
  }

  public updateSoftware() {
    this.notifActive = false;
    this.appUpdater.autoUpdater.downloadUpdate();
  }

  ngAfterViewInit() {
  }

}
