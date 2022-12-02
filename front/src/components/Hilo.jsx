import React from 'react'

function Hilo(props) {
  return (
    <div>
      <div className="row">
      <div className="col-9 pt-2 pb-2 ms-4">
        <h3>
          name
          {/* {props.name} */}
        </h3>
      </div>

      <div className="col pt-2 pb-2">
        <h3>
          label
          {/* {props.label} */}
        </h3>
        </div>
      </div>
    </div>
  );
}

export default Hilo;