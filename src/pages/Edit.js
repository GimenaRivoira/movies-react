import React, {useState, useEffect} from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Movieform from '../Components/Movieform/Movieform';

import movieService from '../API/Services/movieService';

import createFormData from '../Utils/createFormData';

function Edit(){
    const { id } = useParams();

    const [movie, setMovie] = useState(null)
    const [loading, setLoading] = useState(false)

    const history = useHistory()

    //QUE LLEGUEN LOS DATOS 
    useEffect(() => {
      const movieFetch = async() => {
        try {
          const response = await movieService.getOne(id)
          console.log(response.data)
          setMovie(response.data.data)  //que me guarde esa pelicula en el estado
        } catch (error) {
          console.log(error)
        }
      }
      movieFetch()
    }, [])

    //EDITAR UNA PELICULA
    const submit = async (data) => {
        try {
          setLoading(true)
          await movieService.edit(id, createFormData(data))
          history.push('/')
        } catch (error) {
          console.log(error)
        } finally {
          setLoading(false)
        }
    }


    return (
        <div className="row d-flex justify-content-center">
      <h1 className="text-center m-5">Editar película</h1>
      <div className="col-12 col-lg-8 col-xl-7">
        {movie ? (
         <Movieform movie={movie} submit={submit} loading={loading}/> ) : null}
      </div>
    </div>
    )
}

export default Edit;