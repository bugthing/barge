import React from 'react'
import {connect} from 'react-redux';

import * as actionCreators from '../action_creators';

const SideBarItem = React.createClass({
    render() {
    	return <a href="#!" className="collection-item" onClick={this.props.loadSuite.bind(undefined, this.props.id)} >
          {this.props.name}
        </a>
	}
});

const SideBar = React.createClass({
    render() {
        var i = -1;
        var items = this.props.suites.map( (s) => {
            i++;

            name = ' -- '
            if(s.name) name = s.name

            return <SideBarItem key={s.id} name={name} id={s.id} loadSuite={this.props.loadSuite}/>
        });

        return <div className="collection">
			{items}
    	    <a href="#!" className="collection-item" onClick={this.props.newSuite} > + </a>
          </div>
    }
});

function mapStateToProps(state) {
  return {
    suites: state.get('suites')
  }
}

export const SideBarConnected = connect(
  mapStateToProps,
  actionCreators
)(SideBar);
