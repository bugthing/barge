import React from 'react'
import {observer} from 'mobservable-react'

import Store from '../store'
import ActionCreators from '../action-creators'

@observer
class SideBarItem extends React.Component {
    static propTypes = {
    	name: React.PropTypes.string,
    	suiteId: React.PropTypes.string,
    	onLoadSuite: React.PropTypes.func
    };

    static defaultProps = {
        name: '',
        suiteId: ''
    };

    render() {
    	return <a href="#!" className="collection-item" onClick={this.props.onLoadSuite.bind(null, this.props.suiteId)} >{this.props.name}</a>
	}
}

@observer
class SideBarContent extends React.Component {
    static propTypes = {
    	app: React.PropTypes.object
    };

    static defaultProps = {
        app: {}
    };

    onLoad = (id) => {
     	this.props.app.loadSuite(id)
	};

    onNew = (id) => {
     	this.props.app.newSuite()
	};

    render() {

        var i = -1;
        var items = this.props.app.suites.map( (s) => {
            i++;

            name = ' -- '
            if(s.name) name = s.name

            return <SideBarItem key={i} name={name} suiteId={s.id} onLoadSuite={this.onLoad}/>
        });

        return <div className="collection">
			{items}
    	    <a href="#!" className="collection-item" onClick={this.onNew} > + </a>
          </div>
    }
}
export default SideBarContent
