import { Component, Input, Output, EventEmitter } from '@angular/core';
// import { Router } from '@angular/router';

import { StorageService } from '../../services/storage.service';

import { GoogleSheetService } from '../../services/google-sheet.service';
import { ProjectService } from '../../services/project.service';

import { IndiegogoOption } from '../../class/indiegogoOption';
import { KickstarterOption } from '../../class/kickstarterOption';
import { Project } from '../../class/project';

import * as electron from 'electron';

@Component({
  selector: 'search',
  providers: [ StorageService, GoogleSheetService, ProjectService],
  templateUrl: './search.component.html',
  styleUrls: ['../../../assets/scss/main.scss']
})
export class SearchComponent {

  @Input() data;
  @Output() dataChange = new EventEmitter<boolean>();
  @Output() onSearch = new EventEmitter<any>();

  public keywords: string;
  public allResults = [];
  public commentOpen = false;
  public focusResult = false;
  public focusItem = false;
  public selectedProject: Project = null;

  constructor(
    public googleSheetService: GoogleSheetService,
    public projectService: ProjectService,
    private storageService: StorageService,
    // public router: Router
    ) {
  }

  // ————— CUSTOM METHODS —————
  public selectProject(project: Project) {
    project.seen = true;
    this.projectService.saveProject(project);
    // Open link to browser
    electron.shell.openExternal(project.url);
  }

  public openComment(project: Project, event): void {
    event.stopPropagation();
    this.commentOpen = true;
    this.selectedProject = project;
  }

  public closeComment(project: Project) {
    this.commentOpen = false;
    this.selectedProject = null;
    this.projectService.saveProject(project);
  }

  public refreshResearch() {
    this.onSearch.emit(this.data);
  }

  public selectSort(sort: string) {
    this.data.sort = sort;
    this.dataChange.emit(this.data);
    this.refreshResearch();
  }

}
