import React from 'react';
import Belle from 'belle';

const TextInput = Belle.TextInput

export const Suite = React.createClass({

    onNameChange: function(obj) {
      this.props.onChange(obj.value)
    },

    render: function() {
      let val = this.props.suite.name;
      if(!val) val = '';
      return <div className="container">
        <div className="row center"></div>
        <div className="row center e2e-row-suite-name-input">
              <TextInput placeholder="suite name" onUpdate={this.onNameChange} value={val} />
        </div>
        <div className="row center"></div>
       </div>
    }
});

