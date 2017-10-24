import { connect } from 'react-redux';
import FruitsIndex from './fruits_index';

const mapStateToProps = state => {
  return { fruits: state.fruits };
};

export default connect(mapStateToProps, null)(FruitsIndex);
