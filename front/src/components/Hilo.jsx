import React from 'react'

function Hilo(props) {
  return (
    <div>
      <div>
        <h3>{props.name}</h3>
      </div>

      <div>
        <h4>{props.label}</h4>
      </div>
    </div>
  );
}

export default Hilo;