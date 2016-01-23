import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {observable} from 'mobservable'
import {observer} from 'mobservable-react'

import SideBarContent from './components/SideBarContent'
import MainContent from './components/MainContent'
import uuid from 'node-uuid'

const appState = observable({
	currentSuite: undefined,
	currentContainer: undefined,
	suites: [
		{
			 "id":"3474045e-245a-40da-ae04-065ff0926f27",
			 "name":"Demo1",
			 "containers":[
			 	{
					"id":"e591837c-7091-47f6-a4c3-c0246bfcce6f",
					"name":"Container1",
					"links":[ {"id":"e2e5ad09-4b8b-4940-abbd-34bce25d1cb2"} ],
					"envs":[]
				},
				{
					"id":"e2e5ad09-4b8b-4940-abbd-34bce25d1cb2","name":"c2",
					"name":"Container2",
					"links":[],
					"envs":[]
				}
			]
		}
	]
});

appState.newSuite = function() {
	console.log('NEW SUITE PLEASE')
	appState.suites.push(
	{
		 "id": uuid.v4(),
		 "name": "",
		 "containers": []
	})
};
appState.loadSuite = function(id) {
	console.log('lOAD SUITE PLEASE:' + id)
	appState.currentSuite = id
};
appState.editSuite = function(name) {
    console.log('EDIT SUITE PLEASE:' + name)
    appState.suites[appState.currentSuiteIndex()].name = name
};

appState.saveSuite = function() {
    console.log('SAVE SUITE PLEASE!')
};

appState.currentSuiteIndex = function() {
	let idx = undefined
	appState.suites.find( (s,i) => {
		if(s.id === appState.currentSuite) {
			idx = i
			return s
		}
		return false
	});
	return idx
};
appState.currentContainerIndex = function() {
	let idx = 0
    	//let suite  = appState.suites[appState.currentSuiteIndex()]
    //let contIdx  = appState.currentSuiteIndex()
    //suite.containers[appState.currentSuiteIndex()].find( (c,i) => {
	//	if(c.id === appState.currentContainer) {
	//		idx = i
	//		return s
	//	}
	//	return false
	//});
	return idx
};

@observer
class Root extends React.Component {
    render() {

		let suite = this.props.appState.suites.find( (s) => {
			if(s.id === this.props.appState.currentSuite) {
				return s
			}
			return false
		});

        return <div>
        <nav className="light-blue lighten-1" role="navigation">
          <div className="nav-wrapper container">
            <a id="logo-container" href="#" className="brand-logo">Barge</a>
          </div>
        </nav>

        <div className="row">
            <div className="col s1">
				<SideBarContent app={this.props.appState} />
            </div>
            <div className="col s11">
				<MainContent app={this.props.appState} />
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


ReactDOM.render(<Root appState={appState} />, document.getElementById('application'));
