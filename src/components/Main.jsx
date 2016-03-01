import React from 'react';
import {connect} from 'react-redux';

import {Suite} from './Suite';
import * as actionCreators from '../action_creators';

const Main = React.createClass({
    render: function() {
        return <div> 
        { this.props.suite ? <Suite suite={this.props.suite}
            onChange={this.props.onSuiteNameChange}
            /> : Main }
        </div>;
    }
});

function mapStateToProps(state) {
    let suite;
    if(state.get('suiteIndex') >= 0) {
      suite = state.get('suites').get(state.get('suiteIndex')).toJS()
    }
    return { suite: suite }
}

export const MainConnected = connect(
    mapStateToProps,
    actionCreators
)(Main);
