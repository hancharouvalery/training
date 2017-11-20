import { GET_SHOWS } from './../actions';

const initialState = {
    dataShows: []
};

export function showsReducer(state = initialState, action) {
    switch (action.type) {
        case GET_SHOWS:
            return Object.assign({}, state, { dataShows: action.payload });

        default:
            return state;
    }
}