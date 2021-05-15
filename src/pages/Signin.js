import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Input from '../Components/Input/Input';
import Login from '../Components/Login/Login'
import Register from '../Components/Register/Register';

function Signin({setToken}){ //le llega la propiedad setToken, este hace de pasamano, captura la prop y se lo manda al que la necesita, en este caso al register.
    const [login, setLogin] = useState(true)


    return (
      <>
      <h1 className="text-center my-4">Bienvenidos a Movies Com5</h1>
      <div className="text-center">
        {login ? (
          <p>
            ¿No estás registrado? ¿Qué esperás?{' '}
            <Link
              to="#"
              className="text-center"
              onClick={() => setLogin(false)}
            >
              Registrate!
            </Link>
          </p>
        ) : (
          <p>
            ¿Ya estás registrado?{' '}
            <Link to="#" className="text-center" onClick={() => setLogin(true)}>
              Iniciá sesión!
            </Link>
          </p>
        )}
      </div>
      {login ? <Login setToken={setToken}/> : <Register setToken={setToken} />} {/* ese token lo queremos cambiar desde register, no desde signin */}
    </>
    )
}

export default Signin;