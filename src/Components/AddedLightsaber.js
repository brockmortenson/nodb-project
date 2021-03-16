import React, { Component } from 'react';

class AddedLightsaber extends Component {
    constructor(props){
        super(props);
        this.state = {
            isEditing: false,
            colorInput: ''
        };
    }

    handleInput = (val) => {
        this.setState({colorInput: val})
    }

    /* Borrowed this from the Pokemon example */
    handleToggle = () => {
        this.setState({isEditing: !this.state.isEditing})
    }

    /* Was pretty stuck on this one as well so it is also borrowed from Pokemon example */
    handleEdit = (id) => {
        this.props.colorFn(id, this.state.colorInput);
        this.handleToggle();
    }

    render(){
        // console.log(this.props.lightsaber.img)
        console.log(this.handleEdit)
        return(
            <div>
                {/* I really did could not figure out the editing and toggle stuff so I borrowed most of this from the pokemon example as well */}
                <img className='added-img' src={this.props.lightsaber.image} alt={this.props.lightsaber.name} />
                {this.state.isEditing
                ? (
                    <div className='color-button-input'>
                        <input 
                            value={this.state.colorInput}
                            onChange={e => this.handleInput(e.target.value)}/>
                        <button className='color-input' onClick={() => this.handleEdit(this.props.lightsaber.id)}>Submit</button>
                    </div>
                )
                : (
                    <div>
                        <p>{this.props.lightsaber.color}</p>
                        <button className='edit-color' onClick={this.handleToggle}>Edit Color</button>
                    </div>
                )}
                    <button className='give-back' onClick={() => this.props.removeFn(this.props.lightsaber.id)}>Give Back</button>

                <div className='give-grievous'>
                    <button className='grievous-button' onClick={() => this.props.removeFn(this.props.lightsaber.id)}>Give one to Grievous</button>
                </div>
            </div>
        )
    }

}

export default AddedLightsaber