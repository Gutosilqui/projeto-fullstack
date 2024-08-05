import './style.css'
import Logo from '../Logo'
import OptionHeader from '../OptionHeader'
import IconesHeader from '../IconesHeader'

function Header() {
    return(
        <header className='App-header'>
            <Logo />
            <OptionHeader />
            <IconesHeader />
        </header>
    )
}



export default Header