import MainScreen from '../components/MainScreen';
import { connect } from 'react-redux';
import { tweet } from '../actions/index';

function mapStateToProps(state) {
  return {
    tweet: state.tweet
  }
};

export default connect(mapStateToProps, { tweet })(MainScreen);
