import 'babel-core/polyfill';
import React from 'react';
import DSTester from './ds-tester';


var Some = React.createClass({
  getInitialState: function() {
    return {
      ipAddress: null,
      loading: false
    };
  },
  componentDidMount: function() {
    this.tester = new DSTester();
  },

  setLoading: function () {
    this.setState({loading: true});
  },

  setReady: function () {
    this.setState({loading: false});
  },

  onButtonClick: function () {
    this.setLoading();
    this.tester.foo({
      a: 'b'
    }).then((res)=>{
      this.setState({
        ipAddress: res.origin,
      });
    }).then(this.setReady, this.setReady);
  },

  render: function() {
    return (
      <div>
        <button onClick={this.onButtonClick}>Test</button>
        <div>
          {this.state.loading ? <b>Loading</b> : false}

          {this.state.ipAddress}
        </div>
      </div>
    );
  }

});

React.render(<Some />, document.body);
