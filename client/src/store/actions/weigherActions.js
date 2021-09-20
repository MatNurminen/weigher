import axios from 'axios';
import * as actions from './index';

export const getWeighers = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/weighers');
    dispatch({ type: actions.GET_WEIGHERS, weighers: res.data });
  } catch (error) {
    dispatch({ type: actions.ERROR, payload: error.message });
  }
};

export const addWeigher = (weigher) => async (dispatch) => {
  try {
    await axios.post('/api/weighers', weigher);
    dispatch({ type: actions.ADD_WEIGHER });
  } catch (error) {
    dispatch({ type: actions.ERROR, payload: error.message });
  }
};

export const deleteWeighers = () => async (dispatch) => {
  try {
    await axios.delete('/api/weighers');
    dispatch({
      type: actions.DELETE_WEIGHERS,
    });
  } catch (error) {
    dispatch({ type: actions.ERROR, payload: error.message });
  }
};
