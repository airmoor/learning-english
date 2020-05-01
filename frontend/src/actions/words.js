import axios from 'axios';
import { reset } from 'redux-form';
import history from '../history';
import { GET_WORDS, GET_WORD, ADD_WORD, DELETE_WORD, EDIT_WORD } from './types';


export const getWords = () => async dispatch => {
  const res = await axios.get('/api/words/');
  dispatch({
    type: GET_WORDS,
    payload: res.data.results
  });
};


export const getWord = id => async dispatch => {
  const res = await axios.get(`/api/words/${id}/`);
  dispatch({
    type: GET_WORD,
    payload: res.data
  });
};


export const addWord = formValues => async dispatch => {
  const res = await axios.post('/api/words/', { ...formValues });
  dispatch({
    type: ADD_WORD,
    payload: res.data
  });
  dispatch(reset('WordForm')); 
};


export const deleteWord = id => async dispatch => {
  await axios.delete(`/api/words/${id}/`);
  dispatch({
    type: DELETE_WORD,
    payload: id
  });
  history.push('/');
};


export const editWord = (id, formValues) => async dispatch => {
  const res = await axios.patch(`/api/words/${id}/`, formValues);
  dispatch({
    type: EDIT_WORD,
    payload: res.data
  });
  history.push('/');
};
