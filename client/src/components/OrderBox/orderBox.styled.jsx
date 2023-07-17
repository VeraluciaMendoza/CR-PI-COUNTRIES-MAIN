import { styled } from "styled-components";

const Container = styled.div`
  background-color: rgba(255, 255, 255, 0.7);;
  border-radius: 20px;
  padding: 1rem 1.5rem;
  width: 19.5rem;
  gap: 0.5rem;
  display: flex;
  flex-direction: column;

  input[type="radio"] {
    display: none;
  };

  /* Crear un nuevo "radio button" personalizado */
  input[type="radio"] + label:before {
    content: '';
    display: inline-block;
    width: 15px;
    height: 15px;
    margin-right: 10px;
    border-radius: 50%;
    border: 1px solid #353D2F;
    cursor: pointer;
  }

  /* Estilo cuando el radio button está seleccionado */
  input[type="radio"]:checked + label:before {
    background-color: #353D2F;
  }
`

const Options = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    font-size: 1rem;
    font-weight: bolder;
  }
`

export {
  Container,
  Options
}