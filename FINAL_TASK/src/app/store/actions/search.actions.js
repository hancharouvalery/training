import { SEARCH } from './action.types';

export function searchFilms(textValue) {
    return {
        type: SEARCH,
        payload: textValue
    };
}

