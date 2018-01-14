import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GamesComponent} from './games/games.component';
import { GameDetailsComponent } from './game-details/game-details.component';

const appRoutes: Routes = [
    {
        path: '',
        component: GamesComponent
    },
    {
        path: 'game-details',
        component: GameDetailsComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
