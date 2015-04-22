var React = require('react');

var Some = React.createClass({

  render: function() {
    return (
      <i>some</i>
    );
  }

});

React.render(<Some />, document.body);
