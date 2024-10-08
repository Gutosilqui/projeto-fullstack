import styled from 'styled-components'
import Input from '../Input'
import { useState } from 'react'
import { livros } from './SearchData'

const SearchContainer = styled.section`
    background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
    color: #FFF;
    text-align: center;
    padding: 85px 0;
    height: 270px;
    width: 100%;
`
const Titulo = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
`

const Subtitulo = styled.h3`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;
`

const Result = styled.div`
    background-color: #134;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;
    p {
        width: 200px;
    }
    img {
        width: 100px;
    }
    &:hover {
        border: 1px solid white;
    }
`

function Search() {
    const [livrosPesquisados, setLivrosPesquisados] = useState([])

    return(
        <SearchContainer>
            <Titulo>Já sabe por onde começar?</Titulo>
            <Subtitulo>Econtre seu livro em nossa estante</Subtitulo>
            <Input 
                placeholder="Escreva sua próxima leitura"
                onBlur={evento => {
                    const content = evento.target.value
                    const resultSearch = livros.filter( books => books.nome.includes(content))
                    setLivrosPesquisados(resultSearch)
                }}
            />

            { livrosPesquisados.map( livros => (
                <Result>
                    <p>{livros.nome}</p>
                    <img src={livros.src}/>
                </Result>
            )) }
        </SearchContainer>
    )
}

export default Search