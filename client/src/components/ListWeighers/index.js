import { getWeighers } from '../../store/actions/weigherActions';
import { connect } from 'react-redux';
import ListWeighers from './listWeighers';

const mapStateToProps = (state) => ({
  weighers: state.weigherReducer.weighers,
});

export default connect(mapStateToProps, { getWeighers })(ListWeighers);
