import { connect } from "react-redux";
import { Container, Options } from "./filterBox.styled";
import { getActivities } from "../../redux/actions";
import { useEffect } from "react";

const CONTINENTES = ['Africa', 'Asia', 'Europe', 'Oceania', 'South America' ];

const FilterBox = (props) => {
  console.log(props.activities)
  useEffect(() => {
    props.getActivities();
  }, [])

  return (
    <Container>
      <Options>
        <p>FILTRAR POR:</p>
          <select onChange={props.handleFilter}>
            <option value='' disabled selected>Continente</option>
            {
              CONTINENTES.map((continente, index) => (
                <option key={index} value={continente}>{continente}</option>
              ))
            }
          </select>
      </Options>

      <Options>
        <p></p>
        <select onChange={props.handleFilter} name='by'>
          <option value='' disabled selected>Actividad</option>
          {
            props.activities.map(activity => (
              <option key={activity.id} value={activity.name}>{activity.name.toUpperCase()}</option>
            ))
          }
        </select>
      </Options>
    </Container>
  )
}

const mapStateToProps = (state) => {
  return {
    activities: state.activities,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getActivities: () => dispatch(getActivities()),
  }
};

const ConnectFilter = connect(mapStateToProps, mapDispatchToProps)(FilterBox);
export default ConnectFilter;