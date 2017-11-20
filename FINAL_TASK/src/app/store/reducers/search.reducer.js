import { SEARCH } from './../actions';

const initialState = {
    inputValue: ''
};

export function searchReducer(state = initialState, action) {
    switch (action.type) {
        case SEARCH:
            return Object.assign({}, state, { inputValue: action.payload });

        default:
            return state;
    }
}