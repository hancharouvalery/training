import { LIBRARY_COUNT_PLUS, LIBRARY_COUNT_MINUS } from './../actions';
import { LIBRARY_DISPLAY } from './../actions';

const initialState = {
    count: 0,
    display: 'none'
};

export function libraryReducer(state = initialState, action) {
    switch (action.type) {
        case LIBRARY_COUNT_PLUS:
            let newCountPlus = state.count + action.payload;
            return Object.assign({}, state, { count: newCountPlus });

        case LIBRARY_COUNT_MINUS:
            let newCountMinus = 0;
            state.count ===0 ? newCountMinus = 0 : newCountMinus = state.count - action.payload;
            return Object.assign({}, state, { count: newCountMinus });

        case LIBRARY_DISPLAY:
            return Object.assign({}, state, { display: action.payload });

        default:
            return state;
    }
}