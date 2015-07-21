import React from 'react/addons'

import Belle from 'belle'

const TextInput = Belle.TextInput
const Select = Belle.Select
const Option = Belle.Option

class FormInput extends React.Component {
    static propTypes = {
        name: React.PropTypes.string,
        type: React.PropTypes.string
    }

    static defaultProps = {
        name: '',
        type: ''
    }

    render() {

        let input
        switch (this.props.type) {
            case 'in1':
                input = <TextInput defaultValue="Update here and see how the input grows …" />
                break;
            case 'in2':
                input = <Select>
                          <Option value="berlin">Berlin</Option>
                          <Option value="tokyo">Tokyo</Option>
                          <Option value="vienna">Vienna</Option>
                        </Select>;
                break;
            default:
                input = <a className="red">input type not handled</a>
                break;
        } 

        return <div> {input} </div>;
    }
}
export default FormInput
