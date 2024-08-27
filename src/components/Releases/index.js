import styled from 'styled-components'
import { livros } from './DataReleases'
import { Title } from '../Title'
import imageLivro from '../../img/livro2.png'
import RecommendationCard from '../RecommendationCard'

const LastRealeaseContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const NewBooksContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

function Releases() {
    return(
        <LastRealeaseContainer>
            <Title cor="#EB9B00" tamanhoFonte="36px">ÚLTIMOS LANÇAMENTOS</Title>
            <NewBooksContainer>
                {livros.map( livro => (
                    <img src={livro.src}/>
                ))}
            </NewBooksContainer>
            
            <RecommendationCard
                titulo="Talvez você goste de"
                subtitulo="Angular 11"
                description="uma aplicação integrada com a plataforma Google"
                img={imageLivro}
            />
        </LastRealeaseContainer>
    )
}

export default Releases