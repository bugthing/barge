
import React from 'react/addons'

class DockerMenu extends React.Component {

    tick() {
        console.log("tick:")
    }

    render() {
      return <div>
          <ul>
            {this.props.containers.map( (item, i) => {
                return <li key={i} onClick={this.tick.bind(this)}>
                    {i} ---> {item}
                </li>
                }, this)}
          </ul>
      </div>
    }
}
DockerMenu.defaultProps = { containers: [] }

export default DockerMenu
