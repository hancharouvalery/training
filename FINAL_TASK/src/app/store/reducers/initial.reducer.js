import { INITIAL_ACTION } from './../actions';

const initialState = {
    state: 'INITIAL'
};

export function initialReducer(state = initialState, action) {
    switch (action.type) {
        case INITIAL_ACTION:
        return state;

        default:
            return state;
    }
}