import React from 'react';
import Dados from './Dados';


function Corpo(){
    // podemos usar constantes por cá...
    return(
        <>
            <h2>Corpo</h2>
                <Dados 
                    nome = "Judson Paiva" 
                    idade = "20" 
                    sexo = "M" 
                />
        </>
    );
}

export default Corpo;
