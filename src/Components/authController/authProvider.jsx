/* ESTO ES PARA DEFINIR LAS RUTAS PUBLICAS Y LAS PRIVADAS */

import React, {useEffect} from 'react';
import {Redirect} from 'react-router-dom';

const PrivateRoute = ({children, token, setToken}) => {
    useEffect(() => {
        const storageToken = window.localStorage.getItem('_token') //me captura del local storage
        setToken(storageToken) //y me lo guarda en este estado
    }, [setToken]) //que se vuelva a ejecutar cuando se cambia el token

return <>{token ? children : <Redirect to="/signin"/>}</>
}

const PublicRoute = ({children, token, setToken}) => {  //las chldren es lo que hay dentro de las etiquetas
    useEffect(() => {
        const storageToken = window.localStorage.getItem('_token')
        setToken(storageToken)
    }, [setToken]) //que se vuelva a ejecutar cuando se cambia el token

return <>{!token ? children : <Redirect to="/"/>}</> //Si no existe un token, dejamos pasar el children. pero si existe, lo redirigimos al home ya que hay un token y no tiene poque iniciar de nuevo
}

const authProvider = { PrivateRoute, PublicRoute }  //Es un componente que tiene esos dos componentes, se exportan juntos

export default authProvider;