import * as NavbarContainerActions from './../actions/navbar-container.actions';
export interface State {
    logged: boolean;
}

export const INITIAL_STATE = {
    logged: false
};

export function navbarContainerReducer(state = INITIAL_STATE, action: NavbarContainerActions.Actions): State {
    switch (action.type) {
        case NavbarContainerActions.NAV_LOGGED: {
            return {
                ...state,
                logged: !state.logged
            };
        }
        default:
            return state;
    }
}

export const getNavbarContainerLogged = (state: State) => state.logged;
