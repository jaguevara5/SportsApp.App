import { Component } from '@angular/core';
import { GamesComponent } from './games/games.component';
import { TopNavComponent } from './ui/top-nav/top-nav.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to the Sports App!';
}
