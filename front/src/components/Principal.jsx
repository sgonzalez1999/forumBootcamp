import React, { useState } from 'react'
import CreateThread from './CreateThread';
import { useNavigate } from "react-router-dom";

import Hilo from './Hilo'

// const DUMMY_FLIGHTS = [
//   {
//     name: "deportes",
//     tag: "duda",
//     messages: [
//       {
//         message: "string",
//         message: "string",
//         message: "string",
//         message: "string",
//       },
//     ],
//   },
//   {
//     name: "videojuegos",
//     tag: "sugerencia",
//     messages: [
//       {
//         message: "string",
//         message: "string",
//         message: "string",
//         message: "string",
//         message: "string",
//       },
//     ],
//   },
//   {
//     name: "peliculas",
//     tag: "aclaración",
//     messages: [
//       {
//         message: "string",
//         message: "string",
//         message: "string",
//       },
//     ],
//   },
// ];





const Principal = (props) => {
    
    const [isvisible, setIsvisible]= useState(false);
    const ver = (isVis)=>{
        setIsvisible(isVis)
    };
    const clickHandler = ()=>{
        setIsvisible(true)
    };

    const navigate = useNavigate();

    function abrirDetalle() {
        navigate("/DetalleHilo");
        // axios.get(url+"/"+name).then(function (returned) {
        //     if(returned.status == "200"){
        //         navigate("/FlightChooserPage");
        //     }
        // });
    }


    return (
      <div className="m-5 b bg-light rounded">
        <div className="row mt-2 bg-secondary">
          <div className="col-11 text-info">
            <h1 className="m-2 ms-5">Foro bootcamp</h1>
          </div>

          <div className="col mt-2 m-1">
            <button
            id='btnCrear'
              type="button"
              className="btn btn-outline-info btn-lg"
              onClick={clickHandler}
            >
              Crear Hilo
            </button>
          </div>
        </div>
        <div id="abrirDetalle" className='card bg-info mt-3' onClick={abrirDetalle}>
          <Hilo />
        </div>

        {isvisible && <CreateThread func={ver}/>}
      </div>
    );
}

export default Principal;
