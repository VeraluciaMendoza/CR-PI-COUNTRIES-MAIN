import { StyledSearchBar, SearchForm, SearchInput, ButtonSearch } from "./searchBar.styled";

const SearchBar = ({ handleChange, handleSubmit }) => {
  return (
    <StyledSearchBar>
      <SearchForm onChange={handleChange}>
        <SearchInput type="search" placeholder="Ingrese un nombre..." />
        <ButtonSearch type="submit" onClick={handleSubmit}>Buscar</ButtonSearch>
      </SearchForm>
    </StyledSearchBar>
  )
}

export default SearchBar;