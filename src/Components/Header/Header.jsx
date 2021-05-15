import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';

function Header({token, setToken}){
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(!show)
    const closeNav = () => setShow(false) //menu hamburguesa, que se cierre cuando se toca el boton

    const loguot = () => {
        closeNav()  
        window.localStorage.removeItem('_token') //eliminamos del local storage
        setToken(null)  //y del estado del app tambien se elimina el token
    }

    return (
        <>      
            <section className="">

                <div className="logos" onClick={closeNav}>
                    <Link to="/">
                        <img id="logo1" src="/logo192.png" alt="logo"/>
                    </Link>
                </div>

                <button className="btn-menu" onClick={handleShow}>
                    <span>
                        <i className={show ? 'fas fa-times' : 'far fa-bars'}/>
                    </span>
                </button>

                <nav className={`menu d-flex align-items-center w-100 p-3 ${show ? 'is-active' : ''}`}>
                <>
                <Link to="/">Inicio</Link>
                <Link to="/create">Crear</Link>
                </>

                <div className="flex grow-1 d-flex justify-content-end">
                    {token ? (
                     <Button 
                     to="/signin" 
                     text="Cerrar sesion" 
                     className="btn btn-outline-light justify-self-end my-3 my-lg-0" /* Las props del component button */
                     onClick={loguot}
                     /> 
                     ) : ( <Button 
                    to="/signin" 
                    text="Iniciar sesion" 
                    className="btn btn-outline-light justify-self-end my-3 my-lg-0" /* Las props del component button */
                    onClick={loguot}
                    /> 
                    )}
                </div>
                </nav>
            </section>
       

        {show ? (<div className="active-nav-background" aria-hidden="true" onClick={handleShow}/>) : null}
        </>
    );
}

export default Header;