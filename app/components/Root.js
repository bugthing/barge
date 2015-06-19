import React from 'react/addons'

import FlowChart from './FlowChart'
import ServiceChooser from './Aform'

var sections = [
    { 
        name: 'Some Things', 
        price: 300 
    },
    { 
        name: 'More Stuff', 
        price: 480 
    }
];

var sections2 = [
    { 
        name: 'Loads a things', 
        price: 2090 
    }
];

var chartjson = {
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
};


class Root extends React.Component {

    constructor() {
        this.state = { formNumber: 1 };
        this.formNext = this.formNext.bind(this) // required so we can pass the function up to Service
    }

    formNext() {
        console.log('things:' + this.state.formNumber)
        this.setState({formNumber: this.state.formNumber + 1});
    }

    render() {

        console.log('things2:' + this.state.formNumber)
        var form
        if(this.state.formNumber == 2) {
            form = <ServiceChooser items={ sections2 } formNext={this.formNext} />
        } else {
            form = <ServiceChooser items={ sections } formNext={this.formNext} />
        }

        return <div>
        <nav className="light-blue lighten-1" role="navigation">
          <div className="nav-wrapper container">
            <a id="logo-container" href="#" className="brand-logo">Barge</a>
          </div>
        </nav>
        <div className="section no-pad-bot" id="index-banner">
          <div id='chart' className="container">
            <FlowChart width={600} height={100} chart={chartjson} />
          </div>
        </div>
        <div className="container">
          <div id='content' className="section">
            {form}
          </div>
        </div>
        <footer className="page-footer red">
          <div className="footer-copyright">
            <div className="container">
            Copied from <a className="orange-text text-lighten-3" href="http://materializecss.com">Materialize</a>
            </div>
          </div>
        </footer>
        </div>
    }
}

export default Root
