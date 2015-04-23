import React from 'react';
import MsgList from './msg-list';
import FluxComponent from 'flummox/component';

const MainPage = React.createClass({
  onButtonClick: function () {
    this.props.flux.getActions('messages').newMessage('hello world');
  },

  render: function() {
    return (
      <div>
        <button onClick={this.onButtonClick}>test</button>
        <FluxComponent connectToStores={['messages']}>
          <MsgList />
        </FluxComponent>
      </div>
    );
  }
});

export default MainPage;