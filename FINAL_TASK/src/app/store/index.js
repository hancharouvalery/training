import { createStore, applyMiddleware, compose } from 'redux';

import { appReducers } from './reducers';
import { logger } from './middleware';
import { moviesLoad } from './middleware';
import { showsLoad } from './middleware';
//import { genresLoad } from './middleware';

export const appStore = createStore(
    appReducers,
    applyMiddleware(logger, moviesLoad, showsLoad)
);

