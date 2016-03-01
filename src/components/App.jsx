import React from 'react';

import {SideBarConnected} from './SideBar';
import {MainConnected} from './Main';

const App = React.createClass({
    render: function() {
        return <div>
            <nav className="light-blue lighten-1" role="navigation">
              <div className="nav-wrapper container">
                <a id="logo-container" href="#" className="brand-logo">Barge</a>
              </div>
            </nav>

            <div className="row">
                   <div className="col s1">
                           <SideBarConnected />
                   </div>
                   <div className="col s11">
                           <MainConnected />
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

export default App;
