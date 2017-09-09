import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';

import { KickstarterService } from '../../services/kickstarter.service';
import { HardwareClubService } from '../../services/hardwareclub.service';
import { IndiegogoService } from '../../services/indiegogo.service';
import { StorageService } from '../../services/storage.service';

import { Credential } from '../../class/credential';

@Component({
  selector: 'login',
  providers: [KickstarterService, StorageService, HardwareClubService, IndiegogoService],
  styleUrls: ['../../../assets/scss/main.scss'],
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  public localState = { value: '' };
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
    private storageService: StorageService,
    // public router: Router
    ) {
    this.loadCredential();
  }

  public ngOnInit() {
    //
  }

  // ————— KICKSTARTER —————
  // Login
  public kickstarterLogin(email: string, password: string) {
    this.kickstarterService.signin(email, password).then((res) => {
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
      console.log('Error: ', error.message);
    });
  }

  // ————— INDIEGOGO —————
  // login
  public indiegogoLogin(email: string, password: string) {
    this.indiegogoService.signin(email, password).then((authRes) => {
      const token = authRes.access_token;
      this.indiegogoService.userInfos(token).then((res) => {
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
        console.log('Error: ', error.message);
      });
    }).catch((error) => {
      console.log('Error: ', error.message);
    });
  }

  // ————— HARDAWRECLUB —————
  // Login
  public hardwareclubLogin(email: string, password: string) {
    this.hardwareclubService.signin(email, password).then((res) => {
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
      console.log('Error: ', error.message);
    });
  }

  /* Double login checking
   * @var platform : string = Name of the platform you wish to be disconnected from
   */
  public checkLogin(): boolean {
    if (this.kickstarter.connected && this.indiegogo.connected && this.hardwareclub.connected) {
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
