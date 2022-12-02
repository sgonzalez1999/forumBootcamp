import React from 'react';
import Select from 'react-select'

function CreateThread(props) {


    const clickHandler = ()=>{
        props.func(false);
    };

    const options = [
      { value: 'duda', label: 'duda' },
      { value: 'sugerencia', label: 'sugerencia' },
      { value: 'aclaración', label: 'aclaración' }
    ]

        return (
          <div className="bg-info position-absolute top-50 start-50 translate-middle d-flex flex-column justify-content-center">
            <h5 className="pt-2 ms-5 me-5">Crear nuevo hilo</h5>
            <div className="row p-3">
              <label className="col ms-4">Titulo</label>
              <input id="inputTitulo" className="col me-4 " type="text" />
            </div>

            <div className="row">
              <div className="col ms-4 pe">
                <label>Etiquetas</label>
              </div>

              <div className="col  me-4 pe-3">
                <Select id="tag" options={options} placeHolder="asdf" />
              </div>
            </div>

            <button
              id="btnCreateThread"
              type="button"
              className="btn btn-primary position-sticky m-3"
              onClick={clickHandler}
            >
              Crear
            </button>
          </div>
        );
}

export default CreateThread   
    
    