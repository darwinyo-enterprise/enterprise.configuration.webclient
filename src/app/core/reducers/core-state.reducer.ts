import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromNavbarContainer from './../reducers/navbar-container.reducer';
import * as fromCore from './../reducers/core.reducer';
import * as fromRoot from './../../reducers/app-state.reducer';

export interface CoreState {
    navbarContainerState: fromNavbarContainer.State;
    coreState: fromCore.State;
}
export interface State extends fromRoot.State {
    coreState: CoreState;
}

export const coreStateReducer = {
    navbarContainerState: fromNavbarContainer.navbarContainerReducer,
    coreState: fromCore.coreReducer
};
export const selectCoreState = createFeatureSelector<CoreState>('core');

export const selectNavbarContainerState = createSelector(
    selectCoreState,
    (state: CoreState) => state.navbarContainerState
);
export const getNavbarContainerLogged = createSelector(
    selectNavbarContainerState,
    fromNavbarContainer.getNavbarContainerLogged
);
//#region popup state
export const selectPopUpState = createSelector(
    selectCoreState,
    (state: CoreState) => state.coreState
);

export const getAlert = createSelector(
    selectPopUpState,
    fromCore.getAlert
);
export const getError = createSelector(
    selectPopUpState,
    fromCore.getError
);
export const getConfirm = createSelector(
    selectPopUpState,
    fromCore.getConfirm
);
//#endregion
