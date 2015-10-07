import React from 'react/addons'

import Store from '../store'
import ActionCreators from '../action-creators'

class SideBarItem extends React.Component {
    static propTypes = {
    	name: React.PropTypes.string,
    	index: React.PropTypes.interger
    }

    static defaultProps = {
        name: '',
        index: -1
    }

    clickItemHandler(obj, index) {
        ActionCreators.loadSuite(this.props.index);
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
            if(s.container && s.container.name) name = s.container.name

            return <SideBarItem key={i} name={name} index={i} />
        });
            

        return <div className="collection">
			{items}
          </div>
            
    }
}
export default SideBarContent
