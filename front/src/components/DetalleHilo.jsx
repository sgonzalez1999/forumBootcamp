import React from 'react'
import { useNavigate } from "react-router-dom";
import Mensaje from './Mensaje';



function DetalleHilo() {

    const navigate = useNavigate();

    function volver() {
        navigate("/");
        // axios.get(url+"/"+name).then(function (returned) {
        //     if(returned.status == "200"){
        //         navigate("/FlightChooserPage");
        //     }
        // });
    }
  return (
    <div className="m-5 b bg-light rounded">
      <div className="row mt-2 bg-secondary">
        <div className="col-8 mt-2 text-info ms-5">
          <h1>
            name
            {/* {props.name} */}
          </h1>
        </div>

        <div className="col-3 mt-2 m-1 text-info">
          <h1>
            label
            {/* {props.label} */}
          </h1>
        </div>
        <div className="col mt-2 m-1 text-info" onClick={volver}>
          <h1>
            <i className="bi bi-box-arrow-in-left"></i>
          </h1>
        </div>
      </div>

      {/* mapear todos los mensajes */}
      <div className="card bg-dark mt-3">
        <Mensaje />
      </div>

      <textarea className='w-50 mt-5'/>

      <button
        type="button"
        className="btn btn-primary ms-5 mb-5"
        //   onClick={clickHandler}
      >
        Crear
      </button>
    </div>
  );
}

export default DetalleHilo