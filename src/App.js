import React from "react";
import './App.css';

function App() {

  const textoDestaque = {
    color: '#00f',
    fontSize: '3em'
  };

  return (
    <>
      <div className='App'>
        <h1 style={{color:'#f00', fontSize:'5em'}}>App</h1>
        <h2 style={textoDestaque}>Curso de React</h2>
        <p className='texto'>Se inscreva em nossos cursos online</p>
        <a href="www.google.com" target='_blank' className>Link</a>
      </div>
    </>
  );
}

export default App;
