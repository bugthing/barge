import React from 'react/addons'

import ActionCreators from '../action-creators'

let suite = {
    form: [
        { 
            type: 'in1'
        },
        { 
            type: 'in2'
        }
    ],

    chartjson: {
        flow: [
            {
                name: 'Node A',
                sections: [
                    {
                        name: 'Section A'
                    },
                    {
                        name: 'Section B',
                        joins: ['Node B']
                    }
                ]
            },
            {
                name: 'Node B'
            }
        ]
    }
}


class StartHere extends React.Component {
    static propTypes = {
        initialSuite: React.PropTypes.object
    }
    static defaultProps = { initialSuite: suite }

    constructor(props) {
        super()
        this.state = { suite: props.initialSuite }
    }

    clickStartHandler() {
        ActionCreators.startSuite( this.state.suite );
    }

    render() {
        return <div className="container">
          <div className="row center"></div>
          <div className="row center">
            <a className="waves-effect waves-light btn e2e-startbutton" onClick={this.clickStartHandler.bind(this)}>Start Here</a>
          </div>
          <div className="row center"></div>
        </div>
    }
}

export default StartHere
