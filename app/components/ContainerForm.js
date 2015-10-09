import React from 'react/addons'

import Store from '../store'
import ActionCreators from '../action-creators'

import Belle from 'belle'

const TextInput = Belle.TextInput

class ContainerForm extends React.Component {
    static propTypes = {
        container: React.PropTypes.object
    }

    static defaultProps = {
        container: {}
    }

    clickOkHandler() {
        ActionCreators.saveContainer( this.props.container );
    }

    updateContainerNameHandler(obj) {
        this.props.container.name = obj.value
        this.showForm()
    }

    showForm() {
        this.setState({ container: this.props.container })
    }

    render() {
        return <div className="container">
          <div className="row center"></div>
          <div className="row center">
                <TextInput placeholder="container name" onUpdate={this.updateContainerNameHandler.bind(this)} value={this.props.container.name}/>
          </div>
          <div className="row center">
                <TextInput placeholder="execute command" />
          </div>
          <div className="row center">
                ENVs
          </div>
          <div className="row center">
                LINKS
          </div>
          <div className="row center">
                <a className="waves-effect waves-light btn e2e-startbutton" onClick={this.clickOkHandler.bind(this)}>OK</a>
          </div>
          <div className="row center"></div>
        </div>
    }
}

export default ContainerForm
