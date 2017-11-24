import { combineReducers } from 'redux';

const news = {
  randomxonya: []
}

const newsReducers = (state = news, action) => {
  switch (action.type) {
    case 'RANDOM':
      return {...state, random:action.value}
    default:
      return state;
  }
};

export default combineReducers({
  random: newsReducers
});
