import axios, { AxiosError } from 'axios';
import { GET_COUNTRIES, GET_COUNTRIES_BY_NAME, GET_COUNTRY_BY_ID, ADD_ACTIVITY, ORDER_ALPHA, FILTER_CONTINENT, ORDER_POPULATION, GET_ACTIVITIES, FILTER_ACTIVITY } from './types';

const URL_COUNTRIES = 'http://localhost:3001/countries/';
const URL_ACTIVITIES = 'http://localhost:3001/activities';

export const getCountries = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(URL_COUNTRIES);
      return dispatch({
        type: GET_COUNTRIES,
        payload: data
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export const getCountryById = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(URL_COUNTRIES + id);
      return dispatch({
        type: GET_COUNTRY_BY_ID,
        payload: data
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export const getCountriesByName = (name) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(URL_COUNTRIES + `?name=${name}`);
      return dispatch({
        type: GET_COUNTRIES_BY_NAME,
        payload: data
      })
    } catch (error ) {
      console.log(error)
    }
  }
}

export const createActivity = (activity) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(URL_ACTIVITIES, activity);
      console.log(data, 'creando')
      console.log(activity, 'body')
      return dispatch({
        type: ADD_ACTIVITY,
        payload: data
      })
    } catch (error) {
      return dispatch({
        type: 'ERROR',
        payload: error.message
      })
    }
  }
}

export const getActivities = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(URL_ACTIVITIES);
      return dispatch({
        type: GET_ACTIVITIES,
        payload: data
      })
    } catch (error) {
      console.log(error.message)
    }
  }
}

export const orderCountries = (order) => {
  return {
    type: ORDER_ALPHA,
    payload: order
  }
}

export const orderByPopulation = (population) => {
  return {
    type: ORDER_POPULATION,
    payload: population
  }
}

export const filterByContinent = (continent) => {
  return {
    type: FILTER_CONTINENT,
    payload: continent
  }
}

export const filterByActivity = (activity) => {
  return {
    type: FILTER_ACTIVITY,
    payload: activity
  }
}