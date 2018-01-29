import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GamesComponent } from './games/games.component';
import { GamesService } from './services/games-service/games.service';
import { routing } from './app.routing';
import { UtcDatePipe } from './pipes/utc-date-pipe';
import { TopNavComponent } from './ui/top-nav/top-nav.component';
import { GameDetailsComponent } from './game-details/game-details.component';
import { GameDataService } from './services/game-data/game-data.service';
import { LeaguesComponent } from './leagues/leagues.component';
import { LeaguesService } from './services/leagues-service/leagues.service';
import { ServerNameService } from './services/server-name/server-name.service';
import { LeagueIdService } from './services/league-id/league-id.service';

@NgModule({
  declarations: [
    AppComponent,
    GamesComponent,
    UtcDatePipe,
    TopNavComponent,
    GameDetailsComponent,
    LeaguesComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpModule
  ],
  providers: [GamesService, GameDataService, LeaguesService, ServerNameService, LeagueIdService],
  bootstrap: [AppComponent]
})
export class AppModule { }
