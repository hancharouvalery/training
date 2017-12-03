import { LIB_CURRENT } from './action.types';

export function libCurrent(arr) {
    return {
        type: LIB_CURRENT,
        payload: arr
    };
}