import { Router } from '@angular/router';
import { AlertModel } from './../../shared/models/dialogs/alert.model';
import { of } from 'rxjs/observable/of';
import { Store } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import * as NavbarActions from './../actions/navbar-container.actions';
import * as CoreActions from './../actions/core.actions';
import * as fromCore from './../reducers/core-state.reducer';
@Injectable()
export class NavbarContainerEffects {
    @Effect({ dispatch: false })
    logged$ = this.actions$
        .ofType(NavbarActions.NAV_LOGGED)
        .do(() => {
            console.log('navbar logged');
        });
    constructor(private actions$: Actions,
        private coreStore: Store<fromCore.State>) { }
}
