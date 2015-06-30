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
        console.log('render:' + this.state)
        if(this.state) {
            return <FormWithChart />
        } else {
            return <StartHere />
        }
    }
}

export default MainContent
