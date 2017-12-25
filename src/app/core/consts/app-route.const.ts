import { RouterModule, Routes } from '@angular/router';
import { ErrorNotFoundPage } from '../pages/error-not-found/error-not-found.page';
import { CoreLayout } from './../layouts/core/core.layout';

export const appRoutes: Routes = [
    { path: 'index', redirectTo: '/home', pathMatch: 'full' },
    { path: '', component: CoreLayout },
    // { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: ErrorNotFoundPage }
]
