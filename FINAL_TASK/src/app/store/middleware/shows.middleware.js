import { getShows } from './../actions';
import { EntityService } from '../../services/entity.service';
const tvShowsApi =
'https://api.themoviedb.org/3/tv/top_rated?api_key=0364520972cd3b41c9bcbfd89c7e9832&language=en&append_to_response=credits';
const entityService = new EntityService();

const showsLoad = store => next => action => {
    let result = next(action);
    if (action.type === 'INITIAL_ACTION') {
        entityService.getEntities(tvShowsApi).then((entities)=>{
            store.dispatch(getShows(entities));
        });
    }
    return result;
};

export default showsLoad;