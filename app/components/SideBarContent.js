import React from 'react/addons'

import Store from '../store'
import ActionCreators from '../action-creators'

class SideBarItem extends React.Component {
    static propTypes = {
    	name: React.PropTypes.string,
    	suiteUuid: React.PropTypes.string
    }

    static defaultProps = {
        name: '',
        suiteUuid: ''
    }

    clickItemHandler(obj, index) {
        ActionCreators.loadSuite(this.props.suiteUuid)
    }

    render() {
    	return <a href="#!" className="collection-item" onClick={this.clickItemHandler.bind(this)} >{this.props.name}</a>
	}
}

class SideBarContent extends React.Component {
    constructor(props) {
        super()
        this.listSuites = this.listSuites.bind(this)
    }

    listSuites() {
        this.setState({ suites: Store.getSuites() });
    }

    componentDidMount() {
        this.listSuites();
        Store.addChangeListener(this.listSuites)
    }

    componentWillUnmount() {
        Store.removeChangeListener(this.listSuites)
    }

    render() {

        var suites = [];
        var i = -1;
        if(this.state) suites = this.state.suites;

        var items = suites.map( (s) => {
            i++;

            name = ' -- '
            if(s.name) name = s.name

            return <SideBarItem key={i} name={name} suiteUuid={s.uuid} />
        });

        return <div className="collection">
			{items}
          </div>
    }
}
export default SideBarContent
