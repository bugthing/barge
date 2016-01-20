import React from 'react'
import Store from '../store'
import ActionCreators from '../action-creators'
import ContainerForm from './ContainerForm'

import Belle from 'belle'
const TextInput = Belle.TextInput

class SuiteForm extends React.Component {
    static propTypes = {
        suite: React.PropTypes.object
    };
    static defaultProps = {
        suite: {}
    };

    updateNameHandler(obj) {
        ActionCreators.nameSuite( obj.value )
    }

    render() {
        return <div className="container">
          <div className="row center"></div>
          <div className="row center">
                <TextInput placeholder="suite name" onUpdate={this.updateNameHandler.bind(this)} value={this.props.suite.name}/>
          </div>
          <div className="row center"></div>
        </div>
    }
}

export default SuiteForm
