var React = require('react');
var Clock = require('Clock');


var Timer = React.createClass({

  render: function() {
    return (
      <div>
        <Clock/>
        <h3>Timer Component</h3>
    </div>
    );
  }
});

module.exports = Timer
