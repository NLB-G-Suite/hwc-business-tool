import { Component, Input, Output, EventEmitter } from '@angular/core';
// import { Router } from '@angular/router';

import { StorageService } from '../../services/storage.service';
import { GoogleSheetService } from '../../services/google-sheet.service';

import * as electron from 'electron';

@Component({
  selector: 'vigilante',
  providers: [StorageService, GoogleSheetService],
  templateUrl: './vigilante.component.html',
  styleUrls: ['../../../assets/scss/main.scss']
})
export class VigilanteComponent {

  @Input() data;
  @Output() dataChange = new EventEmitter<boolean>();

  public keywords: string;
  public sort: string;

  constructor(
    public googleSheetService: GoogleSheetService,
    private storageService: StorageService,
    // public router: Router
    ) {
  }

}
