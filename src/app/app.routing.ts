import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {GamesTodayComponent} from './games-today/games-today.component';
import { GameDetailsComponent } from './game-details/game-details.component';

const appRoutes: Routes = [
    {
        path: '',
        component: GamesTodayComponent
    },
    {
        path: 'game-details',
        component: GameDetailsComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
