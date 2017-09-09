import { Injectable } from '@angular/core';

import { GoogleSheetService } from './google-sheet.service';
import { Project } from '../class/project';

@Injectable()
export class ProjectService {

  public sheet;
  private google = null;
  public projects = []

  constructor(public googleSheetService: GoogleSheetService) {
    this.google = googleSheetService;
    this.google.setAuth().then(() => {
      this.google.getSheets().then((sheets) => {
        for (let sheet of sheets) {
          if (sheet.title === 'Startups') {
            this.sheet = sheet;
            this.loadProjects().then((projects) => {
              this.projects = projects;
            });
          }
        }
      });
    });
  }

  //  ————— PROJECT HELPER —————
  public loadProjects(): Promise {
    return new Promise((resolve, reject) => {
      this.google.readRows(this.sheet).then((rows) => {
        if (rows) {
          resolve(this.rowsToProjects(rows));
        } else {
          resolve(null);
        }
      });
    });
  }
  public loadProject(project: Project): Promise {
    return new Promise((resolve, reject) => {
      this.google.readRows(this.sheet, {
        limit: 1,
        query: 'identifiant == ' + project.identifiant + ' && origin == ' + project.origin
      }).then((row) => {
        if (row.length) {
          project.googleSave = row[0];
          project.pined = row[0].pined;
          project.notes = row[0].notes;
          resolve(project);
        } else {
          resolve(null);
        }
      });
    });
  }
  public saveProject(project: Project): Promise {
    return new Promise((resolve, reject) => {
      // Check if exist
      this.loadProject(project).then((p) => {
        if (p) {
          this.google.getHeaders(this.sheet).then((params) => {
            console.log(params);
            for (let param of params) {
              p.googleSave[param] = p[param];
            }
            p.googleSave.save();
          });
        } else {
          // Add new
          this.google.addRow(this.sheet, project).then((row) => {
            project.googleSave = row;
            resolve(project);
          });
        }
      });
    });
  }
  public deleteProject(project: Project) {
    if (project.googleSave) {
      project.googleSave.del();
    }
    project.pined = false;
    project.notes = false;
  }

  public rowsToProjects(rows: any): Project[] {
    let projects = [];
    for (let row of rows) {
      projects.push(new Project({
        identifiant: Number(row.identifiant),
        name: row.name,
        country: row.country,
        city: row.city,
        creatorName: row.creatorname,
        creatorImage: row.creatorimage,
        usdCollected: Number(row.usdcollected),
        collected: Number(row.collected),
        goal: Number(row.goal),
        currency: row.currency,
        currencySymbol: row.currencysymbol,
        backers: Number(row.backers),
        image: row.image,
        video: row.video,
        url: row.url,
        origin: row.origin,
        pined: row.pined,
        notes: row.notes,
        googleSave: row
      }));
    }
    return projects;
  }
}
