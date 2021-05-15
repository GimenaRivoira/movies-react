import http from '../http';

const genreService = {
    getAll : () => http.get('api/genres')
}

export default genreService;