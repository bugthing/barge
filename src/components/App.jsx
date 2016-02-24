import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';

import SideBar from './SideBar';
import MainContent from './MainContent';

const App = React.createClass({
    render: function() {

		console.log( this.props.suites );

        return <div>
            <nav className="light-blue lighten-1" role="navigation">
              <div className="nav-wrapper container">
                <a id="logo-container" href="#" className="brand-logo">Barge</a>
              </div>
            </nav>

            <div className="row">
                   <div className="col s1">
                           <SideBar />
                   </div>
                   <div className="col s11">
                           <MainContent />
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
});

function mapStateToProps(state) {
  return {
    suites: state.suites
  };
}


export default connect(mapStateToProps)(App);
