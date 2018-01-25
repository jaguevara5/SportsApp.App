import { Component, OnInit } from '@angular/core';
import { LeaguesService } from '../services/leagues-service/leagues.service';

@Component({
  selector: 'app-leagues',
  templateUrl: './leagues.component.html',
  styleUrls: ['./leagues.component.css']
})
export class LeaguesComponent implements OnInit {

  private leaguesList: any[];

  constructor(
    private leaguesService: LeaguesService
  ) { }

  ngOnInit() {
    this.getLeagues();
  }

  getLeagues() {
    this.leaguesService.getLeaguesAPI()
    .subscribe(
      data => {
        this.leaguesList = data;
      },
      error => console.log('Server Error')
    );
  }
}
