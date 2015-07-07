import React from 'react/addons'

import ActionCreators from '../action-creators'
import Store from '../store'

class ServiceChooser extends React.Component {
    static propTypes = {
        items: React.PropTypes.array,
        formNext: React.PropTypes.func
    }
    static defaultProps = {
        items: [],
        formNext: function() {}
    }

    constructor() {
        super()
        this.state = { total: 0 };
        this.addOn = this.addOn.bind(this) // required so we can pass the function up to Service
    }

    addOn(price) {
        this.setState({total: this.state.total + price});
    }

    clickHandler() {
        this.props.formNext()
    }

    clickNowHandler() {
        console.log('NOW Clicked')
        ActionCreators.moveForm({ item1: 'item one' });
    }

    formChange() {
      console.log('FORM CHANGED')
    }

    componentDidMount() {
      Store.addChangeListener(this.formChange);
    }

    componentWillUnmount() {
      console.log('unmounted')
      Store.removeChangeListener(this.formChange);
    }

    render() {

        var services = this.props.items.map( (s) => {
            return <Service name={s.name} price={s.price} addOn={this.addOn} key={s.name}/>;
        });

        return <div>
                   <h1>A Form type</h1>
                   <div id="services">
                       {services}
                       <p id="total">Total <b>${this.state.total.toFixed(2)}</b></p>
                   </div>
                   <p onClick={this.clickHandler.bind(this)}>Next</p>
                   <p onClick={this.clickNowHandler.bind(this)}>NOW</p>
               </div>;
    }
}

class Service extends React.Component {
    static propTypes = {
        price: React.PropTypes.number,
        name: React.PropTypes.string,
        addOn: React.PropTypes.func
    }
    static defaultProps = {
        price: 0,
        name: '',
        addOn: function(price){}
    }

    constructor() {
        super()
        this.state = { active: false };
    }

    clickHandler() {
        this.state.active =!this.state.active;
        this.props.addOn( this.state.active ? this.props.price : -this.props.price );
    }

    render() {
        return  <p className="{ this.state ? 'active' : '' } fade" onClick={this.clickHandler.bind(this)}>
                    {this.props.name} <b>${this.props.price.toFixed(2)}</b>
                </p>;
    }
}

export default ServiceChooser;
