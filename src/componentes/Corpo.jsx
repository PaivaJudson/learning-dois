import React from 'react';
import Dados from './Dados';


function Corpo(){
    // podemos usar constantes por cá ou até funções...

    function enviarNome(){
        return "Judson Quissanga";
    }

    return(
        <>
            <h2>Corpo</h2>
                <Dados 
                    nome = {enviarNome}
                    idade = "20" 
                    sexo = "M" 
                />
        </>
    );
}

export default Corpo;
