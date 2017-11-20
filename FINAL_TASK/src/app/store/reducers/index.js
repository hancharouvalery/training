import { combineReducers } from 'redux';

//Reducers
import { searchReducer } from './search.reducer';
import { moviesReducer } from './movies.reducer';
import { showsReducer } from './shows.reducer';
import { initialReducer } from './initial.reducer';
import { formReducer } from './formView.reducer';

// Combine Reducers
export const appReducers = combineReducers({
    movies: moviesReducer,
    shows: showsReducer,
    initial: initialReducer,
    search: searchReducer,
    form: formReducer
});
