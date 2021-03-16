import React, { Component } from 'react';

// I couldn't figure out how to lay this all out so I used the Pokemon example to help through most of this
class StealLightsaber extends Component {
    handleSteal = () => {
        const {lightsaber} = this.props;
        let newLightsaber = {
            name: lightsaber.name,
            color: lightsaber.color,
            image: lightsaber.img
        };

        this.props.stealFn(newLightsaber);
        this.props.refreshFn();
    }

    render(){
        return(
            <div className='steal-lightsaber'>
                <img className='images' src={this.props.lightsaber.img} alt={this.props.lightsaber.name}/>
                <div className='name-button'>
                    <p>{this.props.lightsaber.name}</p>
                    <button className='steal-button' onClick={this.handleSteal}>Steal</button>
                </div>
            </div>
        )
    }
}

export default StealLightsaber