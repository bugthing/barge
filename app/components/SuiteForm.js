import React from 'react'
import Store from '../store'
import ActionCreators from '../action-creators'
import ContainerForm from './ContainerForm'

import Belle from 'belle'
const TextInput = Belle.TextInput

class SuiteForm extends React.Component {
    static propTypes = {
        suite: React.PropTypes.object
    }

    static defaultProps = {
        suite: {}
    }

    clickOkHandler() {
        ActionCreators.saveSuite( this.props.suite );
    }

    updateNameHandler(obj) {
        this.props.suite.name = obj.value
        this.showForm()
    }

    showForm() {
        this.setState({ suite: this.props.suite })
    }

    render() {
        return <div className="container">
          <div className="row center"></div>
          <div className="row center">
                <TextInput placeholder="container name" onUpdate={this.updateNameHandler.bind(this)} value={this.props.suite.name}/>
          </div>

          <div className="row center">
                <ContainerForm container={this.props.suite.container}/>
          </div>

          <div className="row center">
                <a className="waves-effect waves-light btn e2e-startbutton" onClick={this.clickOkHandler.bind(this)}>OK</a>
          </div>
          <div className="row center"></div>
        </div>
    }
}

export default SuiteForm
