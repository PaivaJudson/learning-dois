import React from 'react';
import Dados from './Dados';


function Corpo(){
    // podemos usar constantes por cá ou até funções...

    function enviarNome(){
        return "Judson Quissanga";
    }

    function somar(x, y){
        return x + y;
    }

    return(
        <>
            <h2>Corpo</h2>
                <Dados 
                    nome = {enviarNome}
                    idade = "20" 
                    sexo = "M" 
                    soma = {somar}
                />
        </>
    );
}

export default Corpo;
