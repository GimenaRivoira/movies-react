import axios from 'axios';

const http = axios.create({baseURL : 'https://movies-apirest.herokuapp.com/'})

http.interceptors.request.use((config) => { //antes de que se haga un request, este interceptor va a agarrar la configuracion actual, y en los headers de esa configuracion me va a agregar el token que esta en el localstorage... Se ejecuta cada vez q hacemos una peticion
    const token = window.localStorage.getItem('_token') //capturar el token que antes pusimos el nombre y pasar este dato al servidor por los headers
    config.headers = {token} //
    return config;
})


export default http;