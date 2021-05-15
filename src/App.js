/* Importacion general */
import React, { useState } from 'react';
import './App.css';

/* Importacion de componentes */
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import authProvider from './Components/authController/authProvider';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';

/* Importacion de pages */
import Home from './pages/Home';
import Signin from './pages/Signin';
import Create from './pages/Create';
import Edit from './pages/Edit';
import Notfound from './pages/Notfound';

/* Importacion de rutas */
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';

/* Destructuracion de authProvider ya que tiene dos componentes en uno */
const {PrivateRoute, PublicRoute} = authProvider;  //estos componentes se usan para encerrar los componentes que queremos que se muestren


function App() {
  const [token, setToken] = useState(null) //se hace esto para que el estado de la token se mantenga de forma global y no se pierda una vez registrado en el sitio. Se inicializa en null ya que hasta que no se registra, ese estado queda en null porque no tiene ninguna token
  return (
    <>
    <BrowserRouter>
    <ScrollToTop />
    
    <Header token={token} setToken={setToken}/>
     <div className="container main-container">
      <Switch>
        <Route path="/" exact>
          <PrivateRoute token={token} setToken={setToken}>
          <Home/>
          </PrivateRoute>
        </Route>

        <Route path="/signin" exact>  {/* le pasa como propiedad al signing ya que cuando inicia sesion o se registra el estado de esa token va a cambiar, ya no va a ser null */}
          <PublicRoute token={token} setToken={setToken}>
          <Signin setToken={setToken}/>
          </PublicRoute>
        </Route>

        <Route path="/create" exact>
        <PrivateRoute token={token} setToken={setToken}>
          <Create/>
          </PrivateRoute>
        </Route>

        <Route path="/edit/:id" exact>
        <PrivateRoute token={token} setToken={setToken}>
          <Edit/>
          </PrivateRoute>
        </Route>

        <Route path="/*">
          <Notfound/>
        </Route>
      </Switch>
      </div>
      <Footer/>

    </BrowserRouter>
    </>
  );
}

export default App;
