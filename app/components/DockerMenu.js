
import React from 'react/addons'

export default React.createClass({
    getDefaultProps: () => {
      return {containers: []}
    },

    render: function() {
      return <div>
          <ul>
            {this.props.containers.map( (item, i) => {
                return <li key={i}>
                    {i} ---> {item}
                </li>
                }, this)}
          </ul>
      </div>
    }
})
