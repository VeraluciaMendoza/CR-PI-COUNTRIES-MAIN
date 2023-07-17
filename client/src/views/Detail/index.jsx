import { Link, useParams } from "react-router-dom";
import { Container, Content } from "./detail.styled";
import { connect } from "react-redux";
import { useEffect } from "react";
import { getCountryById } from "../../redux/actions";

const Detail = ({ country, getCountryById }) => {
  console.log(country)
  const { id } = useParams();

  const format = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  }

  useEffect(() => {
    getCountryById(id)
  }, [id]);

  return(
    <Container>
      <Link to='/home'>
        <button>Volver</button>
      </Link>
      
      <h1>{country.name} - ({country.id})</h1>
      <Content>
        <img src={country.imageFlag} alt="bandera" width={300} height={200}/>
        <div>
          <p>Continente: {country.continent}</p>
          {
            country.subregion ? <p>{`Subregión: ${country.subregion}`}</p> : null
          }
          <p>Capital: {country.capital}</p>
          {
            country.area ? <p>{`Área: ${format(country.area)}`}</p> : null
          }
          {
            country.population ? <p>{`Población: ${format(country.population)}`}</p> : null
          }
        </div>
      </Content>
    </Container>
  )
}

const mapStateToProps = (state) => {
  return {
    country: state.country
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  getCountryById: (id) => dispatch(getCountryById(id)),
  }
};

const ConnectDetail = connect(mapStateToProps, mapDispatchToProps)(Detail);
export default ConnectDetail;
