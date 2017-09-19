import { Component, Input, Output, EventEmitter } from '@angular/core';
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

import { Credential } from '../../class/credential';

import * as electron from 'electron';

@Component({
  selector: 'home',
  providers: [KickstarterService, StorageService, HardwareClubService, IndiegogoService, GoogleSheetService, ProjectService],
  templateUrl: './home.component.html',
  styleUrls: ['../../../assets/scss/main.scss']
})
export class HomeComponent {

  @Input() data;
  @Output() dataChange = new EventEmitter<boolean>();
  @Output() onSearch = new EventEmitter<any>();

  public keywords: string;
  public sort: string;
  public kickstarterResult = [];
  public indiegogoResult = [];
  public allResults = [];
  public menuOpen = false;
  public focusResult = false;
  public focusItem = false;
  public selectedProject: Project = null;

  public loginPage = '';
  public loading = false;

  public errorLogin = '';

  public services = 0;

  public kickstarter = {
    email: '',
    password: '',
    remember: true,
    connected: false
  };
  public indiegogo = {
    email: '',
    password: '',
    remember: true,
    connected: false
  };
  public hardwareclub = {
    email: '',
    password: '',
    remember: true,
    connected: false
  };

  constructor(
    public kickstarterService: KickstarterService,
    public hardwareclubService: HardwareClubService,
    public indiegogoService: IndiegogoService,
    public googleSheetService: GoogleSheetService,
    public projectService: ProjectService,
    private storageService: StorageService,
    // public router: Router
    ) {
    this.loadCredential();
  }

  public search(keywords: string, sort: string) {
    this.data.keywords = keywords;
    this.data.sort = sort;
    this.data.page = 'search';
    this.dataChange.emit(this.data);
    this.onSearch.emit();
  }

  public openLogin(service: string): void {
    this.loginPage = service;
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

  // ————— KICKSTARTER —————
  // Login
  public kickstarterLogin(email: string, password: string) {
    this.loading = true;
    this.errorLogin = '';
    this.kickstarterService.signin(email, password).then((res) => {
      this.loading = false;
      let credential = new Credential(
        res.user.id,
        res.user.name,
        this.kickstarter.email,
        this.kickstarter.password,
        res.user.avatar.large,
        res.access_token,
        '');
      this.kickstarter.connected = true;
      if (this.kickstarter.remember) {
        this.saveCredential('kickstarter', credential);
      } else {
        this.saveCredential('kickstarter', null);
      }
      this.checkLogin();
    }).catch((error) => {
      this.loading = false;
      this.errorLogin = error.error_messages[0];
      this.logout('kickstarter');
    });
  }

  // ————— INDIEGOGO —————
  // login
  public indiegogoLogin(email: string, password: string) {
    this.loading = true;
    this.errorLogin = '';
    this.indiegogoService.signin(email, password).then((authRes) => {
      const token = authRes.access_token;
      this.indiegogoService.userInfos(token).then((res) => {
        this.loading = false;
        let credential = new Credential(
          res.response.id,
          res.response.name,
          this.indiegogo.email,
          this.indiegogo.password,
          res.response.avatar_url,
          token,
          authRes.refresh_token);
        this.indiegogo.connected = true;
        if (this.indiegogo.remember) {
          this.saveCredential('indiegogo', credential);
        } else {
          this.saveCredential('indiegogo', null);
        }
        this.checkLogin();
      }).catch((error) => {
        this.loading = false;
        this.logout('indiegogo');
      });
    }).catch((error) => {
      this.loading = false;
      this.errorLogin = error.error_description;
      this.logout('indiegogo');
    });
  }

  // ————— HARDAWRECLUB —————
  // Login
  public hardwareclubLogin(email: string, password: string) {
    this.loading = true;
    this.errorLogin = '';
    this.hardwareclubService.signin(email, password).then((res) => {
      this.loading = false;
      let credential = new Credential(
        res.data.user.id,
        res.data.user.name,
        this.hardwareclub.email,
        this.hardwareclub.password,
        'https://hardwareclub.imgix.net' + res.data.user.image.source.replace('images', ''),
        res.data.access_token,
        res.data.refresh_token);
      this.hardwareclub.connected = true;
      if (this.hardwareclub.remember) {
        this.saveCredential('hardwareclub', credential);
      } else {
        this.saveCredential('hardwareclub', null);
      }
      this.checkLogin();
    }).catch((error) => {
      this.loading = false;
      this.errorLogin = error.error_description;
      this.logout('hardwareclub');
    });
  }

  public closePanel() {
    this.errorLogin = '';
    this.loginPage = '';
  }

  /* Double login checking
   * @var platform : string = Name of the platform you wish to be disconnected from
   */
  public checkLogin(): boolean {
    this.closePanel();
    this.services = 0;
    if (this.kickstarter.connected) { this.services++; }
    if (this.indiegogo.connected) { this.services++; }
    if (this.hardwareclub.connected) { this.services++; }
    if (this.services === 3) {
      // this.router.navigate(['/home']);
      return true;
    }
    return false;
  }

  /* Logout
   * @var platform : string = Name of the platform you wish to be disconnected from
   */
  public logout(platform: string) {
    let credentials = this.storageService.get('credentials');
    this[platform].connected = false;
    credentials[platform].autoconnect = false;
    this.saveCredential(platform, credentials[platform]);
  }

  /* Load all credentials
   */
  private loadCredential(): void {
    let credentials = this.storageService.get('credentials');

    if (credentials !== null) {
      // Kickstarter
      if (credentials.kickstarter !== undefined) {
        this.kickstarter.email = credentials.kickstarter.email;
        this.kickstarter.password = credentials.kickstarter.password;

        // Auto Connect
        if (credentials.kickstarter.autoconnect) {
          this.kickstarterLogin(this.kickstarter.email, this.kickstarter.password);
        }
      }

      // Indiegogo
      if (credentials.indiegogo !== undefined) {
        this.indiegogo.email = credentials.indiegogo.email;
        this.indiegogo.password = credentials.indiegogo.password;

        // Auto Connect
        if (credentials.indiegogo.autoconnect) {
          this.indiegogoLogin(this.indiegogo.email, this.indiegogo.password);
        }
      }

      // HardwareClub
      if (credentials.hardwareclub !== undefined) {
        this.hardwareclub.email = credentials.hardwareclub.email;
        this.hardwareclub.password = credentials.hardwareclub.password;

        // Auto Connect
        if (credentials.hardwareclub.autoconnect) {
          this.hardwareclubLogin(this.hardwareclub.email, this.hardwareclub.password);
        }
      }
    }
  }

  /* Save all credentials
   * @var platform: string = Name of the platform to save credentials in
   */
  private saveCredential(platform: string, credential: Credential): void {
    let credentials = this.storageService.get('credentials');
    if (credentials == null) {
      credentials = {};
    }
    credentials[platform] = credential;
    this.storageService.set('credentials', credentials);
  }

}
