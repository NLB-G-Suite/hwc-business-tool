import { Page } from './page';
import { Popup } from './popup';

export class App {

  public currentPage: Page = null;
  public currentPopup: Popup = null;
  public pages: any = {};
  public popups: any = {};

  constructor() {
    console.log();
    this.popups['text'] = new Popup('Ceci est un test');
  }

  public selectPage(title: string) {
    this.currentPage = this.pages[title];
  }

  public selectPopup(title: string) {
    this.currentPopup = this.popups[title];
  }
  public closePopup() {
    this.currentPopup.close();
    this.currentPopup = null;
  }
}
