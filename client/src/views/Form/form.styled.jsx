import styled from "styled-components";

const ContainerForm = styled.div`
  padding: 2rem 5rem;

  h1 {
    margin-bottom: 3rem;
    font-weight: bolder;
  }

  @media (min-width: 768px) {
    padding: 2rem 13rem;
  }

  @media (min-width: 1200px) {
    padding: 1rem 25rem;
  }
`

const WrapperForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  button {
    background-color: #F7DD72;
  }
`

const FormGroup = styled.div`
  /* position: relative; */
  color: #B3B3B3;
  width: 100%;
  margin-top: 1rem;
`

const FormInput = styled.input`
  font-size: 1rem;
  background-color: lightgrey;
  border: 1px solid #B3B3B3;
  border-radius: 6px;
  box-shadow: 0px 1px 10px rgba(0,0,0,0.4);
  width: 100%;
  height: 3rem!important;
  outline: none;
  color: #666666;
  padding: .563em 0em;
  text-align: center;
  
`

const Select = styled.select`
  border: 1px solid lightgrey;
  border-radius: 6px;
  box-shadow: 0px 1px 10px rgba(0,0,0,0.4);
  padding: 16px 10px;
  width: 100%;
  background: lightgrey;
  font-weight: 600;
  font-size: 1rem;
  outline: none;
  color: #666666;

  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-caret-down-fill' viewBox='0 0 16 16'%3E%3Cpath d='M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: calc(100% - .5rem) calc(100% - 1rem);
`

const LabelSelect = styled.label`
  color: white;
  font-weight: 700;
  font-size: 1rem;
  display: flex;
  padding-left: 1rem;
`

const CountriesSelect = styled.div`
  margin-bottom: 1rem;
  margin-top: 1rem;
  display: flex;
  align-self: flex-start;
  gap: 1rem;


  span {
    border: 1px solid #7e998a;
    border-radius: 8px;
    box-shadow: 4px 4px 12px #586d61;
    padding: .3rem .6rem;
    background-color: #7e998a;
    color: white;
    cursor: pointer;

    &:hover {
      color: #7e998a;
      background-color: lightgrey;
    }
  }
`

const ErrorMsg = styled.p`
  color: red;
  font-size: 1rem;
  text-align: left;
  display: flex;
  align-self: flex-start;
  padding-left: 1rem;
`

export {
  ContainerForm,
  WrapperForm,
  FormGroup,
  FormInput,
  Select,
  LabelSelect,
  CountriesSelect,
  ErrorMsg
}