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

const headerOption = ['CATEGORIA', 'FAVORITOS', 'MINHA ESTANTE']

function OptionHeader() {
  return(
    <OptionContainer>
      { headerOption.map( (options) => (
        <Options><p>{options}</p></Options>
      ) ) }
    </OptionContainer>
  )
}

export default OptionHeader
