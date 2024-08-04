const headerOption = ['CATEGORIA', 'FAVORITOS', 'MINHA ESTANTE']

function OptionHeader() {
  return(
    <ul className='list'>
      { headerOption.map( (options) => (
        <li className='option'><p>{options}</p></li>
      ) ) }
    </ul>
  )
}

export default OptionHeader;
