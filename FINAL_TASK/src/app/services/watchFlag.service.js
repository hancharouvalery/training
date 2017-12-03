export class WatchFlag {
    constructor(entity) {
        this.id = entity.id || '';
        this.title = entity.title || entity.name || '';
        this.poster_path = entity.poster_path || '';
        this.genre_ids = entity.genre_ids || '';
        this.overview = entity.overview || '';
        this.vote_average = entity.vote_average || '';
        this.popularity = entity.popularity || '';
        this.add = entity.add || '';
        this.remove = entity.remove || '';
        this.flag = true || '';
        this.api = entity.api || '';
    }
}