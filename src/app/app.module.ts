import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GamesTodayComponent } from './games-today/games-today.component';
import { GamesService } from './services/games-service/games.service';
import { routing } from './app.routing';
import { UtcDatePipe } from './pipes/utc-date-pipe';
import { TopNavComponent } from './ui/top-nav/top-nav.component';
import { GamesYesterdayComponent } from './games-yesterday/games-yesterday.component';
import { GamesTomorrowComponent } from './games-tomorrow/games-tomorrow.component';
import { GameDetailsComponent } from './game-details/game-details.component';
import { GameDataService } from './services/game-data/game-data.service';

@NgModule({
  declarations: [
    AppComponent,
    GamesTodayComponent,
    UtcDatePipe,
    TopNavComponent,
    GamesYesterdayComponent,
    GamesTomorrowComponent,
    GameDetailsComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpModule
  ],
  providers: [GamesService, GameDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
