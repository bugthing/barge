import React from 'react/addons'

import Store from '../store'
import ActionCreators from '../action-creators'

import FormInput from './FormInput'

class AnyForm extends React.Component {
    static propTypes = {
        form: React.PropTypes.array
    }

    static defaultProps = {
        form: []
    }

    constructor() {
        super()
    }

    formChange() {
        console.log('Form moved on...')
    }

    clickSubmitHandler() {
        ActionCreators.moveForm({ item1: 'item one' });
    }

    componentDidMount() {
        console.log('AnyForm mounted')
        Store.addChangeListener(this.formChange);
    }

    componentWillUnmount() {
        console.log('AnyForm unmounted')
        Store.removeChangeListener(this.formChange);
    }

    render() {

        var inputs = this.props.form.map( (f) => {
            return <FormInput type={f.type} key={f.type}/>;
        });

        return <div className="container">
          <div className="row center"></div>
          <div className="row center">
                {inputs}
          </div>
          <div className="row center">
                <a className="waves-effect waves-light purple btn e2e-nextbutton" onClick={this.clickSubmitHandler.bind(this)} >Next</a>
          </div>
          <div className="row center"></div>
        </div>
    }
}
export default AnyForm
