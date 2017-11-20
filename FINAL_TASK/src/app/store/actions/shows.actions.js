import { GET_SHOWS } from './action.types';

export function getShows(shows) {
    return {
        type: GET_SHOWS,
        payload: shows
    };
}