import { combineReducers } from 'redux';

//Reducers
import { searchReducer } from './search.reducer';
import { moviesReducer } from './movies.reducer';
import { showsReducer } from './shows.reducer';
//import { genresReducer } from './genres.reducer';
import { initialReducer } from './initial.reducer';
import { formReducer } from './formView.reducer';
import { libraryReducer } from './library.reducer';
import { addToLibReducer } from './addToLib.reducer';
import { currentLibReducer } from './currentLib.reducer';

// Combine Reducers
export const appReducers = combineReducers({
    movies: moviesReducer,
    shows: showsReducer,
    initial: initialReducer,
    search: searchReducer,
    form: formReducer,
    library: libraryReducer,
    addLibrary: addToLibReducer,
    current: currentLibReducer
});
