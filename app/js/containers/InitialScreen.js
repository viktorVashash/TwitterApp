import InitialScreen from '../components/InitialScreen';
import { connect } from 'react-redux';
import { login } from '../actions/index';

function mapStateToProps(state) {
  return {
    view: state.tweeterView
  };
};

export default connect(mapStateToProps, { login })(InitialScreen);
