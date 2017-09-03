import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { KickstarterService } from '../../services/kickstarter.service';
import { HardwareClubService } from '../../services/hardwareclub.service';
import { IndiegogoService } from '../../services/indiegogo.service';
import { StorageService } from '../../services/storage.service';

import { IndiegogoOption } from '../../class/indiegogoOption';
import { KickstarterOption } from '../../class/kickstarterOption';

@Component({
  selector: 'home',
  providers: [KickstarterService, StorageService, HardwareClubService, IndiegogoService],
  templateUrl: './home.component.html',
  styleUrls: ['../../../assets/scss/main.scss']
})
export class HomeComponent {

  public keywords: string;
  public sort: string;
  public kickstarterResult = [];
  public indiegogoResult = [];

  constructor(
    public kickstarterService: KickstarterService,
    public hardwareclubService: HardwareClubService,
    public indiegogoService: IndiegogoService,
    private storageService: StorageService,
    public router: Router) {
    //
  }

  public search(keywords: string, sort: string) {
    let credentials = this.storageService.get('credentials');

    let kickOption = new KickstarterOption();
    kickOption.search = keywords;
    kickOption.sort = sort;

    let indieOption = new IndiegogoOption();
    indieOption.search = keywords;
    switch (sort) {
      case 'popularity':
        indieOption.sort = 'popular';
        break;
      case 'newest':
        indieOption.sort = 'new';
        break;
      case 'most_founded':
        indieOption.sort = 'most_founded';
        break;
      case 'end_date':
        indieOption.sort = 'countdown';
        break;
      default:
        break;
    }

    // ————— KICKSTARTER —————
    this.kickstarterService.search(kickOption).then((res) => {
      // console.log('Kickstarter', res);
      this.kickstarterResult = this.kickstarterService.convertResultToProjects(res);
      console.log('Kickstarter', this.kickstarterResult);
    }).catch((error) => {
      console.log('Error: ', error.message);
    });

    // ————— INDIEGOGO —————
    this.indiegogoService.search(indieOption).then((res) => {
      // console.log('Indiegogo', res);
      this.indiegogoResult = this.indiegogoService.convertResultToProjects(res);
      console.log('Indiegogo', this.indiegogoResult);
    }).catch((error) => {
      console.log('Error: ', error.message);
    });
  }

}
