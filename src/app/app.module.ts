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

@NgModule({
  declarations: [
    AppComponent,
    GamesComponent,
    UtcDatePipe,
    TopNavComponent,
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
