import actions from './actions';

export default const reducer = (state={}, action) => {
  switch (action.type) {
    case actions.playerPlace().type:
      return action.state;
    case actions.initBoard().type:
      return action.state;

    default:

  }
}
