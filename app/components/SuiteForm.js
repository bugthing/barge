import React from 'react'
import Store from '../store'
import ActionCreators from '../action-creators'
import ContainerForm from './ContainerForm'
import {observer} from 'mobservable-react'

import Belle from 'belle'
const TextInput = Belle.TextInput

@observer
class SuiteForm extends React.Component {
    static propTypes = {
        suite: React.PropTypes.object,
        onChange: React.PropTypes.func
    };
    static defaultProps = {
        suite: {}
    };

    onNameChange = (obj) => {
     	this.props.onChange({name: obj.value})
    };

    render() {
        return <div className="container">
          <div className="row center"></div>
          <div className="row center">
                <TextInput placeholder="suite name" onUpdate={this.onNameChange} value={this.props.suite.name}/>
          </div>
          <div className="row center"></div>
        </div>
    }
}

export default SuiteForm
