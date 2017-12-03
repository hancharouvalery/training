import { GET_MOVIES } from './action.types';
import { ADD_MOVIES } from './action.types';

export function getMovies(movies) {
    return {
        type: GET_MOVIES,
        payload: movies
    };
}

export function addMovies(movies) {
    return {
        type: ADD_MOVIES,
        payload: movies
    };
}