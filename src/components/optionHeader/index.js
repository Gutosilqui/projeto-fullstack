import styled from 'styled-components'

const OptionContainer = styled.ul`
    display: flex;
`

const Options = styled.li`
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    min-width: 120px;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
`
const Paragrafo = styled.p`
  padding:0 16px;
`

const headerOption = ['CATEGORIA', 'FAVORITOS', 'MINHA ESTANTE']

function OptionHeader() {
  return(
    <OptionContainer>
      <Options>
        { headerOption.map( (options) => (
          <Paragrafo>{options}</Paragrafo>
        ) ) }
      </Options>
    </OptionContainer>
  )
}

export default OptionHeader
