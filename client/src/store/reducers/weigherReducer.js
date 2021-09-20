import * as actions from '../actions';
const initialState = {
  weighers: null,
};

const weigherActs = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_WEIGHERS:
      return { ...state, weighers: action.weighers };
    case actions.ADD_WEIGHER:
      return null;
    case actions.DELETE_WEIGHERS:
      return null;
    default:
      return state;
  }
};

export default weigherActs;
