import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {

  render() {
    if (this.props.currentUser) {
      return (
        <div>
          <h1>Hi, {this.props.currentUser.username}!</h1><br/>
          <button onClick={this.props.logout}>Logout</button>
        </div >
      );
    } else {
      return (
        <div>
          <Link to="/signup" className="sign-up">Sign Up</Link>
          <Link to="/login" className="log-in">Log In</Link>
        </div>
      );
    }
  }
}

export default Greeting;

// when do you need to use componentDidMount
// when do you know you have to use ownProps