import React from 'react'

import ActionCreators from '../action-creators'
import Store from '../store'

import StartHere from './StartHere'
import FormWithChart from './FormWithChart'

class MainContent extends React.Component {
    static propTypes = {
    	suite: React.PropTypes.object,
    }
    static defaultProps = {
        suite: undefined
    }

    constructor(props) {
        super()
        this.startSuite = this.startSuite.bind(this)
    }

    startSuite() {
        this.setState({ suite: Store.getSuite(), container: Store.getContainer() });
    }

    componentDidMount() {
        Store.addChangeListener(this.startSuite)
    }

    componentWillUnmount() {
        Store.removeChangeListener(this.startSuite)
    }

    render() {
        if(this.state && this.state.suite) {
            return <FormWithChart suite={this.state.suite} container={this.state.container} />
        } else {
            return <StartHere />
        }
    }
}

export default MainContent
