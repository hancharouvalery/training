import { LIB_CURRENT } from './../actions';

const initialState = {
    dataCurrent: []
};

export function currentLibReducer(state = initialState, action) {
    switch (action.type) {
        case LIB_CURRENT:
            return Object.assign({}, state, { dataCurrent: action.payload});

        default:
            return state;
    }
}