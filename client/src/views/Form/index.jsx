import { useEffect, useState } from "react";
import { ContainerForm, WrapperForm, FormGroup, FormInput, Select, LabelSelect, CountriesSelect, ErrorMsg } from "./form.styled";
import { createActivity, getCountries } from "../../redux/actions";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

const Form = ({ allCountries, getCountries, createActivity }) => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: '',
    difficulty: 1,
    duration: 0,
    season: '',
    countries: []
  })
  
  const [error, setError] = useState({
    name: '',
    difficulty: '',
    duration: '',
    season: '',
    countries: ''
  })

  const validate = (input) => {
    if (!input.name.length) setError({ ...error, name: 'Debe ingresar un nombre'})
    if (input.duration === 0 || input.duration < 1 || input.duration > 24) setError({ ...error, duration: 'La duracion debe ser entre 1 y 24 horas'})
    if (input.season === '') setError({ ...error, season: 'Debe elegir una temporada'})
    if (input.countries.length < 1) setError({ ...error, countries: 'Debe elegir al menos un pais'})
  }

  const handleChange = (event) => {0
    const { name, value } = event.target;
    setInput({
      ...input,
      [name]: value
    }) 

    if (name === 'countries') {
      let countriesSelected = [...input.countries]
      countriesSelected.push(value)

      setInput({
        ...input,
        countries: countriesSelected
      })
    }
   
    validate({
      ...input,
      [name]: value
    })
  }

  const clear = () => {
    setInput({
      name: '',
      difficulty: 1,
      duration: 1,
      season: '',
      countries: []
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(input, 'inpit')
    createActivity(input)
    setTimeout(() => {
      navigate('/home')
      clear();
    }, 1500)
  }

  const handleRemove = (id) => {
    const foo = input.countries.filter(country => country !== id)
    setInput({ ...input, countries: foo})
  }

  useEffect(() => {
    getCountries();
  }, [])

  return(
    <ContainerForm>
      <h1>Nueva Actividad</h1>
      <WrapperForm onSubmit={handleSubmit}>
        <FormGroup>
          <LabelSelect>NOMBRE</LabelSelect>
          <FormInput
            placeholder=' '
            type='text'
            id='name'
            name='name'
            autoFocus
            // value={userData.email}
            onChange={handleChange}
          />
        </FormGroup>
        { error.name ? <ErrorMsg>{error.name}</ErrorMsg> : null}

        <FormGroup>
        <LabelSelect>DIFICULTAD</LabelSelect>
        <Select name="difficulty" onChange={handleChange}>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
          <option value='5'>5</option>
        </Select>
        </FormGroup>


        <FormGroup className="duration">
          <LabelSelect>DURACIÓN (horas)</LabelSelect>
          <FormInput
            placeholder=' '
            type='number'
            id='duration'
            name='duration'
            min="1"
            max="24"
            // value={userData.email}
            onChange={handleChange}
          />
        </FormGroup>
        { error.name ? <ErrorMsg>{error.duration}</ErrorMsg> : null}

        <FormGroup>
          <LabelSelect>TEMPORADA</LabelSelect>
          <Select name='season' onChange={handleChange}>
            <option defaultValue='Verano' selected>Verano</option>
            <option value='Otoño'>Otoño</option>
            <option value='Invierno'>Invierno</option>
            <option value='Primavera'>Primavera</option>
          </Select>
        </FormGroup>
        { error.season ? <ErrorMsg>{error.season}</ErrorMsg> : null}

        <FormGroup>
          <LabelSelect>PAISES</LabelSelect>
          <Select name='countries' onChange={handleChange}>
            { 
              allCountries.length !== 0 
              ? (
                allCountries.map(country => (
                    <option key={country.id} value={country.id} id={country.id}>{country.name}</option>
                ))
                )
              : null
            }
          </Select>
        </FormGroup>
        <CountriesSelect>
        {
          input.countries.map((country, index) => (<span id={country} key={index} onClick={() => handleRemove(country)}>{country}</span>))
        }
        </CountriesSelect>

        <button type='submit'>Crear</button>
      </WrapperForm>
    </ContainerForm>
  )
}

const mapStateToProps = (state) => {
  return {
    allCountries: state.allCountries,
    activities: state.activities
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCountries: () => dispatch(getCountries()),
    createActivity: (activity) => dispatch(createActivity(activity))
  }
};

const ConnectForm = connect(mapStateToProps, mapDispatchToProps)(Form);
export default ConnectForm;

// export default Form;