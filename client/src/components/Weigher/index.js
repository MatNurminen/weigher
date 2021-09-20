import { addWeigher, deleteWeighers } from '../../store/actions/weigherActions';
import { connect } from 'react-redux';
//import { getSumWeights } from '../../store/selectors/weighersSelector';
import Weigher from './weigher';

// const mapStateToProps = (state) => ({
//   sumweights: getSumWeights(state),
// });

export default connect(null, { addWeigher, deleteWeighers })(Weigher);
