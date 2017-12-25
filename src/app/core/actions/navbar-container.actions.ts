import { Action } from '@ngrx/store';
export const NAV_LOGGED = '[CORE] [NAVBAR_CONTAINER] NAV_LOGGED';

export class NavLogged implements Action {
    readonly type: string = NAV_LOGGED;
}
export type Actions =
    | NavLogged;
