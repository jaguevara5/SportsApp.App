import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class GamesService {

  constructor(private http: Http) {

  }

  getGamesAPI(gamesWhen: string): Observable<any> {
    return this.http.get('http://ec2-18-216-8-223.us-east-2.compute.amazonaws.com/api/games/' + gamesWhen)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || ' Server Error '));
  }
}
