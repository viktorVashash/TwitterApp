import React, { Component, PropTypes } from 'react';
import Title from 'react-document-title';
import { ipcRenderer } from 'electron';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class MainScreen extends Component {
  static contextTypes = {
    router: PropTypes.object
  }

  constructor(props) {
    super(props);

    this.state = {
      freeMemmory: 0
    };
  }

  componentWillMount() {
    const memmory = ipcRenderer.sendSync('free_memmory');

    this.setState({
      freeMemmory: memmory
    });
  }

  componentDidUpdate() {
    if(this.props.tweet) {
      this.context.router.push('/SuccessScreen');
    };
  }

  tweet() {
    const message = 'Currently I have ' + this.state.freeMemmory + ' space left on my hard drive %23harddrivefacts';

    this.props.tweet(message);
  }

  render() {
    return(
      <Title title="Main Page">
        <ReactCSSTransitionGroup
          component="div"
          className="container"
          transitionName="trans"
          transitionAppear={true}
          transitionAppearTimeout={500}
          transitionEnter={false}
          transitionLeave={false} >
          <p className="alignment mainFreeMemmory">
            Currently I have <strong>{this.state.freeMemmory}</strong> space left
            on my hard drive <label>harddrivefacts</label>
          </p>
          <button onClick={this.tweet.bind(this)} className="btn tweetBtn">Tweet now</button>
        </ReactCSSTransitionGroup>
      </Title>
    );
  }
}

export default MainScreen;
