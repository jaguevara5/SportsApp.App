import { ServerNameService } from '../server-name/server-name.service';
import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class LeaguesService {

  constructor(
    private http: Http,
    private serverName: ServerNameService) {

  }

  getLeaguesAPI(): Observable<any> {
    return this.http.get(this.serverName.getServerName() + 'api/leagues/')
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || ' Server Error '));
  }
}
