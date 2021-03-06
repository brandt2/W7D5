import { logout } from '../../actions/session_actions';
import { connect } from 'react-redux';
import Greeting from './greeting';

const mapStateToProps = state => {
  return ({
    currentUser: state.entities.users[state.session.id]
  });
};

const mapDipatchToProps = dispatch => {
  return ({
    logout: () => dispatch(logout())
  });
};

export default connect(mapStateToProps, mapDipatchToProps)(Greeting);