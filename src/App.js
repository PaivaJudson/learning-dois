import './App.css';
import Corpo from './componentes/Corpo';
import Header from './componentes/Header';
import Dados from './componentes/Dados';


function App() {

  const nome = "Quissanga Coge";
  const idade = 18;
  const sexo = 'M';

  return (
    <div className="App">
      <Header />
      <Corpo />
      <Dados 
        nome = {nome} 
        idade = {idade}
        sexo = {sexo}
      />
    </div>
  );
}

export default App;
