import React from 'react'
import {connect} from 'react-redux';

import * as actionCreators from '../action_creators';

const SideBarItem = React.createClass({
    render() {
    	return <a href="#!" className="collection-item" onClick={this.props.loadSuite} >
          {this.props.name}
        </a>
	}
});

const SideBar = React.createClass({
    render() {
        var items = this.props.suites.map( (s) => {
            name = ' -- '
            if(s.name) name = s.name
            return <SideBarItem key={s.id} name={name} loadSuite={this.props.loadSuite.bind(undefined, s.id)}/>
        });

        return <div className="collection">
			{items}
    	    <a href="#!" className="collection-item" onClick={this.props.newSuite} > + </a>
          </div>
    }
});

function mapStateToProps(state) {
  return {
    suites: state.get('suites').toJS()
  }
}

export const SideBarConnected = connect(
  mapStateToProps,
  actionCreators
)(SideBar);
