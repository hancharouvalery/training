export class EntityDto {
    constructor(entity) {
        this.id = entity.id || '';
        this.title = entity.title || entity.name || '';
        this.poster_path = `https://image.tmdb.org/t/p/w185${entity.poster_path}` || '';
        this.genre_ids = entity.genre_ids || '';
        this.overview = entity.overview || '';
        this.vote_average = `${entity.vote_average*10}%` || '';
        this.popularity = `${entity.popularity/10}%` || '';
        this.add = 'block';
        this.remove = 'none';
        this.borderPlus = 'none';
    }
}
