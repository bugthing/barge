import React from 'react/addons'
import Css from './style.css'

import FlowChart from './components/FlowChart'

import ServiceChooser from './components/Aform'

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
React.render(<ServiceChooser items={ sections } />, document.getElementById('content'));

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
}

React.render(<FlowChart width={600} height={100} chart={chartjson} />, document.getElementById('chart'));
