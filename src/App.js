import styled from 'styled-components'
import Header from './components/Header'
import Releases from './components/Releases'
import Search from './components/Search'

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
`

function App() {
  return (
      <AppContainer>
        <Header />
        <Search />
        <Releases />
      </AppContainer>
  );
}

export default App