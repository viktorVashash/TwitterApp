import React, { Component } from 'react';
import Title from 'react-document-title';
import { login } from '../actions/index';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class InitialScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false
    };
  }

  login() {
    this.setState({
      isLoading: true
    });

    this.props.login();
  }

  renderSpinner() {
    return(
      <div className="spinner"></div>
    );
  }

  renderButton() {
    return (
      <button
        key="1"
        onClick={this.login.bind(this)}
        className="alignment btn loginButton">
        <img src="imgs/twitt.png" />
        Login with Twitter
      </button>
    );
  }

  render() {
    return(
      <Title title='Initial Screen'>
        <ReactCSSTransitionGroup
          component="div"
          transitionName="trans"
          transitionAppear={true}
          transitionAppearTimeout={500}
          transitionEnter={false}
          transitionLeave={false}
          className="container">
          {this.state.isLoading ? this.renderSpinner() : this.renderButton()}
        </ReactCSSTransitionGroup>
      </Title>
    );
  }
};

export default InitialScreen;
