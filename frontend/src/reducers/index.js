import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import words from './words';

export default combineReducers({
  form: formReducer,
  words
});
