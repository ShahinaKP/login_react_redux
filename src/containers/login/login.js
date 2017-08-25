import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import * as loginAction from '../../actions/login';

class LoginForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: ''
    };
  }

  render() {
    //let {isLoginPending, isLoginSuccess, loginError} = this.props;
    return (
      <form name="loginForm" onSubmit={() => { this.onSubmit() }}>
        <div className="form-group-collection">
          <div className="form-group">
            <label>Email:</label>
            <input type="email" name="email" onChange={e => this.setState({ email: e.target.value })} />
          </div>

          <div className="form-group">
            <label>Password:</label>
            <input type="password" name="password" onChange={e => this.setState({ password: e.target.value })} />
          </div>
        </div>

        <input type="submit" value="Login" />

        <div className="message">{this.state.error}</div>
      </form>
    )
  }

  onSubmit = (e) => {
    alert("Login Click");
    this.props.onLoginRequest(this.state);
    this.setState({
      email: '',
      password: ''
    });
  }
}


///////////////Redux part ///////////////

function mapDispatchToProps(dispatch) {
  return bindActionCreators(loginAction, dispatch);
}

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
