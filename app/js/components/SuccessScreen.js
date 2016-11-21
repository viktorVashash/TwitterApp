import React, { Component, PropTypes } from 'react';
import Title from 'react-document-title';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class SuccessScreen extends Component {
  static contextTypes = {
    router: PropTypes.object
  }

  goBack() {
    this.context.router.push('/MainScreen');
  }

  render() {
    return(
      <Title title="Success Screen">
        <ReactCSSTransitionGroup
          component="div"
          transitionName="trans"
          transitionAppear={true}
          transitionAppearTimeout={500}
          transitionEnter={false}
          transitionLeave={false}
          className="container">
          <div className="alignment success">
            <div className="successLog">
              <img src="./imgs/successLog.png" />
            </div>
            <div className="successText">
              <p>Tweeted Successfully!</p>
            </div>
          </div>
          <button className="btn backBtn" onClick={this.goBack.bind(this)}><span></span>Go Back</button>
        </ReactCSSTransitionGroup>
      </Title>
    );
  }
};

export default SuccessScreen;
