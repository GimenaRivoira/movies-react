import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom'
import validations from '../../Validations/registerValidations'
import Button from '../Button/Button';
import Input from '../Input/Input';

import userService from '../../API/Services/userService';

function Register({className, setToken}){
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

      const [loading, setLoading] = useState(false)
      const history = useHistory()
    
      const onSubmit = async (data) => {
        /* Metodo con AXIOS */
        try {
          setLoading(true)
          const response = await userService.register(data); /* remplaza eso http.post('register', data) */
          window.localStorage.setItem('_token', response.data.token) //Set item es guardar algo en el local storage, la key es el nombre que le ponemos y lo que sigue es que se quiere guardar, en este caso, el token que nos da la api. Esto se usa para que la persona registrada pueda eccder y eso
          setToken(response.data.token); //despues el token de arriba se va a setear en ese estado.
          console.log(response.data)
          history.push('/')
          /* setLoading(false) -- para no repetir esto se usa el finally */
        } 
        catch (error) {
          console.log(error)
          /* setLoading(false) -- para no repetir esto se usa el finally */
        }
        finally { /*esto no importa si hay error o no se va a ejecutar siempre al finalizar la respuesta */
          setLoading(false)
        }

/*-------------------------------------------------------------------------
          Metodo con FETCH 
        fetch('https://movies-apirest.herokuapp.com/', {
          method : 'POST',
          body : JSON.stringify(data)
        }) 
--------------------------------------------------------------------------*/
      };
    return (
        <div className={`container p-4 d-flex justify-content-center ${className}`}>
        <div className="row justify-content-center shadow-lg p-3 mb-5 bg-body rounded">
          <div className="col-12 col-md-8">
            <h3 className="text-center pb-3">Registrate</h3>
          </div>
          <div className="col-12 col-md-9">
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                className="col-12"
                name="email"
                type="email"
                placeholder="Email"
                register={register}
                validation={validations.email}
                error={errors.email}
              />
  
              <Input
                className="col-12"
                name="pass"
                type="password"
                placeholder="Contraseña"
                register={register}
                validation={validations.pass}
                error={errors.pass}
              />
  
              <Button type="submit" text="ENVIAR" loading={loading} />
            </form>
          </div>
        </div>
      </div>
    )
}

export default Register;