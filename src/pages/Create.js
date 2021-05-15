import React, { useState }from 'react';
import Movieform from '../Components/Movieform/Movieform';
import { useHistory } from 'react-router-dom';
import movieService from '../API/Services/movieService'
 
function Create(){

  const [loading, setLoading] = useState(false)

  const history = useHistory()
   const submit = async (data) =>{
     try {
       setLoading(true)
       await movieService.create(data)
       history.push('/')
     } catch (error) {
       console.log(error)
     }
     finally{
      setLoading(false)
     }
   }

    return (
    <div className="row d-flex justify-content-center">
      <h1 className="text-center m-5">Crear película</h1>
      <div className="col-12 col-lg-8 col-xl-7">
        <Movieform submit={submit} loading={loading}/>
      </div>
    </div>
    )
}

export default Create;