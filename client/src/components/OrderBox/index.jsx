import { Container, Options } from "./orderBox.styled";

const OrderBox = (props) => {
  // console.log(props, 'props')

  return (
    <Container>
      <Options>
        <p>ORDENAR POR:</p>
        <select onChange={props.handleFilter} name='by'>
          <option value='' disabled selected>Selecciona</option>
          <option value='name'>Nombre</option>
          <option value='population'>Población</option>
        </select>
      </Options>
      <Options>
        <input type='radio' value='A' id='asce' name="type" onChange={props.handleFilter}/>
        <label htmlFor='asce' >Ascendente</label>
        <input name="type" type='radio' id='desc' value='D' onChange={props.handleFilter}/>
        <label htmlFor='desc'>Descendente</label>
      </Options>
    </Container>
  )
}

export default OrderBox;