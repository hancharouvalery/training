import { FORM_VIEW } from './action.types';

export function formView(display) {
    return {
        type: FORM_VIEW,
        payload: display
    };
}