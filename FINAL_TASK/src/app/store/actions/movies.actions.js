import { GET_MOVIES } from './action.types';

export function getMovies(movies) {
    return {
        type: GET_MOVIES,
        payload: movies
    };
}