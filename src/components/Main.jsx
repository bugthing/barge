import React from 'react';
import Belle from 'belle';
import {connect} from 'react-redux';

import FlowChart from './FlowChart'
import ContainerForm from './ContainerForm'

import * as actionCreators from '../action_creators';

const TextInput = Belle.TextInput

const Main = React.createClass({
    onSuiteNameChange: function(obj) {
      this.props.onSuiteNameChange(obj.value)
    },
    onContainerNameChange: function(name) {
      this.props.onContainerNameChange(name)
    },
    onLinkAdd: function(obj) {
      this.props.newLink();
    },
    onLinkedContainerClick: function(id) {
      this.props.loadContainer(id);
    },
    render: function() {

      let val = '';
      if(this.props.suite) {
        val = this.props.suite.name;
        if(!val) val = '';
	  }

      return <div>
        { !this.props.suite ?  <div>
	    	  Please Select Or Add a Suite
	    	</div> 
			: 
			<div className="container">
        <div className="row center"></div>
        <div className="row center e2e-row-suite-name-input">
          <TextInput placeholder="suite name" onUpdate={this.onSuiteNameChange } value={val} />
        </div>

        <div className="section no-pad-bot" id="index-banner">
          <div id='chart' className="container">
            <FlowChart width={600} height={200} suite={this.props.suite} container={this.props.container} onLinkedContainerClick={this.onLinkedContainerClick}/>
          </div>
        </div>

        <div className="container">
          <div id='content' className="section">
            <ContainerForm container={this.props.container} onLinkAdd={this.onLinkAdd} onContainerNameChange={this.onContainerNameChange}/>
          </div>
        </div>

        <div className="row center"></div>
          </div>
	    }
      </div>;
      return <div>hi</div>
    }
});

function mapStateToProps(state) {
    let suite, container;
    if(state.get('suiteIndex') >= 0) {
      suite = state.get('suites').get(state.get('suiteIndex')).toJS()
      container = suite.containers[state.get('containerIndex')]
    }
	console.log('POOOOOOOOOOOOO');
	console.log(suite);
	console.log(container);
    return { suite: suite, container: container }
}

export const MainConnected = connect(
    mapStateToProps,
    actionCreators
)(Main);
