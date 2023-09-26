import { ContainerHome, ContainerFilters, Filters, NavbarHome } from './home.styled';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getCountries, getCountriesByName, orderCountries, filterByContinent } from '../../redux/actions';
import { Cards, SearchBar, Pagination, FilterBox, OrderBox } from '../../components';
import { Link } from 'react-router-dom';


const Home = ({ filterCountries, getCountriesByName, getCountries, orderCountries, filterByContinent, filter }) => {
  console.log(filterCountries,'all')
  const [searchCountry, setSearchCountry] = useState('');
  const [countriesPerPage, setCountriesPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const lastIndex = currentPage * countriesPerPage;
  const firstIndex = lastIndex - countriesPerPage;

  const handleChange = (event) => {
    event.preventDefault();
    setSearchCountry(event.target.value)
  }

  // Manejar busqueda por nombre
  const handleSubmit = async (event) => {
    event.preventDefault();
    const foo = await getCountriesByName(searchCountry);
    console.log(foo, 'fooki')
  }

  // Manejar ordenamiento 
  const handleFilter = (event) => {
    const { name, value } = event.target;

    if (name === 'type') {
      filter.type = value
    }
    else if (name === 'by') {
      filter.by = value
    }

    if (filter.by !== "" && filter.type !== "") orderCountries(filter);
  }

  // Manejat filtro por continentes
  const handleFilterContinent = (event) => {
    const { value } = event.target;
    filter.continent = value
    filterByContinent(filter.continent)
  }

  // Obtener todos los paises
  useEffect(() => {
    getCountries();
  }, []);

  return (
    <ContainerHome>
      <NavbarHome>
        <h1>Countries Project</h1>
        <Link to='/form'>
          <button>
            CREAR ACTIVIDAD
          </button>
        </Link>

        {/* <Link to='/upload'>
          <button>
          SUBIR IMAGEN
          </button>
        </Link> */}
      </NavbarHome>
      
      <ContainerFilters>
        <SearchBar handleChange={handleChange} handleSubmit={handleSubmit}/>
        <Filters >
          <FilterBox handleFilter={handleFilterContinent}/>
          <OrderBox handleFilter={handleFilter}/>
        </Filters>
      </ContainerFilters>

      <Cards allCountries={filterCountries} lastIndex={lastIndex} firstIndex={firstIndex}/>
      <Pagination
        countriesPerPage={countriesPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        allCountries={filterCountries}
      />
    </ContainerHome>
  )
}

const mapStateToProps = (state) => {
  return {
    filterCountries: state.countriesCopy,
    filter: state.filter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCountries: () => dispatch(getCountries()),
    orderCountries: (order) => dispatch(orderCountries(order)),
    getCountriesByName: (name) => dispatch(getCountriesByName(name)),
    filterByContinent : (continent) => dispatch(filterByContinent(continent))
  }
};

const ConnectHome = connect(mapStateToProps, mapDispatchToProps)(Home);
export default ConnectHome;