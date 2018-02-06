import { Component, OnInit } from '@angular/core';
import { LeaguesService } from '../services/leagues-service/leagues.service';
import { LeagueIdService } from '../services/league-id/league-id.service';

@Component({
  selector: 'app-leagues',
  templateUrl: './leagues.component.html',
  styleUrls: ['./leagues.component.css']
})
export class LeaguesComponent implements OnInit {

  private leaguesList: any[];
  private sports: any[];
  private curSport: any;
  private leagueId: string;

  constructor(
    private leaguesService: LeaguesService,
    private leagueIdService: LeagueIdService
  ) {

    this.sports = [
      { id: 1, name: 'Football'},
      { id: 2, name: 'Volleyball'},
      { id: 3, name: 'Soccer'}
    ];
    this.curSport =  this.sports[0];
  }

  ngOnInit() {
    this.getLeagues(this.curSport.id);
    this.leagueIdService.currentLeagueId.subscribe(leagueId => this.leagueId = leagueId);
  }

  getLeagues(sportId: number) {
    this.leaguesService.getLeaguesAPI(sportId.toString())
    .subscribe(
      data => {
        this.leaguesList = data;
      },
      error => console.log('Server Error')
    );
  }

  setNewSport(sportId: string): void {
    // Match the selected ID with the ID's in array
    this.curSport = this.sports.filter(value => value.id === parseInt(sportId, 10));
    this.getLeagues(this.curSport[0].id);
  }

  showLeagueTable(event) {
    const leagueElementId: string = event.currentTarget.id;
    const idStringArray: string[] = leagueElementId.split('-');
    const leagueId = idStringArray[1];
    localStorage.setItem('leagueId', leagueId);
    this.leagueIdService.updateLeagueId(leagueId);
  }
}
