import React from 'react';

function Dados({nome, idade, sexo, soma}){

    return(<>
            <h1>Dados</h1>
            <p>Nome: {nome()}</p>
            <p>Idade: {idade}</p>
            <p>Sexo: {sexo}</p>
            <p>Somar dois: {soma(4, 5)}</p>
        </>
    );
}

export default Dados;
