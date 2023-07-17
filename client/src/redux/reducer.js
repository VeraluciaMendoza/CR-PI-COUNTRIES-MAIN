// 2. Declaramos el state
import { GET_COUNTRIES, GET_COUNTRY_BY_ID, GET_COUNTRIES_BY_NAME, ADD_ACTIVITY, GET_ACTIVITIES, ORDER_ALPHA, FILTER_CONTINENT, ORDER_POPULATION, FILTER_ACTIVITY } from './types';

const initialState = {
  allCountries: [],
  countriesCopy: [],
  activities: [],
  country: {},
  filter: {
    type: '',
    by: '',
    continent: '',
    activity: ''
  }
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_COUNTRIES: {
      return {
        ...state,
        allCountries: payload,
        countriesCopy: payload,
      }
    }
    case GET_COUNTRY_BY_ID: {
      return {
        ...state,
        country: payload
      }
    }
    case GET_COUNTRIES_BY_NAME: {
      return {
        ...state,
        countriesCopy: payload,
      }
    }
    case ADD_ACTIVITY: {
      return {
        ...state,
        activities: payload
      }
    }
    case GET_ACTIVITIES: {
      return {
        ...state,
        activities: payload
      }
    }
    case ORDER_POPULATION: {
      let orderCountries = [];
      const countriesCopy = [...state.allCountries];
      if (payload === 'population') {
        orderCountries = countriesCopy.sort(
          (a, b) => {
            if (a.population < b.population) {
              return -1;
            }
          }
        )
      }
      return {
        ...state,
        countriesCopy: orderCountries
      }
    }
    case ORDER_ALPHA: {
      let orderCountries = [];
      const countriesCopy = [...state.allCountries];

      if (payload.type === 'A' && payload.by === 'name') {
        orderCountries = countriesCopy.sort(
          (a, b) => {
            if (a.name < b.name) {
              return -1;
            }
          }
        )
      } else if (payload.type === 'D'  && payload.by === 'name') {
        orderCountries = countriesCopy.sort(
          (a, b) => {
            if (a.name > b.name) {
              return -1;
            }
          }
        )
      } else if (payload.type === 'A'  && payload.by === 'population') {
        orderCountries = countriesCopy.sort(
          (a, b) => {
            if (a.population < b.population) {
              return -1;
            }
          }
        )
      } else if (payload.type === 'D'  && payload.by === 'population') {
        orderCountries = countriesCopy.sort(
          (a, b) => {
            if (a.population > b.population) {
              return -1;
            }
          }
        )
      }
      return {
        ...state,
        countriesCopy: orderCountries
      }
    }
    case FILTER_CONTINENT: {
      const countriesCopy = [...state.allCountries];
      const filterCountries = countriesCopy.filter(country => country.continent === payload);
      return {
        ...state,
        countriesCopy: filterCountries
      }
    }
    case FILTER_ACTIVITY: {
      const countriesCopy = [...state.allCountries];
      const filterCountries = countriesCopy.filter(country => {
        const activities = country.Activities.map(activity => activity.name === payload)
      })

      return {
        ...state,
        // countriesCopy: filterCountries
      }
    }
    default:{
      return { ...state }
    }
  }
}

export default reducer;