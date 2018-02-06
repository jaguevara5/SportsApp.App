import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { TeamsService } from '../services/teams-service/teams.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, OnDestroy {

  private leagueId: number;
  private sub: any;
  private teamsList: any[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private teamsService: TeamsService
  ) { }

  ngOnInit() {

    this.sub = this.activatedRoute.params.subscribe((params: Params) => {
      this.leagueId = +params['id'];
      this.getTeamsList();
    });
  }

  getTeamsList() {
    this.teamsService.getTeamsByIdAPI(this.leagueId.toString())
    .subscribe(
      data => {
        this.teamsList = data;
      },
      error => console.log('Server Error')
    );
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
