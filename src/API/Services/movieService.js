import http from '../http';

const movieService = {
    getAll : () => http.get('api/movies'),
    getOne : (id) => http.get(`api/movies/${id}`),
    create : (data) => http.post('api/movies/create', data),
    remove : (id) => http.delete(`api/movies/delete/${id}`),
    edit : (id, data) => http.put(`api/movies/update/${id}`, data) //necesita el id y la infomarcion por el body
}

export default movieService;