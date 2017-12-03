import { LIBRARY_COUNT_PLUS, LIBRARY_COUNT_MINUS } from './action.types';
import { LIBRARY_DISPLAY } from './action.types';

export function libraryCountPlus(count) {
    return {
        type: LIBRARY_COUNT_PLUS,
        payload: count
    };
}

export function libraryCountMinus(count) {
    return {
        type: LIBRARY_COUNT_MINUS,
        payload: count
    };
}

export function libraryDisplay(display) {
    return {
        type: LIBRARY_DISPLAY,
        payload: display
    };
}

