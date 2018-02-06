import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GamesComponent} from './games/games.component';
import { GameDetailsComponent } from './game-details/game-details.component';
import { TableComponent } from './table/table.component';

const appRoutes: Routes = [
    {
        path: '',
        component: GamesComponent
    },
    {
        path: 'game-details/:id',
        component: GameDetailsComponent
    },
    {
        path: 'table/:id',
        component: TableComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
