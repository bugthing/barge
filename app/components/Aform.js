
import React from 'react/addons'

class ServiceChooser extends React.Component {

    constructor() {
        this.state = { total: 0 };
        this.addOn = this.addOn.bind(this) // required so we can pass the function up to Service
    }

    addOn(price) {
        this.setState({total: this.state.total + price});
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
               </div>;

    }
}
ServiceChooser.propTypes = { items: React.PropTypes.array }
ServiceChooser.defaultProps = { items: [] }

class Service extends React.Component {

    constructor() {
        this.state = { active: false };
    }

    clickHandler() {
        this.state.active =!this.state.active;
        this.props.addOn( this.state.active ? this.props.price : -this.props.price );
    }

    render() {
        return  <p className={ this.state ? 'active' : '' } onClick={this.clickHandler.bind(this)}>
                    {this.props.name} <b>${this.props.price.toFixed(2)}</b>
                </p>;

    }

}
Service.propTypes = { price: React.PropTypes.number, name: React.PropTypes.string, addOn: React.PropTypes.func }
Service.defaultProps = { price: 0, name: '', addOn: function(price){} }

export default ServiceChooser;
