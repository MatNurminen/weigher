import * as actions from '../actions';
const initialState = {
  weighers: [],
  orderField: 'date',
};

const weigherActs = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_WEIGHERS:
      return { ...state, weighers: action.weighers };
    case actions.ADD_WEIGHER:
      return { ...state, weighers: [...state.weighers, action.payload] };
    case actions.DELETE_WEIGHERS:
      return initialState;
    case actions.CHANGE_ORDER_FIELD:
      return { ...state, orderField: action.payload };
    default:
      return state;
  }
};

export default weigherActs;
