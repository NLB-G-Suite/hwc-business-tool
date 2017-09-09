import { Component } from '@angular/core';
// import { Router } from '@angular/router';

import { KickstarterService } from '../../services/kickstarter.service';
import { HardwareClubService } from '../../services/hardwareclub.service';
import { IndiegogoService } from '../../services/indiegogo.service';
import { StorageService } from '../../services/storage.service';

import { GoogleSheetService } from '../../services/google-sheet.service';
import { ProjectService } from '../../services/project.service';

import { IndiegogoOption } from '../../class/indiegogoOption';
import { KickstarterOption } from '../../class/kickstarterOption';
import { Project } from '../../class/project';

import * as electron from 'electron';

@Component({
  selector: 'home',
  providers: [KickstarterService, StorageService, HardwareClubService, IndiegogoService, GoogleSheetService, ProjectService],
  templateUrl: './home.component.html',
  styleUrls: ['../../../assets/scss/main.scss']
})
export class HomeComponent {

  public keywords: string;
  public sort: string;
  public kickstarterResult = [];
  public indiegogoResult = [];
  public allResults = [];
  public menuOpen = false;
  public focusResult = false;
  public focusItem = false;
  public kickstarterActive = true;
  public indiegogoActive = true;
  public selectedProject: Project = null;

  constructor(
    public kickstarterService: KickstarterService,
    public hardwareclubService: HardwareClubService,
    public indiegogoService: IndiegogoService,
    public googleSheetService: GoogleSheetService,
    public projectService: ProjectService,
    private storageService: StorageService,
    // public router: Router
    ) {
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

    this.allResults = [];

    // ————— KICKSTARTER —————
    this.kickstarterService.search(kickOption).then((res) => {
      // console.log('Kickstarter', res);
      this.kickstarterResult = this.kickstarterService.convertResultToProjects(res);
      this.allResults = this.mergeArrays(this.allResults, this.kickstarterResult);
      this.focusResult = true;
    }).catch((error) => {
      console.log('Error: ', error.message);
    });

    // ————— INDIEGOGO —————
    this.indiegogoService.search(indieOption).then((res) => {
      // console.log('Indiegogo', res);
      this.indiegogoResult = this.indiegogoService.convertResultToProjects(res);
      this.allResults = this.mergeArrays(this.allResults, this.indiegogoResult);
      this.focusResult = true;
    }).catch((error) => {
      console.log('Error: ', error.message);
    });
  }

  // ————— CUSTOM METHODS —————
  public selectProject(project: Project) {
    // Open link to browser
    electron.shell.openExternal(project.url);
  }

  public refreshResearch() {
    this.search(this.keywords, this.sort);
  }

  public selectSort(sort: string) {
    this.sort = sort;
    this.refreshResearch();
  }

  public mergeArrays(arrayA: Project[], arrayB: Project[]) {
    if (!arrayA.length) {
      return this.mergeSave(arrayB);
    } else {
      for (let project of arrayB) {
        arrayA.push(project);
      }
    }
    return this.mergeSave(arrayA);
  }
  public mergeSave(array): Project[] {
    let projects = this.projectService.projects;
    for (let project of array) {
      for (let saved of projects) {
        if ( project.identifiant === saved.identifiant && project.origin === saved.origin ) {
          project.googleSave = saved.googleSave;
          project.pined = saved.pined;
          project.notes = saved.notes;
        }
      }
    }
    return array;
  }

}
