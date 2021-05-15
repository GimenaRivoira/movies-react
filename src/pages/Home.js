import React, {useEffect, useState} from 'react';
import Card from '../Components/Card/Card';
import movieService from '../API/Services/movieService';

function Home(){

  const [movies, setMovies] = useState([])
  const [refresh, setRefresh] = useState(true)

  useEffect(() => {
    if (refresh) {
    const fetchMovies = async () => {  //se hace porque useEffect no puede recibir metodos async directamente
      const movie = await movieService.getAll();
      console.log(movie.data.data)
      setMovies(movie.data.data)  //se guardan las pelis en este estado para que se pueda usar en el map
    }
    fetchMovies()
    setRefresh(false) //va a cambiar el valor, ya que no queremos que se actualic
  }
  }, [refresh])  //cada vez que cambie el valor de refresh, todo esto se va a volver a ejecutar

  const handleDelete = async (id) => {  //siempre cuano se hace un pedido a una api se usa
    try {
      await movieService.remove(id)
    } catch (error) {
      console.log(error)
    } finally {
      setRefresh(true)
    }
  }

    return (
    <div className="container">
      <h2 className="text-center my-5">Nuestras películas</h2>
      <section className="row">
        {movies.map((movie) => (
          <Card movie={movie} key={movie.id} handleDeleteMovie={handleDelete} />
        ))}
      </section>
    </div>
    )
}

export default Home;