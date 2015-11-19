import React from 'react/addons'

import ActionCreators from '../action-creators'
import Store from '../store'

import StartHere from './StartHere'
import FormWithChart from './FormWithChart'

class MainContent extends React.Component {

    constructor(props) {
        super()
        this.startSuite = this.startSuite.bind(this)
    }

    startSuite() {
        this.setState({ suite: Store.getSuite() });
    }

    componentDidMount() {
        Store.addChangeListener(this.startSuite)
    }

    componentWillUnmount() {
        Store.removeChangeListener(this.startSuite)
    }

    render() {
        if(this.state && this.state.suite) {
			var suite = this.state.suite
            return <FormWithChart suite={suite} />
        } else {
            return <StartHere />
        }
    }
}

export default MainContent
