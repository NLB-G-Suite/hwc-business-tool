import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import childProcess from 'child_process';
import * as fs from 'fs';
import * as path from 'path';

import { KickstarterOption } from '../class/kickstarterOption';
import { Project } from '../class/project';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class KickstarterService {

  public token: string = '';
  public clientId: string = '2II5GGBZLOOZAA5XBU1U0Y44BU57Q58L8KOGM7H0E0YFHP3KTG';
  private baseUrl = 'https://api.kickstarter.com/v1/';

  constructor (
    private http: Http) {
  }

  // ————— SETTING —————
  public setToken(token: string): void {
    this.token = token;
  }

  // ————— SIGNIN —————
  public signin(email: string, password: string): Promise<any> {
    const body = { email, password };

    body.email = email;
    body.password = password;

    return this.cURL('https://api.kickstarter.com/xauth/access_token', body);
  }
  // ————— GET PROJECT —————
  public getProject(id: number): Promise<any> {
    return this.cURL(this.baseUrl + '/projects/' + id, null, this.token);
  }
  // ————— SEARCH —————
  public search(option: KickstarterOption): Promise<any> {
    let params = '';
    if (option.recommended) { params += '&recommended=true'; }
    if (option.state === 'live') { params += '&state=live'; }
    if (option.search !== undefined) { params += '&term=' + option.search; }
    if (option.categoryId !== undefined) { params += '&category_id=' + option.categoryId; }
    // popularity | newest | magic | most_founded | end_date
    if (option.sort !== undefined) { params += '&sort=' + option.sort; }
    if (option.count !== undefined) { params += '&count=' + option.count; }
    if (option.perPage !== undefined) { params += '&per_page=' + option.perPage; }
    return this.cURL(this.baseUrl + '/discover', null, this.token, params);
  }
  /*
   * "categories": "https://api.kickstarter.com/v1/categories",
   * "newest_projects": "https://api.kickstarter.com/v1/projects/newest",
   * "popular_projects": "https://api.kickstarter.com/v1/projects/popular",
   * "ending_soon_projects": "https://api.kickstarter.com/v1/projects/ending_soon",
   * "near_projects": "https://api.kickstarter.com/v1/projects/near",
   * "search_projects": "https://api.kickstarter.com/v1/projects/search",
   * "self" :"https://api.kickstarter.com/v1/users/self"
  */
  public convertResultToProjects(results): Project[] {
    console.log(results);
    let list = [];
    for (let res of results.projects) {
      list.push(new Project({
        identifiant: res.id,
        name: res.name,
        country: res.country,
        city: res.location.name,
        creatorName: res.creator.name,
        creatorImage: res.creator.avatar.medium,
        usdCollected: Number(res.usd_pledged),
        collected: res.pledged,
        goal: res.goal,
        currency: res.currency,
        currencySymbol: res.currency_symbol,
        backers: res.backers_count,
        image: res.profile.feature_image_attributes.image_urls.default,
        video: res.video.high,
        url: res.urls.web.project,
        origin: 'kickstarter'
      }));
    }
    return list;
  }

  public cURL(url: string, body: any, token = '', params = ''): Promise<any> {

    let method = 'POST';
    if (body === null) {
      method = 'GET';
    }

    const args = [
      '-X ' + method,
      "'" + url + '?client_id=' + this.clientId + '&oauth_token=' + token + params + "'",
      "-H 'cache-control: no-cache'",
      "-H 'Authorization: Bearer " + token + "'",
      "-H 'content-type: application/json'",
      "-d '" + JSON.stringify(body) + "'"
    ].join(' ');

    let promise = new Promise((resolve, reject) => {
      childProcess.exec('curl ' + args, (err, stdout, stderr) => {
        if (err) {
          reject(err);
        }
        resolve(JSON.parse(stdout));
      });
    });
    return promise;
  }
}
