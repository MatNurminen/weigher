import {
  getWeighers,
  changeOrderField,
} from '../../store/actions/weigherActions';
import { connect } from 'react-redux';
import ListWeighers from './listWeighers';
import { sortedWeights } from '../../store/selectors/weighersSelector';

const mapStateToProps = (state) => ({
  weighers: sortedWeights(state),
  orderField: state.weigherReducer.orderField,
});

export default connect(mapStateToProps, { getWeighers, changeOrderField })(
  ListWeighers
);
