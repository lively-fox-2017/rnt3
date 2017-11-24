import actions from './actions';

export default (state={}, action) => {
  switch (action.type) {
    case actions.playerPlace().type:
      return action.state;
    case actions.initBoard().type:
      return action.state;

    default:
      return state
  }
}
