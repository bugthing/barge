import React from 'react/addons'

import MainContent from './MainContent'

class Root extends React.Component {

    render() {

        return <div>
        <nav className="light-blue lighten-1" role="navigation">
          <div className="nav-wrapper container">
            <a id="logo-container" href="#" className="brand-logo">Barge</a>
          </div>
        </nav>

        <MainContent />

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
