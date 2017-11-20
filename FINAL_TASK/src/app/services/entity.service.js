import {
    DataService
} from './data-service';

import {
    EntityDto
} from './entity.dto';

export class EntityService {
    constructor() {
        this.dataService = new DataService();
    }

    getEntities(url) {
        return this.dataService.requestData(url).then(result => {
            let movieArray = JSON.parse(result).results;
            let entities = movieArray.map((item)=>{
                return new EntityDto(item);
            });
            return entities;
        });
    }
}