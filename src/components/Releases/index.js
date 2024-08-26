import styled from 'styled-components'
import { livros } from './DataReleases'

const LastRealeaseContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const TitleRealease = styled.h2`
    width: 100%;
    padding: 30px 0;
    background-color: #FFF;
    color: #EB9B00;
    font-size: 36px;
    text-align: center;
    margin: 0;
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
            <TitleRealease>ULTIMOS LANÇAMENTOS</TitleRealease>
            <NewBooksContainer>
                {livros.map( livro => (
                    <img src={livro.src}/>
                ))}
            </NewBooksContainer>
        </LastRealeaseContainer>
    )
}

export default Releases