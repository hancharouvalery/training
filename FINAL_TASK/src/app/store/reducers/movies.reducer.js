import { GET_MOVIES } from './../actions';

const initialState = {
    dataMovies: []
};

export function moviesReducer(state = initialState, action) {
    switch (action.type) {
        case GET_MOVIES:
            return Object.assign({}, state, { dataMovies: action.payload });

        default:
            return state;
    }
}