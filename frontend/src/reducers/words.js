import _ from 'lodash';
import {
  GET_WORDS,
  GET_WORD,
  ADD_WORD,
  DELETE_WORD,
  EDIT_WORD
} from '../actions/types';



export default (state = [], action) => {
  switch (action.type) {
    case GET_WORDS:
      return {
        ...state,
        ..._.mapKeys(action.payload, 'id')
      };
    case GET_WORD:
    case ADD_WORD:
    case EDIT_WORD:
      return {
        ...state,
        [action.payload.id]: action.payload
      };
    case DELETE_WORD:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};
