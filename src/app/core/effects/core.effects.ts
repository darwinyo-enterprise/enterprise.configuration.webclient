import { Store } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import * as fromCore from './../reducers/core-state.reducer';
import * as CoreActions from './../actions/core.actions';
@Injectable()
export class CoreEffects {
    @Effect({ dispatch: false })
    error$ = this.actions$
        .ofType(CoreActions.ERROR)
        .do(() => console.log('Error'));
    @Effect({ dispatch: false })
    alert$ = this.actions$
        .ofType(CoreActions.ALERT)
        .do(() => console.log('alert'));
    @Effect({ dispatch: false })
    confirm$ = this.actions$
        .ofType(CoreActions.CONFIRM)
        .do(() => console.log('confirm'));
    @Effect({ dispatch: false })
    clear$ = this.actions$
        .ofType(CoreActions.CLEAR)
        .do(() => console.log('clear'));

    constructor(private actions$: Actions,
        private coreStore: Store<fromCore.State>) { }
}
