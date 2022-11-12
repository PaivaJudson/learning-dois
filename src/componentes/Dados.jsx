import React from 'react';

function Dados(props){

    return(<>
            <h1>Dados</h1>
            <p>Nome: {props.nome}</p>
            <p>Idade: {props.idade}</p>
            <p>Sexo: {props.sexo}</p>
        </>
    );
}

export default Dados;
