import React from 'react'

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

    constructor(props) {
        super()
        this.clickAddLinkHandler = this.clickAddLinkHandler.bind(this)
    }

    clickAddLinkHandler() {
        ActionCreators.addLink()
    }

    render() {
        return <div>
            <div className="row center"></div>
            <div className="row center">
                Container
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
