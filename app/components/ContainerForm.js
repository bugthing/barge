import React from 'react'

import Store from '../store'
import ActionCreators from '../action-creators'

import Belle from 'belle'

const TextInput = Belle.TextInput

class ContainerForm extends React.Component {
    static propTypes = {
        container: React.PropTypes.object
    };

    static defaultProps = {
        container: {}
    };

    constructor(props) {
        super(props)
        this.clickAddLinkHandler = this.clickAddLinkHandler.bind(this)
        this.updateNameHandler = this.updateNameHandler.bind(this)
    }

    updateNameHandler(obj) {
        ActionCreators.nameContainer( obj.value )
    }

    clickAddLinkHandler() {
        ActionCreators.addLink()
    }

    render() {

        let links = this.props.container.links.map( (l) => {
            return <div key={l.id}> {l.id} </div>
        });

        // this is shit! - is the value is 'undefined' it does not update the TextInput
        if(this.props.container.name === undefined) this.props.container.name = ''

        return <div>
            <div className="row center"></div>
            <div className="row center">
                <TextInput placeholder="container name" onUpdate={this.updateNameHandler} value={this.props.container.name}/>
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
                              <a className="waves-effect waves-light btn" onClick={this.clickAddLinkHandler}>Add</a>
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
