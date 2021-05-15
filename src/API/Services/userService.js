import http from '../http';

const userService = {
    register : (data) => http.post('register', data),
    login : (data) => http.post('login', data)
}

export default userService