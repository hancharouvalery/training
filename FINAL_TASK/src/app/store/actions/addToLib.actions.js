import { ADD_TO_LIB } from './action.types';
import { REMOVE_FROM_LIB } from './action.types';
import { LIB_COUNT } from './action.types';


export function addToLib(movies) {
    return {
        type: ADD_TO_LIB,
        payload: movies
    };
}

export function removeFromLib(movies) {
    return {
        type: REMOVE_FROM_LIB,
        payload: movies
    };
}

export function libCount(count) {
    return {
        type: LIB_COUNT,
        payload: count
    };
}