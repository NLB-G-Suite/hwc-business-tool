import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

// import { AppRouting } from './app.routes';
import { SafePipe } from './pipes/safePipe';

import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';

import { KickstarterService } from './services/kickstarter.service';
import { HardwareClubService } from './services/hardwareclub.service';
import { IndiegogoService } from './services/indiegogo.service';
import { StorageService } from './services/storage.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    KickstarterService,
    StorageService,
    HardwareClubService,
    IndiegogoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
