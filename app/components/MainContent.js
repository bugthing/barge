import React from 'react'
import {observer} from 'mobservable-react'

import FormWithChart from './FormWithChart'

@observer
class MainContent extends React.Component {
    static propTypes = {
    	app: React.PropTypes.object
    };
    static defaultProps = {
        app: undefined
    };

    onStartClick = () => {
     	this.props.app.newSuite()
    };

    render() {
        if(this.props.app.currentSuite) {
            return <FormWithChart app={this.props.app} />
        } else {
            return <div className="container">
              <div className="row center"></div>
              <div className="row center">
                <a className="waves-effect waves-light btn e2e-startbutton" onClick={this.onStartClick}>Start Here</a>
              </div>
              <div className="row center"></div>
            </div>
        }
    }
}

export default MainContent
