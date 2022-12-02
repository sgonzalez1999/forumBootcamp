import React, { useState } from 'react'
import { isVisible } from '@testing-library/user-event/dist/utils';
import CreateThread from './CreateThread';


const Principal = (props) => {
    
    const [isvisible, setIsvisible]= useState(true);
    const ver = (isVis)=>{
        setIsvisible(isVis)
    };
    const clickHandler = ()=>{
        setIsvisible(true)
    };


    return (
    <div>
        <div>
            <div>
                <h1>Foro bootcamp</h1>
            </div>

            <div>
                <button type="button" onClick={clickHandler}>Success </button>
            </div>
        </div>
        <div>
            {/* <Hilos/> */}
        </div>

        {isvisible && <CreateThread func={ver} />}

    </div>
  );
}

export default Principal;
