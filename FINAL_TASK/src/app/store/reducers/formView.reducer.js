import { FORM_VIEW } from './../actions';

const initialState = {
    display: 'none'
};

export function formReducer(state = initialState, action) {
    switch (action.type) {
        case FORM_VIEW:
            return Object.assign({}, state, { display: action.payload });

        default:
            return state;
    }
}