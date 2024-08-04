import './App.css';
import Logo from './components/Logo'
import perfil from './img/perfil.svg'
import sacola from './img/sacola.svg'

const headerOption = ['CATEGORIA', 'FAVORITOS', 'MINHA ESTANTE']
const icones = [perfil, sacola]

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Logo />
        
        <ul className='list'>
          { headerOption.map( (options) => (
            <li className='option'><p>{options}</p></li>
          ) ) }
        </ul>

        <ul className='icones'>
          { icones.map( (icone) => (
            <li className='icone'><img src={icone}></img></li>
          ) ) }
        </ul>
      </header>  
    </div>
  );
}

export default App