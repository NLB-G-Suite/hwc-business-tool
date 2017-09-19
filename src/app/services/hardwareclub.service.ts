import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import childProcess from 'child_process';
import * as fs from 'fs';
import * as path from 'path';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class HardwareClubService {

  public token: string = '';
  private baseUrl = 'https://api.kickstarter.com';
  private headers = new Headers();
  private options: RequestOptions;

  constructor (
    private http: Http) {
  }

  // ————— CRUD —————
  public signin(email: string, password: string): Promise<any> {
    const body = { email, password };

    body.email = email;
    body.password = password;

    return this.cURL('https://api.hardwareclub.co/api/v1/token', body);
  }

  public cURL(url: string, body: any, token = ''): Promise<any> {

    let method = 'POST';
    if (body === null) {
      method = 'GET';
    }

    const args = [
      '-X ' + method,
      url,
      "-H 'cache-control: no-cache'",
      "-H 'content-type: application/json'",
      "-H 'Authorization: Bearer " + token + "'",
      "-d '" + JSON.stringify(body) + "'"
    ].join(' ');

    let promise = new Promise((resolve, reject) => {
      childProcess.exec('curl ' + args, (err, stdout, stderr) => {
        if (err) {
          reject(err);
        }
        if (JSON.parse(stdout).error !== undefined) {
          reject(JSON.parse(stdout));
        }
        resolve(JSON.parse(stdout));
      });
    });
    return promise;
  }
}
