import React from 'react'
import {observer} from 'mobservable-react'

import Store from '../store'
import ActionCreators from '../action-creators'

import Belle from 'belle'

const TextInput = Belle.TextInput

@observer
class ContainerForm extends React.Component {
    static propTypes = {
    	container: React.PropTypes.object
    };

    static defaultProps = {
        container: {}
    };

    onNameChange = (obj) => {
        console.log('Change Name:' + obj.value)
    };
    onLinkAddClick = () => {
        console.log('Add link!')
    };

    render() {
        let container = this.props.container

        if(!container.links) container.links = []
        let links = container.links.map( (l) => {
            return <div key={l.id}> {l.id} </div>
        });

        // this is shit! - is the value is 'undefined' it does not update the TextInput
        if(this.props.container.name === undefined) this.props.container.name = ''

        return <div>
            <div className="row center"></div>
            <div className="row center">
                <TextInput placeholder="container name" onUpdate={this.onNameChange} value={container.name}/>
            </div>
            <div className="row center">
                <table>
                    <caption> Links </caption>
                    <tbody>
                      <tr>
                          <th> Link to </th>
                      </tr>
                      <tr>
                          <td>
                          {links}
                          </td>
                      </tr>
                      <tr>
                          <td>
                              <a className="waves-effect waves-light btn" onClick={this.onLinkAddClick}>Add</a>
                          </td>
                      </tr>
                    </tbody>
                </table>
            </div>
            <div className="row center">
                <table>
                    <caption> ENV </caption>
                    <tbody>
                      <tr>
                          <th> Varible </th>
                          <th> Value </th>
                      </tr>
                    </tbody>
                </table>
            </div>
        </div>
    }
}

export default ContainerForm
