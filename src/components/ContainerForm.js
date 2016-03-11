import React from 'react'

import Belle from 'belle'

const TextInput = Belle.TextInput

export const ContainerForm = React.createClass({
    getDefaultProps: function() {
      return {
        container: {},
        links: []
      };
    },

    onContainerNameChange: function(obj) {
      this.props.onContainerNameChange(obj.value)
    },

    clickAddLinkHandler: function() {
      this.props.onLinkAdd();
    },

    render: function() {

        // this is shit! - is the value is 'undefined' it does not update the TextInput
        if(this.props.container.name === undefined) this.props.container.name = ''
        let links = this.props.container.links.map( (l) => {
            return <div key={l.id}> {l.id} </div>
        });

        return <div>
            <div className="row center"></div>
            <div className="row center">
                <TextInput placeholder="container name" 
                  onUpdate={this.onContainerNameChange} 
                  value={this.props.container.name} />
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
                              <a className="waves-effect waves-light btn" 
                                onClick={this.clickAddLinkHandler} >Add</a>
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
});

export default ContainerForm
