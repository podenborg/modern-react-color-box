import React, { Component } from 'react';
import uuid from 'uuid';

class NewBoxForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: '',
            height: '',
            bgColor: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }
    handleSubmit(evt) {
        evt.preventDefault();
        const newBox = {...this.state, id: uuid() };
        this.props.createBox(newBox);
        this.setState({
            width: '',
            height: '',
            bgColor: ''
        });
    }
    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="width">Box Width </label>
                    <input
                        type="text" 
                        id="width" 
                        name="width"
                        value={this.state.width}
                        onChange={this.handleChange} 
                    />
                </div>
                <div>
                    <label htmlFor="height">Box Height </label>
                    <input
                        type="text" 
                        id="height" 
                        name="height"
                        value={this.state.height}
                        onChange={this.handleChange} 
                    />
                </div>
                <div>
                    <label htmlFor="width">Box Color </label>
                    <input
                        type="text" 
                        id="bgColor" 
                        name="bgColor"
                        value={this.state.bgColor}
                        onChange={this.handleChange} 
                    />
                </div>
                <button>Create Box</button>
            </form>
        )
    }
}

export default NewBoxForm;