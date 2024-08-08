import Logo from '../Logo'
import OptionHeader from '../OptionHeader'
import IconesHeader from '../IconesHeader'
import styled from 'styled-components'

const HeaderContainer = styled.header`
    background-color: #FFF;
    display: flex;
    justify-content: center;
`

function Header() {
    return(
            <HeaderContainer>
                <Logo />
                <OptionHeader />
                <IconesHeader />
            </HeaderContainer>
    )
}



export default Header