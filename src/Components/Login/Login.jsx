import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import Button from '../Button/Button';
import Input from '../Input/Input';
import Message from '../Message/Message';
import validations from '../../Validations/registerValidations';
import { useHistory } from 'react-router-dom';

import userService from '../../API/Services/userService';

function Login({className, token, setToken}){
const { register, handleSubmit, formState: { errors } } = useForm();

const [loading, setLoading] = useState(false);
const [error, setError] = useState(false);
const history = useHistory()

const onSubmit = async (data) => {
  try {
    setLoading(true)
    const response = await userService.login(data);
    window.localStorage.setItem('_token', response.data.token) 
    setToken(response.data.token);
    console.log(response.data)
    history.push('/')
  } 
  catch (error) {
    setError(true)
    console.log(error)
  }
  finally {
    setLoading(false)
  }
}

    return (
      <div className={`container p-4 d-flex justify-content-center ${className}`}>
      <div className="row justify-content-center shadow-lg p-3 mb-5 bg-body rounded">
        <div className="col-12 col-md-8">
          <h3 className="text-center pb-3">Logueate!</h3>
        </div>
        <div className="col-12 col-md-9">
          <Message 
          show={error}
          setShow={setError}
          message="Credenciales invalidas"
          time={5000}
          />
          <form action="" onSubmit={handleSubmit(onSubmit)}>
            <Input
              className="col-12"
              name="email"
              type="text"
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
            <Button type="submit" text="ENVIAR" loading={loading}/>
          </form>
        </div>
      </div>
    </div>
    )
}

export default Login;