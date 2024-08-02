import './style.css'
import logo from '../../img/logo.svg'

function Logo() {
    return (
        <div className='logo'>
          <img src={logo} alt='logo' className='logo-img'/>
          <p><strong>AntiVirus</strong> Books</p>
        </div>
    )
}

export default Logo