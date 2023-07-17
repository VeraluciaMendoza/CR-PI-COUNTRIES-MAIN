import styled from "styled-components";

const StyledSearchBar = styled.div`
  /* width: 50%; */
  /* margin: auto; */
`

const SearchForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: .7rem
`

const SearchInput = styled.input`
  width: 17rem;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #7e998a;
  padding: 0 .7rem;
  background-color: #E9E3E6;
`

const ButtonSearch = styled.button`
  
`

export {
  StyledSearchBar,
  SearchForm,
  SearchInput,
  ButtonSearch
}