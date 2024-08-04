import './App.css';
import Logo from './components/Logo'
import OptionHeader from './components/optionHeader';
import Icones from './components/Icones'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Logo />
        <OptionHeader />
        <Icones />
      </header>  
    </div>
  );
}

export default App