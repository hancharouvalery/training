import { GET_MOVIES } from './../actions';
import { ADD_MOVIES } from './../actions';

const initialState = {
    dataMovies: []
};

export function moviesReducer(state = initialState, action) {
    switch (action.type) {
        case GET_MOVIES:
        return Object.assign({}, state, { dataMovies: action.payload });

        case ADD_MOVIES:
            state.dataMovies.push(action.payload);
            return Object.assign({}, state, { dataMovies: state.dataMovies });

        default:
            return state;
    }
}