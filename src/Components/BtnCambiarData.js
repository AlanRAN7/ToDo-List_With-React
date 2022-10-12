import React, {useContext} from 'react';
import {DataContext} from "../context/DataContext.js";

const data = {
    nombre: "Rodrigo",
    edad: 21
}
const BtnCambiarData = () =>{

    const {setData} = useContext(DataContext);

    return(
        <div>
            <button 
            className = "btn btn-primary"
            onClick = {() => setData(data)}
            >
                Cambiar Data
            </button>
        </div>
    )
}

export default BtnCambiarData;