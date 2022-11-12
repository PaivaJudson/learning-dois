import React from 'react';

function Dados(props){

    return(<>
            <h1>Dados</h1>
            <p>Nome: {props.nome()}</p>
            <p>Idade: {props.idade}</p>
            <p>Sexo: {props.sexo}</p>
            <p>Somar dois: {props.soma(4, 5)}</p>
        </>
    );
}

export default Dados;
