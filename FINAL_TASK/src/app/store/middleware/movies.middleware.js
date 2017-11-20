import { getMovies } from './../actions';
import { EntityService } from '../../services/entity.service';
const movieApi =
'https://api.themoviedb.org/3/movie/upcoming?api_key=0364520972cd3b41c9bcbfd89c7e9832&language=en&append_to_response=credits';
const entityService = new EntityService();

const moviesLoad = store => next => action => {
    let result = next(action);
    if (action.type === 'INITIAL_ACTION') {
        entityService.getEntities(movieApi).then((entities)=>{
            store.dispatch(getMovies(entities));
        });
    }
    return result;
};

export default moviesLoad;
