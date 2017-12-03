import { ADD_TO_LIB } from './../actions';
import { REMOVE_FROM_LIB } from './../actions';
import { LIB_COUNT } from './../actions';

const initialState = {
    dataLibrary: [],
    count: 0
};

export function addToLibReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TO_LIB:
            state.dataLibrary.push(action.payload);
            return Object.assign({}, state, { dataLibrary: state.dataLibrary});

        case REMOVE_FROM_LIB:
            return Object.assign({}, state, { dataLibrary: action.payload});

        case LIB_COUNT:
            let countLibrary = state.count + action.payload;
            return Object.assign({}, state, { count: countLibrary});

        default:
            return state;
    }
}